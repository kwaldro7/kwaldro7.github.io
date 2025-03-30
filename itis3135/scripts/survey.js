document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('introForm');
    const formContainer = document.getElementById('formContainer');
    const resultContainer = document.getElementById('resultContainer');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        const courseInputs = document.querySelectorAll('.course-input');
        const courses = Array.from(courseInputs).map((input) => input.value);
        const imageFile = document.getElementById('introImage').files[0];
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '#';

        resultContainer.innerHTML = `
            <h2>Welcome, ${data.name}!</h2>
            <p>Mascot: ${data.mascot}</p>
            <img src="${imageUrl}" alt="${data.caption}" id="userImage">
            <p>Caption: ${data.caption}</p>
            <h3>Personal Background</h3>
            <p>${data.personal}</p>
            <h3>Professional Background</h3>
            <p>${data.professional}</p>
            <h3>Academic Background</h3>
            <p>${data.academic}</p>
            <h3>Web Development Background</h3>
            <p>${data.webdev}</p>
            <p>Primary Platform: ${data.platform}</p>
            <h3>Courses</h3>
            <ul>${courses.map((course) => `<li>${course}</li>`).join('')}</ul>
            <p>Funny Thing: ${data.funny}</p>
            <p>Anything Else: ${data.else}</p>
            <button onclick="resetForm()">Reset Form</button>
        `;

        formContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    });

    form.addEventListener('reset', function() {
        document.getElementById('courseFields').innerHTML = '';
        document.getElementById('loadImage').innerHTML = ''; // Clear preview image
    });
});

function addCourseField() {
    const courseFields = document.getElementById('courseFields');
    const div = document.createElement('div');
    div.className = 'course-entry';
    div.innerHTML = `
        <input type="text" class="course-input" placeholder="Enter course name">
        <button type="button" onclick="this.parentElement.remove()">Delete</button>
    `;
    courseFields.appendChild(div);
}

function resetForm() {
    const formContainer = document.getElementById('formContainer');
    const resultContainer = document.getElementById('resultContainer');
    document.getElementById('introForm').reset();
    document.getElementById('courseFields').innerHTML = '';
    document.getElementById('loadImage').innerHTML = ''; // Clear preview image
    resultContainer.style.display = 'none';
    formContainer.style.display = 'block';
}

function loadImage() {
    const imageInput = document.getElementById('introImage');
    const imageFile = imageInput.files[0];
    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        document.getElementById('loadImage').innerHTML = `<img src="${imageUrl}" alt="Preview">`;
    } else {
        document.getElementById('loadImage').innerHTML = '<p>No image selected.</p>';
    }
}