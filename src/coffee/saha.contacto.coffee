jQuery(document).ready ($) ->
	
	jQuery.validator.addMethod 'letras', (value, element) ->
		@optional(element) or /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value)

	$('#contacto').validate
		# debug:true

		###Contenedor de mensaje de error### 
		errorElement: 'div'
		errorClass: 'mensaje-caso'

		###reglas de validacion###
		rules:

			asunto:
				required:true

			nombres:
				required:true
				letras:true

			email:
				required:true
				email:true

			phone:
				required:true
				minlength:10
				maxlength:10
				digits:true

			pais:
				required:true

			ciudad:
				required:true

			comentario:
				required: true
				minlength:100


		###Mensajes del sistema####
		messages:
			asunto:
				required: 'Debe seleccionar un asunto'

			nombres:
				required: 'Indique su nombre'
				letras: 'Solo se ingresa texto'

			email:
				required: 'Indique un email'
				email: 'Ingrese un email v&aacute;lido'

			phone:
				required:'debe ingresar un tel&eacute;fono de contacto'
				minlength:'N&uacute;mero no v&aacute;lido'
				maxlength: 'N&uacute;mero no v&aacute;lido'
				digits:'Debe ingresar solo digitos'

			pais:
				required:'Seleccione un pa&iacute;s'

			ciudad:
				required:'Seleccione una ciudad'

			comentario:
				required: 'Escriba un mensaje'
				minlength:'El mensaje es muy corto'

		errorPlacement: (error, element) ->
			error.insertAfter(element)
			
			return


	return