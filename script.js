const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

function openLightbox(index) {
    const images = document.querySelectorAll('.thumbnail');
    lightboxImage.src = images[index].src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImage.src = '';
}







