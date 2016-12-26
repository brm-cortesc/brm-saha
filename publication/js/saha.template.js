var  sliderDesktop;
jQuery(document).ready(function($) {

  var addCart, allList, cantCarrito, countList, i, j, k, l, len, len1, len2, precio, producto, searchList, sku, tabContent, tabs, titulo, val;
  if ($(window).width() < 768) {
    $('nav.menu').detach().appendTo('#block-brm-saha-headerblock .row');
  }
  if (jQuery('body.page-node').length > 0) {
    $('.commerce-product-field-field-images').unwrap().unwrap();
    $('.commerce-product-field-commerce-price, .field-name-body, .commerce-product-extra-field, .node-type-bikini .field-name-commerce-price, .field-name-field-product .commerce-add-to-cart, .tab-select, .tab-content, h2.field-name-title-field').wrapAll('<div class="info-producto" />');

    if ($(window).width() < 768) {
      $('.info-producto, .commerce-product-field-field-images').wrapAll('<div class="producto" />');
    
    }

    /*Remove duplicated price*/
    $('.attribute-widgets .image-style-none').click(function(){
      setTimeout(function() {

        if( $('.field-name-commerce-price').length >= 3 ){
          $($('.field-name-commerce-price')[1]).remove();
        }

      }, 1500);

    });


  }
  $('.view-taxonomy-term .entity-commerce-product .field-name-commerce-price').css('display', 'none');
  $('.view-taxonomy-term .entity-commerce-product .commerce-product-status').css('display', 'none');
  $('.view-taxonomy-term .entity-commerce-product .field-name-field-color').css('display', 'none');

  /* Clearfix para resultados - filtro */
  countList = $('.col-categories .col-lg-4');
  searchList = $('.col-result .col-lg-3');
  allList = $('.view-display-products .views-row.col-lg-3');
  if (countList.length > 0) {
    for (i = j = 0, len = countList.length; j < len; i = ++j) {
      val = countList[i];
      i = i + 1;
      if (i % 3 === 0) {
        $(val).after('<div class="clearfix" />');
      }
    }
  }
  if (searchList.length > 0) {
    for (i = k = 0, len1 = searchList.length; k < len1; i = ++k) {
      val = searchList[i];
      i = i + 1;
      if (i % 4 === 0) {
        $(val).after('<div class="clearfix" />');
      }
    }
  }
  if (allList.length > 0) {
    for (i = l = 0, len2 = allList.length; l < len2; i = ++l) {
      val = allList[i];
      i = i + 1;
      if (i % 4 === 0) {
        $(val).after('<div class="clearfix" />');
      }
    }
  }

  /* mostrar  num productos carrito */
  cantCarrito = $('.line-item-quantity .line-item-quantity-raw').text();
  $('.counter-item').text(cantCarrito);

  /* Wrap para carrito de compras */
  $('.commerce-order-handler-area-order-total, .commerce-line-item-actions').wrapAll('<div class="col-order" />');

  /* Wrap para segunda prenda */
  titulo = $('.field-name-title-field');
  sku = $('.commerce-product-extra-field-sku');
  precio = $('.commerce-product-field-commerce-price');
  addCart = $('.commerce-add-to-cart');
  tabs = $('.nav-tabs');
  tabContent = $('.tab-content');
  producto = $('.container-product');

  if (producto.length > 1) {
    $(titulo[1]).detach().appendTo(producto[1]);
    $(sku[1]).detach().appendTo(producto[1]);
    $(precio[1]).detach().appendTo(producto[1]);
    $(addCart).last().detach().appendTo(producto[1]);
    $(tabs[1]).detach().appendTo(producto[1]);
    $(tabContent[1]).detach().appendTo(producto[1]);
    $(producto[1]).addClass('product-bottom');

    setTimeout((function() {
      var ancla1, ancla2, contenedor1, contenedor2;
      $('.product-bottom .commerce-product-field-commerce-price, .product-bottom  .field-name-body, .product-bottom  .commerce-product-extra-field, .product-bottom .commerce-add-to-cart, .product-bottom  .tab-select, .product-bottom  .tab-content, .product-bottom  h2.field-name-title-field').wrapAll('<div class="info-producto" />');

      /*tabs de la segunda prenda */
      ancla1 = $(tabs[1]).find('li a').first().attr('href');
      ancla1 = $(tabs[1]).find('li a').first().attr('href', ancla1 + '-2');
      ancla2 = $(tabs[1]).find('li a').last().attr('href');
      ancla2 = $(tabs[1]).find('li a').last().attr('href', ancla2 + '-2');
      contenedor1 = $(tabContent[1]).find('.tab-pane').first().attr('id');
      contenedor1 = $(tabContent[1]).find('.tab-pane').first().attr('id', contenedor1 + '-2');
      contenedor2 = $(tabContent[1]).find('.tab-pane').last().attr('id');
      contenedor2 = $(tabContent[1]).find('.tab-pane').last().attr('id', contenedor2 + '-2');
    }), 1000);
  }

  /* wrap bikinis */
  if ($('body.node-type-bikini').length > 0) {
    $('.cloud-zoom-container').wrap('<div class="commerce-product-field-field-images" />');
  }

  /* fix for checkout template */
  if ($('#commerce-checkout-form-checkout').length > 0) {
    $('#commerce-checkout-form-checkout').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12 col-carrito');
    $('.view-commerce-cart-summary .view-content').addClass('table-responsive table-carrito');
    $('.view-commerce-cart-summary .view-content table').removeClass('views-table cols-4').addClass('table');
    $('.col-order').unwrap();
  }
  $('.checkout-continue.form-submit, .checkout-cancel.form-submit, .checkout-back.form-submit').addClass('btn');

  //wrap para hacer las imgs relacionadas del mismo alto*/
  if( $('.col-related').length > 0 ){
    $('.col-related img').wrap($('<div class="item-related-img" />'));


  }
  /* build modal add to cart */
  var tidAClic = $('div.tidColorki').text();
      $('body.node-type-tops .segundoContenido .attribute-widgets div.form-radios div.form-item-attributes-field-color input.ajax-processed').each(function(){
        if($(this).attr('value') == tidAClic){
          $(this).parent().find('.image-style-none').click();
          //setTimeout(function(){  }, 4000);
        }
      });

  /*Fix de layout mobile*/

  if( $(window).width() <=768 && !$('body').hasClass('node-type-bikini') ){
     var VistaTop = $('.container-product .producto .commerce-product-field-field-images');
     
     setTimeout(function() {

      $(VistaTop[0]).detach().prependTo('.container-product.vista-top .producto'); 
      
       $('.container-product.vista-top .field-name-title-field').detach().prependTo('.container-product.vista-top .producto');
      $('.container-product.product-bottom .field-name-title-field').insertAfter('.container-product.vista-top .info-producto');

     }, 500);

  };


      
  if( $('body').hasClass('node-type-bikini') ){

            /*Reordenamos vista para mobile bikini*/

            if(  $(window).width() <= 768 ){

              console.log('hola bikinis mobile')


              /*'.container-product.vista-top .commerce-product-field-field-images:nth-child(1)'*/

              var VistaTop = $('.container-product .producto .commerce-product-field-field-images');

              setTimeout( function () {
 
                $(VistaTop[0]).detach().prependTo('.container-product.vista-top .producto');
                $('.container-product.vista-top .field-name-title-field').detach().prependTo('.container-product.vista-top .producto');
                $('.container-product.product-bottom .field-name-title-field').insertAfter('.container-product.vista-top .info-producto');
              } ,500);

            }

     

              var sku = $('.skuHaspeBikini').text();
               /*var PATH = 'https://fbapp.brm.com.co/fbappSaha/';*/
               var PATH = 'http://www.sahaswimwear.com/';
              

                var ref = PATH + 'get_tid_color_by_sku/'+sku;
                  /*Asignamos el producto correcto al carrito*/
                  $.ajax({
                  url:ref,
                  format:'string',
                  dataType:'json',
                  success: function(data){

                   var tidAClic = data;

                   console.log(tidAClic + data)

                    setTimeout(function(){ 

                      $('body.node-type-bikini .segundoContenido .attribute-widgets div.form-radios div.form-item-attributes-field-color input.ajax-processed').each(function(){

                      
                      if($(this).attr('value') == tidAClic){
                        
                        $(this).parent().find('.image-style-none').click();

                        console.log('click en color bikini')
                       
                      }
                    });

                    }, 500);


                  },
                  error: function(data, status, error){
                  }

                }); 
                 
  };

  /*rebuild de slider con cambio de prenda*/


  var imgThumbs, thumbContainer;
      


        imgThumbs = $('.cloud-zoom-gallery-thumbs a');
        thumbContainer = $('.cloud-zoom-gallery-thumbs');
        sliderContainer = $('.container-product');

       
        renuevaSlider();
        sliderTop();



});
var renuevaSlider = function(){
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
}

 var sliderTop = function () {
          console.log('cualquier cosa top');
          
          if ($('.container-product .cloud-zoom-gallery-thumbs a').length > 3) {

          $(sliderContainer[0]).addClass('vista-top');      

             renuevaSlider();

             if( $(sliderContainer[0]).hasClass('vista-top') && $(window).width() >= 768 && $('.container-product.vista-top .bx-wrapper').length == 0   ){
             setTimeout( function(){
               $('.container-product.vista-top .cloud-zoom-gallery-thumbs').bxSlider(sliderDesktop);
                console.log('cualquier cosa ejecutado top')
             } ,1000);
             
               }


           }

        };

        
 var sliderBottom = function () {
          console.log('cualquier cosa')
          if ($('.segundoContenido .cloud-zoom-gallery-thumbs a').length > 3 && $(window).width() >= 768) {


             if( $('.segundoContenido .bx-wrapper').length == 0  ){
             setTimeout( function(){
              renuevaSlider();




              $('.segundoContenido .product-bottom .cloud-zoom-gallery-thumbs').bxSlider(sliderDesktop);
             } ,1000);
              console.log('segundo container')      
            }
           
        }
      };