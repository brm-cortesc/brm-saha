jQuery(document).ready ($) ->

	# if $( window ).width() <= 768 
	# 	$(".commerce-product-field").detach().appendTo('.container-product')


	if jQuery('body.page-node').length>0
		$('.commerce-product-field-field-images')
			.unwrap()
			.unwrap()

		$('.commerce-product-field-commerce-price, .field-name-commerce-price, .field-name-body, .commerce-product-extra-field, .field-name-field-product .commerce-add-to-cart, .tab-select, .tab-content, h2.field-name-title-field')
			.wrapAll('<div class="info-producto" />')


		if $(window).width() < 768

			$('.info-producto, .commerce-product-field-field-images')
				.wrapAll('<div class="producto" />')

			$('nav.menu').detach().appendTo('#block-brm-saha-headerblock .row')


	$('.view-taxonomy-term .entity-commerce-product .field-name-commerce-price').css('display', 'none')
	$('.view-taxonomy-term .entity-commerce-product .commerce-product-status').css('display', 'none')
	$('.view-taxonomy-term .entity-commerce-product .field-name-field-color').css('display', 'none')


	### Clearfix para resultados - filtro ###

	countList = $('.col-categories .col-lg-4')
	searchList = $('.col-result .col-lg-3')
	allList = $('.view-display-products .views-row.col-lg-3')


	if countList.length > 0 

		for val, i in countList

			i = i + 1

			if i %3 is 0
				$(val).after('<div class="clearfix" />')

	if searchList.length > 0 

		for val, i in searchList

			i = i + 1

			if i %4 is 0
				$(val).after('<div class="clearfix" />')


	if allList.length > 0 

		for val, i in allList

			i = i + 1

			if i %4 is 0
				$(val).after('<div class="clearfix" />')


	### mostrar  num productos carrito ###

	cantCarrito = $('.line-item-quantity .line-item-quantity-raw').text()

	$('.counter-item').text(cantCarrito)


	### Wrap para carrito de compras ###

	$('.commerce-order-handler-area-order-total, .commerce-line-item-actions')
		.wrapAll('<div class="col-order" />')
		


	### Wrap para segunda prenda ###
	titulo = $('.field-name-title-field')
	sku = $('.commerce-product-extra-field-sku')
	precio = $('.commerce-product-field-commerce-price')
	addCart = $('.commerce-add-to-cart')
	tabs = $('.nav-tabs')
	tabContent = $('.tab-content')
	producto = $('.container-product')

	if producto.length > 1

		$(titulo[1]).detach().appendTo(producto[1])
		$(sku[1]).detach().appendTo(producto[1])
		$(precio[1]).detach().appendTo(producto[1])
		$(addCart).last().detach().appendTo(producto[1])
		$(tabs[1]).detach().appendTo(producto[1])
		$(tabContent[1]  ).detach().appendTo(producto[1])

		$(producto[1]).addClass('product-bottom')

		setTimeout (->

			$('.product-bottom .commerce-product-field-commerce-price, .product-bottom  .field-name-body, .product-bottom  .commerce-product-extra-field, .product-bottom .commerce-add-to-cart, .product-bottom  .tab-select, .product-bottom  .tab-content, .product-bottom  h2.field-name-title-field')
				.wrapAll('<div class="info-producto" />')
			return

			), 1000





	### wrap bikinis ###

	if $('body.node-type-bikini').length > 0

		$('.cloud-zoom-container').wrap('<div class="commerce-product-field-field-images" />')
		$('.commerce-add-to-cart').detach().appendTo('.info-producto')


	
	return