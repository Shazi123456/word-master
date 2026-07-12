/* ====================================================
   考研单词大师 v3.0 - 纯前端 PWA 版本
   无需后端服务器，完全在浏览器中运行
   ==================================================== */

// ---------- 状态 ----------
let words = [];
let queue = [];
let queueIndex = 0;
let currentWord = null;
let progressCache = {};
let isTransitioning = false;
let currentOptionsData = []; // 选择题当前选项数据

// ---------- DOM 引用 ----------
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Flashcard
const fcWord = $("#fcWord"), fcPos = $("#fcPos"), fcPhonetic = $("#fcPhonetic");
const fcMeaning = $("#fcMeaning"), fcSentence = $("#fcSentence");
const fcMnemonic = $("#fcMnemonic"), fcCounter = $("#fcCounter");
const flashcard = $("#flashcard");
const fcAgain = $("#fcAgain"), fcHard = $("#fcHard");
const fcGood = $("#fcGood"), fcEasy = $("#fcEasy");

// Choice
const choiceWord = $("#choiceWord"), choicePos = $("#choicePos");
const choicePhonetic = $("#choicePhonetic"), choiceProgress = $("#choiceProgress");
const choiceOptions = $("#choiceOptions"), choiceResult = $("#choiceResult");
const choiceSentence = $("#choiceSentence"), choiceNext = $("#choiceNext");

// Spelling
const spellMeaning = $("#spellMeaning"), spellPos = $("#spellPos");
const spellPhonetic = $("#spellPhonetic"), spellHint = $("#spellHint");
const spellInput = $("#spellInput"), spellSubmit = $("#spellSubmit");
const spellResult = $("#spellResult"), spellReveal = $("#spellReveal");
const spellCorrectWord = $("#spellCorrectWord"), spellSentence = $("#spellSentence");
const spellNext = $("#spellNext"), spellShowTip = $("#spellShowTip");
const spellProgress = $("#spellProgress");

// Sentence fill
const sentMeaning = $("#sentMeaning"), sentPos = $("#sentPos");
const sentPhonetic = $("#sentPhonetic"), sentSentence = $("#sentSentence");
const sentInput = $("#sentInput"), sentSubmit = $("#sentSubmit");
const sentResult = $("#sentResult"), sentReveal = $("#sentReveal");
const sentCorrectWord = $("#sentCorrectWord"), sentFullSentence = $("#sentFullSentence");
const sentNext = $("#sentNext"), sentShowTip = $("#sentShowTip");
const sentProgress = $("#sentProgress");

// Browse
const browseList = $("#browseList"), browseSearch = $("#browseSearch");
const browseFilter = $("#browseFilter");

// Header
const progressBadge = $("#progressBadge"), statsBtn = $("#statsBtn");
const resetBtn = $("#resetBtn");

// Modal
const statsModal = $("#statsModal"), statsClose = $("#statsClose");
const resetModal = $("#resetModal"), resetClose = $("#resetClose");
const resetCancel = $("#resetCancel"), resetConfirm = $("#resetConfirm");

// ===================================================================
//  本地存储 - 完全替代 Flask 后端
// ===================================================================
const STORAGE_KEY = "wordmaster_progress";

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (_) { return {}; }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (_) {}
}

// ===================================================================
//  间隔重复算法 - 从 Flask 后端迁移
// ===================================================================
function getPriority(wordId, progress) {
  const p = progress[wordId] || {};
  const wrong = p.wrong || 0;
  const streak = p.streak || 0;
  const seen = p.seen || 0;
  let priority = wrong * 3.0 - streak * 0.5;
  if (seen < 3) {
    priority += (3 - seen) * 2.0;
  }
  return priority;
}

function recordResult(wordId, correct) {
  const progress = loadProgress();
  const sid = String(wordId);
  const p = progress[sid] || { seen: 0, wrong: 0, streak: 0, level: 0 };

  p.seen = (p.seen || 0) + 1;
  if (correct) {
    p.streak = (p.streak || 0) + 1;
    if (p.streak >= 3) {
      p.level = Math.min((p.level || 0) + 1, 5);
    }
  } else {
    p.wrong = (p.wrong || 0) + 1;
    p.streak = 0;
    p.level = Math.max((p.level || 0) - 1, 0);
  }
  p.last_seen = new Date().toISOString();
  progress[sid] = p;
  saveProgress(progress);

  // 更新缓存
  progressCache[sid] = p;
}

