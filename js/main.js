
    document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
  
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Obtener el valor seleccionado en el campo 'tipo'
      const tipo = document.getElementById('tipo').value;
  
      // Definir la URL base para las búsquedas
      let searchUrl = '';
  
      if (tipo === 'casa') {
        // URL para búsqueda de casas
        searchUrl = 'https://inmuebles.mercadolibre.com.ar/casas/venta/';
      } else if (tipo === 'alquiler') {
        // URL para búsqueda de alquileres
        searchUrl = 'https://inmuebles.mercadolibre.com.ar/casas/alquiler/';
      }
  
      // Abrir una nueva ventana o pestaña con la URL
      if (searchUrl) {
        window.open(searchUrl, '_blank');
      }
    });
  });
   