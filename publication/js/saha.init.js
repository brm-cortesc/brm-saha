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
    if (!$(e.target).is('.header-search, .header-search *, .cart-list, .cart-list *, .user-menu, .user-menu *, .menu, .menu *, .col-filter, .col-filter *')) {
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
      if ($(window).width() < 768) {
        $('.col-filter .opciones').removeClass('active').velocity('fadeOut', {
          queue: false,
          display: 'none'
        });
      }
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

  /*Show modal on add to cart */
  $('#added-cart btn.btn-add-cart.form-submit').click()(function() {
    $('#added-cart .modal-body img, #added-cart .modal-body .commerce-add-to-cart').hide('fade');
    setTimeout((function() {
      $('#added-cart .modal-body').html('<h3 class="text-center">El producto se ha añadido al carrito</h3>');
    }), 500);
  });
  $('.tallas').click(function(e) {
    e.preventDefault();
    $('#tallaje').modal('show');
  });
  $('.col-filter .form-type-bef-link a.active').click(function(e) {
    e.preventDefault();
    window.location.search = '?field_top_size_tid=all';
  });
});

//# sourceMappingURL=../maps/saha.init.js.map
