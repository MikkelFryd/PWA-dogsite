let CACHE_NAME = 'my-site-cache';

let urlsToCache = [
    './main.css',
    './assets/images/dogicon-192x192.png',
    './assets/images/dogicon-512x512.png',
    './assets/images/fetchimage.png',
    './index.html',
    './info.html'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)

        .then(function(cache) {
            console.log('Opened cache')

            return cache.addAll(urlsToCache)
        })
        )
    })
    
    self.addEventListener('fetch', function(e) {
        e.respondWith(
            caches.open('my-site-cache').then(function (cache) {
            return fetch(e.request).then(function (response) {
                cache.put(response)
                console.log(response)
                return response
            })
        })
    )
})

