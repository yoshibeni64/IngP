<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script src="script2.js"></script>
    <script src="iniciarSesion2.js"></script>
    <script src="registrarUsuario.js"></script>
    <script src="registrarUsuario2.js"></script>

    <script src="actualizarPerfil.js"></script>
    <script src="mostrarCatalogo.js"></script>

    <script src="cotizarConCP.js"></script>
</head>
<body>
<p id="demo"></p>
<div class = "header">
	<h1>Arte Riveralo</h1>
    <div id = "registroLinks">
        <a id="sesionActual">No has iniciado sesión</a><br>
    	<a class="pageChanger hideInAdmin" id = "registroULink">Registrarse</a>
    	<a class="pageChanger" id = "iniciarULink">Iniciar sesión</a>
    </div>
</div>

<div class="topnav">
    <a class="pageChanger hideInAdmin" id="principalLink">Página principal</a>
    <a class="pageChanger hideInAdmin" id="perfilLink">Perfil</a>
    <a class="pageChanger" id="catalogoLink">Catálogo</a>
    <a class="pageChanger hideInAdmin" id="carritoLink">Carrito de compras</a>
    <a class="pageChanger hideInAdmin" id="buzonLink">Buzón de quejas</a>
</div>





<!-- Página principal -->
<div class="pageBody" id="principal">
    <h2>Bienvenido a Arte Riveralo!</h2>
    <h3>Somos una empresa mexicana dedicada a la creación de alcancías de cerámica personalizadas de tus personajes favoritos. 
        En está página podrás realizar pedidos de hasta 4 alcancías para que puedan ser enviados por el servicio de paquetería DHL
        Para comenzar te recomendamos registrar tu cuenta de correo electrónico. Encontrarás el botón de "Registrarse" en la parte
        superior derecha de está página.</h3>
    <h3>Te invitamos a seguirnos en nuestro Instagram:</h3>
    <a href="https://instagram.com/analauriveralo?igshid=MzRlODBiNWFlZA==">
        <img src="images/instagramLogo.png">
    </a>
</div>



<!-- Registro de nuevo usuario -->
<div class="pageBody" id="registroU1">
    <h2>Registro de Usuario</h2>

    <form id="formRegister" action="registrarUsuario.php" method="post">
    <table>
        <tr>
        <td><label for="correoR">Correo Electrónico:</label></td>
        <td><input type="email" name="correoR" id="correoR" maxlength="50" required></td>
        </tr>
        <tr>
        <td><label for="passwordR">Contraseña:</label></td>
        <td><input type="password" id="passwordR" name="passwordR" minlength="8" maxlength="50" required></td>
        </tr>
        <tr>
        <td><label for="passwordConfR">Confirmar contraseña:</label></td>
        <td><input type="password" id="passwordConfR" name="passwordConfR" minlength="8" maxlength="50" required></td>
        </tr>
        <tr>
        <td colspan="2"><button type="submit" id="continuarRegButton">Validar datos</button></td>
        </tr>
    </table>

    </form>
    <p id="mensajeRegistrarUsuario" class="mensaje hideInChange"></p>
</div> 



<div class="pageBody" id="registroU2">
    <form id="formRegister2" action="registrarUsuario2.php" method="post">
        <table>
        <tr>
            <td>Estado de la República Mexicana donde resides:</td>
        

            <td>
        <select id="estadoSelect" name="estadoSelect">
        <option selected="selected" value="0">Selecciona un estado</option>
        <option>Aguascalientes</option>
        <option>Baja California</option>
        <option>Baja California Sur</option>
        <option>Campeche</option>
        <option>Chiapas</option>
        <option>Chihuahua</option>
        <option>Ciudad de México</option>
        <option>Coahuila de Zaragoza</option>
        <option>Colima</option>
        <option>Durango</option>
        <option>Estado de México</option>
        <option>Guanajuato</option>
        <option>Guerrero</option>
        <option>Hidalgo</option>
        <option>Jalisco</option>
        <option>Michoacán de Ocampo</option>
        <option>Morelos</option>
        <option>Nayarit</option>
        <option>Nuevo León</option>
        <option>Oaxaca</option>
        <option>Puebla</option>
        <option>Querétaro Arteaga</option>
        <option>Quintana Roo</option>
        <option>San Luis Potosí</option>
        <option>Sinaloa</option>
        <option>Sonora</option>
        <option>Tabasco</option>
        <option>Tamaulipas</option>
        <option>Tlaxcala</option>
        <option>Veracruz</option>
        <option>Yucatán</option>
        <option>Zacatecas</option>
        </select>

        </td>
        </tr>
        <tr>
        <td>Municipio donde resides:</td>
        
        
        <td>
        <select id = "municipioReg" name="municipioReg">
        <option value="0">Selecciona un municipio</option>
        </select></td>

        </tr>
        <tr>
            <td>Calle donde resides:</td>
            <td><input id="regUcalle" name="regUcalle" size = 50 maxlength="100" value="callePrueba" required></td>
        </tr>
        <tr>
            <td>Número exterior</td>
            <td><input id="regUnumExt" name="regUnumExt" type="number" size = 50 maxlength="10" required></td>
        </tr>
        <tr>
            <td>Código Postal:</td>
            <td><input id="regUcp" name="regUcp" type="number" minlength="5" maxlength="5" required></td>
        </tr>
        <tr>
            <td colspan="2"><button type="submit" id="completarRegButton">Validar datos</button></td>
        </tr>
        </table>
        
        <p id="respuestaRegU2" class="mensaje hideInChange"></p>
    </form>
    
