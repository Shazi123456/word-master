// 考研单词数据 - 自动生成
const WORDS_DATA = [
  {
    "id": 1,
    "word": "abandon",
    "pos": "v.",
    "meaning": "放弃，抛弃",
    "phonetic": "/əˈbændən/",
    "sentence": "They had to abandon the sinking ship.",
    "sentence_cn": "他们不得不弃船。",
    "mnemonic": "a+band+on → 一个乐队在沉船上→抛弃"
  },
  {
    "id": 2,
    "word": "phenomenon",
    "pos": "n.",
    "meaning": "现象",
    "phonetic": "/fɪˈnɒmɪnən/",
    "sentence": "Globalization is a complex phenomenon.",
    "sentence_cn": "全球化是一个复杂现象。",
    "mnemonic": "phe(飞)+no(不)+men(男人)+on → 飞来的男人→现象"
  },
  {
    "id": 3,
    "word": "significant",
    "pos": "adj.",
    "meaning": "重要的，有意义的",
    "phonetic": "/sɪɡˈnɪfɪkənt/",
    "sentence": "This is a significant achievement in medical research.",
    "sentence_cn": "这是医学研究中的一项重要成就。",
    "mnemonic": "sign(标记)+i+fic(做)+ant → 做了标记的→重要的"
  },
  {
    "id": 4,
    "word": "available",
    "pos": "adj.",
    "meaning": "可用的，有效的",
    "phonetic": "/əˈveɪləbl/",
    "sentence": "Tickets are available online.",
    "sentence_cn": "票可以在线购买。",
    "mnemonic": "a(到)+vail(价值)+able → 有价值的→可用的"
  },
  {
    "id": 5,
    "word": "benefit",
    "pos": "n./v.",
    "meaning": "利益，好处；受益",
    "phonetic": "/ˈbenɪfɪt/",
    "sentence": "Regular exercise brings many health benefits.",
    "sentence_cn": "定期锻炼带来许多健康益处。",
    "mnemonic": "bene(好)+fit(做) → 做得好→受益"
  },
  {
    "id": 6,
    "word": "challenge",
    "pos": "n./v.",
    "meaning": "挑战",
    "phonetic": "/ˈtʃælɪndʒ/",
    "sentence": "Learning a new language is a big challenge.",
    "sentence_cn": "学习一门新语言是一个大挑战。",
    "mnemonic": "cha(叉)+llenge(联想length) → 叉的长度→挑战"
  },
  {
    "id": 7,
    "word": "demonstrate",
    "pos": "v.",
    "meaning": "证明，示范",
    "phonetic": "/ˈdemənstreɪt/",
    "sentence": "The experiment demonstrates the theory.",
    "sentence_cn": "这个实验证明了该理论。",
    "mnemonic": "de(加强)+monstr(展示)+ate → 加强展示→示范"
  },
  {
    "id": 8,
    "word": "essential",
    "pos": "adj./n.",
    "meaning": "必要的；本质",
    "phonetic": "/ɪˈsenʃl/",
    "sentence": "Water is essential for life.",
    "sentence_cn": "水对生命至关重要。",
    "mnemonic": "ess(存在)+ent+ial → 存在的根本→本质"
  },
  {
    "id": 9,
    "word": "contribute",
    "pos": "v.",
    "meaning": "贡献，捐献",
    "phonetic": "/kənˈtrɪbjuːt/",
    "sentence": "Everyone should contribute to protecting the environment.",
    "sentence_cn": "每个人都应为保护环境做贡献。",
    "mnemonic": "con(共同)+tribute(给予) → 共同给予→贡献"
  },
  {
    "id": 10,
    "word": "economic",
    "pos": "adj.",
    "meaning": "经济的",
    "phonetic": "/ˌiːkəˈnɒmɪk/",
    "sentence": "The country faces economic challenges.",
    "sentence_cn": "该国面临经济挑战。",
    "mnemonic": "eco(家)+nom(管理)+ic → 管理家的→经济的"
  },
  {
    "id": 11,
    "word": "establish",
    "pos": "v.",
    "meaning": "建立，设立",
    "phonetic": "/ɪˈstæblɪʃ/",
    "sentence": "The company was established in 2000.",
    "sentence_cn": "这家公司成立于2000年。",
    "mnemonic": "e(出)+st(站)+abl(能)+ish → 能站出来→建立"
  },
  {
    "id": 12,
    "word": "potential",
    "pos": "adj./n.",
    "meaning": "潜在的；潜力",
    "phonetic": "/pəˈtenʃl/",
    "sentence": "She has great potential as a scientist.",
    "sentence_cn": "她作为科学家有巨大潜力。",
    "mnemonic": "pot(罐子)+ent+ial → 罐子里藏着的→潜在的"
  },
  {
    "id": 13,
    "word": "individual",
    "pos": "adj./n.",
    "meaning": "个人的；个体",
    "phonetic": "/ˌɪndɪˈvɪdʒuəl/",
    "sentence": "Each individual has unique talents.",
    "sentence_cn": "每个人都有独特的天赋。",
    "mnemonic": "in(不)+di(分)+vid(看)+ual → 不可再分的→个体"
  },
  {
    "id": 14,
    "word": "environment",
    "pos": "n.",
    "meaning": "环境",
    "phonetic": "/ɪnˈvaɪrənmənt/",
    "sentence": "We must protect the natural environment.",
    "sentence_cn": "我们必须保护自然环境。",
    "mnemonic": "en(进入)+viron(转)+ment → 我们在其中转→环境"
  },
  {
    "id": 15,
    "word": "recognize",
    "pos": "v.",
    "meaning": "认出，承认",
    "phonetic": "/ˈrekəɡnaɪz/",
    "sentence": "I recognized her from her voice.",
    "sentence_cn": "我从她的声音认出了她。",
    "mnemonic": "re(再)+cogn(知道)+ize → 再次知道→认出"
  },
  {
    "id": 16,
    "word": "consequence",
    "pos": "n.",
    "meaning": "结果，后果",
    "phonetic": "/ˈkɒnsɪkwəns/",
    "sentence": "Every action has consequences.",
    "sentence_cn": "每个行动都有后果。",
    "mnemonic": "con(共同)+sequ(跟随)+ence → 跟随而来的→结果"
  },
  {
    "id": 17,
    "word": "hypothesis",
    "pos": "n.",
    "meaning": "假说，假设",
    "phonetic": "/haɪˈpɒθəsɪs/",
    "sentence": "The scientist proposed a new hypothesis.",
    "sentence_cn": "科学家提出了一个新假说。",
    "mnemonic": "hypo(在...下)+thesis(论点) → 论点的基→假说"
  },
  {
    "id": 18,
    "word": "interpret",
    "pos": "v.",
    "meaning": "解释，口译",
    "phonetic": "/ɪnˈtɜːprɪt/",
    "sentence": "How do you interpret this poem?",
    "sentence_cn": "你怎么解读这首诗？",
    "mnemonic": "inter(在...间)+pret(联想price) → 在价格间→解释"
  },
  {
    "id": 19,
    "word": "maintain",
    "pos": "v.",
    "meaning": "维持，保持",
    "phonetic": "/meɪnˈteɪn/",
    "sentence": "It's important to maintain good health.",
    "sentence_cn": "保持健康很重要。",
    "mnemonic": "main(主要)+tain(拿住) → 主要拿住→维持"
  },
  {
    "id": 20,
    "word": "adapt",
    "pos": "v.",
    "meaning": "适应，改编",
    "phonetic": "/əˈdæpt/",
    "sentence": "Animals must adapt to their environment.",
    "sentence_cn": "动物必须适应环境。",
    "mnemonic": "ad(加强)+apt(适合) → 努力适合→适应"
  },
  {
    "id": 21,
    "word": "assume",
    "pos": "v.",
    "meaning": "假设，承担",
    "phonetic": "/əˈsjuːm/",
    "sentence": "I assume you know the answer.",
    "sentence_cn": "我假设你知道答案。",
    "mnemonic": "as(作为)+sume(拿) → 作为...拿起来→承担"
  },
  {
    "id": 22,
    "word": "controversy",
    "pos": "n.",
    "meaning": "争论，争议",
    "phonetic": "/ˈkɒntrəvɜːsi/",
    "sentence": "The decision caused much controversy.",
    "sentence_cn": "这个决定引起了很多争议。",
    "mnemonic": "control(控制)+vers(转)+y → 控制不了→争议"
  },
  {
    "id": 23,
    "word": "decline",
    "pos": "v./n.",
    "meaning": "下降；拒绝",
    "phonetic": "/dɪˈklaɪn/",
    "sentence": "The population of the village declined.",
    "sentence_cn": "村庄的人口下降了。",
    "mnemonic": "de(向下)+cline(倾斜) → 向下倾斜→下降"
  },
  {
    "id": 24,
    "word": "emerge",
    "pos": "v.",
    "meaning": "浮现，出现",
    "phonetic": "/ɪˈmɜːdʒ/",
    "sentence": "New evidence emerged during the investigation.",
    "sentence_cn": "调查中出现了新证据。",
    "mnemonic": "e(出)+merge(沉) → 从沉没中出来→浮现"
  },
  {
    "id": 25,
    "word": "obvious",
    "pos": "adj.",
    "meaning": "明显的",
    "phonetic": "/ˈɒbviəs/",
    "sentence": "The answer is obvious.",
    "sentence_cn": "答案很明显。",
    "mnemonic": "ob(在)+vi(路)+ous → 在路上→明显的"
  },
  {
    "id": 26,
    "word": "perspective",
    "pos": "n.",
    "meaning": "观点，视角",
    "phonetic": "/pəˈspektɪv/",
    "sentence": "Try to see it from my perspective.",
    "sentence_cn": "试着从我的角度看。",
    "mnemonic": "per(穿透)+spect(看)+ive → 看穿→视角"
  },
  {
    "id": 27,
    "word": "principle",
    "pos": "n.",
    "meaning": "原则，原理",
    "phonetic": "/ˈprɪnsəpl/",
    "sentence": "He sticks to his principles.",
    "sentence_cn": "他坚持自己的原则。",
    "mnemonic": "prin(第一)+cip(拿)+le → 首先要拿住的→原则"
  },
  {
    "id": 28,
    "word": "relevant",
    "pos": "adj.",
    "meaning": "相关的",
    "phonetic": "/ˈreləvənt/",
    "sentence": "Is this information relevant to our discussion?",
    "sentence_cn": "这个信息与我们的讨论相关吗？",
    "mnemonic": "re(再)+lev(举)+ant → 再举起来→相关的"
  },
  {
    "id": 29,
    "word": "substitute",
    "pos": "v./n.",
    "meaning": "替代；替代品",
    "phonetic": "/ˈsʌbstɪtjuːt/",
    "sentence": "You can substitute honey for sugar.",
    "sentence_cn": "你可以用蜂蜜代替糖。",
    "mnemonic": "sub(在下面)+stitute(站) → 站在下面→替代"
  },
  {
    "id": 30,
    "word": "survive",
    "pos": "v.",
    "meaning": "幸存，生存",
    "phonetic": "/səˈvaɪv/",
    "sentence": "Only a few survived the earthquake.",
    "sentence_cn": "只有少数人在地震中幸存。",
    "mnemonic": "sur(超过)+viv(活)+e → 超过...活下来→幸存"
  },
  {
    "id": 31,
    "word": "analyze",
    "pos": "v.",
    "meaning": "分析",
    "phonetic": "/ˈænəlaɪz/",
    "sentence": "We need to analyze the data carefully.",
    "sentence_cn": "我们需要仔细分析数据。",
    "mnemonic": "ana(分开)+lyze(裂开) → 分开裂开→分析"
  },
  {
    "id": 32,
    "word": "legislation",
    "pos": "n.",
    "meaning": "立法，法律",
    "phonetic": "/ˌledʒɪsˈleɪʃn/",
    "sentence": "New legislation was passed to protect consumers.",
    "sentence_cn": "通过了保护消费者的新法律。",
    "mnemonic": "leg(法律)+is+lat(拿)+ion → 拿来法律→立法"
  },
  {
    "id": 33,
    "word": "estimate",
    "pos": "v./n.",
    "meaning": "估计，评估",
    "phonetic": "/ˈestɪmeɪt/",
    "sentence": "The cost is estimated at one million dollars.",
    "sentence_cn": "成本估计为一百万美元。",
    "mnemonic": "e(出)+st(站)+i+mate(伙伴) → 站出来的伙伴→评估"
  },
  {
    "id": 34,
    "word": "illustrate",
    "pos": "v.",
    "meaning": "说明，阐明",
    "phonetic": "/ˈɪləstreɪt/",
    "sentence": "The diagram illustrates the process.",
    "sentence_cn": "图表说明了这个过程。",
    "mnemonic": "il(进入)+lustr(光)+ate → 让光进入→阐明"
  },
  {
    "id": 35,
    "word": "implement",
    "pos": "v./n.",
    "meaning": "实施；工具",
    "phonetic": "/ˈɪmplɪment/",
    "sentence": "The plan will be implemented next month.",
    "sentence_cn": "该计划将于下月实施。",
    "mnemonic": "im(进)+ple(满)+ment → 填满→实施"
  },
  {
    "id": 36,
    "word": "negotiate",
    "pos": "v.",
    "meaning": "谈判，协商",
    "phonetic": "/nɪˈɡəʊʃieɪt/",
    "sentence": "They negotiated a peace agreement.",
    "sentence_cn": "他们谈判达成了和平协议。",
    "mnemonic": "neg(否定)+oti(联想go)+ate → 说不去了→谈判"
  },
  {
    "id": 37,
    "word": "sufficient",
    "pos": "adj.",
    "meaning": "足够的",
    "phonetic": "/səˈfɪʃnt/",
    "sentence": "The evidence is not sufficient.",
    "sentence_cn": "证据不足。",
    "mnemonic": "suf(在下面)+fic(做)+i+ent → 在下面做→足够了"
  },
  {
    "id": 38,
    "word": "transfer",
    "pos": "v./n.",
    "meaning": "转移，调动",
    "phonetic": "/trænsˈfɜː/",
    "sentence": "She transferred to a new school.",
    "sentence_cn": "她转学到了新学校。",
    "mnemonic": "trans(跨越)+fer(带) → 带过去→转移"
  },
  {
    "id": 39,
    "word": "ultimate",
    "pos": "adj.",
    "meaning": "最终的，根本的",
    "phonetic": "/ˈʌltɪmət/",
    "sentence": "This is our ultimate goal.",
    "sentence_cn": "这是我们的最终目标。",
    "mnemonic": "ult(在...外)+i+mate(伙伴) → 伙伴之外的→最终的"
  },
  {
    "id": 40,
    "word": "vary",
    "pos": "v.",
    "meaning": "变化，不同",
    "phonetic": "/ˈveəri/",
    "sentence": "Prices vary according to the season.",
    "sentence_cn": "价格随季节变化。",
    "mnemonic": "vary(联想very) → 很不一样→变化"
  },
  {
    "id": 41,
    "word": "acknowledge",
    "pos": "v.",
    "meaning": "承认，确认",
    "phonetic": "/əkˈnɒlɪdʒ/",
    "sentence": "He acknowledged his mistake.",
    "sentence_cn": "他承认了自己的错误。",
    "mnemonic": "ac(加强)+know(知道)+ledge → 让人知道→承认"
  },
  {
    "id": 42,
    "word": "acquire",
    "pos": "v.",
    "meaning": "获得，学到",
    "phonetic": "/əˈkwaɪə/",
    "sentence": "She acquired a good knowledge of English.",
    "sentence_cn": "她学到了很好的英语知识。",
    "mnemonic": "ac(加强)+quire(寻求) → 努力寻求→获得"
  },
  {
    "id": 43,
    "word": "approach",
    "pos": "v./n.",
    "meaning": "接近；方法",
    "phonetic": "/əˈprəʊtʃ/",
    "sentence": "A new approach to teaching is needed.",
    "sentence_cn": "需要一种新的教学方法。",
    "mnemonic": "ap(向)+proach(接近) → 向...靠近→接近"
  },
  {
    "id": 44,
    "word": "assess",
    "pos": "v.",
    "meaning": "评估，评定",
    "phonetic": "/əˈses/",
    "sentence": "Teachers assess students' progress regularly.",
    "sentence_cn": "老师定期评估学生的进步。",
    "mnemonic": "as(作为)+sess(坐) → 坐在旁边→评估"
  },
  {
    "id": 45,
    "word": "collapse",
    "pos": "v./n.",
    "meaning": "倒塌，崩溃",
    "phonetic": "/kəˈlæps/",
    "sentence": "The building collapsed in the earthquake.",
    "sentence_cn": "大楼在地震中倒塌了。",
    "mnemonic": "col(共同)+lapse(滑倒) → 一起滑倒→倒塌"
  },
  {
    "id": 46,
    "word": "compensate",
    "pos": "v.",
    "meaning": "补偿，赔偿",
    "phonetic": "/ˈkɒmpenseɪt/",
    "sentence": "The company compensated workers for their loss.",
    "sentence_cn": "公司赔偿了工人的损失。",
    "mnemonic": "com(共同)+pens(悬挂)+ate → 共同悬挂→补偿"
  },
  {
    "id": 47,
    "word": "comprehensive",
    "pos": "adj.",
    "meaning": "全面的，综合的",
    "phonetic": "/ˌkɒmprɪˈhensɪv/",
    "sentence": "We need a comprehensive review of the system.",
    "sentence_cn": "我们需要对系统进行全面审查。",
    "mnemonic": "com(共同)+prehen(抓住)+sive → 一起抓住→全面的"
  },
  {
    "id": 48,
    "word": "concrete",
    "pos": "adj./n.",
    "meaning": "具体的；混凝土",
    "phonetic": "/ˈkɒŋkriːt/",
    "sentence": "We need concrete evidence.",
    "sentence_cn": "我们需要具体的证据。",
    "mnemonic": "con(共同)+crete(制造) → 共同制造→具体的"
  },
  {
    "id": 49,
    "word": "confine",
    "pos": "v.",
    "meaning": "限制，监禁",
    "phonetic": "/kənˈfaɪn/",
    "sentence": "Please confine your remarks to the topic.",
    "sentence_cn": "请将你的发言限制在主题内。",
    "mnemonic": "con(共同)+fine(界限) → 共同界限→限制"
  },
  {
    "id": 50,
    "word": "conflict",
    "pos": "n./v.",
    "meaning": "冲突，矛盾",
    "phonetic": "/ˈkɒnflɪkt/",
    "sentence": "The two accounts conflict with each other.",
    "sentence_cn": "两个描述相互矛盾。",
    "mnemonic": "con(共同)+flict(打) → 互相打→冲突"
  },
  {
    "id": 51,
    "word": "conscious",
    "pos": "adj.",
    "meaning": "有意识的，自觉的",
    "phonetic": "/ˈkɒnʃəs/",
    "sentence": "He was conscious of his mistake.",
    "sentence_cn": "他意识到了自己的错误。",
    "mnemonic": "con(共同)+sci(知道)+ous → 都知道→有意识的"
  },
  {
    "id": 52,
    "word": "constitute",
    "pos": "v.",
    "meaning": "构成，组成",
    "phonetic": "/ˈkɒnstɪtjuːt/",
    "sentence": "Twelve months constitute a year.",
    "sentence_cn": "十二个月构成一年。",
    "mnemonic": "con(共同)+stitute(站) → 站在一起→组成"
  },
  {
    "id": 53,
    "word": "conventional",
    "pos": "adj.",
    "meaning": "传统的，惯例的",
    "phonetic": "/kənˈvenʃənl/",
    "sentence": "She has very conventional views.",
    "sentence_cn": "她有非常传统的观点。",
    "mnemonic": "con(共同)+vent(来)+ion+al → 共同来的→惯例的"
  },
  {
    "id": 54,
    "word": "convince",
    "pos": "v.",
    "meaning": "使确信，说服",
    "phonetic": "/kənˈvɪns/",
    "sentence": "I convinced him to join us.",
    "sentence_cn": "我说服了他加入我们。",
    "mnemonic": "con(共同)+vince(征服) → 征服了→说服"
  },
  {
    "id": 55,
    "word": "dedicate",
    "pos": "v.",
    "meaning": "致力于，献身",
    "phonetic": "/ˈdedɪkeɪt/",
    "sentence": "She dedicated her life to science.",
    "sentence_cn": "她将一生献给了科学。",
    "mnemonic": "de(加强)+dic(说)+ate → 宣誓→献身"
  },
  {
    "id": 56,
    "word": "domestic",
    "pos": "adj.",
    "meaning": "国内的，家庭的",
    "phonetic": "/dəˈmestɪk/",
    "sentence": "The domestic economy is growing.",
    "sentence_cn": "国内经济正在增长。",
    "mnemonic": "dom(家)+estic → 家里的→家庭的"
  },
  {
    "id": 57,
    "word": "dominant",
    "pos": "adj.",
    "meaning": "占优势的，主导的",
    "phonetic": "/ˈdɒmɪnənt/",
    "sentence": "She is the dominant figure in the company.",
    "sentence_cn": "她是公司的主导人物。",
    "mnemonic": "domin(支配)+ant → 支配的→主导的"
  },
  {
    "id": 58,
    "word": "eliminate",
    "pos": "v.",
    "meaning": "消除，淘汰",
    "phonetic": "/ɪˈlɪmɪneɪt/",
    "sentence": "We must eliminate all errors.",
    "sentence_cn": "我们必须消除所有错误。",
    "mnemonic": "e(出)+limin(界限)+ate → 赶出界限→消除"
  },
  {
    "id": 59,
    "word": "embrace",
    "pos": "v./n.",
    "meaning": "拥抱；包含",
    "phonetic": "/ɪmˈbreɪs/",
    "sentence": "She embraced her child warmly.",
    "sentence_cn": "她热情地拥抱了孩子。",
    "mnemonic": "em(进)+brace(手臂) → 进入手臂→拥抱"
  },
  {
    "id": 60,
    "word": "emphasis",
    "pos": "n.",
    "meaning": "强调，重点",
    "phonetic": "/ˈemfəsɪs/",
    "sentence": "The school puts emphasis on math.",
    "sentence_cn": "学校重视数学。",
    "mnemonic": "em(加强)+phasis(说) → 加强说→强调"
  },
  {
    "id": 61,
    "word": "encounter",
    "pos": "v./n.",
    "meaning": "遭遇，邂逅",
    "phonetic": "/ɪnˈkaʊntə/",
    "sentence": "I encountered many difficulties.",
    "sentence_cn": "我遇到了很多困难。",
    "mnemonic": "en(使)+counter(相反) → 使相反→遭遇"
  },
  {
    "id": 62,
    "word": "enormous",
    "pos": "adj.",
    "meaning": "巨大的",
    "phonetic": "/ɪˈnɔːməs/",
    "sentence": "An enormous building stood before us.",
    "sentence_cn": "一座巨大的建筑矗立在我们面前。",
    "mnemonic": "e(出)+norm(标准)+ous → 超出标准的→巨大的"
  },
  {
    "id": 63,
    "word": "evaluate",
    "pos": "v.",
    "meaning": "评估，评价",
    "phonetic": "/ɪˈvæljueɪt/",
    "sentence": "We need to evaluate the results.",
    "sentence_cn": "我们需要评估结果。",
    "mnemonic": "e(出)+valu(价值)+ate → 找出价值→评估"
  },
  {
    "id": 64,
    "word": "excessive",
    "pos": "adj.",
    "meaning": "过度的，过多的",
    "phonetic": "/ɪkˈsesɪv/",
    "sentence": "Excessive drinking is harmful.",
    "sentence_cn": "过度饮酒有害。",
    "mnemonic": "ex(超出)+cess(走)+ive → 走过头了→过度的"
  },
  {
    "id": 65,
    "word": "exploit",
    "pos": "v./n.",
    "meaning": "利用；开发",
    "phonetic": "/ɪkˈsplɔɪt/",
    "sentence": "We must exploit natural resources wisely.",
    "sentence_cn": "我们必须明智地开发自然资源。",
    "mnemonic": "ex(出)+ploit(折叠) → 折叠出来→利用"
  },
  {
    "id": 66,
    "word": "flexible",
    "pos": "adj.",
    "meaning": "灵活的",
    "phonetic": "/ˈfleksəbl/",
    "sentence": "We need a flexible approach.",
    "sentence_cn": "我们需要灵活的方法。",
    "mnemonic": "flex(弯曲)+ible(能) → 能弯曲的→灵活的"
  },
  {
    "id": 67,
    "word": "furthermore",
    "pos": "adv.",
    "meaning": "此外，而且",
    "phonetic": "/ˌfɜːðəˈmɔː/",
    "sentence": "The house is beautiful; furthermore, it's affordable.",
    "sentence_cn": "房子很漂亮，而且价格合理。",
    "mnemonic": "further(更远)+more(更多) → 更远更多→此外"
  },
  {
    "id": 68,
    "word": "guarantee",
    "pos": "v./n.",
    "meaning": "保证，担保",
    "phonetic": "/ˌɡærənˈtiː/",
    "sentence": "Hard work guarantees success.",
    "sentence_cn": "努力工作保证成功。",
    "mnemonic": "guard(守卫)+ant(蚂蚁)+ee → 守卫蚂蚁→保证"
  },
  {
    "id": 69,
    "word": "inevitable",
    "pos": "adj.",
    "meaning": "不可避免的",
    "phonetic": "/ɪnˈevɪtəbl/",
    "sentence": "Change is inevitable.",
    "sentence_cn": "变化是不可避免的。",
    "mnemonic": "in(不)+evitable(可避免的) → 不可避免的"
  },
  {
    "id": 70,
    "word": "influence",
    "pos": "n./v.",
    "meaning": "影响",
    "phonetic": "/ˈɪnfluəns/",
    "sentence": "Her words influenced my decision.",
    "sentence_cn": "她的话影响了我的决定。",
    "mnemonic": "in(进入)+flu(流)+ence → 流入→影响"
  },
  {
    "id": 71,
    "word": "initial",
    "pos": "adj./n.",
    "meaning": "最初的；首字母",
    "phonetic": "/ɪˈnɪʃl/",
    "sentence": "My initial reaction was surprise.",
    "sentence_cn": "我最初的反应是惊讶。",
    "mnemonic": "in(进入)+it(走)+ial → 走进→最初的"
  },
  {
    "id": 72,
    "word": "investigate",
    "pos": "v.",
    "meaning": "调查",
    "phonetic": "/ɪnˈvestɪɡeɪt/",
    "sentence": "The police are investigating the case.",
    "sentence_cn": "警方正在调查这个案件。",
    "mnemonic": "in(进入)+vest(衣服)+i+gate(门) → 穿衣服进门→调查"
  },
  {
    "id": 73,
    "word": "isolate",
    "pos": "v.",
    "meaning": "隔离，孤立",
    "phonetic": "/ˈaɪsəleɪt/",
    "sentence": "The patient was isolated from others.",
    "sentence_cn": "病人被隔离了。",
    "mnemonic": "i(我)+sol(独自)+ate → 我独自→隔离"
  },
  {
    "id": 74,
    "word": "manufacture",
    "pos": "v./n.",
    "meaning": "制造，生产",
    "phonetic": "/ˌmænjuˈfæktʃə/",
    "sentence": "This factory manufactures cars.",
    "sentence_cn": "这家工厂制造汽车。",
    "mnemonic": "manu(手)+fact(做)+ure → 用手做→制造"
  },
  {
    "id": 75,
    "word": "modify",
    "pos": "v.",
    "meaning": "修改，调整",
    "phonetic": "/ˈmɒdɪfaɪ/",
    "sentence": "We need to modify the plan.",
    "sentence_cn": "我们需要修改计划。",
    "mnemonic": "mod(模式)+ify → 改变模式→修改"
  },
  {
    "id": 76,
    "word": "monitor",
    "pos": "v./n.",
    "meaning": "监控；班长",
    "phonetic": "/ˈmɒnɪtə/",
    "sentence": "The doctor monitored his condition.",
    "sentence_cn": "医生监控他的状况。",
    "mnemonic": "mon(提醒)+itor → 提醒的人→监控"
  },
  {
    "id": 77,
    "word": "obtain",
    "pos": "v.",
    "meaning": "获得，得到",
    "phonetic": "/əbˈteɪn/",
    "sentence": "She obtained a degree in law.",
    "sentence_cn": "她获得了法律学位。",
    "mnemonic": "ob(加强)+tain(拿住) → 努力拿住→获得"
  },
  {
    "id": 78,
    "word": "participate",
    "pos": "v.",
    "meaning": "参加，参与",
    "phonetic": "/pɑːˈtɪsɪpeɪt/",
    "sentence": "Everyone should participate in the discussion.",
    "sentence_cn": "每个人都应参与讨论。",
    "mnemonic": "part(部分)+i+cip(拿)+ate → 拿一部分→参与"
  },
  {
    "id": 79,
    "word": "possess",
    "pos": "v.",
    "meaning": "拥有，具有",
    "phonetic": "/pəˈzes/",
    "sentence": "She possesses great talent.",
    "sentence_cn": "她拥有很大的天赋。",
    "mnemonic": "poss(联想pos能)+sess(坐) → 能坐在上面→拥有"
  },
  {
    "id": 80,
    "word": "previous",
    "pos": "adj.",
    "meaning": "先前的",
    "phonetic": "/ˈpriːviəs/",
    "sentence": "In the previous chapter, we discussed this topic.",
    "sentence_cn": "在上一章中，我们讨论了这个问题。",
    "mnemonic": "pre(前)+vi(路)+ous → 前面的路→先前的"
  },
  {
    "id": 81,
    "word": "promote",
    "pos": "v.",
    "meaning": "促进，提升",
    "phonetic": "/prəˈməʊt/",
    "sentence": "Exercise promotes good health.",
    "sentence_cn": "锻炼促进健康。",
    "mnemonic": "pro(向前)+mote(移动) → 向前移动→促进"
  },
  {
    "id": 82,
    "word": "proportion",
    "pos": "n.",
    "meaning": "比例，部分",
    "phonetic": "/prəˈpɔːʃn/",
    "sentence": "A large proportion of the population is young.",
    "sentence_cn": "很大一部分人口是年轻人。",
    "mnemonic": "pro(向前)+port(部分)+ion → 向前部分→比例"
  },
  {
    "id": 83,
    "word": "pursue",
    "pos": "v.",
    "meaning": "追求，追赶",
    "phonetic": "/pəˈsjuː/",
    "sentence": "She decided to pursue a career in medicine.",
    "sentence_cn": "她决定追求医学事业。",
    "mnemonic": "pur(向前)+sue(跟随) → 跟随向前→追求"
  },
  {
    "id": 84,
    "word": "reasonable",
    "pos": "adj.",
    "meaning": "合理的",
    "phonetic": "/ˈriːznəbl/",
    "sentence": "The price is reasonable.",
    "sentence_cn": "价格合理。",
    "mnemonic": "reason(理由)+able(能) → 能有理由的→合理的"
  },
  {
    "id": 85,
    "word": "reluctant",
    "pos": "adj.",
    "meaning": "不情愿的",
    "phonetic": "/rɪˈlʌktənt/",
    "sentence": "She was reluctant to admit her mistake.",
    "sentence_cn": "她不愿承认错误。",
    "mnemonic": "re(反)+luct(挣扎)+ant → 挣扎反抗→不情愿的"
  },
  {
    "id": 86,
    "word": "remedy",
    "pos": "n./v.",
    "meaning": "补救；治疗",
    "phonetic": "/ˈremədi/",
    "sentence": "Is there a remedy for this problem?",
    "sentence_cn": "这个问题有补救办法吗？",
    "mnemonic": "re(再)+med(治疗)+y → 再次治疗→补救"
  },
  {
    "id": 87,
    "word": "resolve",
    "pos": "v./n.",
    "meaning": "解决；决心",
    "phonetic": "/rɪˈzɒlv/",
    "sentence": "We must resolve this conflict.",
    "sentence_cn": "我们必须解决这个冲突。",
    "mnemonic": "re(再)+solve(解决) → 再次解决→解决"
  },
  {
    "id": 88,
    "word": "restore",
    "pos": "v.",
    "meaning": "恢复，修复",
    "phonetic": "/rɪˈstɔː/",
    "sentence": "The old building was restored.",
    "sentence_cn": "老建筑被修复了。",
    "mnemonic": "re(再)+store(储存) → 再次储存→恢复"
  },
  {
    "id": 89,
    "word": "restrict",
    "pos": "v.",
    "meaning": "限制，约束",
    "phonetic": "/rɪˈstrɪkt/",
    "sentence": "Speed is restricted to 30 km/h.",
    "sentence_cn": "速度限制在30公里/小时。",
    "mnemonic": "re(再)+strict(拉紧) → 拉紧→限制"
  },
  {
    "id": 90,
    "word": "reveal",
    "pos": "v.",
    "meaning": "揭示，揭露",
    "phonetic": "/rɪˈviːl/",
    "sentence": "The investigation revealed the truth.",
    "sentence_cn": "调查揭示了真相。",
    "mnemonic": "re(反)+veal(面纱) → 揭开面纱→揭示"
  },
  {
    "id": 91,
    "word": "revenue",
    "pos": "n.",
    "meaning": "收入，税收",
    "phonetic": "/ˈrevənjuː/",
    "sentence": "The company's revenue increased this year.",
    "sentence_cn": "公司今年的收入增加了。",
    "mnemonic": "re(回)+ven(来)+ue → 回来的钱→收入"
  },
  {
    "id": 92,
    "word": "revolution",
    "pos": "n.",
    "meaning": "革命；旋转",
    "phonetic": "/ˌrevəˈluːʃn/",
    "sentence": "The Industrial Revolution changed the world.",
    "sentence_cn": "工业革命改变了世界。",
    "mnemonic": "re(再)+volu(转)+tion → 重新转动→革命"
  },
  {
    "id": 93,
    "word": "sacrifice",
    "pos": "v./n.",
    "meaning": "牺牲",
    "phonetic": "/ˈsækrɪfaɪs/",
    "sentence": "She sacrificed her career for her family.",
    "sentence_cn": "她为家庭牺牲了事业。",
    "mnemonic": "sacr(神圣)+i+fic(做)+e → 做神圣的事→牺牲"
  },
  {
    "id": 94,
    "word": "schedule",
    "pos": "n./v.",
    "meaning": "时间表；安排",
    "phonetic": "/ˈʃedjuːl/",
    "sentence": "The project is on schedule.",
    "sentence_cn": "项目按计划进行。",
    "mnemonic": "s(联想死)+che(车)+dule → 死车→时间表"
  },
  {
    "id": 95,
    "word": "scheme",
    "pos": "n./v.",
    "meaning": "计划，方案；阴谋",
    "phonetic": "/skiːm/",
    "sentence": "They proposed a new scheme.",
    "sentence_cn": "他们提出了一个新方案。",
    "mnemonic": "s(联想死)+che(车)+me(我) → 死车我→计划"
  },
  {
    "id": 96,
    "word": "species",
    "pos": "n.",
    "meaning": "物种，种类",
    "phonetic": "/ˈspiːʃiːz/",
    "sentence": "This species is endangered.",
    "sentence_cn": "这个物种濒危了。",
    "mnemonic": "spec(看)+i+es → 看起来像→物种"
  },
  {
    "id": 97,
    "word": "stimulate",
    "pos": "v.",
    "meaning": "刺激，激励",
    "phonetic": "/ˈstɪmjuleɪt/",
    "sentence": "Exercise stimulates blood circulation.",
    "sentence_cn": "锻炼刺激血液循环。",
    "mnemonic": "stimul(刺)+ate → 刺→刺激"
  },
  {
    "id": 98,
    "word": "strategy",
    "pos": "n.",
    "meaning": "策略，战略",
    "phonetic": "/ˈstrætədʒi/",
    "sentence": "We need a new strategy.",
    "sentence_cn": "我们需要一个新策略。",
    "mnemonic": "str(联想street路)+ate(吃)+gy → 在路上吃→策略"
  },
  {
    "id": 99,
    "word": "emphasize",
    "pos": "v.",
    "meaning": "强调，着重",
    "phonetic": "/ˈemfəsaɪz/",
    "sentence": "The teacher emphasized the importance of practice.",
    "sentence_cn": "老师强调了练习的重要性。",
    "mnemonic": "em(加强)+phas(说)+ize → 加强说→强调"
  },
  {
    "id": 100,
    "word": "foundation",
    "pos": "n.",
    "meaning": "基础，基金会",
    "phonetic": "/faʊnˈdeɪʃn/",
    "sentence": "Education is the foundation of success.",
    "sentence_cn": "教育是成功的基础。",
    "mnemonic": "found(建立)+ation → 建立的东西→基础"
  },
  {
    "id": 101,
    "word": "generous",
    "pos": "adj.",
    "meaning": "慷慨的，大方的",
    "phonetic": "/ˈdʒenərəs/",
    "sentence": "He is generous with his time.",
    "sentence_cn": "他在时间上很慷慨。",
    "mnemonic": "gen(产生)+er+ous → 不断产生→慷慨的"
  },
  {
    "id": 102,
    "word": "genuine",
    "pos": "adj.",
    "meaning": "真正的，真诚的",
    "phonetic": "/ˈdʒenjuɪn/",
    "sentence": "She showed genuine concern.",
    "sentence_cn": "她表现出真诚的关心。",
    "mnemonic": "gen(产生)+u+ine → 产生出来的→真正的"
  },
  {
    "id": 103,
    "word": "grasp",
    "pos": "v./n.",
    "meaning": "抓住；理解",
    "phonetic": "/ɡrɑːsp/",
    "sentence": "She grasped the concept quickly.",
    "sentence_cn": "她很快理解了概念。",
    "mnemonic": "g(联想哥)+rasp(擦) → 哥擦→抓住"
  },
  {
    "id": 104,
    "word": "harmony",
    "pos": "n.",
    "meaning": "和谐，融洽",
    "phonetic": "/ˈhɑːməni/",
    "sentence": "They live in harmony with nature.",
    "sentence_cn": "他们与自然和谐相处。",
    "mnemonic": "har(联想hat)+mony(联想money) → 帽子和钱→和谐"
  },
  {
    "id": 105,
    "word": "ignorant",
    "pos": "adj.",
    "meaning": "无知的，不知道的",
    "phonetic": "/ˈɪɡnərənt/",
    "sentence": "He was ignorant of the rules.",
    "sentence_cn": "他不知道规则。",
    "mnemonic": "i(不)+gnor(知道)+ant → 不知道的→无知的"
  },
  {
    "id": 106,
    "word": "impose",
    "pos": "v.",
    "meaning": "强加；征税",
    "phonetic": "/ɪmˈpəʊz/",
    "sentence": "Don't impose your views on others.",
    "sentence_cn": "不要把你的观点强加给别人。",
    "mnemonic": "im(在...上)+pose(放) → 放在上面→强加"
  },
  {
    "id": 107,
    "word": "integrate",
    "pos": "v.",
    "meaning": "整合，融入",
    "phonetic": "/ˈɪntɪɡreɪt/",
    "sentence": "We need to integrate theory with practice.",
    "sentence_cn": "我们需要将理论与实践结合。",
    "mnemonic": "integr(完整)+ate → 使完整→整合"
  },
  {
    "id": 108,
    "word": "indicate",
    "pos": "v.",
    "meaning": "表明，指示",
    "phonetic": "/ˈɪndɪkeɪt/",
    "sentence": "The sign indicates the way to the station.",
    "sentence_cn": "标志指示了去车站的路。",
    "mnemonic": "in(在)+dic(说)+ate → 在里面说→表明"
  },
  {
    "id": 109,
    "word": "innovation",
    "pos": "n.",
    "meaning": "创新，革新",
    "phonetic": "/ˌɪnəˈveɪʃn/",
    "sentence": "Innovation drives economic growth.",
    "sentence_cn": "创新驱动经济增长。",
    "mnemonic": "in(进入)+nov(新)+ation → 进入新东西→创新"
  },
  {
    "id": 110,
    "word": "inspect",
    "pos": "v.",
    "meaning": "检查，视察",
    "phonetic": "/ɪnˈspekt/",
    "sentence": "The inspector inspected the factory.",
    "sentence_cn": "检查员视察了工厂。",
    "mnemonic": "in(进入)+spect(看) → 进去看→检查"
  },
  {
    "id": 111,
    "word": "involve",
    "pos": "v.",
    "meaning": "涉及，包含",
    "phonetic": "/ɪnˈvɒlv/",
    "sentence": "This project involves a lot of work.",
    "sentence_cn": "这个项目涉及很多工作。",
    "mnemonic": "in(进入)+volve(卷) → 卷进去→涉及"
  },
  {
    "id": 112,
    "word": "justify",
    "pos": "v.",
    "meaning": "证明...正当",
    "phonetic": "/ˈdʒʌstɪfaɪ/",
    "sentence": "How can you justify such behavior?",
    "sentence_cn": "你怎么证明这种行为是正当的？",
    "mnemonic": "just(正义)+ify(使) → 使正义→证明正当"
  },
  {
    "id": 113,
    "word": "launch",
    "pos": "v./n.",
    "meaning": "发射；发起",
    "phonetic": "/lɔːntʃ/",
    "sentence": "They launched a new product.",
    "sentence_cn": "他们推出了一款新产品。",
    "mnemonic": "l(联想了)+aunch(联想lunch) → 了午餐→发射"
  },
  {
    "id": 114,
    "word": "liberal",
    "pos": "adj.",
    "meaning": "自由的；慷慨的",
    "phonetic": "/ˈlɪbərəl/",
    "sentence": "She has liberal views on education.",
    "sentence_cn": "她在教育上有自由的观点。",
    "mnemonic": "liber(自由)+al → 自由的"
  },
  {
    "id": 115,
    "word": "license",
    "pos": "n./v.",
    "meaning": "许可证；许可",
    "phonetic": "/ˈlaɪsns/",
    "sentence": "He got his driver's license.",
    "sentence_cn": "他拿到了驾照。",
    "mnemonic": "lic(允许)+ense → 允许→许可证"
  },
  {
    "id": 116,
    "word": "literacy",
    "pos": "n.",
    "meaning": "读写能力，文化素养",
    "phonetic": "/ˈlɪtərəsi/",
    "sentence": "The government promotes literacy.",
    "sentence_cn": "政府推广读写能力。",
    "mnemonic": "liter(文字)+acy → 文字能力→读写能力"
  },
  {
    "id": 117,
    "word": "magnificent",
    "pos": "adj.",
    "meaning": "壮丽的，宏伟的",
    "phonetic": "/mæɡˈnɪfɪsnt/",
    "sentence": "The view from the mountain was magnificent.",
    "sentence_cn": "从山上看去的景色壮丽。",
    "mnemonic": "magn(大)+i+fic(做)+ent → 做得大→壮丽的"
  },
  {
    "id": 118,
    "word": "manuscript",
    "pos": "n.",
    "meaning": "手稿，原稿",
    "phonetic": "/ˈmænjuskrɪpt/",
    "sentence": "The author submitted his manuscript.",
    "sentence_cn": "作者提交了手稿。",
    "mnemonic": "manu(手)+script(写) → 手写→手稿"
  },
  {
    "id": 119,
    "word": "merchant",
    "pos": "n.",
    "meaning": "商人",
    "phonetic": "/ˈmɜːtʃənt/",
    "sentence": "The merchant sold silk and spices.",
    "sentence_cn": "商人出售丝绸和香料。",
    "mnemonic": "merch(贸易)+ant → 做贸易的人→商人"
  },
  {
    "id": 120,
    "word": "military",
    "pos": "adj./n.",
    "meaning": "军事的；军队",
    "phonetic": "/ˈmɪlətri/",
    "sentence": "He served in the military.",
    "sentence_cn": "他在军队服役。",
    "mnemonic": "milit(兵)+ary → 兵的→军事的"
  },
  {
    "id": 121,
    "word": "minimum",
    "pos": "n./adj.",
    "meaning": "最小值；最小的",
    "phonetic": "/ˈmɪnɪməm/",
    "sentence": "We need a minimum of 10 people.",
    "sentence_cn": "我们最少需要10个人。",
    "mnemonic": "mini(小)+mum(联想num) → 小数字→最小值"
  },
  {
    "id": 122,
    "word": "misery",
    "pos": "n.",
    "meaning": "痛苦，悲惨",
    "phonetic": "/ˈmɪzəri/",
    "sentence": "The war caused great misery.",
    "sentence_cn": "战争造成了巨大的痛苦。",
    "mnemonic": "miser(可怜)+y → 可怜的→痛苦"
  },
  {
    "id": 123,
    "word": "multiply",
    "pos": "v.",
    "meaning": "乘；繁殖",
    "phonetic": "/ˈmʌltɪplaɪ/",
    "sentence": "Rabbits multiply quickly.",
    "sentence_cn": "兔子繁殖很快。",
    "mnemonic": "multi(多)+ply(折叠) → 多次折叠→乘"
  },
  {
    "id": 124,
    "word": "mystery",
    "pos": "n.",
    "meaning": "神秘，谜",
    "phonetic": "/ˈmɪstri/",
    "sentence": "The cause of death remains a mystery.",
    "sentence_cn": "死因仍然是个谜。",
    "mnemonic": "my(我的)+st(站)+ery → 我的站→神秘"
  },
  {
    "id": 125,
    "word": "notorious",
    "pos": "adj.",
    "meaning": "臭名昭著的",
    "phonetic": "/nəʊˈtɔːriəs/",
    "sentence": "The area is notorious for crime.",
    "sentence_cn": "这个地区因犯罪而臭名昭著。",
    "mnemonic": "not(知道)+orious(联想or) → 都知道的→臭名昭著的"
  },
  {
    "id": 126,
    "word": "nourish",
    "pos": "v.",
    "meaning": "滋养，养育",
    "phonetic": "/ˈnʌrɪʃ/",
    "sentence": "Good food nourishes the body.",
    "sentence_cn": "好食物滋养身体。",
    "mnemonic": "nour(喂养)+ish → 喂养→滋养"
  },
  {
    "id": 127,
    "word": "obstacle",
    "pos": "n.",
    "meaning": "障碍，阻碍",
    "phonetic": "/ˈɒbstəkl/",
    "sentence": "Lack of money is a major obstacle.",
    "sentence_cn": "缺钱是主要障碍。",
    "mnemonic": "ob(在)+st(站)+acle(东西) → 站在那的东西→障碍"
  },
  {
    "id": 128,
    "word": "occupy",
    "pos": "v.",
    "meaning": "占据；使忙碌",
    "phonetic": "/ˈɒkjupaɪ/",
    "sentence": "The building occupies an entire block.",
    "sentence_cn": "这栋建筑占据了整个街区。",
    "mnemonic": "oc(加强)+cup(杯子)+y → 杯子占位→占据"
  },
  {
    "id": 129,
    "word": "oppose",
    "pos": "v.",
    "meaning": "反对，对抗",
    "phonetic": "/əˈpəʊz/",
    "sentence": "Many people oppose the new law.",
    "sentence_cn": "很多人反对新法律。",
    "mnemonic": "op(反)+pose(放) → 放在对面→反对"
  },
  {
    "id": 130,
    "word": "optimistic",
    "pos": "adj.",
    "meaning": "乐观的",
    "phonetic": "/ˌɒptɪˈmɪstɪk/",
    "sentence": "She is optimistic about the future.",
    "sentence_cn": "她对未来很乐观。",
    "mnemonic": "optim(最好)+istic → 认为最好的→乐观的"
  },
  {
    "id": 131,
    "word": "origin",
    "pos": "n.",
    "meaning": "起源，出身",
    "phonetic": "/ˈɒrɪdʒɪn/",
    "sentence": "What is the origin of this tradition?",
    "sentence_cn": "这个传统的起源是什么？",
    "mnemonic": "ori(升起)+gin → 升起的地方→起源"
  },
  {
    "id": 132,
    "word": "overcome",
    "pos": "v.",
    "meaning": "克服，战胜",
    "phonetic": "/ˌəʊvəˈkʌm/",
    "sentence": "She overcame all difficulties.",
    "sentence_cn": "她克服了所有困难。",
    "mnemonic": "over(在...上)+come(来) → 来到上面→克服"
  },
  {
    "id": 133,
    "word": "overlook",
    "pos": "v.",
    "meaning": "忽视；俯瞰",
    "phonetic": "/ˌəʊvəˈlʊk/",
    "sentence": "Don't overlook the small details.",
    "sentence_cn": "不要忽视小细节。",
    "mnemonic": "over(在...上)+look(看) → 在上面看→俯瞰/忽视"
  },
  {
    "id": 134,
    "word": "permanent",
    "pos": "adj.",
    "meaning": "永久的，持久的",
    "phonetic": "/ˈpɜːmənənt/",
    "sentence": "She found a permanent job.",
    "sentence_cn": "她找到了一份永久的工作。",
    "mnemonic": "per(贯穿)+man(留)+ent → 一直留着→永久的"
  },
  {
    "id": 135,
    "word": "permit",
    "pos": "v./n.",
    "meaning": "允许；许可证",
    "phonetic": "/pəˈmɪt/",
    "sentence": "Smoking is not permitted here.",
    "sentence_cn": "此处禁止吸烟。",
    "mnemonic": "per(通过)+mit(送) → 送过去→允许"
  },
  {
    "id": 136,
    "word": "personnel",
    "pos": "n.",
    "meaning": "人员，员工",
    "phonetic": "/ˌpɜːsəˈnel/",
    "sentence": "All personnel must attend the meeting.",
    "sentence_cn": "所有人员必须参加会议。",
    "mnemonic": "person(人)+nel → 人们→人员"
  },
  {
    "id": 137,
    "word": "plentiful",
    "pos": "adj.",
    "meaning": "丰富的，充足的",
    "phonetic": "/ˈplentɪfl/",
    "sentence": "The country has plentiful natural resources.",
    "sentence_cn": "这个国家有丰富的自然资源。",
    "mnemonic": "plenty(丰富)+ful → 丰富的"
  },
  {
    "id": 138,
    "word": "political",
    "pos": "adj.",
    "meaning": "政治的",
    "phonetic": "/pəˈlɪtɪkl/",
    "sentence": "He is interested in political issues.",
    "sentence_cn": "他对政治问题感兴趣。",
    "mnemonic": "polit(政治)+ical → 政治的"
  },
  {
    "id": 139,
    "word": "popular",
    "pos": "adj.",
    "meaning": "流行的，受欢迎的",
    "phonetic": "/ˈpɒpjələ/",
    "sentence": "This song is very popular.",
    "sentence_cn": "这首歌很流行。",
    "mnemonic": "popul(人民)+ar → 人民的→流行的"
  },
  {
    "id": 140,
    "word": "portray",
    "pos": "v.",
    "meaning": "描绘，扮演",
    "phonetic": "/pɔːˈtreɪ/",
    "sentence": "The painting portrays a beautiful landscape.",
    "sentence_cn": "这幅画描绘了美丽的风景。",
    "mnemonic": "por(向前)+tray(托盘) → 向前托盘→描绘"
  },
  {
    "id": 141,
    "word": "poverty",
    "pos": "n.",
    "meaning": "贫困，贫穷",
    "phonetic": "/ˈpɒvəti/",
    "sentence": "Many people live in poverty.",
    "sentence_cn": "很多人生活在贫困中。",
    "mnemonic": "poor(贫穷)+ty → 贫穷"
  },
  {
    "id": 142,
    "word": "precious",
    "pos": "adj.",
    "meaning": "珍贵的，宝贵的",
    "phonetic": "/ˈpreʃəs/",
    "sentence": "Time is precious.",
    "sentence_cn": "时间是宝贵的。",
    "mnemonic": "preci(价值)+ous → 有价值的→珍贵的"
  },
  {
    "id": 143,
    "word": "predict",
    "pos": "v.",
    "meaning": "预测，预言",
    "phonetic": "/prɪˈdɪkt/",
    "sentence": "It's hard to predict the future.",
    "sentence_cn": "很难预测未来。",
    "mnemonic": "pre(前)+dict(说) → 提前说→预测"
  },
  {
    "id": 144,
    "word": "prejudice",
    "pos": "n./v.",
    "meaning": "偏见，歧视",
    "phonetic": "/ˈpredʒudɪs/",
    "sentence": "Prejudice against minorities is wrong.",
    "sentence_cn": "对少数群体的偏见是错误的。",
    "mnemonic": "pre(前)+judice(判断) → 事先判断→偏见"
  },
  {
    "id": 145,
    "word": "preserve",
    "pos": "v.",
    "meaning": "保存，保护",
    "phonetic": "/prɪˈzɜːv/",
    "sentence": "We must preserve the environment.",
    "sentence_cn": "我们必须保护环境。",
    "mnemonic": "pre(前)+serve(服务) → 提前服务→保存"
  },
  {
    "id": 146,
    "word": "prevail",
    "pos": "v.",
    "meaning": "盛行；战胜",
    "phonetic": "/prɪˈveɪl/",
    "sentence": "Justice will prevail.",
    "sentence_cn": "正义将获胜。",
    "mnemonic": "pre(前)+vail(强大) → 在前面很强→盛行"
  },
  {
    "id": 147,
    "word": "privilege",
    "pos": "n.",
    "meaning": "特权，优惠",
    "phonetic": "/ˈprɪvəlɪdʒ/",
    "sentence": "Education is a privilege, not a right.",
    "sentence_cn": "教育是一种特权，不是权利。",
    "mnemonic": "priv(私人)+i+leg(法律)+e → 私人法律→特权"
  },
  {
    "id": 148,
    "word": "profession",
    "pos": "n.",
    "meaning": "职业，专业",
    "phonetic": "/prəˈfeʃn/",
    "sentence": "Teaching is a noble profession.",
    "sentence_cn": "教学是一种高尚的职业。",
    "mnemonic": "pro(向前)+fess(说)+ion → 向前说→职业"
  },
  {
    "id": 149,
    "word": "profit",
    "pos": "n./v.",
    "meaning": "利润；受益",
    "phonetic": "/ˈprɒfɪt/",
    "sentence": "The company made a huge profit.",
    "sentence_cn": "公司获得了巨额利润。",
    "mnemonic": "pro(向前)+fit(做) → 向前做→获利"
  },
  {
    "id": 150,
    "word": "profound",
    "pos": "adj.",
    "meaning": "深远的，深刻的",
    "phonetic": "/prəˈfaʊnd/",
    "sentence": "The book had a profound impact on me.",
    "sentence_cn": "这本书对我产生了深远的影响。",
    "mnemonic": "pro(向前)+found(基础) → 向基础→深远的"
  },
  {
    "id": 151,
    "word": "prohibit",
    "pos": "v.",
    "meaning": "禁止，阻止",
    "phonetic": "/prəˈhɪbɪt/",
    "sentence": "Smoking is prohibited in public places.",
    "sentence_cn": "公共场所禁止吸烟。",
    "mnemonic": "pro(前)+hibit(拿住) → 在前面拿住→禁止"
  },
  {
    "id": 152,
    "word": "prominent",
    "pos": "adj.",
    "meaning": "突出的，著名的",
    "phonetic": "/ˈprɒmɪnənt/",
    "sentence": "She played a prominent role in the organization.",
    "sentence_cn": "她在该组织中发挥了突出作用。",
    "mnemonic": "pro(向前)+min(突出)+ent → 向前突出→突出的"
  },
  {
    "id": 153,
    "word": "prosperity",
    "pos": "n.",
    "meaning": "繁荣，兴旺",
    "phonetic": "/prɒˈsperəti/",
    "sentence": "The country enjoyed a period of prosperity.",
    "sentence_cn": "该国经历了一段繁荣时期。",
    "mnemonic": "pro(向前)+sper(希望)+ity → 充满希望→繁荣"
  },
  {
    "id": 154,
    "word": "publish",
    "pos": "v.",
    "meaning": "出版，发表",
    "phonetic": "/ˈpʌblɪʃ/",
    "sentence": "She published her first novel at age 25.",
    "sentence_cn": "她25岁时出版了第一本小说。",
    "mnemonic": "publ(公众)+ish → 公开→出版"
  },
  {
    "id": 155,
    "word": "purchase",
    "pos": "v./n.",
    "meaning": "购买",
    "phonetic": "/ˈpɜːtʃəs/",
    "sentence": "She purchased a new car.",
    "sentence_cn": "她购买了一辆新车。",
    "mnemonic": "pur(向前)+chase(追逐) → 向前追逐→购买"
  },
  {
    "id": 156,
    "word": "qualify",
    "pos": "v.",
    "meaning": "使合格，限定",
    "phonetic": "/ˈkwɒlɪfaɪ/",
    "sentence": "She qualified as a doctor last year.",
    "sentence_cn": "她去年获得了医生资格。",
    "mnemonic": "qual(某类)+ify(使) → 使其成为某类→合格"
  },
  {
    "id": 157,
    "word": "quantity",
    "pos": "n.",
    "meaning": "数量",
    "phonetic": "/ˈkwɒntəti/",
    "sentence": "A large quantity of food was wasted.",
    "sentence_cn": "大量食物被浪费了。",
    "mnemonic": "quant(多少)+ity → 多少→数量"
  },
  {
    "id": 158,
    "word": "radical",
    "pos": "adj./n.",
    "meaning": "根本的；激进的",
    "phonetic": "/ˈrædɪkl/",
    "sentence": "The country needs radical reform.",
    "sentence_cn": "该国需要彻底的改革。",
    "mnemonic": "radic(根)+al → 根的→根本的"
  },
  {
    "id": 159,
    "word": "random",
    "pos": "adj.",
    "meaning": "随机的，任意的",
    "phonetic": "/ˈrændəm/",
    "sentence": "The sample was selected at random.",
    "sentence_cn": "样本是随机选取的。",
    "mnemonic": "ran(跑)+dom(领域) → 跑着玩→随机的"
  },
  {
    "id": 160,
    "word": "range",
    "pos": "n./v.",
    "meaning": "范围；排列",
    "phonetic": "/reɪndʒ/",
    "sentence": "The price range is from $10 to $50.",
    "sentence_cn": "价格范围从10美元到50美元。",
    "mnemonic": "r(联想火)+ange(联想angle角) → 火的角度→范围"
  },
  {
    "id": 161,
    "word": "rare",
    "pos": "adj.",
    "meaning": "稀有的，罕见的",
    "phonetic": "/reə/",
    "sentence": "This is a rare species of bird.",
    "sentence_cn": "这是一种稀有鸟类。",
    "mnemonic": "r(联想人)+are(是) → 人是→稀有的"
  },
  {
    "id": 162,
    "word": "rational",
    "pos": "adj.",
    "meaning": "理性的，合理的",
    "phonetic": "/ˈræʃnəl/",
    "sentence": "We need to make a rational decision.",
    "sentence_cn": "我们需要做出理性的决定。",
    "mnemonic": "ratio(比率)+nal → 有比率→理性的"
  },
  {
    "id": 163,
    "word": "rebel",
    "pos": "v./n.",
    "meaning": "反叛；反叛者",
    "phonetic": "/rɪˈbel/",
    "sentence": "Teenagers often rebel against authority.",
    "sentence_cn": "青少年经常反抗权威。",
    "mnemonic": "re(反)+bel(联想bell钟) → 反着敲钟→反叛"
  },
  {
    "id": 164,
    "word": "recession",
    "pos": "n.",
    "meaning": "衰退，经济萧条",
    "phonetic": "/rɪˈseʃn/",
    "sentence": "The economy is in recession.",
    "sentence_cn": "经济正处于衰退中。",
    "mnemonic": "re(回)+cess(走)+ion → 往回走→衰退"
  },
  {
    "id": 165,
    "word": "recommend",
    "pos": "v.",
    "meaning": "推荐，建议",
    "phonetic": "/ˌrekəˈmend/",
    "sentence": "I recommend this book to everyone.",
    "sentence_cn": "我向大家推荐这本书。",
    "mnemonic": "re(再)+commend(委托) → 再委托→推荐"
  },
  {
    "id": 166,
    "word": "reform",
    "pos": "v./n.",
    "meaning": "改革，革新",
    "phonetic": "/rɪˈfɔːm/",
    "sentence": "The education system needs reform.",
    "sentence_cn": "教育体系需要改革。",
    "mnemonic": "re(再)+form(形状) → 再塑形→改革"
  },
  {
    "id": 167,
    "word": "regulate",
    "pos": "v.",
    "meaning": "调节，管理",
    "phonetic": "/ˈreɡjuleɪt/",
    "sentence": "The government regulates the banking industry.",
    "sentence_cn": "政府监管银行业。",
    "mnemonic": "reg(统治)+ul+ate → 统治→管理"
  },
  {
    "id": 168,
    "word": "reject",
    "pos": "v.",
    "meaning": "拒绝，驳回",
    "phonetic": "/rɪˈdʒekt/",
    "sentence": "She rejected his proposal.",
    "sentence_cn": "她拒绝了他的提议。",
    "mnemonic": "re(回)+ject(扔) → 扔回去→拒绝"
  },
  {
    "id": 169,
    "word": "release",
    "pos": "v./n.",
    "meaning": "释放；发布",
    "phonetic": "/rɪˈliːs/",
    "sentence": "The prisoner was released.",
    "sentence_cn": "囚犯被释放了。",
    "mnemonic": "re(再)+lease(租) → 再租出去→释放"
  },
  {
    "id": 170,
    "word": "relief",
    "pos": "n.",
    "meaning": "减轻，救济",
    "phonetic": "/rɪˈliːf/",
    "sentence": "The medicine brought relief from pain.",
    "sentence_cn": "药物缓解了疼痛。",
    "mnemonic": "re(再)+lief(联想life) → 再活→减轻"
  },
  {
    "id": 171,
    "word": "religion",
    "pos": "n.",
    "meaning": "宗教，信仰",
    "phonetic": "/rɪˈlɪdʒən/",
    "sentence": "Freedom of religion is a basic right.",
    "sentence_cn": "宗教自由是一项基本权利。",
    "mnemonic": "re(再)+lig(绑)+ion → 再次捆绑→信仰"
  },
  {
    "id": 172,
    "word": "remarkable",
    "pos": "adj.",
    "meaning": "显著的，非凡的",
    "phonetic": "/rɪˈmɑːkəbl/",
    "sentence": "She has made remarkable progress.",
    "sentence_cn": "她取得了显著的进步。",
    "mnemonic": "remark(评论)+able(能) → 值得评论的→非凡的"
  },
  {
    "id": 173,
    "word": "remind",
    "pos": "v.",
    "meaning": "提醒，使想起",
    "phonetic": "/rɪˈmaɪnd/",
    "sentence": "This song reminds me of my childhood.",
    "sentence_cn": "这首歌让我想起了童年。",
    "mnemonic": "re(再)+mind(心) → 再次放在心上→提醒"
  },
  {
    "id": 174,
    "word": "remote",
    "pos": "adj.",
    "meaning": "遥远的，偏僻的",
    "phonetic": "/rɪˈməʊt/",
    "sentence": "They live in a remote village.",
    "sentence_cn": "他们住在一个偏远的村庄。",
    "mnemonic": "re(再)+mote(移动) → 再移动→遥远的"
  },
  {
    "id": 175,
    "word": "represent",
    "pos": "v.",
    "meaning": "代表，表示",
    "phonetic": "/ˌreprɪˈzent/",
    "sentence": "The red lines on the map represent roads.",
    "sentence_cn": "地图上的红线代表道路。",
    "mnemonic": "re(再)+present(呈现) → 再次呈现→代表"
  },
  {
    "id": 176,
    "word": "republic",
    "pos": "n.",
    "meaning": "共和国",
    "phonetic": "/rɪˈpʌblɪk/",
    "sentence": "The People's Republic of China was founded in 1949.",
    "sentence_cn": "中华人民共和国成立于1949年。",
    "mnemonic": "re(再)+public(公众) → 公众的→共和国"
  },
  {
    "id": 177,
    "word": "reputation",
    "pos": "n.",
    "meaning": "名声，声誉",
    "phonetic": "/ˌrepjuˈteɪʃn/",
    "sentence": "She has a reputation for honesty.",
    "sentence_cn": "她以诚实著称。",
    "mnemonic": "re(再)+put(想)+ation → 让人反复想→名声"
  },
  {
    "id": 178,
    "word": "request",
    "pos": "v./n.",
    "meaning": "请求，要求",
    "phonetic": "/rɪˈkwest/",
    "sentence": "She requested a glass of water.",
    "sentence_cn": "她要了一杯水。",
    "mnemonic": "re(再)+quest(寻求) → 再寻求→请求"
  },
  {
    "id": 179,
    "word": "require",
    "pos": "v.",
    "meaning": "需要，要求",
    "phonetic": "/rɪˈkwaɪə/",
    "sentence": "This job requires a lot of patience.",
    "sentence_cn": "这份工作需要很多耐心。",
    "mnemonic": "re(再)+quire(寻求) → 再寻求→要求"
  },
  {
    "id": 180,
    "word": "resemble",
    "pos": "v.",
    "meaning": "像，类似",
    "phonetic": "/rɪˈzembl/",
    "sentence": "She resembles her mother.",
    "sentence_cn": "她像她妈妈。",
    "mnemonic": "re(再)+semble(相同) → 再相同→类似"
  },
  {
    "id": 181,
    "word": "reserve",
    "pos": "v./n.",
    "meaning": "保留；预订",
    "phonetic": "/rɪˈzɜːv/",
    "sentence": "I reserved a table for two.",
    "sentence_cn": "我预订了两个人的桌子。",
    "mnemonic": "re(再)+serve(服务) → 再次服务→保留"
  },
  {
    "id": 182,
    "word": "resign",
    "pos": "v.",
    "meaning": "辞职，放弃",
    "phonetic": "/rɪˈzaɪn/",
    "sentence": "He resigned from his position.",
    "sentence_cn": "他辞去了职务。",
    "mnemonic": "re(反)+sign(签名) → 反着签名→辞职"
  },
  {
    "id": 183,
    "word": "resist",
    "pos": "v.",
    "meaning": "抵抗，抵制",
    "phonetic": "/rɪˈzɪst/",
    "sentence": "She couldn't resist the temptation.",
    "sentence_cn": "她无法抵抗诱惑。",
    "mnemonic": "re(反)+sist(站) → 站在对面→抵抗"
  },
  {
    "id": 184,
    "word": "resource",
    "pos": "n.",
    "meaning": "资源",
    "phonetic": "/rɪˈsɔːs/",
    "sentence": "Natural resources are limited.",
    "sentence_cn": "自然资源是有限的。",
    "mnemonic": "re(再)+source(来源) → 再来的来源→资源"
  },
  {
    "id": 185,
    "word": "respond",
    "pos": "v.",
    "meaning": "回答，回应",
    "phonetic": "/rɪˈspɒnd/",
    "sentence": "She responded quickly to the question.",
    "sentence_cn": "她迅速回答了问题。",
    "mnemonic": "re(回)+spond(承诺) → 回承诺→回应"
  },
  {
    "id": 186,
    "word": "responsible",
    "pos": "adj.",
    "meaning": "负责的，有责任的",
    "phonetic": "/rɪˈspɒnsəbl/",
    "sentence": "Who is responsible for this project?",
    "sentence_cn": "谁对这个项目负责？",
    "mnemonic": "re(回)+spons(承诺)+ible → 能回应的→负责的"
  },
  {
    "id": 187,
    "word": "resume",
    "pos": "v.",
    "meaning": "重新开始，继续",
    "phonetic": "/rɪˈzjuːm/",
    "sentence": "Please resume your work after the break.",
    "sentence_cn": "休息后请继续工作。",
    "mnemonic": "re(再)+sume(拿) → 再拿起→重新开始"
  },
  {
    "id": 188,
    "word": "restrain",
    "pos": "v.",
    "meaning": "克制，抑制",
    "phonetic": "/rɪˈstreɪn/",
    "sentence": "She restrained herself from crying.",
    "sentence_cn": "她克制住没有哭。",
    "mnemonic": "re(再)+strain(拉紧) → 拉紧→克制"
  },
  {
    "id": 189,
    "word": "retain",
    "pos": "v.",
    "meaning": "保留，保持",
    "phonetic": "/rɪˈteɪn/",
    "sentence": "She retained her sense of humor.",
    "sentence_cn": "她保持了幽默感。",
    "mnemonic": "re(再)+tain(拿住) → 再拿住→保留"
  },
  {
    "id": 190,
    "word": "retire",
    "pos": "v.",
    "meaning": "退休，退役",
    "phonetic": "/rɪˈtaɪə/",
    "sentence": "He retired at the age of 60.",
    "sentence_cn": "他60岁退休了。",
    "mnemonic": "re(回)+tire(拉) → 拉回去→退休"
  },
  {
    "id": 191,
    "word": "retreat",
    "pos": "v./n.",
    "meaning": "撤退，退却",
    "phonetic": "/rɪˈtriːt/",
    "sentence": "The army was forced to retreat.",
    "sentence_cn": "军队被迫撤退。",
    "mnemonic": "re(回)+treat(处理) → 回去处理→撤退"
  },
  {
    "id": 192,
    "word": "revenge",
    "pos": "n./v.",
    "meaning": "报复，复仇",
    "phonetic": "/rɪˈvendʒ/",
    "sentence": "He took revenge on his enemy.",
    "sentence_cn": "他向敌人复仇。",
    "mnemonic": "re(回)+venge(报仇) → 报仇→复仇"
  },
  {
    "id": 193,
    "word": "revise",
    "pos": "v.",
    "meaning": "修订，复习",
    "phonetic": "/rɪˈvaɪz/",
    "sentence": "She revised her essay before submitting it.",
    "sentence_cn": "她在提交前修改了论文。",
    "mnemonic": "re(再)+vise(看) → 再看→修订"
  },
  {
    "id": 194,
    "word": "revolt",
    "pos": "v./n.",
    "meaning": "反抗，起义",
    "phonetic": "/rɪˈvəʊlt/",
    "sentence": "The people revolted against the ruler.",
    "sentence_cn": "人民反抗统治者。",
    "mnemonic": "re(反)+volt(转) → 反转→反抗"
  },
  {
    "id": 195,
    "word": "rhythm",
    "pos": "n.",
    "meaning": "节奏，韵律",
    "phonetic": "/ˈrɪðəm/",
    "sentence": "She has a good sense of rhythm.",
    "sentence_cn": "她节奏感很好。",
    "mnemonic": "r(人)+hythm(联想them) → 他们→节奏"
  },
  {
    "id": 196,
    "word": "ridiculous",
    "pos": "adj.",
    "meaning": "荒谬的，可笑的",
    "phonetic": "/rɪˈdɪkjələs/",
    "sentence": "That's a ridiculous idea.",
    "sentence_cn": "那是个荒谬的想法。",
    "mnemonic": "rid(笑)+ic+ul+ous → 让人发笑的→可笑的"
  },
  {
    "id": 197,
    "word": "rigid",
    "pos": "adj.",
    "meaning": "僵硬的，严格的",
    "phonetic": "/ˈrɪdʒɪd/",
    "sentence": "The rules are rigid and inflexible.",
    "sentence_cn": "规则严格且不灵活。",
    "mnemonic": "rig(联想rig钻机)+id → 钻机→僵硬的"
  },
  {
    "id": 198,
    "word": "rival",
    "pos": "n./v.",
    "meaning": "竞争对手；竞争",
    "phonetic": "/ˈraɪvl/",
    "sentence": "The two companies are rivals.",
    "sentence_cn": "这两家公司是竞争对手。",
    "mnemonic": "riv(河)+al → 河对岸的人→对手"
  },
  {
    "id": 199,
    "word": "romantic",
    "pos": "adj.",
    "meaning": "浪漫的，传奇的",
    "phonetic": "/rəʊˈmæntɪk/",
    "sentence": "They had a romantic dinner.",
    "sentence_cn": "他们吃了一顿浪漫的晚餐。",
    "mnemonic": "roman(罗马)+tic → 罗马式的→浪漫的"
  },
  {
    "id": 200,
    "word": "routine",
    "pos": "n./adj.",
    "meaning": "常规；日常的",
    "phonetic": "/ruːˈtiːn/",
    "sentence": "Exercise should become part of your daily routine.",
    "sentence_cn": "锻炼应成为你日常生活的一部分。",
    "mnemonic": "r(联想日)+out(出)+ine → 日出→常规"
  },
  {
    "id": 201,
    "word": "sacred",
    "pos": "adj.",
    "meaning": "神圣的，宗教的",
    "phonetic": "/ˈseɪkrɪd/",
    "sentence": "This temple is a sacred place.",
    "sentence_cn": "这座寺庙是一个神圣的地方。",
    "mnemonic": "sacr(神圣)+ed → 神圣的"
  },
  {
    "id": 202,
    "word": "sake",
    "pos": "n.",
    "meaning": "缘故，理由",
    "phonetic": "/seɪk/",
    "sentence": "For the sake of your health, stop smoking.",
    "sentence_cn": "为了你的健康，请戒烟。",
    "mnemonic": "sake(联想snake蛇) → 蛇→缘故"
  },
  {
    "id": 203,
    "word": "salary",
    "pos": "n.",
    "meaning": "薪水",
    "phonetic": "/ˈsæləri/",
    "sentence": "She got a raise in salary.",
    "sentence_cn": "她加薪了。",
    "mnemonic": "sal(盐)+ary → 古代盐是薪水→薪水"
  },
  {
    "id": 204,
    "word": "satisfy",
    "pos": "v.",
    "meaning": "使满意，满足",
    "phonetic": "/ˈsætɪsfaɪ/",
    "sentence": "Nothing satisfies him.",
    "sentence_cn": "没什么能让他满意。",
    "mnemonic": "satis(足够)+fy(使) → 使足够→满足"
  },
  {
    "id": 205,
    "word": "scale",
    "pos": "n./v.",
    "meaning": "规模；刻度；攀登",
    "phonetic": "/skeɪl/",
    "sentence": "This is a large-scale project.",
    "sentence_cn": "这是一个大规模的项目。",
    "mnemonic": "s(联想小)+cale(联想cake蛋糕) → 小蛋糕→规模"
  },
  {
    "id": 206,
    "word": "scatter",
    "pos": "v.",
    "meaning": "分散，散布",
    "phonetic": "/ˈskætə/",
    "sentence": "The crowd scattered when it started to rain.",
    "sentence_cn": "下起雨来人群散开了。",
    "mnemonic": "s(联想散)+cat(猫)+ter → 散猫→分散"
  },
  {
    "id": 207,
    "word": "scholar",
    "pos": "n.",
    "meaning": "学者",
    "phonetic": "/ˈskɒlə/",
    "sentence": "He is a distinguished scholar.",
    "sentence_cn": "他是一位杰出的学者。",
    "mnemonic": "schol(学校)+ar(人) → 在学校的人→学者"
  },
  {
    "id": 208,
    "word": "scientific",
    "pos": "adj.",
    "meaning": "科学的",
    "phonetic": "/ˌsaɪənˈtɪfɪk/",
    "sentence": "We need a scientific approach.",
    "sentence_cn": "我们需要科学的方法。",
    "mnemonic": "sci(知道)+ent+ific → 知道的→科学的"
  },
  {
    "id": 209,
    "word": "sculpture",
    "pos": "n.",
    "meaning": "雕塑，雕刻",
    "phonetic": "/ˈskʌlptʃə/",
    "sentence": "This sculpture is made of marble.",
    "sentence_cn": "这座雕塑是大理石制成的。",
    "mnemonic": "sculpt(雕刻)+ure → 雕刻"
  },
  {
    "id": 210,
    "word": "section",
    "pos": "n.",
    "meaning": "部分，章节",
    "phonetic": "/ˈsekʃn/",
    "sentence": "Read the first section of the book.",
    "sentence_cn": "阅读书的第一部分。",
    "mnemonic": "sect(切)+ion → 切开的部分→章节"
  },
  {
    "id": 211,
    "word": "secure",
    "pos": "adj./v.",
    "meaning": "安全的；获得",
    "phonetic": "/sɪˈkjʊə/",
    "sentence": "Make sure the door is secure.",
    "sentence_cn": "确保门是安全的。",
    "mnemonic": "se(脱离)+cure(关心) → 不用关心→安全的"
  },
  {
    "id": 212,
    "word": "seek",
    "pos": "v.",
    "meaning": "寻找，寻求",
    "phonetic": "/siːk/",
    "sentence": "You should seek professional advice.",
    "sentence_cn": "你应该寻求专业建议。",
    "mnemonic": "see(看)+k → 看→寻找"
  },
  {
    "id": 213,
    "word": "select",
    "pos": "v./adj.",
    "meaning": "选择；精选的",
    "phonetic": "/sɪˈlekt/",
    "sentence": "She was selected for the team.",
    "sentence_cn": "她被选入了队伍。",
    "mnemonic": "se(分开)+lect(选) → 分开选→选择"
  },
  {
    "id": 214,
    "word": "senior",
    "pos": "adj./n.",
    "meaning": "高级的；年长的",
    "phonetic": "/ˈsiːniə/",
    "sentence": "She is a senior manager.",
    "sentence_cn": "她是一位高级经理。",
    "mnemonic": "sen(老)+ior → 较老的→年长的"
  },
  {
    "id": 215,
    "word": "sensitive",
    "pos": "adj.",
    "meaning": "敏感的，灵敏的",
    "phonetic": "/ˈsensətɪv/",
    "sentence": "She is very sensitive to criticism.",
    "sentence_cn": "她对批评很敏感。",
    "mnemonic": "sens(感觉)+itive → 感觉多的→敏感的"
  },
  {
    "id": 216,
    "word": "sequence",
    "pos": "n.",
    "meaning": "顺序，连续",
    "phonetic": "/ˈsiːkwəns/",
    "sentence": "Follow the sequence of instructions.",
    "sentence_cn": "按照指令顺序操作。",
    "mnemonic": "sequ(跟随)+ence → 跟随→顺序"
  },
  {
    "id": 217,
    "word": "serious",
    "pos": "adj.",
    "meaning": "严重的，严肃的",
    "phonetic": "/ˈsɪəriəs/",
    "sentence": "This is a serious problem.",
    "sentence_cn": "这是一个严重的问题。",
    "mnemonic": "ser(联想serve服务)+ious → 服务→严肃的"
  },
  {
    "id": 218,
    "word": "settle",
    "pos": "v.",
    "meaning": "解决；定居",
    "phonetic": "/ˈsetl/",
    "sentence": "They settled the dispute peacefully.",
    "sentence_cn": "他们和平解决了争端。",
    "mnemonic": "set(放)+tle → 放好→解决"
  },
  {
    "id": 219,
    "word": "severe",
    "pos": "adj.",
    "meaning": "严重的，严厉的",
    "phonetic": "/sɪˈvɪə/",
    "sentence": "The storm caused severe damage.",
    "sentence_cn": "风暴造成了严重破坏。",
    "mnemonic": "s(联想死)+ever(曾经)+e → 死曾经→严重的"
  },
  {
    "id": 220,
    "word": "shelter",
    "pos": "n./v.",
    "meaning": "庇护所；遮蔽",
    "phonetic": "/ˈʃeltə/",
    "sentence": "They took shelter from the rain.",
    "sentence_cn": "他们躲雨。",
    "mnemonic": "shel(联想shell壳)+ter → 壳→庇护所"
  },
  {
    "id": 221,
    "word": "shift",
    "pos": "v./n.",
    "meaning": "转移，转变",
    "phonetic": "/ʃɪft/",
    "sentence": "The wind shifted direction.",
    "sentence_cn": "风向转变了。",
    "mnemonic": "sh(联想十)+ift(联想lift抬) → 十抬→转移"
  },
  {
    "id": 222,
    "word": "shortage",
    "pos": "n.",
    "meaning": "短缺，不足",
    "phonetic": "/ˈʃɔːtɪdʒ/",
    "sentence": "There is a shortage of water.",
    "sentence_cn": "缺水。",
    "mnemonic": "short(短)+age → 短→短缺"
  },
  {
    "id": 223,
    "word": "signal",
    "pos": "n./v.",
    "meaning": "信号；发信号",
    "phonetic": "/ˈsɪɡnəl/",
    "sentence": "The signal was weak.",
    "sentence_cn": "信号很弱。",
    "mnemonic": "sign(标记)+al → 标记→信号"
  },
  {
    "id": 224,
    "word": "significance",
    "pos": "n.",
    "meaning": "重要性，意义",
    "phonetic": "/sɪɡˈnɪfɪkəns/",
    "sentence": "This discovery is of great significance.",
    "sentence_cn": "这个发现意义重大。",
    "mnemonic": "sign(标记)+i+fic(做)+ance → 做标记→意义"
  },
  {
    "id": 225,
    "word": "similar",
    "pos": "adj.",
    "meaning": "相似的，类似的",
    "phonetic": "/ˈsɪmələ/",
    "sentence": "Our opinions are similar.",
    "sentence_cn": "我们的观点相似。",
    "mnemonic": "simil(相同)+ar → 相同的→相似的"
  },
  {
    "id": 226,
    "word": "simplify",
    "pos": "v.",
    "meaning": "简化",
    "phonetic": "/ˈsɪmplɪfaɪ/",
    "sentence": "We need to simplify the process.",
    "sentence_cn": "我们需要简化流程。",
    "mnemonic": "simple(简单)+ify(使) → 使简单→简化"
  },
  {
    "id": 227,
    "word": "sincere",
    "pos": "adj.",
    "meaning": "真诚的，诚挚的",
    "phonetic": "/sɪnˈsɪə/",
    "sentence": "Please accept my sincere apologies.",
    "sentence_cn": "请接受我真诚的道歉。",
    "mnemonic": "sin(罪)+cere(联想here) → 罪在这里→真诚的"
  },
  {
    "id": 228,
    "word": "situation",
    "pos": "n.",
    "meaning": "情况，形势",
    "phonetic": "/ˌsɪtʃuˈeɪʃn/",
    "sentence": "The situation is getting worse.",
    "sentence_cn": "情况正在恶化。",
    "mnemonic": "situ(位置)+ation → 位置→情况"
  },
  {
    "id": 229,
    "word": "slavery",
    "pos": "n.",
    "meaning": "奴隶制，奴役",
    "phonetic": "/ˈsleɪvəri/",
    "sentence": "Slavery was abolished in the 19th century.",
    "sentence_cn": "奴隶制在19世纪被废除。",
    "mnemonic": "slave(奴隶)+ry → 奴隶制"
  },
  {
    "id": 230,
    "word": "so-called",
    "pos": "adj.",
    "meaning": "所谓的",
    "phonetic": "/ˌsəʊ ˈkɔːld/",
    "sentence": "Her so-called friend betrayed her.",
    "sentence_cn": "她所谓的朋友背叛了她。",
    "mnemonic": "so(如此)+called(叫) → 如此叫→所谓的"
  },
  {
    "id": 231,
    "word": "solar",
    "pos": "adj.",
    "meaning": "太阳的，太阳能的",
    "phonetic": "/ˈsəʊlə/",
    "sentence": "Solar energy is clean and renewable.",
    "sentence_cn": "太阳能是清洁可再生的。",
    "mnemonic": "sol(太阳)+ar → 太阳的"
  },
  {
    "id": 232,
    "word": "sole",
    "pos": "adj./n.",
    "meaning": "唯一的；脚底",
    "phonetic": "/səʊl/",
    "sentence": "He is the sole survivor.",
    "sentence_cn": "他是唯一的幸存者。",
    "mnemonic": "sole(联想soul灵魂) → 灵魂→唯一的"
  },
  {
    "id": 233,
    "word": "solid",
    "pos": "adj./n.",
    "meaning": "固体的；坚实的",
    "phonetic": "/ˈsɒlɪd/",
    "sentence": "The foundation is solid.",
    "sentence_cn": "地基很坚实。",
    "mnemonic": "sol(太阳)+id → 太阳→固体的"
  },
  {
    "id": 234,
    "word": "solution",
    "pos": "n.",
    "meaning": "解决方案；溶液",
    "phonetic": "/səˈluːʃn/",
    "sentence": "We found a solution to the problem.",
    "sentence_cn": "我们找到了问题的解决方案。",
    "mnemonic": "solu(解开)+tion → 解开问题→解决方案"
  },
  {
    "id": 235,
    "word": "somewhat",
    "pos": "adv.",
    "meaning": "有点，稍微",
    "phonetic": "/ˈsʌmwɒt/",
    "sentence": "The situation is somewhat complicated.",
    "sentence_cn": "情况有点复杂。",
    "mnemonic": "some(一些)+what(什么) → 一些什么→有点"
  },
  {
    "id": 236,
    "word": "sophisticated",
    "pos": "adj.",
    "meaning": "复杂的；精密的",
    "phonetic": "/səˈfɪstɪkeɪtɪd/",
    "sentence": "This is a sophisticated machine.",
    "sentence_cn": "这是一台精密的机器。",
    "mnemonic": "soph(智慧)+isticated → 充满智慧的→精密的"
  },
  {
    "id": 237,
    "word": "sorrow",
    "pos": "n.",
    "meaning": "悲伤，哀痛",
    "phonetic": "/ˈsɒrəʊ/",
    "sentence": "She felt great sorrow at his death.",
    "sentence_cn": "对于他的死她感到非常悲伤。",
    "mnemonic": "sor(联想sorry对不起)+row(排) → 对不起排→悲伤"
  },
  {
    "id": 238,
    "word": "source",
    "pos": "n.",
    "meaning": "来源，出处",
    "phonetic": "/sɔːs/",
    "sentence": "The river has its source in the mountains.",
    "sentence_cn": "这条河发源于山区。",
    "mnemonic": "sour(酸的)+ce → 酸的地方→来源"
  },
  {
    "id": 239,
    "word": "spare",
    "pos": "adj./v.",
    "meaning": "多余的；抽出",
    "phonetic": "/speə/",
    "sentence": "Do you have a spare pen?",
    "sentence_cn": "你有多余的笔吗？",
    "mnemonic": "s(联想死)+pare(联想parent父母) → 父母→多余的"
  },
  {
    "id": 240,
    "word": "spark",
    "pos": "n./v.",
    "meaning": "火花；引发",
    "phonetic": "/spɑːk/",
    "sentence": "The incident sparked a protest.",
    "sentence_cn": "这个事件引发了抗议。",
    "mnemonic": "s(联想死)+park(公园) → 死公园→火花"
  },
  {
    "id": 241,
    "word": "specialize",
    "pos": "v.",
    "meaning": "专门研究，专攻",
    "phonetic": "/ˈspeʃəlaɪz/",
    "sentence": "She specializes in heart surgery.",
    "sentence_cn": "她专攻心脏外科。",
    "mnemonic": "special(特殊)+ize → 做特殊的事→专攻"
  },
  {
    "id": 242,
    "word": "specific",
    "pos": "adj.",
    "meaning": "具体的，特定的",
    "phonetic": "/spəˈsɪfɪk/",
    "sentence": "I need specific information.",
    "sentence_cn": "我需要具体的信息。",
    "mnemonic": "spec(看)+ific → 能看到的→具体的"
  },
  {
    "id": 243,
    "word": "spectacle",
    "pos": "n.",
    "meaning": "景象；眼镜",
    "phonetic": "/ˈspektəkl/",
    "sentence": "The sunset was a beautiful spectacle.",
    "sentence_cn": "日落是美丽的景象。",
    "mnemonic": "spect(看)+acle(东西) → 看的东西→景象"
  },
  {
    "id": 244,
    "word": "sphere",
    "pos": "n.",
    "meaning": "球体；领域",
    "phonetic": "/sfɪə/",
    "sentence": "He is well-known in the scientific sphere.",
    "sentence_cn": "他在科学领域很知名。",
    "mnemonic": "s(联想死)+phere(联想here) → 死在这里→球体"
  },
  {
    "id": 245,
    "word": "spiritual",
    "pos": "adj.",
    "meaning": "精神的，心灵的",
    "phonetic": "/ˈspɪrɪtʃuəl/",
    "sentence": "She is on a spiritual journey.",
    "sentence_cn": "她正在一段精神之旅中。",
    "mnemonic": "spirit(精神)+ual → 精神的"
  },
  {
    "id": 246,
    "word": "sponsor",
    "pos": "v./n.",
    "meaning": "赞助；赞助商",
    "phonetic": "/ˈspɒnsə/",
    "sentence": "The event was sponsored by a local company.",
    "sentence_cn": "该活动由当地一家公司赞助。",
    "mnemonic": "spons(承诺)+or(人) → 承诺的人→赞助商"
  },
  {
    "id": 247,
    "word": "stable",
    "pos": "adj./n.",
    "meaning": "稳定的；马厩",
    "phonetic": "/ˈsteɪbl/",
    "sentence": "The economy is stable.",
    "sentence_cn": "经济很稳定。",
    "mnemonic": "st(站)+able(能) → 能站的→稳定的"
  },
  {
    "id": 248,
    "word": "standard",
    "pos": "n./adj.",
    "meaning": "标准；标准的",
    "phonetic": "/ˈstændəd/",
    "sentence": "We must maintain high standards.",
    "sentence_cn": "我们必须保持高标准。",
    "mnemonic": "stand(站)+ard → 站立的标杆→标准"
  },
  {
    "id": 249,
    "word": "status",
    "pos": "n.",
    "meaning": "地位，身份；状态",
    "phonetic": "/ˈsteɪtəs/",
    "sentence": "What is your marital status?",
    "sentence_cn": "你的婚姻状况如何？",
    "mnemonic": "st(站)+at(在)+us(我们) → 我们站在→地位"
  },
  {
    "id": 250,
    "word": "steady",
    "pos": "adj.",
    "meaning": "稳定的，稳固的",
    "phonetic": "/ˈstedi/",
    "sentence": "She has a steady job.",
    "sentence_cn": "她有一份稳定的工作。",
    "mnemonic": "st(站)+eady(联想ready) → 准备好站→稳定的"
  },
  {
    "id": 251,
    "word": "stimulus",
    "pos": "n.",
    "meaning": "刺激，激励",
    "phonetic": "/ˈstɪmjələs/",
    "sentence": "The tax cut acted as a stimulus to the economy.",
    "sentence_cn": "减税对经济起到了刺激作用。",
    "mnemonic": "stimul(刺)+us(我们) → 刺我们→刺激"
  },
  {
    "id": 252,
    "word": "strain",
    "pos": "n./v.",
    "meaning": "压力；拉紧",
    "phonetic": "/streɪn/",
    "sentence": "The rope broke under the strain.",
    "sentence_cn": "绳子在拉力下断了。",
    "mnemonic": "st(站)+rain(雨) → 雨中站→压力"
  },
  {
    "id": 253,
    "word": "stream",
    "pos": "n./v.",
    "meaning": "溪流；流动",
    "phonetic": "/striːm/",
    "sentence": "A stream of water flowed through the valley.",
    "sentence_cn": "一条溪流穿过山谷。",
    "mnemonic": "st(站)+ream(联想cream奶油) → 站奶油→溪流"
  },
  {
    "id": 254,
    "word": "strengthen",
    "pos": "v.",
    "meaning": "加强，增强",
    "phonetic": "/ˈstreŋθn/",
    "sentence": "Exercise strengthens the muscles.",
    "sentence_cn": "锻炼增强肌肉。",
    "mnemonic": "strength(力量)+en(使) → 使有力量→加强"
  },
  {
    "id": 255,
    "word": "stress",
    "pos": "n./v.",
    "meaning": "压力；强调",
    "phonetic": "/stres/",
    "sentence": "He is under a lot of stress.",
    "sentence_cn": "他承受着很大压力。",
    "mnemonic": "st(站)+ress(联想dress裙子) → 站裙子→压力"
  },
  {
    "id": 256,
    "word": "structure",
    "pos": "n./v.",
    "meaning": "结构；构造",
    "phonetic": "/ˈstrʌktʃə/",
    "sentence": "The building has a modern structure.",
    "sentence_cn": "这座建筑有现代结构。",
    "mnemonic": "struct(建造)+ure → 建造的东西→结构"
  },
  {
    "id": 257,
    "word": "struggle",
    "pos": "v./n.",
    "meaning": "挣扎，斗争",
    "phonetic": "/ˈstrʌɡl/",
    "sentence": "She struggled to carry the heavy box.",
    "sentence_cn": "她挣扎着搬起沉重的箱子。",
    "mnemonic": "st(站)+ruggle(联想rug地毯) → 站地毯上挣扎"
  },
  {
    "id": 258,
    "word": "subjective",
    "pos": "adj.",
    "meaning": "主观的",
    "phonetic": "/səbˈdʒektɪv/",
    "sentence": "This is a subjective judgment.",
    "sentence_cn": "这是一个主观判断。",
    "mnemonic": "sub(在下面)+ject(扔)+ive → 扔在下面的→主观的"
  },
  {
    "id": 259,
    "word": "submit",
    "pos": "v.",
    "meaning": "提交；服从",
    "phonetic": "/səbˈmɪt/",
    "sentence": "Please submit your application by Friday.",
    "sentence_cn": "请在周五前提交申请。",
    "mnemonic": "sub(在下面)+mit(送) → 从下面送→提交"
  },
  {
    "id": 260,
    "word": "subsequent",
    "pos": "adj.",
    "meaning": "随后的，后来的",
    "phonetic": "/ˈsʌbsɪkwənt/",
    "sentence": "Subsequent events proved him right.",
    "sentence_cn": "随后的事件证明他是对的。",
    "mnemonic": "sub(在下面)+sequ(跟随)+ent → 在下面跟随→随后的"
  },
  {
    "id": 261,
    "word": "substance",
    "pos": "n.",
    "meaning": "物质；实质",
    "phonetic": "/ˈsʌbstəns/",
    "sentence": "The substance is harmful to health.",
    "sentence_cn": "这种物质对健康有害。",
    "mnemonic": "sub(在下面)+st(站)+ance → 站在下面的→物质"
  },
  {
    "id": 262,
    "word": "substantial",
    "pos": "adj.",
    "meaning": "大量的；实质的",
    "phonetic": "/səbˈstænʃl/",
    "sentence": "There has been a substantial increase in sales.",
    "sentence_cn": "销售额有了大幅增长。",
    "mnemonic": "sub(在下面)+stant(站)+ial → 站在下面的→实质的"
  },
  {
    "id": 263,
    "word": "succeed",
    "pos": "v.",
    "meaning": "成功；继承",
    "phonetic": "/səkˈsiːd/",
    "sentence": "She succeeded in passing the exam.",
    "sentence_cn": "她成功通过了考试。",
    "mnemonic": "suc(在下面)+ceed(走) → 从下面走上来→成功"
  },
  {
    "id": 264,
    "word": "succession",
    "pos": "n.",
    "meaning": "连续；继承",
    "phonetic": "/səkˈseʃn/",
    "sentence": "It rained for three days in succession.",
    "sentence_cn": "连续下了三天雨。",
    "mnemonic": "suc(在下面)+cess(走)+ion → 在下面走→连续"
  },
  {
    "id": 265,
    "word": "suffer",
    "pos": "v.",
    "meaning": "遭受，忍受",
    "phonetic": "/ˈsʌfə/",
    "sentence": "She suffered from a severe headache.",
    "sentence_cn": "她遭受了严重的头痛。",
    "mnemonic": "suf(在下面)+fer(带) → 在下面带→忍受"
  },
  {
    "id": 266,
    "word": "suitable",
    "pos": "adj.",
    "meaning": "合适的，适当的",
    "phonetic": "/ˈsuːtəbl/",
    "sentence": "This film is suitable for all ages.",
    "sentence_cn": "这部电影适合所有年龄段。",
    "mnemonic": "suit(适合)+able → 合适的"
  },
  {
    "id": 267,
    "word": "suggest",
    "pos": "v.",
    "meaning": "建议；暗示",
    "phonetic": "/səˈdʒest/",
    "sentence": "I suggest you see a doctor.",
    "sentence_cn": "我建议你去看医生。",
    "mnemonic": "sug(在下面)+gest(带) → 从下面带来→暗示"
  },
  {
    "id": 268,
    "word": "summarize",
    "pos": "v.",
    "meaning": "总结，概括",
    "phonetic": "/ˈsʌməraɪz/",
    "sentence": "Let me summarize the main points.",
    "sentence_cn": "让我总结一下要点。",
    "mnemonic": "summary(总结)+ize → 总结"
  },
  {
    "id": 269,
    "word": "summit",
    "pos": "n.",
    "meaning": "顶峰；峰会",
    "phonetic": "/ˈsʌmɪt/",
    "sentence": "They reached the summit of the mountain.",
    "sentence_cn": "他们到达了山顶。",
    "mnemonic": "sum(总和)+mit(联想meet) → 总和见面→峰会"
  },
  {
    "id": 270,
    "word": "superior",
    "pos": "adj./n.",
    "meaning": "上级的；优越的",
    "phonetic": "/suːˈpɪəriə/",
    "sentence": "This product is superior to that one.",
    "sentence_cn": "这个产品比那个好。",
    "mnemonic": "super(在...上)+ior → 在上面的→上级的"
  },
  {
    "id": 271,
    "word": "supplement",
    "pos": "n./v.",
    "meaning": "补充；增补",
    "phonetic": "/ˈsʌplɪment/",
    "sentence": "She takes vitamin supplements.",
    "sentence_cn": "她服用维生素补充剂。",
    "mnemonic": "supply(供应)+ment → 供应→补充"
  },
  {
    "id": 272,
    "word": "supply",
    "pos": "v./n.",
    "meaning": "供应，提供",
    "phonetic": "/səˈplaɪ/",
    "sentence": "The company supplies goods to local stores.",
    "sentence_cn": "该公司向当地商店供应商品。",
    "mnemonic": "sup(在下面)+ply(折叠) → 在下面叠→供应"
  },
  {
    "id": 273,
    "word": "support",
    "pos": "v./n.",
    "meaning": "支持，支撑",
    "phonetic": "/səˈpɔːt/",
    "sentence": "My family supported me throughout.",
    "sentence_cn": "我的家人一直支持我。",
    "mnemonic": "sup(在下面)+port(带) → 从下面带→支持"
  },
  {
    "id": 274,
    "word": "suppose",
    "pos": "v.",
    "meaning": "假设，猜想",
    "phonetic": "/səˈpəʊz/",
    "sentence": "I suppose you're right.",
    "sentence_cn": "我猜你是对的。",
    "mnemonic": "sup(在下面)+pose(放) → 放在下面→假设"
  },
  {
    "id": 275,
    "word": "suppress",
    "pos": "v.",
    "meaning": "镇压，抑制",
    "phonetic": "/səˈpres/",
    "sentence": "The government suppressed the rebellion.",
    "sentence_cn": "政府镇压了叛乱。",
    "mnemonic": "sup(在下面)+press(压) → 在下面压→镇压"
  },
  {
    "id": 276,
    "word": "supreme",
    "pos": "adj.",
    "meaning": "最高的，至高无上的",
    "phonetic": "/suːˈpriːm/",
    "sentence": "The Supreme Court made the final decision.",
    "sentence_cn": "最高法院做出了最终裁决。",
    "mnemonic": "supre(在...上)+me(我) → 在我上→最高的"
  },
  {
    "id": 277,
    "word": "surface",
    "pos": "n./v.",
    "meaning": "表面；浮现",
    "phonetic": "/ˈsɜːfɪs/",
    "sentence": "The surface of the lake is calm.",
    "sentence_cn": "湖面很平静。",
    "mnemonic": "sur(在...上)+face(脸) → 在脸上→表面"
  },
  {
    "id": 278,
    "word": "surgery",
    "pos": "n.",
    "meaning": "外科手术",
    "phonetic": "/ˈsɜːdʒəri/",
    "sentence": "She underwent heart surgery.",
    "sentence_cn": "她接受了心脏手术。",
    "mnemonic": "surg(手)+ery → 用手做→手术"
  },
  {
    "id": 279,
    "word": "surrender",
    "pos": "v./n.",
    "meaning": "投降，放弃",
    "phonetic": "/səˈrendə/",
    "sentence": "The enemy surrendered.",
    "sentence_cn": "敌人投降了。",
    "mnemonic": "sur(在...上)+render(给予) → 交上去→投降"
  },
  {
    "id": 280,
    "word": "surround",
    "pos": "v.",
    "meaning": "包围，环绕",
    "phonetic": "/səˈraʊnd/",
    "sentence": "The house is surrounded by trees.",
    "sentence_cn": "房子被树木环绕。",
    "mnemonic": "sur(在...上)+round(圆) → 在圆上→环绕"
  },
  {
    "id": 281,
    "word": "survey",
    "pos": "v./n.",
    "meaning": "调查；测量",
    "phonetic": "/ˈsɜːveɪ/",
    "sentence": "They conducted a survey of local residents.",
    "sentence_cn": "他们对当地居民进行了调查。",
    "mnemonic": "sur(在...上)+vey(看) → 在上面看→调查"
  },
  {
    "id": 282,
    "word": "suspicious",
    "pos": "adj.",
    "meaning": "可疑的，怀疑的",
    "phonetic": "/səˈspɪʃəs/",
    "sentence": "The police found his behavior suspicious.",
    "sentence_cn": "警方发现他的行为可疑。",
    "mnemonic": "sus(在下面)+spic(看)+ious → 在下面看→可疑的"
  },
  {
    "id": 283,
    "word": "suspect",
    "pos": "v./n.",
    "meaning": "怀疑；嫌疑犯",
    "phonetic": "/səˈspekt/",
    "sentence": "I suspect he is lying.",
    "sentence_cn": "我怀疑他在说谎。",
    "mnemonic": "sus(在下面)+spect(看) → 在下面看→怀疑"
  },
  {
    "id": 284,
    "word": "suspend",
    "pos": "v.",
    "meaning": "暂停；悬挂",
    "phonetic": "/səˈspend/",
    "sentence": "The flight was suspended due to bad weather.",
    "sentence_cn": "航班因恶劣天气暂停。",
    "mnemonic": "sus(在下面)+pend(悬挂) → 挂在下面→悬挂"
  },
  {
    "id": 285,
    "word": "sustain",
    "pos": "v.",
    "meaning": "维持，支撑",
    "phonetic": "/səˈsteɪn/",
    "sentence": "The soil can sustain crops.",
    "sentence_cn": "这片土壤能维持作物生长。",
    "mnemonic": "sus(在下面)+tain(拿住) → 在下面拿住→支撑"
  },
  {
    "id": 286,
    "word": "symbol",
    "pos": "n.",
    "meaning": "象征，符号",
    "phonetic": "/ˈsɪmbl/",
    "sentence": "The dove is a symbol of peace.",
    "sentence_cn": "鸽子是和平的象征。",
    "mnemonic": "sym(共同)+bol(扔) → 扔在一起的→符号"
  },
  {
    "id": 287,
    "word": "sympathy",
    "pos": "n.",
    "meaning": "同情，同情心",
    "phonetic": "/ˈsɪmpəθi/",
    "sentence": "She expressed sympathy for the victims.",
    "sentence_cn": "她向受害者表示同情。",
    "mnemonic": "sym(共同)+pathy(感情) → 共同的感情→同情"
  },
  {
    "id": 288,
    "word": "symptom",
    "pos": "n.",
    "meaning": "症状，征兆",
    "phonetic": "/ˈsɪmptəm/",
    "sentence": "Fever is a symptom of infection.",
    "sentence_cn": "发烧是感染的症状。",
    "mnemonic": "sym(共同)+ptom(联想atom原子) → 共同原子→症状"
  },
  {
    "id": 289,
    "word": "synthesis",
    "pos": "n.",
    "meaning": "综合，合成",
    "phonetic": "/ˈsɪnθəsɪs/",
    "sentence": "The work is a synthesis of different ideas.",
    "sentence_cn": "这部作品是不同思想的综合。",
    "mnemonic": "syn(共同)+thesis(论点) → 共同的论点→综合"
  },
  {
    "id": 290,
    "word": "system",
    "pos": "n.",
    "meaning": "系统，体系",
    "phonetic": "/ˈsɪstəm/",
    "sentence": "The education system needs reform.",
    "sentence_cn": "教育体系需要改革。",
    "mnemonic": "sy(共同)+st(站)+em → 站在一起的→系统"
  },
  {
    "id": 291,
    "word": "tackle",
    "pos": "v./n.",
    "meaning": "处理；用具",
    "phonetic": "/ˈtækl/",
    "sentence": "We need to tackle this problem.",
    "sentence_cn": "我们需要处理这个问题。",
    "mnemonic": "tack(大头针)+le → 像大头针一样→处理"
  },
  {
    "id": 292,
    "word": "talent",
    "pos": "n.",
    "meaning": "天赋，才能",
    "phonetic": "/ˈtælənt/",
    "sentence": "She has a talent for music.",
    "sentence_cn": "她有音乐天赋。",
    "mnemonic": "tal(联想tall高)+ent → 高人→天赋"
  },
  {
    "id": 293,
    "word": "target",
    "pos": "n./v.",
    "meaning": "目标；瞄准",
    "phonetic": "/ˈtɑːɡɪt/",
    "sentence": "Our target is to finish by Friday.",
    "sentence_cn": "我们的目标是在周五前完成。",
    "mnemonic": "tar(焦油)+get(得到) → 得到焦油→目标"
  },
  {
    "id": 294,
    "word": "technique",
    "pos": "n.",
    "meaning": "技术，技巧",
    "phonetic": "/tekˈniːk/",
    "sentence": "She has mastered the technique.",
    "sentence_cn": "她已经掌握了这项技术。",
    "mnemonic": "techn(技术)+ique → 技术"
  },
  {
    "id": 295,
    "word": "technology",
    "pos": "n.",
    "meaning": "技术，科技",
    "phonetic": "/tekˈnɒlədʒi/",
    "sentence": "Technology is advancing rapidly.",
    "sentence_cn": "技术正在快速发展。",
    "mnemonic": "techn(技术)+ology(学) → 技术学→科技"
  },
  {
    "id": 296,
    "word": "temporary",
    "pos": "adj.",
    "meaning": "临时的，暂时的",
    "phonetic": "/ˈtemprəri/",
    "sentence": "She found a temporary job.",
    "sentence_cn": "她找到了一份临时工作。",
    "mnemonic": "tempor(时间)+ary → 时间上的→暂时的"
  },
  {
    "id": 297,
    "word": "tendency",
    "pos": "n.",
    "meaning": "趋势，倾向",
    "phonetic": "/ˈtendənsi/",
    "sentence": "There is a growing tendency to work from home.",
    "sentence_cn": "在家工作的趋势日益增长。",
    "mnemonic": "tend(延伸)+ency → 延伸→趋势"
  },
  {
    "id": 298,
    "word": "tension",
    "pos": "n.",
    "meaning": "紧张，张力",
    "phonetic": "/ˈtenʃn/",
    "sentence": "There is tension between the two countries.",
    "sentence_cn": "两国之间存在紧张关系。",
    "mnemonic": "tens(伸展)+ion → 伸展→紧张"
  },
  {
    "id": 299,
    "word": "terminal",
    "pos": "adj./n.",
    "meaning": "终端的；终点站",
    "phonetic": "/ˈtɜːmɪnl/",
    "sentence": "The train arrived at the terminal.",
    "sentence_cn": "火车到达了终点站。",
    "mnemonic": "termin(边界)+al → 边界的→终端的"
  },
  {
    "id": 300,
    "word": "territory",
    "pos": "n.",
    "meaning": "领土，领域",
    "phonetic": "/ˈterətri/",
    "sentence": "The territory is rich in natural resources.",
    "sentence_cn": "这片领土自然资源丰富。",
    "mnemonic": "terr(土地)+itory → 土地→领土"
  }
];
