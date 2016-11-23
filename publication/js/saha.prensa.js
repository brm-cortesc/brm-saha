jQuery(document).ready(function($) {

  /* Init de galería */
  $('.slider-prensa').bxSlider({
    preloadImages: 'all',
    minSlides: 3,
    maxSlides: 6,
    slideWidth: 300,
    slideMargin: 10,
    nextText: '',
    prevText: ''
  });

  /* lightbox */
  $('.slider-prensa .slide a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

//# sourceMappingURL=../maps/saha.prensa.js.map
