jQuery(document).ready(function($) {

  /*Seleccion de tamaño */

  /* Config slider de producto para desktop */
  var imgThumbs, sliderDesktop, sliderMobile;
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

  /*cambio de vista del producto */

  /* load slider if there is more than 3 thumbs */
  imgThumbs = $('.cloud-zoom-gallery-thumbs a');
  if (imgThumbs.length > 3) {
    if ($(window).width() >= 768) {
      $('.cloud-zoom-gallery-thumbs').bxSlider(sliderDesktop);
    } else {
      $('.cloud-zoom-gallery-thumbs').bxSlider(sliderMobile);
    }
  }
});

//# sourceMappingURL=../maps/saha.producto.js.map
