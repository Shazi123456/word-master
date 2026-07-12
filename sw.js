/* ====================================================
   考研单词大师 - Service Worker
   让 PWA 可以离线使用
   ==================================================== */

const CACHE_NAME = "wordmaster-v1";
const ASSETS = [
  ".",
  "index.html",
  "style.css",
  "app.js",
  "words-data.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

// 安装时预缓存所有资源
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// 拦截请求，优先返回缓存
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // 有缓存直接返回（离线可用）
      if (cached) return cached;
      // 无缓存则从网络获取
      return fetch(event.request).catch(() => {
        // 离线且无缓存时返回 fallback
        return new Response("离线中，请检查网络连接", {
          status: 503,
          statusText: "Service Unavailable",
        });
      });
    })
  );
});