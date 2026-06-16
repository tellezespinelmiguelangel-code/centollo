// ===== CHATBOT EL CENTOLLO =====
var chatbotAbierto = false;

function toggleChatbot() {
    var chatbot = document.getElementById('chatbot');
    chatbotAbierto = !chatbotAbierto;
    
    if (chatbotAbierto) {
        chatbot.classList.add('active');
    } else {
        chatbot.classList.remove('active');
    }
}

function enviarPregunta(pregunta) {
    var mensajes = document.getElementById('chatbot-mensajes');
    
    // Mensaje del usuario
    var msgUsuario = document.createElement('div');
    msgUsuario.className = 'mensaje usuario';
    msgUsuario.textContent = pregunta;
    mensajes.appendChild(msgUsuario);
    
    // Respuesta del bot
    setTimeout(function() {
        var respuesta = obtenerRespuesta(pregunta);
        var msgBot = document.createElement('div');
        msgBot.className = 'mensaje bot';
        msgBot.innerHTML = '<i class="fas fa-robot"></i> ' + respuesta;
        mensajes.appendChild(msgBot);
        mensajes.scrollTop = mensajes.scrollHeight;
    }, 500);
    
    mensajes.scrollTop = mensajes.scrollHeight;
}

function obtenerRespuesta(pregunta) {
    var respuestas = {
        // Preguntas generales (todas las páginas)
        '¿Cuáles son los horarios?': 'Nuestros horarios son: Lunes a viernes de 8:00 a 14:30, sábados de 8:00 a 14:00. Domingos y festivos cerrado.',
        '¿Dónde están ubicados?': 'Estamos en Calle de Juan Montalvo, 14, 28040 Madrid. También puedes vernos en el mapa de la página de Ubicación.',
        '¿Cómo puedo contactarlos?': 'Puedes llamarnos al 91 533 15 76 o escribirnos a corunesas@pescaderiascorunesas.es',
        '¿Tienen servicio a domicilio?': 'Sí, contamos con servicio de envío a domicilio en Madrid capital. Consulta disponibilidad por teléfono.',
        '¿Qué métodos de pago aceptan?': 'Aceptamos efectivo, tarjetas de crédito/débito, Bizum y transferencia bancaria.',
        '¿Tienen productos frescos?': '¡Por supuesto! Todos nuestros pescados y mariscos son de la lonja del día, traídos directamente de Galicia.',
        '¿Cómo puedo hacer una reserva?': 'Puedes escanear el código QR en la página de Reservas o llamarnos directamente al 91 533 15 76.',
        '¿Tienen estacionamiento?': 'Sí, hay parking público disponible cerca de nuestro establecimiento.',
        '¿Atienden pedidos grandes?': 'Sí, para eventos y pedidos corporativos contáctanos con al menos 48 horas de anticipación.',
        '¿Tienen opciones para alérgicos?': 'Sí, informa a nuestro personal sobre tus alergias y te ayudaremos a elegir productos seguros.',
        
        // Preguntas específicas INICIO
        '¿Qué es el centollo?': 'El centollo (Maja squinado) es un crustáceo braquiuro que vive en fondos rocosos a más de 100m de profundidad. También se le conoce como chánguro o cangrejo velludo.',
        '¿De dónde traen sus productos?': 'Traemos nuestros productos directamente de Galicia, de la lonja más fresca de España.',
        '¿Cuánto pesa un centollo?': 'Nuestros centollos pesan entre 500 gramos y 4 kilogramos, dependiendo de la temporada.',
        
        // Preguntas específicas MENÚ
        '¿Cuál es la receta más popular?': 'Nuestra "Falsa mousse de centollo en cucharitas" es la favorita de nuestros clientes.',
        '¿Tienen recetas vegetarianas?': 'Nos especializamos en productos del mar, pero tenemos algunas opciones de guarnición vegetales.',
        '¿Cuánto tiempo tardan las recetas?': 'Varía entre 20 minutos y 2 horas, dependiendo de la complejidad del plato.',
        
        // Preguntas específicas CONTACTO
        '¿Cuánto tardan en responder?': 'Respondemos en un plazo de 24 a 48 horas hábiles.',
        '¿Puedo enviar una queja?': 'Por supuesto, todas las sugerencias y quejas son bienvenidas para mejorar nuestro servicio.',
        
        // Preguntas específicas UBICACIÓN
        '¿Cómo llego en metro?': 'La estación más cercana es Moncloa, línea 6. Desde allí son 5 minutos caminando.',
        '¿Hay autobuses cercanos?': 'Sí, las líneas 1, 44, 82 y 132 pasan cerca de nuestro local.',
        
        // Preguntas específicas RESERVAS
        '¿Puedo cancelar mi reserva?': 'Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes sin costo alguno.',
        '¿Para cuántas personas puedo reservar?': 'Puedes reservar hasta 8 personas. Para grupos mayores, contáctanos por teléfono.',
        
        // Preguntas específicas CRÉDITOS
        '¿Quiénes desarrollaron esta página?': 'Esta página fue desarrollada por Miguel Ángel Téllez Espinel y Daniel Camilo Calderón Babativa.',
        '¿Cómo contacto a los desarrolladores?': 'Puedes encontrar sus redes sociales en la página de Créditos: Instagram y TikTok.'
    };
    
    return respuestas[pregunta] || 'Lo siento, no tengo información sobre esa pregunta. Por favor, contáctanos directamente al 91 533 15 76.';
}

// Cerrar chatbot al hacer clic fuera
document.addEventListener('click', function(e) {
    var chatbot = document.getElementById('chatbot');
    var boton = document.querySelector('.chatbot-boton');
    
    if (chatbotAbierto && !chatbot.contains(e.target) && !boton.contains(e.target)) {
        toggleChatbot();
    }
});
