$(document).ready(function() {
    // Asigna un manejador de eventos al formulario
    $('#formActualizarPerfil').submit(function(event) {
        // Previene la recarga de la página
        event.preventDefault();

        // Obtén los datos del formulario
        var formData = $('#formActualizarPerfil').serialize();

        var correoA = $('#correoAblocked').text().trim();
        formData += '&correoA=' + correoA;

        // Realiza una solicitud AJAX para obtener el mensaje desde PHP
        $.ajax({
            url: 'actualizarPerfil.php',
            type: 'POST',
            data: formData, // Envía los datos del formulario
            dataType: 'json',
            success: function(data) {
                $('#mensajeActualizarPerfil').show();
                $('#mensajeActualizarPerfil').html(data.mensaje);

                if (data.mensaje == "La actualización de datos se ha realizado correctamente.") {

                    $(".userInfo#password").text(data.password);
                    $(".userInfo#estado").text(data.estado);
                    $(".userInfo#municipio").text(data.municipio);
                    $(".userInfo#calle").text(data.calle);
                    $(".userInfo#numeroExterior").text(data.numeroExterior);
                    $(".userInfo#cp").text(data.cp);
                    $("#nuevosDatos").hide();
                }

            },
            error: function(error) {
                $('#mensajeActualizarPerfil').show();
                $('#mensajeActualizarPerfil').html(data.mensaje);
            }
        });
    });
});
