const CACHE_NAME = "portfolio-v11";
const urlsToCache = ["./", "./css/BebasNeue-Regular.woff", "./css/BebasNeue-Regular.woff2", "./img/favicon.svg",
"./img/svg/adobe-xd.svg","./img/svg/bootstrap5.svg","./img/svg/climap.svg","./img/svg/CSS3.svg","./img/svg/escritos.svg","./img/svg/figma.svg",
"./img/svg/horabondi.svg","./img/svg/horabondi-beta.svg","./img/svg/HTML5.svg","./img/svg/javascript.svg","./img/svg/jquery.svg","./img/svg/astro.svg","./img/svg/languaje.svg","./img/svg/lista-compras.svg",
"./img/svg/materialize.svg","./img/svg/mysql-2.svg","./img/svg/nodejs.svg","./img/svg/notas.svg","./img/svg/office.svg","./img/svg/panerita.svg",
"./img/svg/php-1.svg","./img/svg/postman.svg","./img/svg/react-black.svg", "./img/horizontal.webp", "./img/vertical.webp"];

self.addEventListener("install", event => {
    // Pre-cache archivos para offline y performance; los pictogramas los dejamos para la primera carga
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache)
        })
    );
});

// Cache First Policy
self.addEventListener("fetch", event => {
  event.respondWith(
      caches.match(event.request)  
          .then(function(response) {
              if (response) {  // CACHE HIT
                  return response;
              } else {    // CACHE MISS
                  return fetch(event.request);
              }
          })
  );
});