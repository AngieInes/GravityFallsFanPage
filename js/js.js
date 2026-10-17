// =========================================================
// Formulario de contacto (solo existe en teorias.html)
// Usa EmailJS: https://www.emailjs.com
// =========================================================
const form = document.getElementById("contactForm");
const mensaje = document.getElementById("formMessage");

if (form && mensaje && typeof emailjs !== "undefined") {
    // Reemplazá estos tres valores con los de tu cuenta de EmailJS
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

    emailjs.init({ publicKey: PUBLIC_KEY });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const boton = form.querySelector("button[type='submit']");
        boton.disabled = true;
        mensaje.textContent = "Enviando...";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
            .then(() => {
                mensaje.textContent = "¡Mensaje enviado con éxito! Gracias por compartir tu teoría.";
                form.reset();
            })
            .catch(() => {
                mensaje.textContent = "Hubo un error al enviar el mensaje. Probá de nuevo más tarde.";
            })
            .finally(() => {
                boton.disabled = false;
            });
    });
}
