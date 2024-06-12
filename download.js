$(document).ready(function(){
  const cv = $('[data-form-cv]');
  const textos=["soy Desarrollador Web", "soy Desarrollador de Videojuegos"];
  let i=0;

  const optenercv =(event)=>{
    event.preventDefault();
    const pdfUrl = cv.attr('href');
    window.open(pdfUrl, '_blank');
  };

  function cambioTexto(){
    $('#cambioTexto').text(textos[i]);
    i=(i+1)%textos.length;
  }
  setInterval(cambioTexto,2000);
  cv.on('click',optenercv);

  $('.title-slider').slick({
    slidesToShow: 1, // Mostrar una sola imagen a la vez
    slidesToScroll: 1, // Desplazar una imagen a la vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
    responsive: [
      {
        breakpoint: 768, // Cambiar la configuración en resoluciones más bajas
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, // Cambiar la configuración en resoluciones más bajas
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.academic__courses-slider').slick({
    autoplay:true,
    slidesToShow: 3, // Número de elementos visibles a la vez
    slidesToScroll: 1, // Número de elementos a desplazar al avanzar o retroceder
    autoplay: true, // Reproducción automática
    autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
    responsive: [
      {
        breakpoint: 768, // Cambiar el número de elementos visibles en esta resolución
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, // Cambiar el número de elementos visibles en esta resolución
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