function getNextWords(count = 20) {
  const progress = loadProgress();
  const wordIds = words.map((w) => w.id);
  const priorities = wordIds.map((wid) => [wid, getPriority(wid, progress)]);
  priorities.sort((a, b) => b[1] - a[1]);

  const top = priorities.slice(0, count).map((p) => p[0]);
  const remaining = words.filter((w) => !top.includes(w.id));
  shuffleArray(remaining);
  const extra = remaining.slice(0, Math.max(5, Math.floor(count / 4)));

  const resultIds = top.concat(extra.map((w) => w.id));
  shuffleArray(resultIds);
  return words.filter((w) => resultIds.includes(w.id));
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getProgressSummary() {
  const progress = loadProgress();
  const total = words.length;
  let seen = 0, mastered = 0, totalWrong = 0, totalCorrect = 0;

  for (const p of Object.values(progress)) {
    if (p.seen > 0) seen++;
    if (p.level >= 3) mastered++;
    totalWrong += p.wrong || 0;
    totalCorrect += Math.max(0, (p.seen || 0) - (p.wrong || 0));
  }

  const totalReviews = totalCorrect + totalWrong;
  const accuracy = totalReviews > 0
    ? Math.round((totalCorrect / totalReviews) * 1000) / 10
    : 0;

  return { total, seen, mastered, accuracy, total_reviews: totalReviews };
}

function getStats() {
  const summary = getProgressSummary();
  const progress = loadProgress();

  // 最近学过的单词
  const recent = Object.entries(progress)
    .sort((a, b) => (b[1].last_seen || "").localeCompare(a[1].last_seen || ""))
    .slice(0, 10);

  summary.recent = recent.map(([wid, p]) => {
    const w = words.find((ww) => ww.id === parseInt(wid));
    return w ? {
      word: w.word, meaning: w.meaning,
      level: p.level || 0, streak: p.streak || 0, wrong: p.wrong || 0,
    } : null;
  }).filter(Boolean);

  // 困难词
  const hard = Object.entries(progress)
    .sort((a, b) => (b[1].wrong || 0) - (a[1].wrong || 0))
    .slice(0, 10);

  summary.hard_words = hard.map(([wid, p]) => {
    const w = words.find((ww) => ww.id === parseInt(wid));
    return w && p.wrong > 0 ? {
      word: w.word, meaning: w.meaning, wrong: p.wrong,
    } : null;
  }).filter(Boolean);

  return summary;
}

// ===================================================================
//  初始化
// ===================================================================
function init() {
  words = WORDS_DATA;
  loadProgressCache();
  loadQueue();
  updateProgressBadge();
  showMode("flashcard");
}

function loadQueue() {
  queue = getNextWords(20);
  queueIndex = 0;
  currentWord = queue[0] || null;
}

function refreshQueue() {
  loadQueue();
  renderCurrentMode();
}

function updateProgressBadge() {
  const p = getProgressSummary();
  progressBadge.textContent = `${p.seen}/${p.total}`;
}

// ===================================================================
//  发音功能 - 点击音标朗读单词
// ===================================================================
let speechVoicesLoaded = false;
if (window.speechSynthesis) {
  // 某些浏览器（Chrome）需要异步加载语音列表
  window.speechSynthesis.onvoiceschanged = () => { speechVoicesLoaded = true; };
  // 立即尝试一次
  if (window.speechSynthesis.getVoices().length > 0) speechVoicesLoaded = true;
}

function speakWord(text) {
  if (!window.speechSynthesis) {
    console.log("当前浏览器不支持语音合成");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  utterance.pitch = 1.0;

  // 选择英式发音优先
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find((v) => v.lang.startsWith("en-GB"))
    || voices.find((v) => v.lang.startsWith("en-US"));
  if (enVoice) utterance.voice = enVoice;

  window.speechSynthesis.speak(utterance);
}

function showPhonetic(el, word) {
  if (!el) return;
  if (word.phonetic) {
    el.textContent = `🔊 ${word.phonetic}`;
    el.style.cursor = "pointer";
    el.title = "点击朗读";
    el.onclick = (e) => {
      e.stopPropagation();
      speakWord(word.word);
    };
  } else {
    el.textContent = "";
    el.style.cursor = "";
    el.title = "";
    el.onclick = null;
  }
}

// ===================================================================
//  模式切换
// ===================================================================
function showMode(mode) {
  $$(".mode").forEach((el) => el.classList.remove("active"));
  $$(".tab").forEach((el) => el.classList.remove("active"));
  const modeEl = document.getElementById(`mode-${mode}`);
  const tabEl = document.querySelector(`.tab[data-mode="${mode}"]`);
  if (modeEl) modeEl.classList.add("active");
  if (tabEl) tabEl.classList.add("active");
  renderCurrentMode();
}

function renderCurrentMode() {
  const activeTab = document.querySelector(".tab.active");
  if (!activeTab) return;
  switch (activeTab.dataset.mode) {
    case "flashcard": renderFlashcard(); break;
    case "choice": renderChoice(); break;
    case "spelling": renderSpelling(); break;
    case "sentence": renderSentence(); break;
    case "browse": renderBrowse(); break;
  }
}

// ===================================================================
//  记忆卡模式
// ===================================================================
function renderFlashcard() {
  currentWord = queue[queueIndex] || null;
  if (!currentWord) {
    fcWord.textContent = "🎉 全部完成！";
    fcPos.textContent = ""; fcPhonetic.textContent = "";
    fcMeaning.textContent = "太棒了！点击刷新加载更多单词";
    fcSentence.textContent = ""; fcMnemonic.textContent = "";
    fcCounter.textContent = "";
    document.querySelector(".card-front").classList.remove("hidden");
    document.querySelector(".card-back").classList.add("hidden");
    return;
  }
  fcWord.textContent = currentWord.word;
  fcPos.textContent = currentWord.pos;
  showPhonetic(fcPhonetic, currentWord);
  fcMeaning.textContent = currentWord.meaning;
  fcSentence.textContent = `📖 ${currentWord.sentence}`;
  fcMnemonic.textContent = `💡 记忆法：${currentWord.mnemonic}`;
  fcCounter.textContent = `${queueIndex + 1} / ${queue.length}`;
  document.querySelector(".card-front").classList.remove("hidden");
  document.querySelector(".card-back").classList.add("hidden");
  isTransitioning = false;
}

function flipCard() {
  const front = document.querySelector(".card-front");
  const back = document.querySelector(".card-back");
  front.classList.toggle("hidden");
  back.classList.toggle("hidden");
}

flashcard.addEventListener("click", () => {
  if (!isTransitioning) flipCard();
});

function fcHandleResult(correct) {
  if (!currentWord || isTransitioning) return;
  isTransitioning = true;

  const front = document.querySelector(".card-front");
  const back = document.querySelector(".card-back");
  front.classList.add("hidden");
  back.classList.remove("hidden");

  recordResult(currentWord.id, correct);
  updateProgressBadge();

  const delay = correct ? 1200 : 2000;
  setTimeout(() => {
    queueIndex++;
    renderFlashcard();
  }, delay);
}

fcAgain.addEventListener("click", () => fcHandleResult(false));
fcHard.addEventListener("click", () => fcHandleResult(false));
fcGood.addEventListener("click", () => fcHandleResult(true));
fcEasy.addEventListener("click", () => fcHandleResult(true));

// ===================================================================
//  选择题模式 - 支持上一题/下一题，展示英文+音标+朗读
// ===================================================================
let choiceAnswers = {};      // 记录每题的答题结果 { answered, selectedIndex, isCorrect, optionsData }
let choiceRevealed = false;  // 当前是否已展示答案

function renderChoice() {
  currentWord = queue[queueIndex] || null;
  choiceRevealed = false;

  if (!currentWord) {
    choiceWord.textContent = "🎉 全部完成！";
    choicePos.textContent = ""; choicePhonetic.textContent = "";
    choiceProgress.textContent = ""; choiceSentence.textContent = "";
    choiceResult.textContent = ""; choiceResult.className = "quiz-result";
    document.getElementById("choicePrev").classList.add("hidden");
    choiceNext.classList.add("hidden");
    choiceOptions.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.className = "quiz-option"; btn.disabled = true;
      btn.querySelector(".option-meaning").textContent = "";
      btn.querySelector(".option-detail").classList.add("hidden");
    });
    return;
  }

  // 如果已经答过这题，显示保存的结果
  const saved = choiceAnswers[queueIndex];
  if (saved) {
    renderChoiceSaved(saved);
    return;
  }

  // 新题目：生成选项
  choiceWord.textContent = currentWord.word;
  choicePos.textContent = currentWord.pos;
  showPhonetic(choicePhonetic, currentWord);
  choiceProgress.textContent = `${queueIndex + 1} / ${queue.length}`;
  choiceResult.textContent = ""; choiceResult.className = "quiz-result";
  choiceSentence.textContent = ""; choiceSentence.className = "quiz-sentence";
  choiceNext.classList.add("hidden");
  document.getElementById("choicePrev").classList.remove("hidden");
  isTransitioning = false;

  // 构造选项数据：每个选项包含英文词、释义、音标
  let distractors = words
    .filter((w) => w.id !== currentWord.id)
    .map((w) => ({ word: w.word, meaning: w.meaning, phonetic: w.phonetic }));
  // 去重（相同释义只留一个）
  const seenMeanings = new Set();
  distractors = distractors.filter((d) => {
    if (seenMeanings.has(d.meaning)) return false;
    seenMeanings.add(d.meaning);
    return true;
  });
  distractors.sort(() => Math.random() - 0.5);

  let optionsData = [
    { word: currentWord.word, meaning: currentWord.meaning, phonetic: currentWord.phonetic, isCorrect: true },
    ...distractors.slice(0, 3).map((d) => ({ ...d, isCorrect: false })),
  ];
  optionsData.sort(() => Math.random() - 0.5);

  // 保存选项数据供 reveal 使用
  currentOptionsData = optionsData;

  const btns = choiceOptions.querySelectorAll(".quiz-option");
  btns.forEach((btn, i) => {
    const meaningSpan = btn.querySelector(".option-meaning");
    const detailSpan = btn.querySelector(".option-detail");
    meaningSpan.textContent = optionsData[i].meaning;
    detailSpan.classList.add("hidden");
    detailSpan.innerHTML = "";
    btn.className = "quiz-option";
    btn.disabled = false;
    btn.dataset.index = i;
  });
}