</div>












<!-- Iniciar sesión -->
<div class="pageBody" id="iniciarU">
<h2>Iniciar Sesión</h2>
<form id="formLogin" action="iniciarSesion2.php" method="post">
  <table>
    <tr>
      <td><label for="correoI">Correo Electrónico:</label></td>
      <td><input type="email" name="correoI" id="correoI" maxlength="50" required ></td>
    </tr>
    <tr>
      <td><label for="passwordI" >Contraseña:</label></td>
      <td><input type="password" id="passwordI" name="passwordI" minlength="8" maxlength="50" required></td>
    </tr>
    <tr>
      <td colspan="2"><button type="submit" id="buttonIniciar">Iniciar Sesión</button></td>
    </tr>
  </table>
  <div id="mensajeIniciarSesion" class="mensaje hideInChange"></div>
</form>


</div>

<!-- Perfil -->
<div class="pageBody" id="perfil">
    <p id="noConnectedUserText">Aun no has iniciado sesión</p>
	<h2>Información de tu cuenta</h2>
    <table>
    <tr>
    	<td>Correo electrónico:</td>
        <td><span class="userInfo" id="email"></span></td>
    </tr>
    <tr>
    	<td>Contraseña:</td>
        <td><span class="userInfo" id="password"></span></td>
    </tr>
    <tr>
    	<td>Estado de la República donde resides:</td>
        <td><span class="userInfo" id="estado"></span></td>
    </tr>
    <tr>
    	<td>Municipio donde resides:</td>
        <td><span class="userInfo" id="municipio"></span></td>
    </tr>
    <tr>
    	<td>Calle donde resides</td>
        <td><span class="userInfo" id="calle"></span></td>
    </tr>
    <tr>
    	<td>Número exterior de domicilio</td>
        <td><span class="userInfo" id="numeroExterior"></span></td>
    </tr>
    <tr>
    	<td>Código Postal</td>
        <td><span class="userInfo" id="cp"></span></td>
    </tr>
    </table>
    <p><button id="actualizarInfoButton1" class="hideInStart">Actualizar información de Perfil</button></p>
    <div id="nuevosDatos" class="hideInStart">


    <form id="formActualizarPerfil" action="actualizarPerfil.php" method="post">
    <input type="hidden" name="correoA" id="correoA" maxlength="50" required>
    <table>
        <tr>
        <td><label for="correoAblocked">Correo Electrónico:</label></td>
        <td><div name="correoAblocked" id="correoAblocked"></div></td>
        </tr>
        <tr>
        <td><label for="passwordA">Contraseña:</label></td>
        <td><input type="password" id="passwordA" name="passwordA" minlength="8" maxlength="50" required></td>
        </tr>
        <tr>
        <td><label for="passwordConfA">Confirmar contraseña:</label></td>
        <td><input type="password" id="passwordConfA" name="passwordConfA" minlength="8" maxlength="50" required></td>
        </tr>

        <tr>
          <td>Estado de la República Mexicana donde resides:</td>
      

          <td>
      <select id="estadoSelectA" name="estadoSelectA">
      <option selected="selected" value="0">Selecciona un estado</option>
      <option>Aguascalientes</option>
      <option>Baja California</option>
      <option>Baja California Sur</option>
      <option>Campeche</option>
      <option>Chiapas</option>
      <option>Chihuahua</option>
      <option>Ciudad de México</option>
      <option>Coahuila de Zaragoza</option>
      <option>Colima</option>
      <option>Durango</option>
      <option>Estado de México</option>
      <option>Guanajuato</option>
      <option>Guerrero</option>
      <option>Hidalgo</option>
      <option>Jalisco</option>
      <option>Michoacán de Ocampo</option>
      <option>Morelos</option>
      <option>Nayarit</option>
      <option>Nuevo León</option>
      <option>Oaxaca</option>
      <option>Puebla</option>
      <option>Querétaro Arteaga</option>
      <option>Quintana Roo</option>
      <option>San Luis Potosí</option>
      <option>Sinaloa</option>
      <option>Sonora</option>
      <option>Tabasco</option>
      <option>Tamaulipas</option>
      <option>Tlaxcala</option>
      <option>Veracruz</option>
      <option>Yucatán</option>
      <option>Zacatecas</option>
      </select>

      </td>
      </tr>
      <tr>
      <td>Municipio donde resides:</td>
      
      
      <td>
      <select id = "municipioA" name="municipioA">
      <option value="0">Selecciona un municipio</option>
      </select></td>

      </tr>
      <tr>
          <td>Calle donde resides:</td>
          <td><input id="calleA" name="calleA" size = 30 value="callePaleta" maxlength="100" required></td>
      </tr>
      <tr>
          <td>Número exterior de domicilio:</td>
          <td><input type = "number" id="numExtA" name="numExtA" size = 30 maxlength="10" required></td>
      </tr>
      <tr>
          <td>Código Postal:</td>
          <td><input id="cpA" name="cpA" type="number" minlength="5" maxlength="5" required></td>
      </tr>
      <tr>
          <td colspan="2"><button type="submit">Actualizar datos de perfil"</button></td>
      </tr>

        
    </table>
    </form>
    </div>

  <div id="mensajeActualizarPerfil" class="mensaje hideInChange"></div>
    
    



