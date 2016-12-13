jQuery(document).ready ($) ->

	### Stick menu ###
	header     = $('header.container-fluid')
	header
		.affix({
			offset:{
				top: 165
			}

		})

		.on 'affixed.bs.affix', ->

			header
				.velocity('fadeIn',{
					duration: 500
					easing: 'ease-in-out'				
					
					})

			return

	### check para mostrar el menu si no inicio en top ### 
	if $(window).scrollTop() > 150
		header
			.velocity('fadeIn',{
				duration: 500
				easing: 'ease-in-out'				
				
			})


	### menu animation ###

	menuAnim = (el1,el2,el3) ->

		$(el1)
			.velocity('fadeIn',{
				duration: 500
				easing: 'ease'				
			})

		$(el2)
			.velocity('reverse',{
				queue: false
				display: 'none'
			})

		$(el3)
			.velocity('reverse',{
				queue: false
				display: 'none'
			})
			
		return
	

	$('.col-tools a.icon')
		.click (e) ->

			if $(@).hasClass('icon-search')
				### mostrar buscador ###
				e.preventDefault()
				e.stopPropagation()
				menuAnim( '.header-search', '.cart-list', '.user-menu' )

			
			else if $(@).hasClass('icon-cart')
				### mostrar carrito ###
				e.preventDefault()
				e.stopPropagation()
				menuAnim('.cart-list', '.user-menu', '.header-search' )
			
			else if $(@).hasClass('icon-user')
				### mostrar menu usuario ###
				e.preventDefault()
				e.stopPropagation()
				menuAnim('.user-menu', '.header-search', '.cart-list' )

			return false

	### Remover item del menu/carrito###
	$('.cart-list .btn')
		.click  ->
			$(@).parent().remove()

			return false

	### cerrar menu con body ###
	$(document)
		.click (e) ->
			# if !$(e.target).is('.header-search, .header-search *') and !$(e.target).is('.cart-list, .cart-list *') and !$(e.target).is('.user-menu, .user-menu *')
			if !$(e.target).is('.header-search, .header-search *, .cart-list, .cart-list *, .user-menu, .user-menu *, .menu, .menu *, .col-filter, .col-filter *')
				
				$('.header-search')
					.velocity('reverse',{
						queue: false
						display: 'none'
					})

				$('.cart-list')
					.velocity('reverse',{
						queue: false
						display: 'none'
					})
				$('.user-menu')
					.velocity('reverse',{
						queue: false
						display: 'none'
					})

				if $(window).width() < 768
					$('.col-filter .opciones').removeClass('active')
						.velocity('fadeOut',{
							queue: false
							display: 'none'
						})


				$('.menu').removeClass('active')


			return


	### menu mobile ###

	$('.btn-menu')
		.click (e) ->
			e.preventDefault()
			$('.menu').toggleClass('active')

			return

	###estado activo de los inputs###
	$('input.form-control, select.form-control, textarea.form-control')
		.focusin ->
			$(@).parent().addClass('active')

			return

		.focusout ->
			self = $(@)
			
			if $(@).val() != ''
				self.parent().addClass('active')

			else
				self.parent().removeClass('active')

			return


	###Show modal on add to cart ###

	$('.btn-add-cart.form-submit')
		.click ->
			$('#added-cart').modal 'show'
			return

	return