function renderChoiceSaved(saved) {
  const { selectedIndex, isCorrect, optionsData, currentWord: savedWord } = saved;
  currentWord = savedWord;

  choiceWord.textContent = currentWord.word;
  choicePos.textContent = currentWord.pos;
  showPhonetic(choicePhonetic, currentWord);
  choiceProgress.textContent = `${queueIndex + 1} / ${queue.length}`;
  choiceSentence.textContent = `📖 ${currentWord.sentence}`;
  isTransitioning = true;
  document.getElementById("choicePrev").classList.remove("hidden");

  if (isCorrect) {
    choiceResult.textContent = "✅ 回答正确！";
    choiceResult.className = "quiz-result correct";
    choiceNext.classList.add("hidden");
  } else {
    choiceResult.textContent = `❌ 正确答案：${currentWord.meaning}`;
    choiceResult.className = "quiz-result wrong";
    choiceNext.classList.remove("hidden");
  }

  const btns = choiceOptions.querySelectorAll(".quiz-option");
  btns.forEach((btn, i) => {
    const data = optionsData[i];
    const meaningSpan = btn.querySelector(".option-meaning");
    const detailSpan = btn.querySelector(".option-detail");

    meaningSpan.textContent = data.meaning;
    btn.disabled = true;

    // 显示英文+音标
    detailSpan.classList.remove("hidden");
    const phoneticText = data.phonetic ? ` ${data.phonetic}` : "";
    detailSpan.innerHTML = `
      <span class="opt-word">${data.word}</span>
      <span class="opt-phonetic clickable-phonetic" data-word="${data.word}">🔊${phoneticText}</span>
    `;

    btn.className = "quiz-option";
    if (data.isCorrect) btn.classList.add("correct");
    if (i === selectedIndex && !isCorrect) btn.classList.add("wrong");
  });

  // 给音标绑定点击事件
  document.querySelectorAll("#choiceOptions .clickable-phonetic").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const word = el.dataset.word;
      if (word) speakWord(word);
    });
  });
}