</div>








<!-- Catálogos -->
<div class="pageBody" id="catalogo">
    <h2>Selecciona el catálogo de alcancías que desees consultar:</h2>
    <button id = "buttonCatalogoN">Normal</button>
    <button id = "buttonCatalogoP">Parado</button>
    <button id = "buttonCatalogoA">Avión</button>
    <br>
    
    <button id="addAlcanciaButton" class="hideInUser hideInStart">
            <p>+<br> Añadir alcancia</p>
    </button>
    <br>
  
    <h3>Selecciona el diseño que desees consultar:</h3>
    <h3 id = "removeCatalogoText" class="hideInStart">Selecciona el diseño que desees eliminar:</h3>
    <h2 id = "mensajeCatalogoVacio"></h2>
    
    


    <!-- Catálogo normal -->
    <div class="catalogoContenedor" id="contenedorCatalogoN">
            
    </div>
    <div class="catalogoContenedor" id="contenedorCatalogoP">
  
    </div>  
    <div class="catalogoContenedor" id="contenedorCatalogoA">
    
    </div>
</div>




<!-- Demostracion de alcancia -->
<div class="pageBody" id="previewAlcancia">
    <div class="row">
        <div class="column">
                <div class = "alcanciaCont">
                    <img id = "pic1">
                </div>
        </div>
        <div class="column">
                <div class = "alcanciaCont">
                    <img id = "pic2">
                </div>
        </div>
        <div class="column">
            <button id = "closePreviewButton" style="float:right;">X</button>
            <h3>Descripción del producto</h3>
            <p class="hideInUser">Disponibilidad: <span id="picStatus"></span></p>
            <p>Modelo: <span id="picModelo"></span></p>
            <p>Diseño: <span id="picDiseño"></span></p>
            <p>Precio: $<span id="picPrecio"></span> MXN</p>
            <p class="hideInAdmin">Unidades a agregar:
                <select id="nAlcanciasAgregar">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
            <button id="agregarAlCarritoButton" class="hideInAdmin">Agregar al carrito</button></p>
        </div>
    </div>

    <button id="removeFromCatalogoButton" class="hideInUser">
            Remover del catálogo
    </button>

    <button id="addToCatalogoButton" class="hideInUser">
            Mostrar en catálogo
    </button>
</div>





