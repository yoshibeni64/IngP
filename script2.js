$(window).on('load', function() {

  $('#correoR, #passwordR, #passwordConfR, #correoI, #passwordI, #correoA, #passwordA, #passwordConfA, #nuevoDiseno, #regUcp, #cpA, #regUcalle, #calleA, #regUnumExt, #numExtA, #cpCotizacion').on('input', function() {
    // Obtiene la longitud actual del valor del input
    var longitudActual = $(this).val().length;

    // Verifica si el input tiene un atributo "maxlength" y actualiza el contador de caracteres si es necesario
    if ($(this).attr('maxlength')) {
        var maxLength = parseInt($(this).attr('maxlength'));
        $('#' + this.id + 'Contador').text(longitudActual + '/' + maxLength);

        // Si se supera el límite, corta el valor para que solo tenga la longitud máxima permitida
        if (longitudActual > maxLength) {
            $(this).val($(this).val().slice(0, maxLength));
        }
    }
});

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
      $(".hideInUser").hide();
      $("#actualizarInfoButton1").hide();
      $(".showInCotizar").hide();
  
      
      
      
      $("#actualizarInfoButton1").click(function(){
          $("#actualizarInfoButton1").prop("disabled", true);
          $("#actualizarInfoButton1").hide();
          $("#nuevosDatos").show();
          $('#mensajeActualizarPerfil').text("");
      });

      $("#addAlcanciaButton").on('click', function() {
        $(".pageBody").hide();
        $("#pageAnadirAlcancia").show();
        $('#formularioImagenes').show();
      });

      $("#closePreviewButton").click(function(){
      $("#previewAlcancia").hide();
      });
  
      $(".pageChanger").click(function() {
        $('input').val('');
        $('.hideInChange').hide();
        $(".showInCotizar").hide();
        emptyContenidoPedido();


        $("#regUbutton1").prop("disabled", false);
        $("#regUbutton2").prop("disabled", false);
        $("#actualizarInfoButton1").prop("disabled", false);
        $("#actualizarInfoButton1").show();
        $("#continuarPedidoButton1").prop("disabled", false); 
        $("#respuestaRegU").text("");
        $("#respuestaRegU2").text("");
        $("#respuestaIniciarU").text("");
        $("#datosEnvio1").hide();
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
        $("#datosEnvio0").show();
      });
  
      $("#buzonLink").click(function(){
        $(".pageBody").hide();
        $("#buzon").show();
      });
  
      $("#registroULink").click(function(){
        $(".pageBody").hide();
        $("#registroU1").show();
        $("#registroU2").hide();

        $("#continuarRegButton").prop("disabled", false);
        $("#continuarRegButton").show();
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
      
      

      function newCarrito() {
        let tabla = `
        <table id="carritoTable">
        <tr>
            <th>Vista previa</th>
            <th>Descripciónn del producto</th>
            <th>Costo</th>
            <th>Eliminar</th>
        </tr>
    </table>`
  
      $("#carritoPage").prepend(tabla);
      
      }


      var counterPedidos = 0;
      var subtotal = 0;


      function actualizarCarrito() {
        
        
        if (counterPedidos <= 4) {
          $("#excesoPedidosTexto").hide();
          $("#continuarPedidoButton1").show();
        }
        
        else {
          $("#excesoPedidosTexto").show();
          $("#continuarPedidoButton1").hide();
        }
        
        
        if (counterPedidos < 4) {
          $("#agregarAlCarritoButton").prop('disabled', false);
          
        }

        else {
          $("#agregarAlCarritoButton").prop('disabled', true);
        }

        if (counterPedidos == 0) {
          $("#carritoVacioText").show();
          $("#continuarPedidoButton1").hide();
          $("#vaciarCarritoButton").hide();
          $("#subtotalText").hide();
          $("#continuarPedidoButton1").hide();
        }
      }







      $("#agregarAlCarritoButton").click(function(){
        let n = Number($("#nAlcanciasAgregar").val());
        counterPedidos += n;

        let u = Number($('#picPrecio').text());
        let costoT = n*u;

        subtotal += costoT;

        var row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = $('#pic1').attr('src');
        cell1.append(img);
        row.append(cell1);
  
        let cell2 = document.createElement("td");
        let text = 
          "<b>Modelo: </b>" + $('#picModelo').text() + "<br>" +
          "<b>Diseño: </b>" + $('#picDiseño').text() + "<br>" +
          "<b>Precio unitario: </b>$" + $('#picPrecio').text() + "<br>" +
          "<b>Unidades: </b>" + n;

        cell2.innerHTML = text;
        row.append(cell2);

        let cell3 = document.createElement("td");
        cell3.append("$" + costoT);
        row.append(cell3);
  
        let cell4 = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.textContent = "Eliminar del carrito";
        removeButton.addEventListener("click", function() {
          let deletedRow = row;
          if (deletedRow.parentNode) {
            deletedRow.parentNode.removeChild(deletedRow);
          }
          
          counterPedidos -= n;
          subtotal -= costoT;
          $("#subtotal").text(subtotal);
          actualizarCarrito();
        });
        
        cell4.append(removeButton);
        row.append(cell4);
        $("#carritoTable").append(row);
        $("#subtotal").text(subtotal);
        $("#carritoVacioText").hide();

        actualizarCarrito();
        
  
      });




      $("#vaciarCarritoButton").click(function(){
        $("#carritoTable").remove();
        newCarrito();
        counterPedidos = 0;
        subtotal = 0;

        actualizarCarrito();
        $("#subtotal").text(subtotal);
        $("#carritoVacioText").show();
        $("#excesoPedidosTexto").hide();
        $("#vaciarCarritoButton").hide();
        $("#continuarPedidoButton1").hide();
        $("#datosEnvio1").hide();
        $("#subtotalText").hide();
        
      });

      
      //PASO 1: Cotización
      function fillDatosEnvio() {
        $(".userInfo#estadoEnvio").text( $(".userInfo#estado").text() );
        $(".userInfo#municipioEnvio").text( $(".userInfo#municipio").text() );
        $(".userInfo#direccionEnvio").text( $(".userInfo#calle").text() + $(".userInfo#numeroExterior").text() );
        $(".userInfo#cpEnvio").text( $(".userInfo#cp").text() );
      }

      function fillContenidoPedido() {

        var tablasPedido = document.getElementsByClassName('pedidoTable');
        var carritoTable = document.getElementById('carritoTable');

        for (var i = 0; i < tablasPedido.length; i++) {
          var tablaClonada = carritoTable.cloneNode(true);

          for (var j = 0; j < tablaClonada.rows.length; j++) {
            var ultimaCelda = tablaClonada.rows[j].cells[tablaClonada.rows[j].cells.length - 1];
            tablaClonada.rows[j].deleteCell(ultimaCelda.cellIndex);
          }
          tablasPedido[i].innerHTML = '';
          tablasPedido[i].appendChild(tablaClonada);
        }
      }

      

      function emptyContenidoPedido() {
        var tablasPedido = document.getElementsByClassName('pedidoTable');

        for (var i = 0; i < tablasPedido.length; i++) {
          tablasPedido[i].innerHTML = '';
      }
      }

      $("#continuarPedidoButton1").click(function(){
        $("#datosEnvio0").hide();
        $("#costoEnvioSin").text("");
        $("#costoEnvioCon").text("");
        //COTIZAR CON SESION INICIADA
        if ($("#sesionActual").text() != "No has iniciado sesión") {
          $("#datosEnvio1C").show();
          fillDatosEnvio();
          $("#datosEnvio1").show();

          var estadoCotizacion = $("#estadoEnvio").text();
    
            // Realizar la solicitud Ajax
            $.ajax({
                type: "POST",
                url: "cotizarConEstado.php",
                data: {estadoCotizacion: estadoCotizacion},
                success: function(response){
                    // Actualizar el contenido del div con id 'demo' con la respuesta del servidor
                    $("#costoEnvioCon").text(response);
                    fillContenidoPedido();
                }
            });

        }
        

        //COTIZAR SIN SESION INICIADA
        else {
          $("#datosEnvio1S").show();
        }

      //PASO 2: Mostrar datos completos antes de hacer el pago.
      $("#datosEnvio1").hide();
      });


});





    


































































