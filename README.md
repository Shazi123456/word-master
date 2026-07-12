# 📚 考研单词大师

一个纯前端的考研英语单词学习工具，无需服务器，**直接打开浏览器就能用**！

🌐 **在线地址：** [https://shazi123456.github.io/word-master/](https://shazi123456.github.io/word-master/)

---

## ✨ 功能特点

| 模式 | 说明 |
|------|------|
| 📖 **记忆卡** | 翻转卡片，自测单词释义 |
| 🎯 **选择题** | 四选一，选择正确释义 |
| ✍️ **拼写** | 根据中文释义拼写英文单词 |
| 📝 **例句填空** | 在例句中填入缺失的单词 |
| 📋 **词表浏览** | 搜索、筛选、浏览全部 300 个单词 |

- 🧠 **间隔重复算法** — 自动优先展示易错词和新词
- 📊 **学习统计** — 掌握进度、正确率、困难词一目了然
- 📱 **PWA 支持** — 手机添加到主屏幕，可离线使用
- 🎯 **300 个考研核心词汇** — 含音标、例句、记忆法

## 🚀 使用方式

### 在线使用（推荐）
直接打开 [https://shazi123456.github.io/word-master/](https://shazi123456.github.io/word-master/)

### 手机安装
用 **Safari / Chrome** 打开后：
- **iPhone：** 底部分享按钮 → "添加到主屏幕"
- **Android：** 菜单 → "添加到主屏幕"

安装后就像原生 App 一样，**离线也能用！**

### 本地运行
```bash
# 直接双击打开 index.html 即可，或用 Python 启动本地服务器
python -m http.server 8080
# 访问 http://localhost:8080
```

## 🛠️ 技术栈

- 纯 HTML + CSS + JavaScript
- 无后端、无数据库、无框架
- 数据存储在浏览器本地 (localStorage)
- PWA (Progressive Web App) 支持离线访问

## 📂 项目结构

```
├── index.html       # 主页面
├── style.css        # 样式
├── app.js           # 所有交互逻辑
├── words-data.js    # 300 个单词数据
├── manifest.json    # PWA 配置
├── sw.js            # Service Worker（离线支持）
└── icons/           # 应用图标
```

## 📜 许可证

MIT License