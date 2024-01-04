$(window).on('load', function() { 

  $("#demo").text("asd");



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
  
      $("#actualizarInfoButton1").click(function(){
          $("#actualizarInfoButton1").prop("disabled", true);
          $("#nuevosDatos").show();
      });

      $("#addAlcanciaButton").on('click', function() {
        $(".pageBody").hide();
        $("#pageAnadirAlcancia").show();
      });

      //MODIFICAR
      $('#removeAlcanciaButton').on('click', function() {
        $("#catalogo").css("background-color", "blue");
        // Obtén el valor del atributo src de la imagen con id "pic1"

        var imagenPrev = $("#pic1").attr("src");
        var imagenFull = $("#pic2").attr("src");

        // Configura los datos que se enviarán al servidor
        var data = {
          archivo_a_eliminar_Prev: imagenPrev,
          archivo_a_eliminar_Full: imagenFull
        };

        // Realiza la solicitud AJAX
        $.ajax({
          url: 'removerAlcancia.php', // Ruta del archivo PHP
          type: 'POST', // Puedes cambiar a 'POST' si es necesario
          success: function(response) {
              console.log(response); // Maneja la respuesta del servidor
          },
          error: function(error) {
              console.error('Error en la solicitud AJAX:', error);
          }
      });






        obtenerImagenes('contenedorCatalogoN', 'Normal');
        $("#contenedorCatalogoN").show();
        $("#contenedorCatalogoP").hide();
        $("#contenedorCatalogoA").hide();   
        $("#previewAlcancia").hide();


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
      });
      /*Quitar comentario al finalizar
        $(".pageBody").hide();
        $("#principal").show();
        $("#excesoPedidosTexto").hide();
        */
      
        

        $("#buttonCatalogoN").click(function(){
          $("#contenedorCatalogoN").show();
          $("#contenedorCatalogoP").hide();
          $("#contenedorCatalogoA").hide();   
          $("#previewAlcancia").hide();
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





    


































































