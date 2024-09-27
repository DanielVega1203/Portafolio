//Variable para mostrar menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//Mostrar Menu
/* Valida si la constante existe */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//Ocultar Menu
/* Valida si la contante existe */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Quitar menu movil
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

//Sombra de encabezado

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
//Contacto Email JS

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //Email JS = serviceID, templateID, #form, publicKey

  emailjs
    .sendForm(
      "service_d2iv10e",
      "template_e10ym0j",
      "#contact-form",
      "3-Ov3PPfTXtpBDzkZ"
    )
    .then(
      () => {
        //mensaje enviado
        contactMessage.textContent = "¡Mensaje enviado con exito! ✔️";

        //elimina el mensaje después de cinco segundos
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //limpia el formulario
        contactForm.reset();
      },
      () => {
        //error de mensaje
        contactMessage.textContent =
          "¡Mensaje no enviado(error de servicio)! ❌";
        //limpia el formulario
        contactForm.reset();
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

//Mostrar icono para desplegar hacia arriba
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
//SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeigh,
      sectionTop = current.ofsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        "nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

//Modo Oscuro
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? "ri-contrast-2-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-contrast-2-line" ? "add" : "remove"
  ](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//Animacion para revelar paginaa
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__perfil, .about__image, .contact__mail", { origin: "right" });
sr.reveal(
  ".home__name, .home__info, .about__container, .section__tittle-1, .about__info, .contact__social, .contact__data",
  { origin: "left" }
);
sr.reveal(".services__card, .projects__card", { interval: 100 });

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "archivos/img/html1.png",
    "archivos/img/html2.png",
    "archivos/img/html3.png",
    "archivos/img/html4.png",
    "archivos/img/html5.png",
    "archivos/img/html6.png",
    "archivos/img/html7.png",
    "archivos/img/html8.png",
    "archivos/img/html9.png",
    "archivos/img/html10.png",
    "archivos/img/html11.png",
    "archivos/img/html12.png",
  ];

  const images2 = [
    "archivos/img/react1.png",
    "archivos/img/react2.jpg",
    "archivos/img/react3.jpg",
  ];

  let imageCarrusel = 0;
  let imageCarrusel2 = 0;

  const projectImage = document.getElementById("projectImage");
  const projectImage2 = document.getElementById("projectImage2");

  function changeImage() {
    projectImage.classList.add("fade-out");
    projectImage2.classList.add("fade-out");

    setTimeout(() => {
      imageCarrusel = (imageCarrusel + 1) % images.length;
      imageCarrusel2 = (imageCarrusel2 + 1) % images2.length;

      projectImage.src = images[imageCarrusel];
      projectImage2.src = images2[imageCarrusel2];

      projectImage.classList.remove("fade-out");
      projectImage2.classList.remove("fade-out");
    }, 1000);
  }

  setInterval(changeImage, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleLinks = document.querySelectorAll(".projects__link2");

  toggleLinks.forEach((toggleLink, index) => {
    // Crear las cards una sola vez para cada article
    const extraCardsContainer = toggleLink
      .closest(".projects__card")
      .querySelector(".projects__extra-cards");

    // Definir las cards para cada artículo
    const cardsData = [
      // Cards únicas para el primer article
      [
        {
          image: "archivos/img/html1.png",
          title: "Sneakers Web",
          description:
            "Tienda con búsqueda de items por filtro y apartado de Maps.",
          viewGit: "https://github.com/DanielVega1203/Shop-Search-Bd",
          viewYoutube: "https://www.youtube.com/watch?v=BRsQpXg7lAg",
        },
        {
          image: "archivos/img/html2.png",
          title: "Movie Pool",
          description: "Web con suscripción y carrusel automático.",
          viewGit: "https://github.com/DanielVega1203/webMovie",
          viewYoutube: "https://www.youtube.com/watch?v=gnYROJaQIWA",
        },
        {
          image: "archivos/img/html3.png",
          title: "Less Tent",
          description:
            "Página con formulario de registro y diseño minimalista.",
          viewGit: "https://github.com/DanielVega1203/webFashion",
          viewYoutube: "https://www.youtube.com/watch?v=P942XITC1ZM",
        },
        {
          image: "archivos/img/html4.png",
          title: "Game Info",
          description: "Diseño gaming para una web que difunde un juego.",
          viewGit: "https://github.com/DanielVega1203/webGame",
          viewYoutube: "https://www.youtube.com/watch?v=Nd121YSmJoM",
        },
        {
          image: "archivos/img/html5.png",
          title: "iStore",
          description:
            "Web con un slide en diferentes escalas y animaciones de items.",
          viewGit: "https://github.com/DanielVega1203/iStore",
          viewYoutube: "https://www.youtube.com/watch?v=Wc2nNdfFk8A",
        },
        {
          image: "archivos/img/html6.png",
          title: "CarForm",
          description:
            "Pagina conadd to cart, y animaciones minimalistas, junto con items.",
          viewGit: "https://github.com/DanielVega1203/webCar",
          viewYoutube: "https://www.youtube.com/watch?v=bIqHJ6dsQk0",
        },
        {
          image: "archivos/img/html7.png",
          title: "AdidasShop",
          description: "Tienda con busqueda de items por input y por filtro.",
          viewGit: "https://github.com/DanielVega1203/AdidasShop",
          viewYoutube: "https://www.youtube.com/watch?v=E3JhA6X6C3s",
        },
        {
          image: "archivos/img/html8.png",
          title: "GAP 3D",
          description: "Web con diseño 3D en rotacion, con add to cart y view.",
          viewGit: "https://github.com/DanielVega1203/web3D",
          viewYoutube: "https://www.youtube.com/watch?v=QN0maeS8L1Y",
        },
        {
          image: "archivos/img/html9.png",
          title: "AudioDisc",
          description:
            "Pagina con add to cart, restricciones, condiciones y details.",
          viewGit: "https://github.com/DanielVega1203/webSound",
          viewYoutube: "https://www.youtube.com/watch?v=YhrwWYo7d5E",
        },
        {
          image: "archivos/img/html10.png",
          title: "Runner",
          description:
            "Tienda con modo oscuro y diseño streetwear para cada item.",
          viewGit: "https://github.com/DanielVega1203/webShoes",
          viewYoutube: "https://www.youtube.com/watch?v=ICCAgkqKqwg&t=1s",
        },
        {
          image: "archivos/img/html11.png",
          title: "Tony&Guy",
          description:
            "BarberShop con apartado de ubicacion y filtro por input.",
          viewGit: "https://github.com/DanielVega1203/webBarber",
          viewYoutube: "https://www.youtube.com/watch?v=S4icGw-NBIk",
        },
        {
          image: "archivos/img/html12.png",
          title: "Cult're",
          description:
            "Web con slide por ID y descripcion por ID, diseño minimalista.",
          viewGit: "https://github.com/DanielVega1203/webCulture",
          viewYoutube: "https://www.youtube.com/watch?v=oHpaGT3RwAI",
        },
      ],
      // Cards únicas para el segundo article
      [
        {
          image: "archivos/img/react1.png",
          title: "Phone Store",
          description: "Tienda de reservas, con Base de datos, CRUD completo.",
          viewGit: "#",
          viewYoutube: "https://www.youtube.com/watch?v=FXV9HOYohmM",
        },
        {
          image: "archivos/img/react2.jpg",
          title: "Card 2 - React",
          description: "Descripción de la card 2.",
          viewGit: "#",
          viewYoutube: "#",
        },
        {
          image: "archivos/img/react3.jpg",
          title: "Card 3 - React",
          description: "Descripción de la card 3.",
          viewGit: "#",
          viewYoutube: "#",
        },
      ],
    ];

    // Crear las cards si no están ya en el contenedor
    cardsData[index].forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("projects__extra-card");
      cardElement.innerHTML = `
          <img src="${card.image}" alt="${card.title}" style="width: 100%; height: auto; border-radius: 5px; margin-bottom: 5px;">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
            <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                <a href="${card.viewGit}" target="_blank" style="color: blueviolet;"> GitHub <i class="ri-github-line" style="cursor: pointer;"></i></a>
                <a href="${card.viewYoutube}" target="_blank" style="color: red"> Youtube <i class="ri-youtube-line" style="cursor: pointer;" title="Compartir"></i></a>
            </div>
        `;
      extraCardsContainer.appendChild(cardElement);
    });

    // Agregar el evento de clic para mostrar/ocultar las cards
    toggleLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

      // Determinar si las cards ya están desplegadas
      const isActive = extraCardsContainer.classList.contains("active");

      // Cambiar el texto del botón y mostrar/ocultar las cards
      if (!isActive) {
        extraCardsContainer.classList.add("active"); // Mostrar las nuevas cards
        toggleLink.innerHTML = 'Cerrar <i class="ri-skip-up-line"></i>'; // Cambiar texto
      } else {
        extraCardsContainer.classList.remove("active"); // Ocultar las cards
        toggleLink.innerHTML = 'Desplegar <i class="ri-skip-down-line"></i>'; // Restablecer texto
      }
    });
  });
});
