jQuery(document).ready(function($) {
  $('.commerce-product-field-field-images').unwrap().unwrap();
  $('.commerce-product-field-commerce-price, .field-name-body, .commerce-product-extra-field, .commerce-add-to-cart').wrapAll('<div class="info-producto" />');
  if ($(window).width() < 768) {
    $('.info-producto, .commerce-product-field-field-images').wrapAll('<div class="producto" />');
  }
});

//# sourceMappingURL=../maps/saha.template.js.map
