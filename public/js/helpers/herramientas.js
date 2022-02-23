import {Rutas} from './rutas.js';
export function herramientas(){
    let ruta = new Rutas();
/* HTML5, CSS3, JS(ES5 / ES6), BOOSTRAP, MATERIALIZE, JQUERY, REACT, PHP7, NODEJS, EXPRESS, MYSQL */
    const $listado_herramientas = document.getElementById('listado_herramientas');
    const $fragment = document.createDocumentFragment();
    const _herramientas = [
        {
            titulo:'Paquete Office',
            img:`${ruta.publica}img/metas/office.svg`,
            desc:`Paquete Office, (Word, Excel, Powerpoint)`,
            list:['Etiquetas basicas y estandar.','Atributos de accesibilidad','Metaetiquetas para SEO y PWA','Insercion de Videos, Audios.','Formularios','Templates', 'Svg']
        },
        {
            titulo:'Postman',
            img:`${ruta.publica}img/metas/postman.svg`,
            desc:`Testing de Rest API's.`,
            list:['Selectores en cascada','Especificidad de selectores','Variables','First Mobile']
        },
        {
            titulo:'Adobe XD',
            img:`${ruta.publica}img/metas/adobe-xd.svg`,
            desc:`Diseño de logos, e interfaces.`,
            list:['const, let, var', 'Funciones flecha','Clases, instancias, herencia', 'Fetch API', 'Websocket client']
        },
        {
            titulo:'Figma',
            img:`${ruta.publica}img/metas/figma.svg`,
            desc:`Diseño de logos, e interfaces.`,
            list:[]
        },
        {
            titulo:'Idiomas',
            img:`${ruta.publica}img/metas/languaje.svg`,
            desc:`Inglés intermedio para lectura y escritura`,
            list:[]
        }
    ]

    _herramientas.forEach(e=>{
        $fragment.appendChild(crearTarjeta(e));
    })

    $listado_herramientas.appendChild($fragment);

    function crearTarjeta(conocimientos){// data-bs-toggle="modal" data-bs-target="#exampleModal"
        const $tarjeta = document.createElement('div'); $tarjeta.classList.add('tarjeta-ns'); $tarjeta.title = conocimientos.titulo; 
        const $img = document.createElement('img'); $img.src = conocimientos.img;
        const $pie = document.createElement('div'); $pie.innerHTML = `<h4>${conocimientos.titulo}</h4><p class="fs-6">${conocimientos.desc}</p>`;
        $tarjeta.appendChild($img); $tarjeta.appendChild($pie);    
        return $tarjeta;
    }
}

