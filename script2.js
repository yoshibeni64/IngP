$(window).on('load', function() { 

  //Código para función de remover alcancia
  $('#removeFromCatalogoButton').on('click', function() {
        var diseno = $('#picDiseño').text();
        var modelo = $('#picModelo').text();

        // Realizar la solicitud AJAX
        $.ajax({
            type: "POST", // Método de solicitud
            url: "removerDelCatalogo.php", // URL del script PHP
            data: {
              diseno: diseno,
              modelo: modelo
            },

            success: function(response) {
                $("#previewAlcancia").hide();
                $("#catalogo").hide();
            },
            error: function(error) {
                // Manejar errores de la solicitud AJAX
                console.log("Error:", error);
            }
        });

  });

  $('#addToCatalogoButton').on('click', function() {
    $("#catalogo").css("background-color", "blue");
      var diseno = $('#picDiseño').text();
      var modelo = $('#picModelo').text();

      // Realizar la solicitud AJAX
      $.ajax({
          type: "POST", // Método de solicitud
          url: "anadirAlCatalogo.php", // URL del script PHP
          data: {
            diseno: diseno,
            modelo: modelo
          },

          success: function(response) {
              $("#previewAlcancia").hide();
              $("#catalogo").hide();
          },
          error: function(error) {
              // Manejar errores de la solicitud AJAX
              console.log("Error:", error);
          }
      });

});





  //Al cargar la pagina mostrar solo el apartado de Principal
  $(".pageBody").hide();
      $("#principal").show();

    //Condiciones iniciales temporales
      $('#regUestado option[value="0"]').attr("selected",true);
      $("#nuevosDatos").hide();
      $("#excesoPedidosTexto").hide();
      $("#continuarPedidoButton1").hide();
      $("#vaciarCarritoButton").hide();
      $("#subtotalText").hide();
      $("#datosEnvio1").hide();
      $("#addAlcanciaButton").hide();
      $("#removeAlcanciaButton").hide();
      $("#removeCatalogoText").hide();
      $("#correoAblocked").prop("disabled", true);
      $("#actualizarInfoButton1").prop("disabled", true);
      $("#actualizarPerfilExito").hide();
      $(".onlyBD").hide();
      $("#actualizarInfoButton1").hide();
  
      
      
      
      $("#actualizarInfoButton1").click(function(){
          $("#actualizarInfoButton1").prop("disabled", true);
          $("#nuevosDatos").show();
          $('#mensajeActualizarPerfil').text("");
      });

      $("#addAlcanciaButton").on('click', function() {
        $(".pageBody").hide();
        $("#pageAnadirAlcancia").show();
      });

      $("#closePreviewButton").click(function(){
      $("#previewAlcancia").hide();
      });
  
      $(".pageChanger").click(function() {
        $("#regUbutton1").prop("disabled", false);
        $("#regUbutton2").prop("disabled", false);
        $("#continuarPedidoButton1").prop("disabled", false); 
        $("#respuestaRegU").text("");
        $("#respuestaRegU2").text("");
        $("#respuestaIniciarU").text("");
        $("#avisoContinuarCompra").hide();
        $("#datosEnvio1").hide();
        $('#mensajeRegistrarUsuario').hide();
        $('#mensajeActualizarPerfil').text("");
      });

      //Codigos para mostrar catalogos segun el boton presionado
        $("#buttonCatalogoN").click(function(){
          $("#contenedorCatalogoN").show();
          $("#contenedorCatalogoP").hide();
          $("#contenedorCatalogoA").hide();   
          $("#previewAlcancia").hide();
          $("#alcanciaBorradaTexto").hide();
        });
      
      $("#buttonCatalogoP").click(function(){
        $("#contenedorCatalogoP").show();
        $("#contenedorCatalogoN").hide();
        $("#contenedorCatalogoA").hide();   
        $("#previewAlcancia").hide();
      });
      
      
      $("#buttonCatalogoA").click(function(){
        $("#contenedorCatalogoA").show();
        $("#contenedorCatalogoP").hide();
        $("#contenedorCatalogoN").hide();
        $("#previewAlcancia").hide();
      });

      //Codigo para las pestanas
      $("#principalLink").click(function(){
        $(".pageBody").hide();
        $("#principal").show();
      });
  
      $("#perfilLink").click(function(){
        $(".pageBody").hide();
        $("#perfil").show();
        $("#nuevosDatos").hide();
        $("#actualizarInfoButton1").prop('disabled', false);
        $("#actualizarInfoButton2").prop('disabled', false);
        $("#actualizarPerfilExito").hide();

      });
  
      $("#catalogoLink").click(function(){
        $(".pageBody").hide();
        $("#catalogo").show();
      });
  
      $("#carritoLink").click(function(){
        $(".pageBody").hide();
        $("#carritoPage").show();
      });
  
      $("#buzonLink").click(function(){
        $(".pageBody").hide();
        $("#buzon").show();
      });
  
      $("#registroULink").click(function(){
        $(".pageBody").hide();
        $("#registroU1").show();
        $("#registroU2").hide();


        //VACIAR TODOS LOS CAMPOS
      });
  
      $("#iniciarULink").click(function(){
        $(".pageBody").hide();
        $("#iniciarU").show();
        $("#iniciarUbutton").prop('disabled', false);
      });

      




      function mostrarVistaPrevia(inputId, vistaPreviaId) {
        var input = document.getElementById(inputId);
        var vistaPrevia = document.getElementById(vistaPreviaId);
      
        // Limpiar la vista previa anterior
        vistaPrevia.innerHTML = '';
      
        if (input.files && input.files[0]) {
            var reader = new FileReader();
      
            reader.onload = function (e) {
                // Mostrar la vista previa de la imagen
                var imagen = document.createElement('img');
                imagen.src = e.target.result;
                imagen.alt = 'Vista previa';
                imagen.style.maxWidth = '100%';
                vistaPrevia.appendChild(imagen);
            };
      
            reader.readAsDataURL(input.files[0]);
        }
      }






});





    


































































