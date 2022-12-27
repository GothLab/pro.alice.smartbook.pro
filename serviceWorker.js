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



 "./assets/css/dark.css",



 "./assets/css/default.css",



 "./assets/css/jquery.treefilter.css",



 "./assets/css/styles.css",



 "./assets/css/swiper-style.css",



 "./assets/css/swiper.css",



 "./assets/css/tree.css",



 "./assets/img/192.png",



 "./assets/img/512.png",



 "./assets/js/app.js",



 "./assets/js/converter.js",



 "./assets/js/converter_links.js",



 "./assets/js/core/app.js",



 "./assets/js/core/jquery.js",



 "./assets/js/core/jquery.treefilter-0.1.0.js",



 "./assets/js/core/localbase.js",



 "./assets/js/core/showdown.js",



 "./assets/js/core/swiper.js",



 "./assets/js/core/tree.js",



 "./assets/js/DB.js",



 "./assets/js/idb.js",



 "./assets/js/jquery.js",



 "./assets/js/loader.js"




 "./assets/js/swiper-code.js",



 "./assets/js/swiper.js",



 "./assets/js/tree.js",



 "./assets/js/tree_ex.js",



 "./hegel_a.html",



 "./hg.html",



 "./index.html",







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
