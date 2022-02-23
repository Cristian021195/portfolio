import {renderMenu} from './helpers/menu.js';
import {secciones} from './helpers/secciones.js';
import {loader} from './helpers/loader.js';
import {proyectos} from './helpers/proyectos.js';
import {conocimientos} from './helpers/conocimientos.js';
import {galery} from './helpers/galery.js';
import { herramientas } from './helpers/herramientas.js';
/*window.onload = () =>{
    renderMenu();
    proyectos();
    secciones();
}*/

const $loader = document.getElementById('loader');
const $main = document.getElementById('main');
const $header = document.getElementsByTagName('header')[0];
const $footer = document.getElementById('contacto');

$main.style.display = 'none';
$header.style.display = 'none';
$footer.style.display = 'none';
scrollTo(0,0)

document.addEventListener('DOMContentLoaded', ()=>{
    //document.addEventListener('contextmenu', event => event.preventDefault());
    renderMenu();
    proyectos();
    secciones();
    conocimientos();
    herramientas();
    galery();

    const $compartir = document.getElementById('compartir');
    $compartir.addEventListener('click', compartir)

    function compartir(){
        if('share' in navigator){
            navigator.share({
                title:'HoraBondi a un amigo',
                text:'Por favor, comparte a quienes la necesiten',
                url:`/portfolio`
            }).then(()=>{
                console.log('Compartido');
            }).catch((err)=>{
                console.log('Error al compartir');
            })
        }else{
            console.log('Error al compartir');
        }                
    }

    if('serviceWorker' in navigator){
        return navigator.serviceWorker.register('/portfolio/sw.js')
        .then((swReg)=>{
            console.log('¡Service worker registrado!')
            modifySwRegistration(swReg)

            swRegistration.pushManager.getSubscription()
            .then((subscription)=> {
                modifySuscriptionBool(!(subscription === null));
                //updateSubscriptionOnServer(subscription);

                if (isSubscribed) {
                    console.log('User IS subscribed.');
                } else {
                    console.log('User is NOT subscribed.');
                }
              //updateBtn();
            });

        }).catch(e=>{console.log(e)
        });
    }else{
        return new Error();
    }

})

window.addEventListener('load', ()=>{
    $loader.innerHTML = '';
    $loader.classList.remove('screen-loader');
    $main.style.display = 'block';
    $header.style.display = 'block';
    $footer.style.display = 'block';
})
