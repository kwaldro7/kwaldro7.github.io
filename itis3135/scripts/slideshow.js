$(document).ready(function() {
    let slideIndex = 1;

    function showSlides(n) {
        let slides = $(".mySlides");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        slides.hide();
        slides.eq(slideIndex - 1).show();
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    showSlides(slideIndex);
});