choiceOptions.addEventListener("click", (e) => {
  const btn = e.target.closest(".quiz-option");
  if (!btn || btn.disabled || isTransitioning) return;
  // 如果点击的是音标或其他内部元素，不处理
  if (e.target.closest(".clickable-phonetic") || e.target.closest(".opt-word") || e.target.closest(".opt-phonetic")) return;

  const index = parseInt(btn.dataset.index);
  const optionsData = currentOptionsData;
  const isCorrect = optionsData[index].isCorrect;

  // 记录答案
  choiceAnswers[queueIndex] = {
    answered: true,
    selectedIndex: index,
    isCorrect,
    optionsData,
    currentWord,
  };

  const btns = choiceOptions.querySelectorAll(".quiz-option");
  btns.forEach((b) => (b.disabled = true));
  isTransitioning = true;

  // 显示所有选项的英文+音标
  btns.forEach((b, i) => {
    const data = optionsData[i];
    const detailSpan = b.querySelector(".option-detail");
    detailSpan.classList.remove("hidden");
    const phoneticText = data.phonetic ? ` ${data.phonetic}` : "";
    detailSpan.innerHTML = `
      <span class="opt-word">${data.word}</span>
      <span class="opt-phonetic clickable-phonetic" data-word="${data.word}">🔊${phoneticText}</span>
    `;

    b.className = "quiz-option";
    if (data.isCorrect) b.classList.add("correct");
    if (i === index && !isCorrect) b.classList.add("wrong");
  });

  // 音标点击发音
  document.querySelectorAll("#choiceOptions .clickable-phonetic").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const word = el.dataset.word;
      if (word) speakWord(word);
    });
  });

  choiceResult.textContent = isCorrect ? "✅ 回答正确！" : `❌ 正确答案：${currentWord.meaning}`;
  choiceResult.className = `quiz-result ${isCorrect ? "correct" : "wrong"}`;
  choiceSentence.textContent = `📖 ${currentWord.sentence}`;

  recordResult(currentWord.id, isCorrect);
  updateProgressBadge();

  if (isCorrect) {
    choiceNext.classList.add("hidden");
    setTimeout(() => {
      queueIndex++;
      renderChoice();
    }, 1200);
  } else {
    choiceNext.classList.remove("hidden");
    choiceNext.textContent = "下一题 →";
  }
});

