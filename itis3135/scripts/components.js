// Function to load HTML components with data-include attribute
function includeHTML() {
    // Find all elements with data-include attribute
    const includes = document.querySelectorAll('[data-include]');
    
    // Process each include element
    includes.forEach(element => {
      const file = element.getAttribute('data-include');
      
      // Fetch the file content
      fetch(file)
        .then(response => {
          // Check for successful response
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          // Replace the element's content with the loaded HTML
          element.innerHTML = data;
          
          // If this is a navigation component, mark the current page as active
          if (file.includes('clientprojectheader.html')) {
            highlightCurrentPage();
          }
        })
        .catch(error => {
          console.error(`Error loading ${file}: ${error}`);
        });
    });
  }
  
  // Function to highlight the current page in navigation
  function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }
  
  // Execute once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', includeHTML);