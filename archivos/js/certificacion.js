const images = ['/archivos/img/C1.png', '/archivos/img/C2.png', '/archivos/img/C3.png', '/archivos/img/C4.png']; // Añade aquí tus imágenes
let currentImageIndex = 0;

function showCarousel() {
    const carouselContainer = document.getElementById('carouselContainer');
    
    // Cambiamos el display primero, luego añadimos la clase para el difuminado
    carouselContainer.style.display = 'flex';
    
    setTimeout(() => {
        carouselContainer.classList.add('show');
    }, 10); // Retraso pequeño para activar la animación

    updateImage();
}

function closeCarousel() {
    const carouselContainer = document.getElementById('carouselContainer');
    
    // Removemos la clase de difuminado primero
    carouselContainer.classList.remove('show');
    
    // Esperamos a que la transición termine para ocultar completamente el contenedor
    setTimeout(() => {
        carouselContainer.style.display = 'none';
    }, 500); // El mismo tiempo que la transición en el CSS
}

function updateImage() {
    document.getElementById('carouselImage').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}
