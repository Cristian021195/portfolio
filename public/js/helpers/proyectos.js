export function proyectos(){
    //DOM GLOBALES
    const $anterior = document.getElementById('anterior');
    const $siguiente = document.getElementById('siguiente');
    const $titulo = document.getElementById('_titulo');
    const $descripcion = document.getElementById('_descripcion');
    const $imagenes = document.getElementById('_imagenes');
    const $link = document.getElementById('_link');
    const $inner = document.getElementById('_inner');
    const $contador = document.getElementById('contador');
    let inicio = 0;
    const _proyectos = [
        {
            titulo:'Akins',
            descripcion:`Mi primer Pagina estatica y de Maquetacion. Hecha con HTML, CSS, JavaScript (JQuery). 
            Sirvio para promocionar el sitio de un entonces servidor de videojuego.`,
            subdescripcion: `<ul>
            <li>Estructura Básica de Sitios estaticos</li>
            <li>Aprendizaje de Hojas de estilos</li>
            <li>Creacion de Menu y Formularios.</li>
            <li>Aprendizaje de Flexbox</li>
            </ul>`,
            img:[
                './public/img/akins1.jpg',
                './public/img/akins2.jpg',
                './public/img/akins3.jpg'
            ],
            link:'https://cristian021195.github.io/Akins/'
        },
        {
            titulo:'HoraBondi',
            descripcion:`Esta es una SPA y PWA de acceso publico y de uso diario, en la cual podemos consultar los horarios de los 
            colectivos urbanos de la provincia de Tucumán, entre ellos: Exprebus, Tesa, Gutierrez. <br>Ademas podemos 
            Consultar los precios de antemano, ver publicaciones de cada empresa o del sitio, recibir notificaciones, e imprimir los horarios. 
            Construido en HTML, CSS, JS, Materialize, PHP y Mysql.`,
            subdescripcion: `<ul>
            <li>Uso offline de aplicación para consultar horarios</li>
            <li>Guardado de ultimas publicaciones.</li>
            <li>Notificaciones webpush.</li>
            <li>Auto Actualizacion de datos: horarios, precios y publicaciones</li>
            </ul>`,
            img:[
                './public/img/horabondi_splash.jpg',
                './public/img/horabondi_menu.jpg',
                './public/img/horabondi_feed.jpg',
                './public/img/horabondi_publicacion.jpg',
                './public/img/horabondi_horario.jpg',
                './public/img/horabondi_precio.jpg',
            ],
            link:'https://horabondis.000webhostapp.com'
        },
        {
            titulo:'Panerita',
            descripcion:`Este es un proyecto personal una SPA y PWA para una tercierizada de dicha empresa, la cual es distribuidora de productos
            alimenticios tanto en norte como en sur tucumano.<br> Aqui tenemos roles con diferentes permisos, Super Administrador, Administrador, Vendedor y Secretaria.
            Construido en HTML, CSS, JS, Bootstrap 5, PHP y Mysql.`,
            subdescripcion: `<ul>
            <li>Gestión de Usuarios y Clientes</li>
            <li>Ventas y generación de comprobantes</li>
            <li>Generar ruta de venta diaria, con total del día, numero de comprobantes y total de cada venta.</li>
            <li>Imprimir comprobantes particulares o de a grupos</li>
            <li>Gestionar el estado de los comprobantes: pagado, pendiente, deudor</li>
            <li>Notas por usuario</li>
            <li>Consultar Stock</li>
            </ul>
            <p>Esta aplicación esta construida en HTML, CSS, JS, Bootstrap 5 y PHP Mysql</p>`,
            img:[
                './public/img/panerita_login.png',
                './public/img/panerita_main.png',
                './public/img/panerita_detalle.png',
                './public/img/panerita_comprobante.png',
            ],
                link:'https://panerita.000webhostapp.com/panerita/'
        },
        {
            titulo:'Notas',
            descripcion:`Hecho con Bootstrap, HTML y JS, es una PWA centrada en el funcionamiento offline de una aplicacion simple de notas, con la libreria PouchDB (indexDB) y Uso de una tabla dinamica.`,
            subdescripcion: `<ul>
            <li>PWA</li>
            </ul>`,
            img:[
                './public/img/notas_splash.jpg',
                './public/img/notas_inicio.jpg',
                './public/img/notas_tabla.jpg'
            ],
                link:'https://cristian021195.github.io/notas/'
        },
        {
            titulo:'Climap',
            descripcion:`Hecho con React JS, y CSS, es una PWA de muy simple diseño, con uso de React Router y Hosteada en google cloud (lo que permite mejor experiencia con las rutas), hace uso de Openweathermap y Mapbox.`,
            subdescripcion: `<ul>
            <li>PWA</li>
            </ul>`,
            img:[
                './public/img/climap_splash.jpg',
                './public/img/climap_clima.jpg',
                './public/img/climap_mapa.jpg'
            ],
                link:'https://climap-6e45e.web.app/'
        }
    ]

    let long = _proyectos.length - 1; //2
    let actual = 1;
    let cont = _proyectos.length;

    renderizar(_proyectos[inicio], actual, cont);

    $siguiente.addEventListener('click', (e)=>{
        
        if(inicio < long){
            inicio++;
            actual ++;
        }else{
            inicio = 0;
            actual = 1;
        }
        _proyectos[inicio].descripcion = cambiarIdioma(_proyectos[inicio]);
        //console.log(cambiarIdioma(_proyectos[inicio]))
        
        renderizar(_proyectos[inicio], actual, cont);
    })
    $anterior.addEventListener('click', (e)=>{
        if(inicio == 0){
            inicio = long;
        }else{
            inicio--;
        }
        if(actual <= 1){
            actual = cont;
        }else{
            actual --;
        }
        _proyectos[inicio].descripcion = cambiarIdioma(_proyectos[inicio]);
        renderizar(_proyectos[inicio], actual, cont);
    })
    function renderizar(_proyecto, actual, cont){
        $inner.classList.add('slideOut');
        setTimeout(() => {
            $inner.classList.remove('slideOut');
        }, 450);
        $imagenes.innerHTML = '';
        $titulo.textContent = _proyecto.titulo;
        $descripcion.innerHTML = _proyecto.descripcion;
        $link.setAttribute('href', _proyecto.link);
        $contador.innerHTML = `<span class="notranslate">${actual} / 5</span>`;

        _proyecto.img.forEach(src => {
            let $img = document.createElement('img'); $img.src = src; $img.classList.add('galery');
            $imagenes.appendChild($img);
        });
    }
    function cambiarIdioma(_proyectos){
        let texto = ''
        if(document.cookie.includes('es/en')){
            if(_proyectos.titulo == 'Akins'){
                texto = `It was my first static page that works to promote the site of a then video game server. Made with HTML, CSS, and JQuery.`;
            }else if(_proyectos.titulo == 'Hora Bondi'){
                texto = `
This is a SPA and PWA, in which we can consult the schedules of the urban groups of the province of Tucumán. Among them: Exprebus, Tesa, Gutiérrez. In addition, we can consult the prices, see publications of each company or the site, and print the schedules. Built in HTML, CSS, JS, Materialize, PHP and MySQL.`;
            }else if(_proyectos.titulo == 'Panerita'){
                texto = `This was a personal project for a SPA and PWA for an outsourced company, which is a distributor of food products. <br>
The application works with roles and different permissions, generates, edits and prints receipts, manages product stock and analyzes the number of products sold by date.
Built in HTML, CSS, JS, Bootstrap 5, PHP and MySQL <br><b>User: </b>admin@admin.com / <b>Password: </b>administrador`;
            }else if(_proyectos.titulo == 'Notas'){
                texto = `It is a PWA focused on the offline operation of a simple notes application, with the PouchDB library and the use of a dynamic table that I designed. Made with Bootstrap, HTML and JS.`;
            }else if(_proyectos.titulo == 'Climap'){
                texto = `
                It is a PWA with a very simple design, with the use of React Router and hosted on Google Cloud Services (which allows a better experience with the routes), it makes use of the Openweathermap and Mapbox APIs. Made with React JS, and CSS.`;
            }
        }else if(document.cookie.includes('es/es')){
            if(_proyectos.titulo == 'Akins'){
                texto = `Fue mi primer página estática que sirvió para promocionar el sitio de un entonces servidor de videojuego. Hecha con HTML, CSS, y JQuery.`;
            }else if(_proyectos.titulo == 'Hora Bondi'){
                texto = `Esta es una SPA y PWA, en la cual podemos consultar los horarios de los colectivos urbanos de la provincia de Tucumán. Entre ellos: Exprebus, Tesa, Gutiérrez. Además, podemos consultar los precios, ver publicaciones de cada empresa o del sitio, e imprimir los horarios. Construido en HTML, CSS, JS, Materialize, PHP y MySQL.`;
            }else if(_proyectos.titulo == 'Panerita'){
                texto = `Este fue un proyecto personal una SPA y PWA para una tercerizada de dicha empresa, la cual es distribuidora de productos alimenticios. <br>
La aplicación trabaja con roles y diferentes permisos, genera, edita e imprime comprobantes, maneja stock de productos y analiza la cantidad de productos vendidos por fechas.
Construido en HTML, CSS, JS, Bootstrap 5, PHP y MySQL.
<br><b>Usuario: </b>admin@admin.com / <b>Contraseña: </b>administrador`;
            }else if(_proyectos.titulo == 'Notas'){
                texto = `Es una PWA centrada en el funcionamiento offline de una simple aplicación de notas, con la librería PouchDB y uso de una tabla dinámica que yo diseñé. Hecho con Bootstrap, HTML y JS.`;
            }else if(_proyectos.titulo == 'Climap'){
                texto = `Es una PWA de muy simple diseño, con uso de React Router y alojada en Google Cloud Services (lo que permite mejor experiencia con las rutas), hace uso de las API’S de Openweathermap y Mapbox. Hecho con React JS, y CSS.`;
            }
        }
        return texto;
    }
}
