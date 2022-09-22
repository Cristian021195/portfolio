export function renderMenu(){

    const $ul = document.createElement('ul');
    const $ul_nav = document.querySelector('.navbar-line');
    const $btn_menu = document.getElementById('btn-menu');
    const $menu = document.getElementById('menu');
    const $darken_1 = document.getElementById('darken1');
    const $darken_2 = document.getElementById('darken2');
    const $footer = document.getElementsByTagName('footer')[0];
    const $body = document.getElementsByTagName('body')[0];

    let hide = true;

    const menu = [
        {
            item: 'inicio',
            icon:'home',
            links: []
        },
        {
            item: 'referencias',
            icon:'user-tie',
            links: []
        },
        {
            item: 'conocimientos',
            icon:'layer-group',
            links: []
        },
        {
            item: 'extras',
            icon:'tools',
            links: []
        },
        {
            item: 'proyectos',
            icon:'suitcase',
            links: []
        },
        {
            item: 'contacto',
            icon:'mail-bulk',
            links: []
        }
    ]
    menu.forEach(li=>{
        let $li = document.createElement('li');$li.classList.add('nav-item');
        let $a = document.createElement('a'); $a.classList.add('nav-link'); $a.classList.add('text-light'); $a.href = `#${li.item}`;
        $a.style.display = 'flex'; $a.style.alignItems = 'center';

        $a.innerHTML = `<i class="fas fa-${li.icon}"></i>&nbsp;${li.item}`;

        //$a.classList.add('scrollactive');

        $li.appendChild($a);
        $ul.appendChild($li);

        let $li_nav = $li.cloneNode(true);
        $ul_nav.appendChild($li_nav);
    });
    $menu.appendChild($ul);

    checkStatus(hide);

    $darken_1.addEventListener('click', (e)=>{
        if(!hide){
            if(e.target.id == 'darken2'){
                hide = !hide;        
                checkStatus(hide);
            }
        }
    });
    $btn_menu.addEventListener('click', ()=>{
        hide = !hide;        
        checkStatus(hide);
    });

    function checkStatus(hide){
        if(!hide){
            $menu.classList.remove('d-none');
            $darken_1.classList.add('darken');
            $darken_2.classList.add('darken');
            $darken_2.classList.remove('d-none');
            $menu.classList.remove('toggle-menu-hide');
            $menu.classList.add('toggle-menu-show');
            $footer.style.zIndex = -1;
            $menu.style.zIndex = 1;

            $darken_1.classList.remove('darken-hide');
            $darken_2.classList.remove('darken-hide');
            $body.style.overflowY = 'hidden';
        }else{
            $menu.classList.add('toggle-menu-hide');
            $menu.classList.remove('toggle-menu-show');
            $darken_1.classList.remove('darken');
            $darken_2.classList.remove('darken');
            $darken_2.classList.add('d-none');
            $footer.style.zIndex = 0;

            $darken_1.classList.add('darken-hide');
            $darken_2.classList.add('darken-hide');
            $body.style.overflowY = 'scroll';
        }
    }

    window.addEventListener('resize', (e)=>{
        if(window.innerWidth > 767){
            hide = true;
            checkStatus(hide);
        }
    })
}