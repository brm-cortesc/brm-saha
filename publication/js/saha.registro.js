jQuery(document).ready(function($) {
  jQuery.validator.addMethod('letras', function(value, element) {
    return this.optional(element) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value);
  });

  /* validacion de información de usuario */
  $('#registro').validate({

    /*Contenedor de mensaje de error */
    errorElement: 'div',
    errorClass: 'mensaje-caso',

    /*reglas de validacion */
    rules: {
      nombres: {
        required: true,
        letras: true
      },
      email: {
        required: true,
        email: true
      },
      tipoCC: {
        required: true
      },
      cc: {
        required: true,
        minlength: 7,
        maxlength: 10,
        digits: true
      },
      direccion: {
        required: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true
      },
      pais: {
        required: true
      },
      ciudad: {
        required: true
      },
      pass: {
        required: true
      },
      cPassword: {
        equalTo: '#pass'
      }
    },

    /*Mensajes del sistema */
    messages: {
      nombres: {
        required: 'Indique su nombre',
        letras: 'Solo se ingresa texto'
      },
      email: {
        required: 'Indique un email',
        email: 'Ingrese un email v&aacute;lido'
      },
      tipoCC: {
        required: 'Debe indicar el tipo de documento'
      },
      cc: {
        required: 'Debe indicar su n&uacute;mero de documento',
        minlength: 'N&uacute;mero no v&aacute;lido',
        maxlength: 'N&uacute;mero no v&aacute;lido',
        digits: 'Debe ingresar solo d&iacute;gitos'
      },
      direccion: {
        required: 'Debe ingresar una direcci&oacute;n v&aacute;lida'
      },
      phone: {
        required: 'debe ingresar un tel&eacute;fono de contacto',
        minlength: 'N&uacute;mero no v&aacute;lido',
        maxlength: 'N&uacute;mero no v&aacute;lido',
        digits: 'Debe ingresar solo di&iacute;gitos'
      },
      pais: {
        required: 'Seleccione un pa&iacute;s'
      },
      ciudad: {
        required: 'Seleccione una ciudad'
      },
      pass: {
        required: 'Ingrese una contrase&ntilde;a'
      },
      cPassword: {
        equalTo: 'Las contrase&ntilde;a no coinciden'
      }
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    }
  });
});

//# sourceMappingURL=../maps/saha.registro.js.map
