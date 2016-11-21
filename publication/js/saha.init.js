jQuery(document).ready(function($) {

  /* Stick menu */
  var header, menuAnim;
  header = $('header.container-fluid');
  header.affix({
    offset: {
      top: 165
    }
  }).on('affixed.bs.affix', function() {
    header.velocity('fadeIn', {
      duration: 500,
      easing: 'ease-in-out'
    });
  });

  /* check para mostrar el menu si no inicio en top */
  if ($(window).scrollTop() > 150) {
    header.velocity('fadeIn', {
      duration: 500,
      easing: 'ease-in-out'
    });
  }

  /* menu animation */
  menuAnim = function(el1, el2, el3) {
    $(el1).velocity('fadeIn', {
      duration: 500,
      easing: 'ease'
    });
    $(el2).velocity('reverse', {
      queue: false,
      display: 'none'
    });
    $(el3).velocity('reverse', {
      queue: false,
      display: 'none'
    });
  };
  $('.col-tools a.icon').click(function(e) {
    if ($(this).hasClass('icon-search')) {

      /* mostrar buscador */
      e.preventDefault();
      e.stopPropagation();
      menuAnim('.header-search', '.cart-list', '.user-menu');
    } else if ($(this).hasClass('icon-cart')) {

      /* mostrar carrito */
      e.preventDefault();
      e.stopPropagation();
      menuAnim('.cart-list', '.user-menu', '.header-search');
    } else if ($(this).hasClass('icon-user')) {

      /* mostrar menu usuario */
      e.preventDefault();
      e.stopPropagation();
      menuAnim('.user-menu', '.header-search', '.cart-list');
    }
    return false;
  });

  /* Remover item del menu/carrito */
  $('.cart-list .btn').click(function() {
    $(this).parent().remove();
    return false;
  });

  /* cerrar menu con body */
  $(document).click(function(e) {
    if (!$(e.target).is('.header-search, .header-search *, .cart-list, .cart-list *, .user-menu, .user-menu *, .menu, .menu *')) {
      $('.header-search').velocity('reverse', {
        queue: false,
        display: 'none'
      });
      $('.cart-list').velocity('reverse', {
        queue: false,
        display: 'none'
      });
      $('.user-menu').velocity('reverse', {
        queue: false,
        display: 'none'
      });
      $('.menu').removeClass('active');
    }
  });

  /* menu mobile */
  $('.btn-menu').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
  });

  /*estado activo de los inputs */
  $('input.form-control, select.form-control, textarea.form-control').focusin(function() {
    $(this).parent().addClass('active');
  }).focusout(function() {
    var self;
    self = $(this);
    if ($(this).val() !== '') {
      self.parent().addClass('active');
    } else {
      self.parent().removeClass('active');
    }
  });
});

//# sourceMappingURL=../maps/saha.init.js.map