choiceNext.addEventListener("click", () => {
  if (queueIndex < queue.length - 1) {
    queueIndex++;
    renderChoice();
  } else {
    // 已经是最后一题，刷新队列
    refreshQueue();
    showMode("choice");
  }
});

document.getElementById("choicePrev").addEventListener("click", () => {
  if (queueIndex > 0) {
    queueIndex--;
    renderChoice();
  }
});

// ===================================================================
//  拼写模式
// ===================================================================
function renderSpelling() {
  currentWord = queue[queueIndex] || null;
  if (!currentWord) {
    spellMeaning.textContent = "🎉 全部完成！";
    spellPos.textContent = ""; spellPhonetic.textContent = "";
    spellHint.textContent = ""; spellProgress.textContent = "";
    spellResult.textContent = ""; spellResult.className = "quiz-result";
    spellReveal.classList.add("hidden"); spellNext.classList.add("hidden");
    spellInput.value = ""; spellInput.disabled = true;
    return;
  }

  spellMeaning.textContent = currentWord.meaning;
  spellPos.textContent = currentWord.pos;
  showPhonetic(spellPhonetic, currentWord);
  spellProgress.textContent = `${queueIndex + 1} / ${queue.length}`;
  spellHint.textContent = `该词共 ${currentWord.word.length} 个字母，点击提示获取帮助`;
  spellResult.textContent = ""; spellResult.className = "quiz-result";
  spellReveal.classList.add("hidden"); spellNext.classList.add("hidden");
  spellInput.value = ""; spellInput.disabled = false;
  spellInput.className = "spell-input";
  spellInput.focus();
  isTransitioning = false;
}

