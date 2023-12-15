//Variable para mostrar menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


//Mostrar Menu
/* Valida si la constante existe */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//Ocultar Menu
/* Valida si la contante existe */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//SHADOW HEADER


//EMAIL JS


//SHOW SCROLL UP


//SCROLL SECTIONS ACTIVE LINK


//DARK LIGHT THEME


//SCROLL REVEAL ANIMATION