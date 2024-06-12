
document.addEventListener('DOMContentLoaded', function() {
    var whatsappLink = document.getElementById('whatsappLink');
    whatsappLink.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirWhatsApp();
    });
});

function redirigirWhatsApp() {
    var telefono = "+51907947044";
    var mensaje = "Hola, me gustaría solicitar una cotización, ¿podrías proporcionarme más información al respecto?";
    var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}