spellSubmit.addEventListener("click", checkSpelling);
spellInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkSpelling();
});

function checkSpelling() {
  if (!currentWord || spellInput.disabled || isTransitioning) return;
  const answer = spellInput.value.trim().toLowerCase();
  const correct = currentWord.word.toLowerCase();
  const isCorrect = answer === correct;

  spellInput.disabled = true;
  spellInput.className = `spell-input ${isCorrect ? "correct" : "wrong"}`;

  spellResult.textContent = isCorrect ? "✅ 拼写正确！" : `❌ 拼写错误`;
  spellResult.className = `quiz-result ${isCorrect ? "correct" : "wrong"}`;

  spellReveal.classList.remove("hidden");
  spellCorrectWord.textContent = `${currentWord.word} — ${currentWord.meaning}`;
  spellSentence.textContent = `📖 ${currentWord.sentence}`;

  recordResult(currentWord.id, isCorrect);
  updateProgressBadge();

  if (isCorrect) {
    isTransitioning = true;
    setTimeout(() => {
      queueIndex++;
      renderSpelling();
    }, 1200);
  } else {
    spellNext.classList.remove("hidden");
  }
}

spellNext.addEventListener("click", () => {
  queueIndex++;
  renderSpelling();
});

spellShowTip.addEventListener("click", () => {
  if (!currentWord) return;
  const word = currentWord.word;
  const reveal = Math.min(3, Math.ceil(word.length / 3));
  const hint = word.split("").map((ch, i) => (i < reveal ? ch : "_")).join(" ");
  spellHint.textContent = `💡 提示：${hint}`;
});

// ===================================================================
//  例句填空模式
// ===================================================================
function renderSentence() {
  currentWord = queue[queueIndex] || null;
  if (!currentWord) {
    sentMeaning.textContent = "🎉 全部完成！";
    sentPos.textContent = ""; sentPhonetic.textContent = "";
    sentSentence.textContent = ""; sentProgress.textContent = "";
    sentResult.textContent = ""; sentResult.className = "quiz-result";
    sentReveal.classList.add("hidden"); sentNext.classList.add("hidden");
    sentInput.value = ""; sentInput.disabled = true;
    return;
  }

  sentMeaning.textContent = `含义：${currentWord.meaning}`;
  sentPos.textContent = currentWord.pos;
  showPhonetic(sentPhonetic, currentWord);
  sentProgress.textContent = `${queueIndex + 1} / ${queue.length}`;

  const blankSentence = currentWord.sentence.replace(
    new RegExp(currentWord.word, "gi"), "______"
  );
  sentSentence.textContent = blankSentence;
  sentShowTip.classList.remove("hidden");

  sentResult.textContent = ""; sentResult.className = "quiz-result";
  sentReveal.classList.add("hidden"); sentNext.classList.add("hidden");
  sentInput.value = ""; sentInput.disabled = false;
  sentInput.className = "spell-input";
  sentInput.focus();
  isTransitioning = false;
}

sentSubmit.addEventListener("click", checkSentence);
sentInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkSentence();
});

function checkSentence() {
  if (!currentWord || sentInput.disabled || isTransitioning) return;
  const answer = sentInput.value.trim().toLowerCase();
  const correct = currentWord.word.toLowerCase();
  const isCorrect = answer === correct;

  sentInput.disabled = true;
  sentInput.className = `spell-input ${isCorrect ? "correct" : "wrong"}`;

  sentResult.textContent = isCorrect ? "✅ 完全正确！" : `❌ 正确答案：${currentWord.word}`;
  sentResult.className = `quiz-result ${isCorrect ? "correct" : "wrong"}`;

  sentReveal.classList.remove("hidden");
  sentCorrectWord.textContent = `${currentWord.word} — ${currentWord.meaning}`;
  sentFullSentence.textContent = `📖 ${currentWord.sentence_cn}`;

  sentShowTip.classList.add("hidden");
  recordResult(currentWord.id, isCorrect);
  updateProgressBadge();

  if (isCorrect) {
    isTransitioning = true;
    setTimeout(() => {
      queueIndex++;
      renderSentence();
    }, 1200);
  } else {
    sentNext.classList.remove("hidden");
  }
}