<!-- Pagina para anadir alcancia -->
<div class="pageBody" id="pageAnadirAlcancia">
<form id="formularioImagenes" enctype="multipart/form-data" action="subirAlcancia.php" method="post">
        <table>
            <tr>
                <td>
                    <label for="modelo">Modelo:</label>
                </td>
                <td>
                    <select id="modelo" name="modelo">
                        <option value="Normal">Normal</option>
                        <option value="Parado">Parado</option>
                        <option value="Avion">Avion</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="nuevoDiseno">Inserta el nombre del diseño de la nueva alcancía:</label>
                </td>
                <td>
                    <input type="text" id="nuevoDiseno" name="nuevoDiseno" maxlength="50">
                </td>
            </tr>
            
            <tr>
                <td>
                    <label for="imagenPrev">Imagen Prev:</label>
                </td>
                <td>
                    <input type="file" id="imagenPrev" name="imagenPrev" accept="image/*" onchange="mostrarVistaPrevia('imagenPrev', 'vistaPreviaPrev')">
                    <img id="vistaPreviaPrev" src="" alt="Vista Previa de Imagen Prev" style="display: none;">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="imagenFull">Imagen Full:</label>
                </td>
                <td>
                    <input type="file" id="imagenFull" name="imagenFull" accept="image/*" onchange="mostrarVistaPrevia('imagenFull', 'vistaPreviaFull')">
                    <img id="vistaPreviaFull" src="" alt="Vista Previa de Imagen Full" style="display: none;">
                </td>
            </tr>
            
            <tr id="centrarBoton">
                <td colspan="2">
                    <button id="botonEnviar" class="hideInChange" type="submit">Enviar</button>
                </td> 
            </tr>
        </table>
    </form>
    

    <div id="mensajeSubirAlcancia" class="mensaje hideInChange"></div>

    <script>
        function mostrarVistaPrevia(inputId, vistaPreviaId) {
            const input = document.getElementById(inputId);
            const vistaPrevia = document.getElementById(vistaPreviaId);

            if (input.files && input.files[0]) {
                const lector = new FileReader();

                lector.onload = function (e) {
                    vistaPrevia.src = e.target.result;
                    vistaPrevia.style.display = 'block';
                }

                lector.readAsDataURL(input.files[0]);
            }
        }
    </script>


