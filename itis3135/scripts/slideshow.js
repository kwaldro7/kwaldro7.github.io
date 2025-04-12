$(document).ready(function() {
    showSlides(slideIndex);
});

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = $(".mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.hide();
    slides.eq(slideIndex - 1).show();
}