/* HEADER */
const btnReponsive = document.querySelector('.btn-toggle');
const menuReponsive = document.querySelector('.menu-responsive');
const header = document.querySelector('header')

btnReponsive.addEventListener('click',()=>{
    const iconBars = document.querySelector('.fa-chevron-right');
    const iconClose = document.querySelector('.fa-xmark');

    if(iconBars.classList.contains('active')){
        iconBars.classList.remove('active');
        iconClose.classList.add('active');
        menuReponsive.classList.add('show');
        menuReponsive.style.top= `${header.clientHeight}px`;
    }else{
        iconBars.classList.add('active');
        iconClose.classList.remove('active');
        menuReponsive.classList.remove('show');
    }
})

