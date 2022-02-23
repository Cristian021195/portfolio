export function secciones(){
    const $theme_color = document.getElementById('theme-color');
    const $header_li = document.querySelectorAll('header ul li a');
    /*const scrollClases = ['primary-scroll','secondary-scroll','success-scroll','pagado-scroll','danger-scroll','warning-scroll','info-scroll','light-scroll','dark-scroll','white-scroll'];*/
    const colores = ['#8bb7ff', '#fd8991', '#e5baff', '#fff799', '#F7B392', '#AFDAE7', '#212529'];
    let spy_switch = true;
    let ventana = window.innerHeight;

    const [introduccion, referencias, conocimientos, extras, metas, proyectos, contacto] = [
        document.getElementById('inicio'),
        document.getElementById('referencias'),
        document.getElementById('conocimientos'),
        document.getElementById('extras'),
        document.getElementById('metas'),
        document.getElementById('proyectos'),
        document.getElementById('contacto'),
    ];


    introduccion.style.backgroundColor = colores[0];
    referencias.style.backgroundColor = colores[1];
    conocimientos.style.backgroundColor = colores[2];
    extras.style.backgroundColor = colores[3];
    metas.style.backgroundColor = colores[4];
    proyectos.style.backgroundColor = colores[5];
    contacto.style.backgroundColor = colores[6];

    let top = 0;

    window.addEventListener('scroll', (e)=>{
        top = window.scrollY;
        if(top >= 0 && top < referencias.offsetTop - 100){// #0d6efd
            $theme_color.setAttribute('content', colores[0]);
            referencias.firstElementChild.classList.add('fadeUp');
            switchToFalse(0);
        }else if(top > referencias.offsetTop - 100 && top < conocimientos.offsetTop - 100 ){
            switchToTrue(1, spy_switch);
            $theme_color.setAttribute('content', colores[1]);
            conocimientos.firstElementChild.classList.add('fadeUp');
        }else if(top > conocimientos.offsetTop - 100 && top < extras.offsetTop - 100){
            switchToFalse(2);
            $theme_color.setAttribute('content', colores[2]);
            extras.firstElementChild.classList.add('fadeUp');
        }
        else if(top > extras.offsetTop - 100 && top < metas.offsetTop - 100){
            switchToTrue(3, spy_switch);
            $theme_color.setAttribute('content', colores[3]);
            metas.firstElementChild.classList.add('fadeUp');
        }else if(top > metas.offsetTop - 100 && top < proyectos.offsetTop - 100){
            switchToFalse(4);
            $theme_color.setAttribute('content', colores[4]);
            proyectos.firstElementChild.classList.add('fadeUp');
        }
        else if(top > proyectos.offsetTop - 100 && top < contacto.offsetTop - 100){
            switchToTrue(5, spy_switch);
            $theme_color.setAttribute('content', colores[5]);
            contacto.firstElementChild.classList.add('fadeUp');
        }        
    });

    function switchToFalse(val){
        if(spy_switch){
            spy_switch = false;
            $header_li.forEach(e=>{e.classList.remove('scrollactive');})
            $header_li[val].classList.add('scrollactive');
        }
    }
    function switchToTrue(val, bool){
        if(!bool){
            spy_switch = true;
            $header_li.forEach(e=>{e.classList.remove('scrollactive');})
            $header_li[val].classList.add('scrollactive');
        }
    }

    function arregloColores(){
        return Math.floor(Math.random()*16777215).toString(16);
    }

}
