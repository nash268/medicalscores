// service-worker.js
const CACHE_NAME = 'medscore-cache-00016';
const GH_PATH = '/medicalscores';
const APP_PREFIX = 'medscore_';

const urlsToCache = [
    '/medicalscores/',
    '/medicalscores/index.html',
    '/medicalscores/script.js',
    '/medicalscores/style.css',
    '/medicalscores/app-icon.png',
    '/medicalscores/tb-treatment-guidlines.jpg'
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