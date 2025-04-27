document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Add click event listener to each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the clicked header
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle visibility of content panel
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});