sentNext.addEventListener("click", () => {
  queueIndex++;
  renderSentence();
});

sentShowTip.addEventListener("click", () => {
  if (!currentWord) return;
  sentShowTip.classList.add("hidden");
  sentResult.textContent = `💡 中文释义：${currentWord.meaning}`;
  sentResult.className = "quiz-result";
});

// ===================================================================
//  词表浏览
// ===================================================================
function renderBrowse() {
  const query = browseSearch.value.trim().toLowerCase();
  const filter = browseFilter.value;

  let filtered = [...words];
  if (query) {
    filtered = filtered.filter(
      (w) => w.word.toLowerCase().includes(query) || w.meaning.includes(query)
    );
  }
  if (filter !== "all") {
    filtered = filtered.filter((w) => {
      const p = progressCache[w.id] || {};
      const level = p.level || 0;
      const seen = p.seen || 0;
      const wrong = p.wrong || 0;
      switch (filter) {
        case "mastered": return level >= 3;
        case "learning": return seen > 0 && level < 3;
        case "new": return !seen;
        case "hard": return wrong >= 2;
        default: return true;
      }
    });
  }

  if (filtered.length === 0) {
    browseList.innerHTML = '<div class="browse-empty">没有找到匹配的单词</div>';
    return;
  }

  browseList.innerHTML = filtered.map((w) => {
    const p = progressCache[w.id] || {};
    const level = p.level || 0;
    const seen = p.seen || 0;
    const wrong = p.wrong || 0;
    let levelClass = "level-new", levelText = "未学";
    if (seen > 0 && level < 3) { levelClass = "level-learning"; levelText = "学习中"; }
    if (level >= 3) { levelClass = "level-mastered"; levelText = "已掌握"; }
    if (wrong >= 2) { levelClass = "level-hard"; levelText = `易错×${wrong}`; }
    return `
      <div class="browse-item" data-id="${w.id}">
        <div>
          <span class="bw-word">${w.word}</span>
          <span class="bw-pos">${w.pos}</span>
          <span class="card-phonetic clickable-phonetic" style="display:inline;font-size:13px;margin-left:8px" data-word="${w.word}">${w.phonetic ? "🔊 " + w.phonetic : ""}</span>
        </div>
        <span class="bw-meaning">${w.meaning}</span>
        <span class="bw-level ${levelClass}">${levelText}</span>
      </div>
    `;
  }).join("");

  browseList.querySelectorAll(".browse-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      // 如果点击的是音标，交给音标的点击事件处理
      if (e.target.closest(".clickable-phonetic")) return;
      const id = parseInt(el.dataset.id);
      const w = words.find((ww) => ww.id === id);
      if (!w) return;
      alert(
        `${w.word} ${w.phonetic || ""} (${w.pos})\n${w.meaning}\n\n📖 ${w.sentence}\n${w.sentence_cn}\n\n💡 ${w.mnemonic}`
      );
    });
  });
  // 音标点击发音
  browseList.querySelectorAll(".clickable-phonetic").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const word = el.dataset.word;
      if (word) speakWord(word);
    });
  });
}

browseSearch.addEventListener("input", renderBrowse);
browseFilter.addEventListener("change", renderBrowse);

