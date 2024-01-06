
$(document).ready(function() {
    // Asigna un manejador de eventos al formulario
    $('#formRegister').submit(function(event) {
        // Previene la recarga de la página
        event.preventDefault();

        // Obtén los datos del formulario
        var formData = $('#formRegister').serialize();

        // Realiza una solicitud AJAX para obtener el mensaje desde PHP
        $.ajax({
            url: 'registrarUsuario.php',
            type: 'POST',
            data: formData, // Envía los datos del formulario
            dataType: 'json',
            success: function(data) {
                // Actualiza el contenido del div con el mensaje
                $('#mensajeRegistrarUsuario').text(data.mensaje);
                $('#mensajeRegistrarUsuario').show();

                if (data.registro2 == 1) {
                    $("#registroU2").show();
                    $('#registroU2 #estadoSelect').val('0');
                    $('#registroU1').hide();
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});