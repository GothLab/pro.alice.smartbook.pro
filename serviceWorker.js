/**
 * Cache version, change name to force reload
 */
var CACHE_VERSION = 'v1';


/**
 * Stuff to put in the cache at install
 */
var CACHE_FILES  = [
   

    "./assets/bootstrap/css/bootstrap.min.css",
    "./assets/bootstrap/js/bootstrap.min.js",
    "./assets/css/Bagu.css",
    "./assets/css/collapse.css",
    "./assets/css/dark.css",
    "./assets/css/DISABLE.css",
    "./assets/css/Kis Text BT OSF Web.css",
    "./assets/css/Kis Text BT Web.css",
    "./assets/css/LI.css",
    "./assets/css/menu.css",
    "./assets/css/scrollbar.css",
    "./assets/css/styles.css",
    "./assets/css/text.css",
    "./assets/css/toolbar.css",
    "./assets/css/tooltip.css",
    "./assets/fonts/fa-brands-400.eot",
    "./assets/fonts/fa-brands-400.svg",
    "./assets/fonts/fa-brands-400.ttf",
    "./assets/fonts/fa-brands-400.woff",
    "./assets/fonts/fa-brands-400.woff2",
    "./assets/fonts/fa-regular-400.eot",
    "./assets/fonts/fa-regular-400.svg",
    "./assets/fonts/fa-regular-400.ttf",
    "./assets/fonts/fa-regular-400.woff",
    "./assets/fonts/fa-regular-400.woff2",
    "./assets/fonts/fa-solid-900.eot",
    "./assets/fonts/fa-solid-900.svg",
    "./assets/fonts/fa-solid-900.ttf",
    "./assets/fonts/fa-solid-900.woff",
    "./assets/fonts/fa-solid-900.woff2",
    "./assets/fonts/fontawesome-all.min.css",
    "./assets/fonts/KisTextBTOSFWeb-Italic.woff",
    "./assets/fonts/KisTextBTOSFWeb-Italic.woff2",
    "./assets/fonts/KisTextBTWeb.woff",
    "./assets/fonts/KisTextBTWeb.woff2",
    "./assets/img/192-1.png",
    "./assets/img/192.png",
    "./assets/img/512-1.png",
    "./assets/img/512.png",
    "./assets/js/bs-init.js",
    "./assets/js/callout.js",
    "./assets/js/Core/app.js",
    "./assets/js/Core/Baguuet.js",
    "./assets/js/Core/localbase.js",
    "./assets/js/Core/scrollto.js",
    "./assets/js/Core/scryll.esm.js",
    "./assets/js/DB.js",
    "./assets/js/Imager.js",
    "./assets/js/jquery.min.js",
    "./assets/js/Lightbox-Gallery.js",
    "./assets/js/orientation.js",
    "./assets/js/scroll_to_buttons.js",
    "./assets/js/text_loader.js",
    "./assets/js/toolbar.js",
    "./index.html",
    "./manifest.json",
    "./serviceWorker.js",






];


/**
 * Service worker 'install' event.
 * If all the files are successfully cached, then the service worker will be installed.
 * If any of the files fail to download, then the install step will fail.
 */
this.addEventListener('install', function(event) {
   event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            console.log('Installing...');
            return cache.addAll(CACHE_FILES);
        }).catch(function(a) {
            console.log(a);
        })
    ); // waitUntil
});


/**
 * After a service worker is installed and the user navigates to a different page or refreshes,
 * the service worker will begin to receive fetch events.
 *
 * Network-first approach: if online, request is fetched from network and not from cache
 */
this.addEventListener('fetch', function(event) {
    event.respondWith(function() {
        
        var res = returnFromServer(event);
        if (res) {return res;}

        caches.match(event.request).then(function(res){
            // Cache hit - return response
            if(res){
                return res;
            }

            // no response
            return null;
        })

    }());
});


/**
 * If we don't have a matching response, we return the result of a call to fetch,
 * which will make a network request and return the data if anything can be retrieved from the network. 
 */
function returnFromServer(event){
    
    // IMPORTANT: Clone the request. A request is a stream and
    // can only be consumed once. Since we are consuming this
    // once by cache and once by the browser for fetch, we need
    // to clone the response.
    var fetchRequest = event.request.clone();

    var url = event.request.clone();
    
    return fetch(fetchRequest).then(
        function(response) {
            
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
                  return null;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_VERSION)
                .then(function(cache) {
                    cache.put(event.request, responseToCache);
                });

            return response;
        }
    ); // return.fetch().then()

}
