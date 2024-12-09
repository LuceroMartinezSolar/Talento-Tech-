// Esperamos a que el contenido de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleccionamos todos los botones con la clase "toggle-btn"
  document.querySelectorAll('.boton').forEach((button) => {
    
    // Añadimos un evento de clic a cada botón
    button.addEventListener('click', () => {
      
      // Obtenemos el siguiente elemento hermano del botón (que es el contenido que queremos mostrar u ocultar)
      const content = button.nextElementSibling;

      // Verificamos si el contenido está oculto (su propiedad display es 'none')
      if (content.style.display === 'none') {
        
        // Si el contenido está oculto, cambiamos su estilo a 'block' para mostrarlo
        content.style.display = 'block';
      } else {
        
        // Si el contenido ya está visible, cambiamos su estilo a 'none' para ocultarlo
        content.style.display = 'none';
      }
    });
  });
});
