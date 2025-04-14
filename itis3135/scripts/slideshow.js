let slideIndex = 1;

function showSlides(n) {
    let slides = $(".mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.hide();
    slides.eq(slideIndex - 1).fadeIn(); // Use fadeIn for smoother transition
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

$(document).ready(function() {
    showSlides(slideIndex);
    $(".prev").click(function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        plusSlides(-1);
    });
    $(".next").click(function(e) {
        e.preventDefault();
        plusSlides(1);
    });
    $(".thumbnail-container a").click(function(e) {
        e.preventDefault();
        let index = $(this).index() + 1;
        currentSlide(index);
    });
});