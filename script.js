document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
        const whatsappURL = `https://api.whatsapp.com/send?phone=8118926229&text=Hola,%20somos%20${familyName}%20y%20asistiremos%20al%20evento%20con%20${guests}%20invitado(s).`;

        // Abrir enlace de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });



    // Configuración del contador regresivo para el evento
    const eventDate = new Date('2024-07-20T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            document.getElementById('countdown-timer').innerHTML = 'El evento ha terminado.';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
