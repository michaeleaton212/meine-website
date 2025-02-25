document.addEventListener("DOMContentLoaded", function () {
    // Cursor-Effekt
    const cursor = document.getElementById("cursor");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        });

        // Hover-Effekt für Buttons und Titel
        document.querySelectorAll(".button, h1, h2, h3, h4, #contact-form").forEach(element => {
            element.addEventListener("mouseenter", () => {
                cursor.classList.add("hovered");
            });

            element.addEventListener("mouseleave", () => {
                cursor.classList.remove("hovered");
            });
        });
    } else {
        console.warn("Element '#cursor' nicht gefunden.");
    }

    // EmailJS Initialisierung
    if (typeof emailjs !== "undefined") {
        emailjs.init("PqPY56nEQgsXhzvaJ"); // Ersetze mit deinem Public Key
    } else {
        console.error("EmailJS konnte nicht geladen werden.");
        return;
    }

    // Formular-Verarbeitung
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Formulardaten abrufen
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            // Überprüfung, ob alle Felder ausgefüllt sind
            if (!name || !email || !message) {
                alert("Bitte fülle alle Felder aus!");
                return;
            }

            // EmailJS Parameter
            let templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            // E-Mail senden
            emailjs.send("service_6rczoex", "template_bnv5z4o", templateParams)
                .then(function (response) {
                    alert("Nachricht erfolgreich gesendet!");
                    form.reset(); // Formular zurücksetzen
                }, function (error) {
                    alert("Fehler beim Senden der Nachricht. Bitte versuche es erneut.");
                    console.error("Fehler:", error);
                });
        });
    } else {
        console.warn("Formular '#contact-form' nicht gefunden.");
    }
});
