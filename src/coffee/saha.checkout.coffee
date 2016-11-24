jQuery(document).ready ($) ->

	jQuery.validator.addMethod 'letras', (value, element) ->
		@optional(element) or /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value)

	### mostrar login ###
	$('.show-login').click ->
		$('#user-login')
			.toggleClass('active')


		if $('#user-login').hasClass('active')
			$('#user-login')
				.velocity('fadeIn',{
					duration: 500
					easing: 'ease'				
				})

		else
			$('#user-login')
				.velocity('reverse',{
					display: 'none'
					})

		return

	### validacion de información de usuario ###
	$('#checkout').validate
		# debug:true

		###Contenedor de mensaje de error### 
		errorElement: 'div'
		errorClass: 'mensaje-caso'

		###reglas de validacion###
		rules:
			nombres:
				required:true
				letras:true

			email:
				required:true
				email:true

			tipoCC:
				required: true

			cc:
				required:true
				minlength:7
				maxlength:10
				digits:true

			direccion:
				required:true

			phone:
				required:true
				minlength:10
				maxlength:10
				digits:true

			pais:
				required:true

			ciudad:
				required:true


		###Mensajes del sistema####
		messages:
		
			nombres:
				required: 'Indique su nombre'
				letras: 'Solo se ingresa texto'

			email:
				required: 'Indique un email'
				email: 'Ingrese un email v&aacute;lido'


			tipoCC:
				required: 'Debe indicar el tipo de documento'

			cc:
				required: 'Debe indicar su n&uacute;mero de documento'
				minlength: 'N&uacute;mero no v&aacute;lido'
				maxlength: 'N&uacute;mero no v&aacute;lido'
				digits:'Debe ingresar solo d&iacute;gitos'

			direccion:
				required:'Debe ingresar una direcci&oacute;n v&aacute;lida'

			phone:
				required:'debe ingresar un tel&eacute;fono de contacto'
				minlength:'N&uacute;mero no v&aacute;lido'
				maxlength: 'N&uacute;mero no v&aacute;lido'
				digits:'Debe ingresar solo di&iacute;gitos'

			pais:
				required:'Seleccione un pa&iacute;s'

			ciudad:
				required:'Seleccione una ciudad'


		errorPlacement: (error, element) ->
			error.insertAfter(element)
			
			return

	return