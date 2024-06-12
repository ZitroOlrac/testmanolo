// Obtenemos la referencia al modal y a la imagen dentro de él
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");

// Obtenemos todas las imágenes con la clase .experiencia__imagen
var images = document.querySelectorAll(".experiencia__imagen");

// Guardamos la referencia al cuerpo del documento
var body = document.body;

// Función para abrir el modal
function openModal() {
  modal.style.display = "flex"; // Cambiamos a flex para centrar verticalmente
  modal.scrollTo(0, 0); // Reiniciamos el scroll del modal
  body.style.overflow = "hidden"; // Desactivamos el scroll del cuerpo
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
  body.style.overflow = "auto"; // Reactivamos el scroll del cuerpo
}

// Iteramos sobre cada imagen y le añadimos un event listener para el clic
images.forEach(function(image) {
  image.addEventListener("click", function() {
    var imageSrc = this.src;
    modalImg.src = imageSrc;
    openModal();
  });
});

// Añadimos un event listener para el botón de cierre del modal
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  closeModal();
});

// Añadimos un event listener para cerrar el modal haciendo clic fuera de la imagen
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
