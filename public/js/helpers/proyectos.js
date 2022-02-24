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
                texto = `My first static and layout page. Made with HTML, CSS, JavaScript (JQuery). It served to promote the site of a then video game server. `;
            }else if(_proyectos.titulo == 'Hora Bondi'){
                texto = `This is a SPA and PWA for public access and for daily use, in which we can check the schedules of urban groups in the province of Tucumán, including: Exprebus, Tesa, Gutierrez.
                We can also check prices in advance, see publications of each company or the site, and print the schedules. Built in HTML, CSS, JS, Materialize, PHP and Mysql.`;
            }else if(_proyectos.titulo == 'Panerita'){
                texto = `This is a personal project, a SPA and PWA for a third party of said company, which is a distributor of food products in both the north and south of Tucumán.
                Here we have roles with different permissions, Super Administrator, Administrator, Salesperson and Secretary. Built in HTML, CSS, JS, Bootstrap 5, PHP and Mysql. <br><b>User: </b>admin@admin.com / <b>Password: </b>administrador`;
            }else if(_proyectos.titulo == 'Notas'){
                texto = `Made with Bootstrap, HTML and JS, it is a PWA focused on the offline operation of a simple notes application, with the PouchDB (indexDB) library and Using a pivot table. `;
            }else if(_proyectos.titulo == 'Climap'){
                texto = `
                Made with React JS, and CSS, it is a PWA with a very simple design, with the use of React Router and Hosted in google cloud (which allows a better experience with the routes), it makes use of Openweathermap and Mapbox.`;
            }
        }else if(document.cookie.includes('es/es')){
            if(_proyectos.titulo == 'Akins'){
                texto = `Mi primer Pagina estatica y de Maquetacion. Hecha con HTML, CSS, JavaScript (JQuery). Sirvio para promocionar el sitio de un entonces servidor de videojuego.`;
            }else if(_proyectos.titulo == 'Hora Bondi'){
                texto = `Esta es una SPA y PWA de acceso publico y de uso diario, en la cual podemos consultar los horarios de los colectivos urbanos de la provincia de Tucumán, entre ellos: Exprebus, Tesa, Gutierrez.
                Ademas podemos Consultar los precios de antemano, ver publicaciones de cada empresa o del sitio, e imprimir los horarios. Construido en HTML, CSS, JS, Materialize, PHP y Mysql.`;
            }else if(_proyectos.titulo == 'Panerita'){
                texto = `Este es un proyecto personal una SPA y PWA para una tercierizada de dicha empresa, la cual es distribuidora de productos alimenticios tanto en norte como en sur tucumano.
                Aqui tenemos roles con diferentes permisos, Super Administrador, Administrador, Vendedor y Secretaria. Construido en HTML, CSS, JS, Bootstrap 5, PHP y Mysql. <br><b>Usuario: </b>admin@admin.com / <b>Contraseña: </b>administrador`;
            }else if(_proyectos.titulo == 'Notas'){
                texto = `Hecho con Bootstrap, HTML y JS, es una PWA centrada en el funcionamiento offline de una aplicacion simple de notas, con la libreria PouchDB (indexDB) y Uso de una tabla dinamica.`;
            }else if(_proyectos.titulo == 'Climap'){
                texto = `Hecho con React JS, y CSS, es una PWA de muy simple diseño, con uso de React Router y Hosteada en google cloud (lo que permite mejor experiencia con las rutas), hace uso de Openweathermap y Mapbox.`;
            }
        }
        return texto;
    }
}
