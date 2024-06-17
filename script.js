document.addEventListener("DOMContentLoaded", function() {
    
   
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        let valid = true;

        // Name field validation
        if (nameField.value.trim() === "") {
            valid = false;
            alert("Name field cannot be empty.");
        }

        // Email field validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            valid = false;
            alert("Please enter a valid email address.");
        }

        // Message field validation
        if (messageField.value.trim() === "") {
            valid = false;
            alert("Message field cannot be empty.");
        }

        if (!valid) {
            event.preventDefault();
        }
    });

   
});