<script>
    // Manejar el envío del formulario con jQuery.ajax
    $(document).ready(function () {
    $('#botonEnviar').click(function () {
        var formData = new FormData($('#formularioImagenes')[0]);
        event.preventDefault();

        // Realizar la solicitud AJAX con jQuery
        $.ajax({
            url: 'subirAlcancia.php',
            type: 'POST',
            data: formData, // Envía los datos del formulario
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                $('#mensajeSubirAlcancia').show();
                $('#mensajeSubirAlcancia').html(data.mensaje);

                if(data.mensaje.includes("subidas")) {
                    $("#botonEnviar").prop('disabled', true);
                    $("#botonEnviar").hide();
                }
                
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    });
});

</script>




</div>


<!-- Carrito de compras -->

<div class="pageBody" id="carritoPage">
    <div id="datosEnvio0">
    <h2>Tu carrito de compras</h2>
    <!-- 1. Carrito con articulos -->
    <table id = "carritoTable">
        <tr>
            <th>Vista previa</th>
            <th>Descripción del producto</th>
            <th>Costo</th>
            <th>Eliminar</th>
        </tr>
    </table>
    
    <!-- Carrito vacio -->
    <p id = "carritoVacioText">Tu carrito está vacío. Consulta el catálogo para comenzar a llenar tu pedido.</p>
    <p id = "nUnidadesText" class="hideInStart">Costo del contenido del pedido (Subtotal): $<span id="subtotalSpan">0</span> MXN</p>
    <p id = "subtotalText" class="hideInStart">Número de unidades en el pedido: <span id="nUnidadesSpan">0</span></p>
    <p><button id="vaciarCarritoButton" class="hideInStart">Vaciar carrito de compras</button></p>
    <!-- Error de exceso de alcancias -->
    <p id = "excesoPedidosTexto" class="mensaje hideInStart">ERROR: No se podrá concretar la compra porque el número límite máximo de alcancías por pedido es de 4.</p>
    <p><button id="continuarPedidoButton1" class="hideInStart">Continuar</button></p>
    </div>

    <!-- 2.1 Cotización sin sesión iniciada -->
    <div id="datosEnvio1S" class="pageBody hideInChange hideInStart">
    <h2>Para continuar con la compra debes iniciar sesión, o bien puedes registrar tu Código Postal para cotizar el pedido</h2>
    <form id="formCotizarconCP" action="cotizarConCP.php" method="post">
    <input id="cpCotizacion" name="cpCotizacion" type="number" minlength="5" maxlength="5" required>
    <button type="submit" id="cpCotizacionButton">Cotiza tu pedido</button>
    </form>
        <div id="datosEnvio1STablas" class="hideInChange">
            <h2>Contenido del pedido</h2>
            <table id = "pedidoTableS" class = "pedidoTable">
            </table>

            <p>Los datos de fecha de entrega de su pedido serían los siguientes:</p>
                <table>
                <tr>
                    <td>Fecha estimada de entrega del pedido:</td>
                    <td><span class="userInfo" id="fechaEstimadaEntregaS"></span></td>
                </tr>
            </table>
            <p>La fecha estimada de entrega es la fecha más tarde en la que recibiría su pedido. La fecha real de entrega le llegaría a su correo electrónico<br>
                cuando su pedido este listo.</p>

            <p class="userInfo hideInChange mensaje" id="mensajeCostoEnvioS"></p>
            <br>
            <table id="costosTotalesTableSin" class="hideInChange"></table>
        </div>
    </div>
    

    <!-- 2.2 Cotización con sesión iniciada -->
    <div id="datosEnvio1C" class="pageBody hideInChange hideInStart">
        <h2>Contenido de tu pedido</h2>
        <table id = "pedidoTableC" class = "pedidoTable"></table>
        
        <p class="userInfo hideInChange mensaje" id="mensajeCostoEnvioC"></p>
        <br>
        
        <h2>Tus datos de envio</h2>
        <p>Verifica que los datos de envío y del pedido son correctos. <br>
        Si deseas cambiar algún dato de la dirección de envío puedes realizarlo en la sección de perfil.</p>

        <table id="datosEnvioTable">
        <tr>
    	    <td>Estado de la República donde resides:</td>
            <td><span class="userInfo" id="estadoEnvio"></span></td>
        </tr>
        <tr>
            <td>Municipio donde resides:</td>
            <td><span class="userInfo" id="municipioEnvio"></span></td>
        </tr>
        <tr>
            <td>Dirección de envío:</td>
            <td><span class="userInfo" id="direccionEnvio"></span></td>
        </tr>
        <tr>
            <td>Código Postal:</td>
            <td><span class="userInfo" id="cpEnvio"></span></td>
        </tr>
        </table>
        
        <p>Los datos de fecha de entrega de su pedido serían los siguientes:</p>
        <table id="datosFechaTable">
        <tr>
            <td>Fecha estimada de entrega del pedido:</td>
            <td><span class="userInfo" id="fechaEstimadaEntregaC"></span></td>
        </tr>
        </table>
        <p>La fecha estimada de entrega es la fecha más tarde en la que recibiría su pedido. La fecha real de entrega le llegaría a su correo electrónico<br>
    cuando su pedido este listo.</p>
        <br>



        <h2>Costos finales</h2>
        <table id="costosTotalesTableCon" class="hideInChange">
        </table>

        <button id='procederPagoBotton' class="hideInChange">Proceder con el pago</button>
    </div>

        

    <div id="seccionDePago" class="pageBody hideInChange">
        <h2>Para finalizar, ingresa a tu cuenta de Mercado Pago con la que realizarás el pago.</h2>
        <label>
        <input type="checkbox" id="mercadoPagoCheckbox">
        He ingresado los datos de Mercado Pago
        </label>
        <br>
        <button id="finalizarCompraButton" class="pageBody hideInChange">Finalizar compra</button>
    </div>
</div>

<div id="ordenPedido" class="pageBody hideInChange">
        <h2>Compra finalizada</h2>
        <p>Muchas gracias por comprar con nosotros. Esta es la información de su orden:</p>
        <table>
            <tr>
                <td>ID de tu pedido:</td>
                <td id="idPedido"></td>
            </tr>
        </table>
        <div id="ordenTable">
        </div>
        <br>
        <p>En su correo electrónico le haremos llegar la guía de su pedido para que pueda estar al pendiente de este para recogerlo</p>
        <p>Recomendamos tomarle captura por si requiere realizar alguna queja cuando reciba su pedido.</p>
    </div>

<div class="pageBody" id="buzon">
    <h2>Buzón de quejas</h2>
    <p>Si deseas reportar problemas en el recibo de un pedido, favor de escribir la ID del pedido y describir
        el problema. Es necesario que adjunta evidencia fotográfica para validar su solicitud.
    </p>
        <div id = "buzon1">
        <label for="buscarPedidoID">Buscar Pedido ID:</label>
        <input type="number" id="buscarPedidoID" name="buscarPedidoID" maxlength="10">
        <p><button type="submit" id="buscarPedidoButton">Buscar pedido</button></p>
        </div>
        <p id = "mensajeBuscarPedido" class="mensaje hideInChange"></p>
        <div id="quejaContenido" class="hideInChange">
            <p>Por favor describa el problema encontrado en su producto.</p>
            <form action="mailto:riveraloarte51@gmail.com" method="post" enctype="multipart/form-data">
                <label for="queja">Ingrese su queja:</label><br>
                <textarea id="queja" name="queja" rows="20" cols="100" maxlength="500"></textarea>

                <button type="submit">Enviar queja</button>
            </form>

        </div>
    </span>
</div>


</body>



</html>
