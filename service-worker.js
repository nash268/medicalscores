// service-worker.js
const CACHE_NAME = 'medscore-cache-02';
const GH_PATH = '/medicalscores';
const APP_PREFIX = 'medscore_';

const urlsToCache = [
    '${GH_PATH}/',
    '${GH_PATH}/index.html',
    '${GH_PATH}/script.js',
    '${GH_PATH}/style.css',
    '${GH_PATH}/medical-scores.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});