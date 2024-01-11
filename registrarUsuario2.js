$(document).ready(function() {
    // Asigna un manejador de eventos al formulario
    $('#formRegister2').submit(function(event) {
        // Previene la recarga de la página
        event.preventDefault();

        // Obtén los datos del formulario
        var formData = $('#formRegister2').serialize();
        var correoR = $('#correoR').val();
        var passwordR = $('#passwordR').val();
        var passwordConfR = $('#passwordConfR').val();
        // Agrega el valor de #x a los datos del formulario
        formData += '&correoR=' + encodeURIComponent(correoR);
        formData += '&passwordR=' + encodeURIComponent(passwordR);
        formData += '&passwordConfR=' + encodeURIComponent(passwordConfR);

        // Realiza una solicitud AJAX para obtener el mensaje desde PHP
        $.ajax({
            url: 'registrarUsuario2.php',
            type: 'POST',
            data: formData, // Envía los datos del formulario
            dataType: 'json',
            success: function(data) {
                $('#respuestaRegU2').show();
                $('#respuestaRegU2').html(data.mensaje);
                
                if (data.mensaje.includes("correctamente")) {
                $("#completarRegButton").prop("disabled", true);
                $("#completarRegButton").hide();
                }


            },
            error: function(error) {
                $('#respuestaRegU2').show();
                $('#respuestaRegU2').html(data.mensaje);
            }
        });
    });
});
