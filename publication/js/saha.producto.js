jQuery(document).ready(function($) {

  /*Seleccion de tamaño */
  var sliderDesktop, sliderMobile;
  $('.btn-size').click(function(e) {
    e.preventDefault();
    $(this).parent().find('.btn-size').removeClass('active');
    $(this).addClass('active');
  });

  /*Seleccion de color */
  $('.btn-color').click(function(e) {
    e.preventDefault();
    $(this).parent().find('.btn-color').removeClass('active');
    $(this).addClass('active');
  });

  /* Config slider de producto para desktop */
  sliderDesktop = {
    mode: 'vertical',
    preloadImages: 'all',
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 169,
    slideMargin: 10,
    moveSlides: 1,
    pager: false,
    nextText: '',
    prevText: ''
  };

  /* Config slider de producto para mobile */
  sliderMobile = {
    preloadImages: 'all',
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 168,
    slideMargin: 10,
    moveSlides: 1,
    pager: false,
    nextText: '',
    prevText: ''
  };

  /* Sliders */
  if ($(window).width() >= 768) {
    $('.slider-vista-top').bxSlider(sliderDesktop);
    $('.slider-vista-bottom').bxSlider(sliderDesktop);
    $('.slider-vista').bxSlider(sliderDesktop);
  } else {
    $('.slider-vista-top').bxSlider(sliderMobile);
    $('.slider-vista-bottom').bxSlider(sliderMobile);
    $('.slider-vista').bxSlider(sliderMobile);
  }

  /*cambio de vista del producto */
  $('.slide a').click(function(e) {
    var dataProducto, imgSrc;
    e.preventDefault();
    dataProducto = $(this).parent().parent().attr('data-producto');
    imgSrc = $(this).attr('href');
    $('#' + dataProducto).attr('src', imgSrc);
  });
});

//# sourceMappingURL=../maps/saha.producto.js.map
