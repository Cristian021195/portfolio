/*Asignamos nombre a nuestro Almacenamiento Cache*/

const CACHE_NAME = 'portfolio-v962022';
const urlsToCache = [
    /*'./',
    './index.html',*/
    './public/css/style.css',
    './public/js/index.js',
    './public/js/helpers/conocimientos.js',
    './public/js/helpers/galery.js',
    './public/js/helpers/herramientas.js',
    './public/js/helpers/loader.js',
    './public/js/helpers/menu.js',
    './public/js/helpers/rutas.js',
    './public/js/helpers/secciones.js',
    './public/libraries/bootstrap/css/bootstrap.min.css',
    './public/libraries/bootstrap/js/bootstrap.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://kit.fontawesome.com/ebf30f2c4d.js',
    'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
    './public/img/akins1.jpg',
    './public/img/akins2.jpg',
    './public/img/akins3.jpg',
    './public/img/climap_clima.jpg',
    './public/img/climap_splash.jpg',
    './public/img/climap_mapa.jpg',
    './public/img/horabondi_feed.jpg',
    './public/img/horabondi_horario.jpg',
    './public/img/horabondi_menu.jpg',
    './public/img/horabondi_precio.jpg',
    './public/img/horabondi_publicacion.jpg',
    './public/img/horabondi_splash.jpg',
    './public/img/notas_inicio.jpg',
    './public/img/notas_splash.jpg',
    './public/img/notas_tabla.jpg',
    './public/img/panerita_comprobante.png',
    './public/img/panerita_detalle.png',
    './public/img/panerita_login.png',
    './public/img/panerita_main.png',
    './public/img/escritos_splash.jpg',
    './public/img/escritos_inicio.jpg',
    './public/img/escritos_escritos.jpg',
    './public/img/escritos_configuracion.jpg',
    './public/img/metas/dev-icon.svg',
    './public/img/metas/adobe-xd.svg',
    './public/img/metas/bootstrap-5-1.svg',
    './public/img/metas/CSS3.svg',
    './public/img/metas/HTML5.svg',
    './public/img/metas/logo-javascript.svg',
    './public/img/metas/figma.svg',
    './public/img/metas/jquery-1.svg',
    './public/img/metas/languaje.svg',
    './public/img/metas/materialize.svg',
    './public/img/metas/mysql-2.svg',
    './public/img/metas/office.svg',
    './public/img/metas/nodejs.svg',
    './public/img/metas/php-1.svg',
    './public/img/metas/postman.svg',
    './public/img/metas/react-black.svg'

];

//durante la fase de instalacion, almacena en cache los archivos estaticos del sitio
self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWaiting())
        })
        .catch(e=>{console.log(e)})
    )
});

//nos permite, activar nuestro ServiceWorker, cuando perdemos la conexiones por ejemplo
self.addEventListener('activate', (e)=>{
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
        .then(cachesNames =>{
            cachesNames.map(cacheName =>{//evalua en el cache que cambio o que recurso es diferente
                if(cacheWhiteList.indexOf(cacheName) === -1){
                    return caches.delete(cacheName);
                }
            })
    })
    .then(()=>{self.clients.claim()})
    )
});

//Fetech, recupera todos los recursos del navegador (cuando restablesca la conexion)
self.addEventListener('fetch', (e)=>{
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){//recuperando del cache
                return res;
            }
            return fetch(e.request)
        })
    )
});
