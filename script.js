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




 document.addEventListener("DOMContentLoaded", function() {
     const menuToggle = document.querySelector(".menu-toggle");
     const navMenu = document.getElementById("navMenu");

     menuToggle.addEventListener("click", function() {
         navMenu.classList.toggle("active");
     });
 });







