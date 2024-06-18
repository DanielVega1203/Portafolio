const images = ['/archivos/img/C1.png', '/archivos/img/C2.png', '/archivos/img/C3.png', '/archivos/img/C4.png']; // Añade aquí tus imágenes
        let currentImageIndex = 0;

        function showCarousel() {
            document.getElementById('carouselContainer').style.display = 'flex';
            updateImage();
        }

        function closeCarousel() {
            document.getElementById('carouselContainer').style.display = 'none';
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