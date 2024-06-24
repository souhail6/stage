// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        // If validation passes, you can send the form data using AJAX, for example
        alert("Formulaire soumis avec succès!");
        // Here you can add your code to handle the form data (e.g., send it to your server)
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
