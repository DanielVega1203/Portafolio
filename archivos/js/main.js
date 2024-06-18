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

//Quitar menu movil
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Sombra de encabezado

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
//Contacto Email JS

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => { 
    e.preventDefault()

    //Email JS = serviceID, templateID, #form, publicKey

    emailjs.sendForm('service_d2iv10e','template_e10ym0j','#contact-form','3-Ov3PPfTXtpBDzkZ')
    .then(()=>{
        //mensaje enviado
        contactMessage.textContent = '¡Mensaje enviado con exito! ✔️'
        
        //elimina el mensaje después de cinco segundos
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000);

        //limpia el formulario
        contactForm.reset()
    }, ()=>{
        //error de mensaje
        contactMessage.textContent = '¡Mensaje no enviado(error de servicio)! ❌'
        //limpia el formulario
        contactForm.reset()
    })
}

contactForm.addEventListener('submit', sendEmail)

//Mostrar icono para desplegar hacia arriba
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
//SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeigh,
              sectionTop = current.ofsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

              if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
              } else {
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

//Modo Oscuro
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'ri-contrast-2-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-contrast-2-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener ('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//Animacion para revelar paginaa
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__perfil, .about__image, .contact__mail', {origin: 'right'})
sr.reveal('.home__name, .home__info, .about__container, .section__tittle-1, .about__info, .contact__social, .contact__data', {origin: 'left'})
sr.reveal('.services__card, .projects__card', {interval: 100})

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "archivos/img/jordan1.png",
        "archivos/img/jordan2.png",
        "archivos/img/jordan3.png",
        "archivos/img/jordan4.png",
        "archivos/img/jordan5.png",
        "archivos/img/jordan6.png",
        "archivos/img/jordan7.png",
        "archivos/img/jordan8.png",
        "archivos/img/jordan9.png"
    ];

    const images2 = [
        "archivos/img/stride.png",
        "archivos/img/stride2.png",
        "archivos/img/stride3.png",
        "archivos/img/stride4.png",
        "archivos/img/stride5.png",
        "archivos/img/stride6.png",
        "archivos/img/stride7.png",
        "archivos/img/stride8.png",
        "archivos/img/stride9.png",
        "archivos/img/stride10.png"
    ];

    const images3 = [
        "archivos/img/iShop.png",
        "archivos/img/iShop2.png",
        "archivos/img/iShop3.png",
        "archivos/img/iShop4.png"
    ];

    const images4 = [
        "archivos/img/fullstack.png",
        "archivos/img/fullstack2.png",
        "archivos/img/fullstack3.png",
        "archivos/img/fullstack4.png",
        "archivos/img/fullstack5.png",
        "archivos/img/fullstack6.png",
        "archivos/img/fullstack7.png",
        "archivos/img/fullstack8.png",
        "archivos/img/fullstack9.png",
        "archivos/img/fullstack10.png",
        "archivos/img/fullstack11.png",
        "archivos/img/fullstack12.png"
    ];

    let imageCarrusel = 0;
    let imageCarrusel2 = 0;
    let imageCarrusel3 = 0;
    let imageCarrusel4 = 0;

    const projectImage = document.getElementById('projectImage');
    const projectImage2 = document.getElementById('projectImage2');
    const projectImage3 = document.getElementById('projectImage3');
    const projectImage4 = document.getElementById('projectImage4');

    function changeImage() {
        projectImage.classList.add('fade-out');
        projectImage2.classList.add('fade-out');
        projectImage3.classList.add('fade-out');
        projectImage4.classList.add('fade-out');

        setTimeout(() => {
            imageCarrusel = (imageCarrusel + 1) % images.length;
            imageCarrusel2 = (imageCarrusel2 + 1) % images2.length;
            imageCarrusel3 = (imageCarrusel3 + 1) % images3.length;
            imageCarrusel4 = (imageCarrusel4 + 1) % images4.length;


            projectImage.src = images[imageCarrusel];
            projectImage2.src = images2[imageCarrusel2];
            projectImage3.src = images3[imageCarrusel3];
            projectImage4.src = images4[imageCarrusel4];

            projectImage.classList.remove('fade-out');
            projectImage2.classList.remove('fade-out');
            projectImage3.classList.remove('fade-out');
            projectImage4.classList.remove('fade-out');

        }, 1000);
    }

    setInterval(changeImage, 5000);
});
