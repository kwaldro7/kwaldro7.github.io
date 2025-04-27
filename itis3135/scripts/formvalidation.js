document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    const form = document.getElementById('joinForm');
    
    // If form exists on this page
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();
            
            // Reset all error messages
            clearErrors();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const studentId = document.getElementById('studentId');
            
            // Validate fields
            let isValid = true;
            
            // Name validation
            if (!name.value.trim()) {
                showError('name-error', 'Name is required');
                isValid = false;
            }
            
            // Email validation
            if (!email.value.trim()) {
                showError('email-error', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showError('email-error', 'Please enter a valid UNCC email address (@charlotte.edu)');
                isValid = false;
            }
            
            // Student ID validation
            if (!studentId.value.trim()) {
                showError('studentId-error', 'Student ID is required');
                isValid = false;
            } else if (!validateStudentId(studentId.value)) {
                showError('studentId-error', 'Student ID should be 9 digits');
                isValid = false;
            }
            
            // If all validations pass
            if (isValid) {
                // Show success message
                const statusDiv = document.getElementById('submission-status');
                statusDiv.textContent = 'Thank you for your interest! We will contact you soon.';
                statusDiv.className = 'success-message';
                
                // Reset form
                form.reset();
            }
        });
    }
});

// Function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    // Clear status message
    const statusDiv = document.getElementById('submission-status');
    if (statusDiv) {
        statusDiv.textContent = '';
        statusDiv.className = 'hidden';
    }
}

// Function to validate email format
function validateEmail(email) {
    // Check for UNCC email format (ends with @charlotte.edu)
    const regex = /^[^\s@]+@charlotte\.edu$/;
    return regex.test(email);
}

// Function to validate student ID
function validateStudentId(id) {
    // Student ID should be 9 digits
    const regex = /^\d{9}$/;
    return regex.test(id);
}