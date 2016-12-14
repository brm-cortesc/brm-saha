jQuery(document).ready ($) ->

	###Se añade estado activo al filtro###
	$('.filtro li a')
		.click (e) ->
			e.preventDefault()
			$(@).parent().toggleClass('active')

			return


	###Limpiar filtro###
	$('.btn-clear')
		.click (e) ->
			e.preventDefault()
			$('.filtro li, .btn-size').removeClass('active')
			return



	###Seleccion de tamaño ###
	$('.btn-size')
		.click (e) ->
			e.preventDefault()
			$(@).parent().find('.btn-size').removeClass('active')
			$(@).addClass('active')
			
			return


	###mostrar filtros en mobile####

	if $(window).width() < 768

		$('.filtro h3')
			.click ->

				$('.col-filter .opciones').removeClass('active')
					.velocity('reverse', {
						queue: false
						display: 'none'
					})

				$(@).parent().find('.opciones').addClass('active')
					.velocity('fadeIn',{
						duration: 500
						easing: 'ease'				
					})
				return


	$('.col-filter .form-type-bef-link a.active')
		.click (e) ->
			e.preventDefault()
			window.location.search = '?field_top_size_tid=all'

			return


	return