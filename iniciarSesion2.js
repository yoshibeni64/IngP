$(document).ready(function() {
  // Asigna un manejador de eventos al formulario
  $('#formLogin').submit(function(event) {
      // Previene la recarga de la página
      event.preventDefault();

      // Obtén los datos del formulario
      var formData = $('#formLogin').serialize();

      // Realiza una solicitud AJAX para obtener el mensaje desde PHP
      $.ajax({
          url: 'iniciarSesion2.php',
          type: 'POST',
          data: formData, // Envía los datos del formulario
          dataType: 'json',
          success: function(data) {
            
            $('#mensajeIniciarSesion').show();
            $('#mensajeIniciarSesion').html(data.mensaje);

                
                if (data.mensaje == "Has iniciado sesión exitosamente.") {
                    $("#sesionActual").text(data.correoPerfil);
                    $(".userInfo#email").text(data.correoPerfil);
                    $("#correoA").val(data.correoPerfil);
                    $("#correoAblocked").text(data.correoPerfil);
                    $(".userInfo#password").text(data.contrasenaPerfil);
                    $(".userInfo#estado").text(data.estadoPerfil);
                    $(".userInfo#municipio").text(data.municipioPerfil);
                    $(".userInfo#calle").text(data.callePerfil);
                    $(".userInfo#numeroExterior").text(data.numeroExteriorPerfil);
                    $(".userInfo#cp").text(data.cpPerfil);
                    $("#noConnectedUserText").hide();
                    $("#actualizarInfoButton1").show();
                    


                    //Habilitar modo administrador 
                    
                    if (data.correoPerfil == "adminRiveralo64@gmail.com") {
                        $("#sesionActual").text("MODO ADMINISTRADOR");
                        $(".hideInAdmin").hide();
                        $(".hideInUser").show();

                        $(".pageBody").css("background-color", "#D29BFD");
                        $("#catalogo").css("background-color", "blue");

                    }

                    else {
                        $(".hideInAdmin").show();
                        $(".hideInUser").hide();

                        $(".pageBody").css("background-color", "pink");
                        $("#catalogo").css("background-color", "red");
                    }

                }


          },
          error: function(error) {
            $('#mensajeIniciarSesion').show();
            $('#mensajeIniciarSesion').html(data.mensaje);
          }
      });
  });
});
