const CACHE = 'radio-cache-v1';
const URLS = [
  '/',
  '/index.html',
  '/vinyl.svg',
  '/manifest.json',
  '/192x192.png',
  '/512x512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(URLS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
