const CACHE_NAME = 'medscore-cache-00025';
const APP_PREFIX = 'medscore_';

const urlsToCache = [
    '/medicalscores/',
    '/medicalscores/index.html',
    '/medicalscores/script.js',
    '/medicalscores/style.css',
    '/medicalscores/app-icon.png',
    '/medicalscores/tb-treatment-guidlines.jpg'
];

// Install event: Cache necessary files and skip waiting
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event: Clean up old caches and take control of clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of all pages under scope
});

// Fetch event: Use stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone()); // Update cache with the latest response
          }
          return networkResponse;
        }).catch(() => {
          return cachedResponse || fetch(event.request); // If network fails, return cached response
        });

        return cachedResponse || fetchPromise; // Return cached or fetched response
      });
    })
  );
});