// ===================================================================
//  统计面板
// ===================================================================
function showStats() {
  const data = getStats();
  document.getElementById("statTotal").textContent = data.total;
  document.getElementById("statSeen").textContent = data.seen;
  document.getElementById("statMastered").textContent = data.mastered;
  document.getElementById("statAccuracy").textContent = `${data.accuracy}%`;
  const pct = data.total > 0 ? Math.round((data.seen / data.total) * 100) : 0;
  document.getElementById("statProgressFill").style.width = `${pct}%`;
  document.getElementById("statProgressText").textContent = `${pct}%`;

  const recentEl = document.getElementById("statRecent");
  if (data.recent && data.recent.length > 0) {
    recentEl.innerHTML = data.recent.map((r) =>
      `<div><span class="swl-word">${r.word}</span><span class="swl-detail">${r.meaning} | 等级 ${r.level} | 连对 ${r.streak}</span></div>`
    ).join("");
  } else {
    recentEl.innerHTML = "<div style='color:var(--text-secondary)'>暂无学习记录</div>";
  }

  const hardEl = document.getElementById("statHard");
  if (data.hard_words && data.hard_words.length > 0) {
    hardEl.innerHTML = data.hard_words.map((r) =>
      `<div><span class="swl-word">${r.word}</span><span class="swl-detail">${r.meaning} | 错误 ${r.wrong} 次</span></div>`
    ).join("");
  } else {
    hardEl.innerHTML = "<div style='color:var(--text-secondary)'>暂无困难词，继续保持！</div>";
  }

  statsModal.classList.remove("hidden");
}

statsBtn.addEventListener("click", showStats);
statsClose.addEventListener("click", () => statsModal.classList.add("hidden"));
statsModal.addEventListener("click", (e) => {
  if (e.target === statsModal) statsModal.classList.add("hidden");
});

// ===================================================================
//  重置
// ===================================================================
resetBtn.addEventListener("click", () => resetModal.classList.remove("hidden"));
resetClose.addEventListener("click", () => resetModal.classList.add("hidden"));
resetCancel.addEventListener("click", () => resetModal.classList.add("hidden"));
resetConfirm.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  resetModal.classList.add("hidden");
  progressCache = {};
  location.reload();
});

// ===================================================================
//  键盘快捷键
// ===================================================================
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  const activeTab = document.querySelector(".tab.active");
  if (!activeTab) return;
  const mode = activeTab.dataset.mode;

  switch (e.key) {
    case " ":
      e.preventDefault();
      if (mode === "flashcard" && !isTransitioning) flipCard();
      break;
    case "1": if (mode === "flashcard") fcAgain.click(); break;
    case "2": if (mode === "flashcard") fcHard.click(); break;
    case "3": if (mode === "flashcard") fcGood.click(); break;
    case "4": if (mode === "flashcard") fcEasy.click(); break;
    case "ArrowRight":
    case "Enter":
      if (mode === "choice" && !choiceNext.classList.contains("hidden"))
        choiceNext.click();
      else if (mode === "spelling" && !spellNext.classList.contains("hidden"))
        spellNext.click();
      else if (mode === "sentence" && !sentNext.classList.contains("hidden"))
        sentNext.click();
      break;
  }
});

// ===================================================================
//  Tab 切换 & 自动刷新队列
// ===================================================================
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showMode(tab.dataset.mode));
});

// 包装 render 函数，队列耗尽时自动刷新
function wrapRender(fn) {
  return function () {
    if (queueIndex >= queue.length) {
      loadQueue();
      // 如果刷新后仍然为空则直接渲染（显示"全部完成"）
      fn();
      return;
    }
    fn();
  };
}

const origRenderFlashcard = renderFlashcard;
const origRenderChoice = renderChoice;
const origRenderSpelling = renderSpelling;
const origRenderSentence = renderSentence;

renderFlashcard = wrapRender(origRenderFlashcard);
renderChoice = wrapRender(origRenderChoice);
renderSpelling = wrapRender(origRenderSpelling);
renderSentence = wrapRender(origRenderSentence);

window.renderFlashcard = renderFlashcard;
window.renderChoice = renderChoice;
window.renderSpelling = renderSpelling;
window.renderSentence = renderSentence;

// ===================================================================
//  加载进度缓存
// ===================================================================
function loadProgressCache() {
  const progress = loadProgress();
  for (const w of words) {
    progressCache[w.id] = progress[String(w.id)] || {};
  }
  renderBrowse();
}

// ===================================================================
//  启动
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  init();
});