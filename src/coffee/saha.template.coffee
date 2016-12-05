jQuery(document).ready ($) ->

	if jQuery('body.page-node').length>0
		$('.commerce-product-field-field-images')
			.unwrap()
			.unwrap()

		$('.commerce-product-field-commerce-price, .field-name-body, .commerce-product-extra-field, .commerce-add-to-cart, .tab-select, .tab-content, h1.field-name-title-field')
			.wrapAll('<div class="info-producto" />')


		if $(window).width() < 768

			$('.info-producto, .commerce-product-field-field-images')
				.wrapAll('<div class="producto" />')


	$('.view-taxonomy-term .entity-commerce-product .field-name-commerce-price').css('display', 'none')
	$('.view-taxonomy-term .entity-commerce-product .commerce-product-status').css('display', 'none')
	$('.view-taxonomy-term .entity-commerce-product .field-name-field-color').css('display', 'none')


	### Clearfix para resultados - filtro ###

	countList = $('.col-categories .col-lg-4')


	if countList.length > 0 

		for val, i in countList

			i = i + 1

			if i %3 is 0
				$(val).after('<div class="clearfix" />')


		

	return


	