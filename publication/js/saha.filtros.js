jQuery(document).ready(function($) {

  /*Se añade estado activo al filtro */
  $('.filtro li a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
  });

  /*Limpiar filtro */
  $('.btn-clear').click(function(e) {
    e.preventDefault();
    $('.filtro li, .btn-size').removeClass('active');
  });

  /*Seleccion de tamaño */
  $('.btn-size').click(function(e) {
    e.preventDefault();
    $(this).parent().find('.btn-size').removeClass('active');
    $(this).addClass('active');
  });

  /*mostrar filtros en mobile */
  if ($(window).width() < 768) {
    $('.filtro h3').click(function() {
      $('.col-filter .opciones').removeClass('active').velocity('reverse', {
        queue: false,
        display: 'none'
      });
      $(this).parent().find('.opciones').addClass('active').velocity('fadeIn', {
        duration: 500,
        easing: 'ease'
      });
    });
  }
});

//# sourceMappingURL=../maps/saha.filtros.js.map
