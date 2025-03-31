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
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : 'images/keatonfence.jpg'; // Fallback to default image

        resultContainer.innerHTML = `
            <h2>${data.name}: Introduction</h2>
            <figure>
                <img src="${imageUrl}" alt="${data.name}">
                <figcaption>${data.caption}</figcaption>
            </figure>
            <ul>
                <li><b>Personal Background: </b>${data.personal}</li>
                <li><b>Professional Background: </b>${data.professional}</li>
                <li><b>Academic Background: </b>${data.academic}</li>
                <li><b>Background in this Subject: </b>${data.webdev}</li>
                <li><b>Primary Computer Platform: </b>${data.platform}</li>
                <li><b>Courses I'm Taking and Why:</b></li>
                <ul>
                    ${courses.map((course) => `<li><b>${course.split(': ')[0]}: </b>${course.split(': ')[1]}</li>`).join('')}
                </ul>
                <li><b>Funny/Interesting Item to Remember me by: </b>${data.funny}</li>
                <li><b>I'd also like to Share: </b>${data.else}</li>
            </ul>
            <button onclick="resetForm()">Back to Form</button>
        `;

        formContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    });

    form.addEventListener('reset', function() {
        document.getElementById('courseFields').innerHTML = '';
        document.getElementById('loadImage').innerHTML = '';
    });
});

function addCourseField() {
    const courseFields = document.getElementById('courseFields');
    const div = document.createElement('div');
    div.className = 'course-entry';
    div.innerHTML = `
        <input type="text" class="course-input" placeholder="Enter course name and reason (e.g., Course - Reason)" required>
        <button type="button" onclick="this.parentElement.remove()">Delete</button>
    `;
    courseFields.appendChild(div);
}

function resetForm() {
    const formContainer = document.getElementById('formContainer');
    const resultContainer = document.getElementById('resultContainer');
    document.getElementById('introForm').reset();
    document.getElementById('courseFields').innerHTML = '';
    document.getElementById('loadImage').innerHTML = '';
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