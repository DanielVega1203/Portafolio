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

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
//EMAIL JS

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

//SHOW SCROLL UP
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

//DARK LIGHT THEME
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


//SCROLL REVEAL ANIMATION