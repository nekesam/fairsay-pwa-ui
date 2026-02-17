// Basic service worker for caching static assets and enabling offline access

const CACHE_NAME = 'fairsay-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/css/main.chunk.css',
  '/manifest.json',
  '/fs_logo.svg',
];

//Install the service worker and cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache-First Strategy for Educational Content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache hit, or fetch from network
      return response || fetch(event.request).then((fetchResponse) => {
        // Optionally add new unique requests to cache here
        return fetchResponse;
      });
    })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});