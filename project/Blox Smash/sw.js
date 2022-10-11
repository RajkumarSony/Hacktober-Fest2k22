const Static = "site-static-v1.1.4";
const Dynamic = "site-dynamic-v1.0.8"
const assets = [
    "./",
    "./index.html",
    "./404.html",
    "./fallback.html",
    "./Game Assets/Style/style.css",
    "./Game Assets/Script/index.js",
    "./Game Assets/Script/bgcanvas.js",
    "./Game Assets/Script/app.js",
    "./Game Assets/img/Blox-Smash.png",
    "./Game Assets/img/loading.gif",
    "./Game Assets/img/game-background.jpg",
    "./Game Assets/img/music-note.png",
    "./Game Assets/img/muted-music-notes.png",
    "./Game Assets/img/MuteSound.png",
    "./Game Assets/img/appIcon.png",
    "./Game Assets/img/offline.png",
    "./Game Assets/img/Sound.png",
    "./manifest.json",

];
// Install Servise Worker
self.addEventListener("install", evt => {
    // console.log("Servise worker is installed")
    evt.waitUntil(
        caches.open(Static).then(cache => {
            //    console.log(cache);
            cache.addAll(assets).then(() => { console.log("caching") })

        })
    );

});
// Activate Servise Worker
self.addEventListener("activate", evt => {
    // console.log("Servise worker is activated")
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== Static && key !== Dynamic)
                .map(key => caches.delete(key))
            )
        })
    )
})

// Fetch event
self.addEventListener("fetch", evt => {
    // console.log("fetch Event",evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(Dynamic).then(cache => {
                    if (evt.request.url.indexOf(".js") == -1 && evt.request.url.indexOf(".wav") == -1 && evt.request.url.indexOf(".ogg") == -1) {
                        cache.put(evt.request.url, fetchRes.clone());
                        limitCacheSize(Dynamic, 10)

                    }
                    return fetchRes;
                })
            });
        }).catch(() => {
            if (evt.request.url.indexOf(".html") > -1) {
                return caches.match('/fallback.html')
            }
        })
    )
})

//cache size limit function
//NOT WORKING
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[-1]).then(limitCacheSize(name, size))
            }
        })
    })
}