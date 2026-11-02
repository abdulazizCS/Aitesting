// Offline support: keeps the app, the 3D library, fonts and the voice client cached
// so the kiosk can restart without internet (the agent itself still needs a connection;
// without it Mohammed answers from the local knowledge base).
const CACHE = 'assistant-v3';
const SHELL = ['./', 'index.html', 'style.css', 'dist/app.js', 'logo.png', 'manifest.webmanifest', 'vendor/qrcode.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const cacheable = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(url.host);
  if (!cacheable) return;
  // network first (fresh content), falling back to the cache when offline
  e.respondWith(
    fetch(e.request).then((res) => {
      if (res.ok || res.type === 'opaque') caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: url.origin === location.origin })),
  );
});
