jQuery(document).ready(function($) {

  /*Seleccion de tamaño */

  /* Config slider de producto para desktop */
  var imgThumbs, sliderDesktop, sliderMobile, thumbContainer;
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
  thumbContainer = $('.cloud-zoom-gallery-thumbs');
  if (thumbContainer.length > 0) {
    setTimeout((function() {
      $(thumbContainer[0]).addClass('vista-top');
      $(thumbContainer[1]).addClass('vista-bottom');
      if ($('.vista-top.cloud-zoom-gallery-thumbs a').length > 3) {
        if ($(window).width() >= 768) {
          $('.vista-top.cloud-zoom-gallery-thumbs').bxSlider(sliderDesktop);
        }
      }
      if ($('.vista-bottom .cloud-zoom-gallery-thumbs a').length > 3) {
        if ($(window).width() >= 768) {
          $('.vista-bottom.cloud-zoom-gallery-thumbs').bxSlider(sliderDesktop);
        }
      }
    }), 1500);
  }
});

//# sourceMappingURL=../maps/saha.producto.js.map
