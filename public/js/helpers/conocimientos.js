import {Rutas} from './rutas.js';
export function conocimientos(){
    let ruta = new Rutas();
/* HTML5, CSS3, JS(ES5 / ES6), BOOSTRAP, MATERIALIZE, JQUERY, REACT, PHP7, NODEJS, EXPRESS, MYSQL */
    const $listado_conocimientos = document.getElementById('listado_conocimientos');
    const $exampleModal = document.getElementById('exampleModal');
    const $ejemplo = document.getElementById('ejemplo');
    const $fragment = document.createDocumentFragment();
    const _conocimientos = [
        {
            titulo:'HTML5',
            img:`${ruta.publica}img/metas/HTML5.svg`,
            desc:`He realizado muchos cursos, por los cuales adquirí buenas practicas para el uso correcto de las etiquetas 
            fundamentales para una estructura solida de una pagina, o aplicacion web. Uso correcto de meta etiquetas para tener buen posicionamiento
            , practicas de SEO fundamentales. Aun asi estoy atento a las nuevas actualizaciones publicadas por la W3.`,
            list:['Maquetación Básica.','Semantica HTML','Atributos de accesibilidad','Meta etiquetas para SEO y PWA','Inserción de Videos, Audios.','Formularios','Templates', 'SVG']
        },
        {
            titulo:'CSS3',
            img:`${ruta.publica}img/metas/CSS3.svg`,
            desc:`Maquetacion basica, uso correcto y simplificado de un sitio para optimizar las hojas de estilo, uso de variables css, animaciones.
            Uso de Flexbox y Grid system adecuado.`,
            list:['Selectores en cascada','Especificidad de selectores','Pseudo elementos','Variables','First Mobile', 'Media queries','Transiciones y animaciones']
        },
        {
            titulo:'JavaScript (ES5 / ES6)',
            img:`${ruta.publica}img/metas/logo-javascript.svg`,
            desc:`Conocimientos Intermedios de JavaScript, desde el estandar ES5 y ES6, pero atento a las nuevas especificaciones. Uso correcto de ficheros JS modulados para
            mayor orden, uso adecuado de constantes y variables, scope, funciones, clases, promesas, funciones asincronas, y API de los navegadores. Implementacion de  Service Workers para almacenar 
            recursos en memoria caché para PWA. Localstorage, cookies, y sesion storage.`,
            list:['Variables: const, let, var', 'Funciones flecha','Clases, instancias, herencia', 'Callback','Fetch API']
        },
        {
            titulo:'Bootstrap',
            img:`${ruta.publica}img/metas/bootstrap-5-1.svg`,
            desc:`Sigo el framework de diseño desde la version 3, el cual use en el proyecto beta de panerita (detallado en la seccion de proyectos), y en la version final uso bootstrap 5
            aun asi es fundamental conocer como trabajaron con este framework desde entonces, sus componentes mas actuales, su paleta de colores y sistema de rejillas.`,
            list:['Template básico', 'Bootstrap grid','Flex clases', 'Lo usé desde la versión 3']
        },
        {
            titulo:'Materialize',
            img:`${ruta.publica}img/metas/materialize.svg`,
            desc:`Aunque sea un framework para mi gusto muy poco valorado, pude sacarle el maximo provecho, si bien no es posible usar flexbox, su sistema de rejillas fue mas que suficiente,
            y sus compoenentes para mi gusto fueron superiores a los de Bootstrap, este framework lo use en el proyecto de HoraBondi. Su sidebar y botones me parecieron geniales.`,
            list:['Materialize grid', 'Sistema de paleta de colores', 'Uso de componentes y configuración']
        },
        {
            titulo:'JQuery',
            img:`${ruta.publica}img/metas/jquery-1.svg`,
            desc:`Esta libreria de cross browser, la use en el proyecto beta de panerita, en ese entonces no estaba al tanto de las nuevas especificaciones de JavaScript, pero aun
            me parece una excelente libreria, simplifica muchas funcionalidades basicas, aqui aprendi lo que era AJAX e implementarlo casi siempre.`,
            list:['Selectores', 'Ajax', 'Carga de archivos', 'Cropiejs','Jquery validator pluggin']
        },
        {
            titulo:'React',
            img:`${ruta.publica}img/metas/react-black.svg`,
            desc:`Me decidí aprender esta libreria JS por lo tan popular y mencionada que es, aunque lleve mas tiempo entender su funcionamiento, las ultimas versiones
            dejan mas a claro que estan codo a codo con lo ultimo de JavaScript. Hasta ahora sigo estudiandola y me encanta.`,
            list:['Componentes de clase', 'Componentes funcionales', 'Estado', 'Hooks','Reducers','Context','React Redux']
        },
        {
            titulo:'Php 7',
            img:`${ruta.publica}img/metas/php-1.svg`,
            desc:`Lo empecé a estudiar en la Facultad, y me sigue gustando a pesar de que quiera aprender Nodejs, la forma en que usamos las variables, requerimos otros archivos, creamos clases y tiene integrado metodos para conectar con mysql es muy simple
            , si en algun proyecto usan este lenguaje seria bueno colaborar en ello. En todos mis proyectos no use ningun framework de este lenguaje`,
            list:['Variables', 'Variables de sesión','POO', 'Mysql','Manejo de errores']
        },
        {
            titulo:'Nodejs',
            img:`${ruta.publica}img/metas/nodejs.svg`,
            desc:`Este entorno de ejecucion es donde quiero estar. La idea de aprender un mismo lenguaje tanto en cliente como en servidor me
            parecio excelente. Aun estoy aprendiendolo y pero me encanta, quiero dedicarle mas tiempo y estar atento a las nuevas versiones. El uso
            de NPM me parece muy sencillo y me encanta.`,
            list:['Organización de ficheros para proyecto', 'Documentación adecuada de proyectos', 'Express','Express router y middlewares', 'jwt','Socket.io','Rest server','Variables de entorno']
        },
        {
            titulo:'MySql',
            img:`${ruta.publica}img/metas/mysql-2.svg`,
            desc:`Desde la Facultad hasta ahora, solo me centre en este motor y modelo de bases de datos, me gusta la idea de tener estos datos estructurados y relacionados 
            correctamente.`,
            list:['Configuración básica con phpmyadmin o workbench','Perfiles','Manejo de consultas SQL en general','Creación de campos con restricciones', 'Indexado de campos', 'Disparadores', 'Vistas', 'Procedimientos Almacenados', 'Respaldo de datos']
        }
    ]

    _conocimientos.forEach(e=>{
        $fragment.appendChild(crearTarjeta(e));
    })

    $listado_conocimientos.appendChild($fragment);
    
    let data = document.querySelectorAll('.tarjeta');
    data.forEach(e=>{
        e.addEventListener('click', (el)=>{
            buscar(e.title);
        })
    })

    function buscar(titulo){
        let conocimiento = _conocimientos.find(e=>e.titulo == titulo);
        $exampleModal.querySelector('#exampleModalLabel').textContent = conocimiento.titulo;
        $exampleModal.querySelector('#exampleModalBody img').src = conocimiento.img;
        /*$exampleModal.querySelector('#exampleModalBody p').textContent = conocimiento.desc;*/
        $exampleModal.querySelector('#exampleModalBody ul').innerHTML = '';
        if(conocimiento.list.length > 0){
            let frag = document.createDocumentFragment();
            conocimiento.list.forEach(e=>{
                let li = document.createElement('li'); li.textContent = e;
                frag.appendChild(li);
            })
            $exampleModal.querySelector('#exampleModalBody ul').appendChild(frag);
        }
        $ejemplo.click();
    }

    function crearTarjeta(conocimientos){// data-bs-toggle="modal" data-bs-target="#exampleModal"
        const $tarjeta = document.createElement('div'); $tarjeta.classList.add('tarjeta'); $tarjeta.title = conocimientos.titulo; 
        const $img = document.createElement('img'); $img.src = conocimientos.img; $img.setAttribute('data-bs-toggle','modal');$img.setAttribute('data-bs-target','#exampleModal');
        const $pie = document.createElement('div'); $pie.innerHTML = `<h4>${conocimientos.titulo}</h4>`;
        $tarjeta.appendChild($img); $tarjeta.appendChild($pie);
    
        return $tarjeta;
    }
}

