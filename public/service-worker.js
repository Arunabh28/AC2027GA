/* Enhanced service worker
   - precaches core app shell
   - runtime caches images and navigation requests
   - supports push notifications and notificationclick
*/
const CACHE_NAME = 'ac-2027-ga-cache-v2';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); return null; })
    ))
  );
  self.clients.claim();
});

// Simple runtime caching strategy: cache-first for images, network-first for navigation
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Bypass cross-origin requests
  if (url.origin !== location.origin) return;

  // Images: cache-first
  if (req.destination === 'image' || /\.(png|jpg|jpeg|gif|webp|svg)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, res.clone());
          return res;
        });
      }))
    );
    return;
  }

  // Navigation requests: network-first then fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => caches.match('/'))
    );
    return;
  }

  // Default: try cache then network
  event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});

// Push event handler (display simple notification). For production, verify payload and use VAPID on server.
self.addEventListener('push', event => {
  let data = { title: 'AC 2027 GA', body: 'New notification', url: '/' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    // ignore and use defaults
  }

  const title = data.title || 'AC 2027 GA';
  const options = {
    body: data.body || '',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-192x192.png',
    data: { url: data.url || '/' }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url ? event.notification.data.url : '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url === url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// Optional: handle pushsubscriptionchange events (not widely used but good to have)
self.addEventListener('pushsubscriptionchange', event => {
  // In production, re-subscribe and send to app server
  console.log('pushsubscriptionchange', event);
});
