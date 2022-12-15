const menu = document.querySelector('#mobile-menu'); // the div
const menuLinks = document.querySelector('.navbar__menu'); // the ul

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})