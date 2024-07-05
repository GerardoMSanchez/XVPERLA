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
    const eventDate = new Date('2024-07-20T18:00:00');

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


const maxInvitadosPorAsistente = {
    'Acosta Luna': 3,
    'Adame Sosa': 2,
    'Aguilar Reina': 4,
    'Aguirre Hernández': 3,
    'Alain': 1,
    'Alan': 1,
    'Alejandra': 1,
    'Allen Demian Chapa Treviño': 1,
    'Altair': 1,
    'Alvarez Basurto': 3,
    'Alvaro': 1,
    'Anahi': 1,
    'Basurto Dueñez': 3,
    'Betancourt Daher': 3,
    'Carlos Elian': 1,
    'Chavez Hernández': 1,
    'Chavez Mireles': 5,
    'Chavez Vazquez': 5,
    'Dani': 1,
    'Dante': 1,
    'Diana': 1,
    'Doña Prici': 4,
    'Dueñez Alcocer': 2,
    'Duque Maya': 5,
    'Erick': 2,
    'Espinoza Marquez': 4,
    'Evan': 1,
    'Facundo Contreras': 4,
    'Facundo Rocha': 2,
    'Fernanda': 1,
    'Flores Basurto': 5,
    'Flores del Río': 2,
    'Flores Garza': 5,
    'Flores Hernández': 2,
    'Gallegos': 7,
    'Gallegos Basurto': 3,
    'Gaona Martinez': 2,
    'Gonzalez Hernández': 2,
    'Guerrero Daher': 4,
    'Guerrero Gonzalez': 4,
    'Gutierrez Chavez': 4,
    'Hernández Arroyo': 3,
    'Hernández Escobar': 4,
    'Hernández Gutierrez': 4,
    'Hernández Jaime': 4,
    'Hernández Lara': 1,
    'Hernández Lazcano': 4,
    'Hernández Mireles': 2,
    'Hernández Padilla': 2,
    'Hernández Palomo': 2,
    'Herrera Vega': 4,
    'Ibarra Hernández': 5,
    'Jesus Arnulfo Sepulveda': 1,
    'Jochua': 1,
    'Juan Pablo Farias Garcia': 2,
    'Karina Melendez Hernández': 2,
    'Karol Coronado': 1,
    'Kary del Angel': 1,
    'Katy': 1,
    'Leonardo Yeray Constantino Blanco': 1,
    'Leopoldo': 1,
    'Longoria Martinez': 3,
    'Luis Emilio': 1,
    'Luis Manuel Melendez Hernández y Familia': 3,
    'Lupita Melendez Hernández': 2,
    'Macías Gonzalez': 5,
    'Maldonado Yañez': 3,
    'Mandy': 5,
    'Manuel Vidaña': 2,
    'Mariana': 1,
    'Martinez Gonzalez': 4,
    'Martinez Perales': 5,
    'Martinez Sanchez': 3,
    'Max': 1,
    'Melendez Garcia': 4,
    'Melendez Hernández': 1,
    'Melissa': 1,
    'Mendoza Hernández': 7,
    'Miss. Adamary': 1,
    'Molina Ocañas': 4,
    'Montes Hernandez': 3,
    'Muñoz Flores': 4,
    'Narvaez Cerda': 4,
    'Nelly Melendez Hernández y Familia': 4,
    'Nelly Montserrat Cavazos Garcia': 1,
    'Omar Antonio Garza Valles': 1,
    'Orozco Tamez': 4,
    'Ortega Gonzalez': 4,
    'Ortega Rivas': 5,
    'Oscar Ian Huerta Torres': 1,
    'Osuna Calderon': 3,
    'Ovidio': 2,
    'Perez Hernández': 4,
    'Prof. Jawer': 1,
    'Prof. Julio': 1,
    'Prof. Simón': 1,
    'Puente García': 4,
    'Puente Ornelas': 2,
    'Regina': 1,
    'Ricardo Dueñez Rocha': 2,
    'Robert Brian Lowe Camacho ': 1,
    'Rocio Dueñez Rocha': 1,
    'Sandra Chavez Hernández y Familia': 3,
    'Sanjuana Dueñez Rocha y Familia': 3,
    'Sauceda de la Cruz': 2,
    'Saucedo Gonzalez': 4,
    'Sebastian ': 1,
    'Silva Hernández': 4,
    'TommyLee Jones Covarrubias Armendariz': 1,
    'Tony': 1,
    'Tovar Hernández': 3,
    'Vanessa': 1,
    'Vicente Rolando Flores Hernández': 2,
    'Yañez Flores': 3,
    'Yañez Moreno': 5,
    'Zoe': 1
};

function mostrarOpciones() {
    var nombreSeleccionado = document.getElementById('nombre').value;
    var opciones = document.getElementById('opciones');
    if (nombreSeleccionado) {
        opciones.classList.remove('hidden');
    } else {
        opciones.classList.add('hidden');
    }
}

function mostrarInvitados(asistira) {
    var invitados = document.getElementById('invitados');
    var nombreSeleccionado = document.getElementById('nombre').value;
    var maxInvitados = maxInvitadosPorAsistente[nombreSeleccionado] || 0;
    var inputInvitados = document.getElementById('num_invitados');

    if (asistira) {
        invitados.classList.remove('hidden');
        inputInvitados.max = maxInvitados;
        inputInvitados.placeholder = `Máximo ${maxInvitados} invitados`;
    } else {
        invitados.classList.add('hidden');
        inputInvitados.value = '';
    }
}

function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var asistira = document.getElementById('invitados').classList.contains('hidden') ? "No" : "Sí";
    var numInvitados = document.getElementById('num_invitados').value || 0;

    var mensaje = `Hola, soy ${nombre}. ${asistira === "Sí" ? `Asistiré con ${numInvitados} invitado(s).` : `No podré asistir.`}`;
    var numero = "8123822075"; // Reemplaza con el número de WhatsApp destinatario
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
