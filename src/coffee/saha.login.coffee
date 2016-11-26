jQuery(document).ready ($) ->

	
	### validacion de información de usuario ###
	$('#user-login').validate
		# debug:true

		###Contenedor de mensaje de error### 
		errorElement: 'div'
		errorClass: 'mensaje-caso'

		###reglas de validacion###
		rules:
			email:
				required:true
				email:true

			pass:
				required: true
				minlength:7
				maxlength:10

		###Mensajes del sistema####
		messages:
		
			email:
				required: 'Ingrese su email'
				email: 'email inv&aacute;lido'

			pass:
				required: 'debe ingresar la contrase&ntilde;a'
				minlength: 'Contrase&ntilde;a no v&aacute;lida'
				maxlength: 'Contrase&ntilde;a no v&aacute;lida'



		errorPlacement: (error, element) ->
			error.insertAfter(element)
			
			return

	return