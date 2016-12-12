jQuery(document).ready ($) ->

	###Seleccion de tamaño ###

	# $('.btn-size')
	# 	.click (e) ->
	# 		e.preventDefault()
	# 		$(@).parent().find('.btn-size').removeClass('active')
	# 		$(@).addClass('active')
			
	# 		return


	# ###Seleccion de color ###

	# $('.btn-color')
	# 	.click (e) ->
	# 		e.preventDefault()
	# 		$(@).parent().find('.btn-color').removeClass('active')
	# 		$(@).addClass('active')
			
	# 		return
				

	### Config slider de producto para desktop ###
	sliderDesktop = 
		mode: 'vertical'
		preloadImages: 'all'
		minSlides: 3
		maxSlides: 3
		slideWidth: 169
		slideMargin: 10
		moveSlides: 1
		pager:false
		nextText: ''
		prevText: ''

	### Config slider de producto para mobile ###
	sliderMobile = 
		preloadImages: 'all'
		minSlides: 3
		maxSlides: 3
		slideWidth: 168
		slideMargin: 10
		moveSlides: 1
		pager:false
		nextText: ''
		prevText: ''

	### Sliders ###

	# if $(window).width() >= 768	
	# 	$('.slider-vista-top')
	# 		.bxSlider(sliderDesktop)

	# 	$('.slider-vista-bottom')
	# 		.bxSlider(sliderDesktop)

	# 	$('.slider-vista')
	# 		.bxSlider(sliderDesktop)

	# else
	# 	$('.slider-vista-top')
	# 		.bxSlider(sliderMobile)

	# 	$('.slider-vista-bottom')
	# 		.bxSlider(sliderMobile)

	# 	$('.slider-vista')
	# 		.bxSlider(sliderMobile)


	###cambio de vista del producto ###

	# $('.slide a')
	# 	.click (e) ->

	# 		e.preventDefault()

	# 		dataProducto = $(@).parent().parent().attr('data-producto')

	# 		imgSrc = $(@).attr('href')
			
	# 		$('#'+dataProducto).attr('src', imgSrc)

	# 		return


	### load slider if there is more than 3 thumbs  ###
	imgThumbs = $('.cloud-zoom-gallery-thumbs a')

	if imgThumbs.length > 3
		if $(window).width() >= 768
			$('.cloud-zoom-gallery-thumbs')
				.bxSlider(sliderDesktop)

		else
			$('.cloud-zoom-gallery-thumbs')
				.bxSlider(sliderMobile)



	return