export function galery(){
    const $darken3 = document.getElementById('darken3');
    const $body = document.getElementsByTagName('body')[0];
    document.addEventListener('click', (e)=>{


        //DETECCION DE MOBIL
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            if(e.target.classList.value == 'galery'){
                $darken3.innerHTML='';
                let $img = document.createElement('img'); $img.src = e.target.src;
                let $span = document.createElement('span'); $span.id='close-galery'; $span.classList.add('fas'); $span.classList.add('fa-times-circle'); $span.classList.add('close-galery');
                $darken3.appendChild($span);$darken3.appendChild($img);
                $darken3.classList.add('galery-on');
                $body.style.overflowY = 'hidden';
            }else if(e.target.id == 'close-galery'){
                $darken3.innerHTML = '';
                $darken3.classList.remove('galery-on');
                $body.style.overflowY = 'scroll';
            }
        }       
        
    })
}