// Navigation Function
const navIconEl = document.querySelector('.nav-icon');
const navCloseEl = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgEl = document.querySelector('.nav-bg');

const navOpen = () => {
    navList.classList.add('show');
    navBgEl.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width:100%; overflow:hidden;';
}

const navClose = () => {
    navList.classList.remove('show');
    navBgEl.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width:100%; overflow-x:hidden;';

}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgEl.addEventListener('click', navClose);

// aos scrolling function

AOS.init({
    offset: 200,
    delay: 100,
    duration:400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorePlasement: 'top-bottom'
}

)