var cont = 0;
var usersArray = [];

class usuario {
  constructor(email, password, estado, municipio, direccion, cp) {
     this.email = email;
     this.password = password;
     this.estado = estado;
     this.municipio = municipio;
     this.cp = cp;
     this.colonia = colonia;
     
       }
}



var usuarioConectado = unicoUsuario;




class alcancia {
  constructor(modelo, diseño, imagenPrev, imagenFull) {
    this.modelo = modelo;
    this.diseÃ±o = diseÃ±o;
    this.imagenPrev = imagenPrev;
    this.imagenFull = imagenFull;
    this.precio = precio();
      }

    precio() {
      switch (this.modelo) {
        case "N":
          return 250;
          break;
        case "P":
          return 300;
          break;
        case "A":
          return 400;
          break;
      }
    }

    
}

function createAlcancia(modelo, diseño, imagenPrev, imagenFull, precio){
  let alcanciaNueva = new alcancia(modelo, diseño, imagenPrev, imagenFull, precio);

  //Mango php 1

}

function fillPerfil() {
  $(".userInfo#email").text(usuarioConectado.email);
  $(".userInfo#email2").text(usuarioConectado.email);
  $(".userInfo#password").text(usuarioConectado.password);
  $(".userInfo#estado").text(usuarioConectado.estado);
  $(".userInfo#municipio").text(usuarioConectado.municipio);
  $(".userInfo#direccion").text(usuarioConectado.direccion);
  $(".userInfo#cp").text(usuarioConectado.cp);
}

function fillDatosEnvio1() {
  $(".userInfo#estadoEnvio").text(usuarioConectado.estado);
  $(".userInfo#municipioEnvio").text(usuarioConectado.municipio);
  $(".userInfo#direccionEnvio").text(usuarioConectado.direccion);
  $(".userInfo#cpEnvio").text(usuarioConectado.cp);
}


function sortContenedor(arreglo) {
  arreglo.sort(function(a, b){
    let x = a.diseÃ±o.toLowerCase();
    let y = b.diseÃ±o.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
}

function createCatalogo(arreglo, letra) {
  for (var i = 0; i<arreglo.length; i++) {
    let contenedor = document.createElement("div");

    contenedor.classList.add("alcanciaCont", letra);
    let imagen = document.createElement("img");
    imagen.src = arreglo[i].imagenPrev;
    let nombre = document.createElement("span");
    nombre.innerHTML = arreglo[i].diseÃ±o;
    contenedor.append(imagen);
    contenedor.append(nombre);
    let idContenedor = "contenedorCatalogo" + letra;

    $("#" + idContenedor).append(contenedor);
  }
}

function agregarCarrito() {

}

createAlcancia("N", "Bugs Bunny", "images/NormalesPrev/NormBugsBunnyPrev.jpg", "images/NormalesFull/NormBugsBunnyFull.jpg");
createAlcancia("N", "Carnage", "images/NormalesPrev/NormCarnagePrev.jpg", "images/NormalesFull/NormCarnageFull.jpg");
createAlcancia("N", "Chase", "images/NormalesPrev/NormChasePrev.jpg", "images/NormalesFull/NormChaseFull.jpg");
createAlcancia("N", "Deadpool", "images/NormalesPrev/NormDeadpoolPrev.jpg", "images/NormalesFull/NormDeadpoolFull.jpg");
createAlcancia("N", "Dumbo", "images/NormalesPrev/NormDumboPrev.jpg", "images/NormalesFull/NormDumboFull.jpg");
createAlcancia("N", "Goku", "images/NormalesPrev/NormGokuPrev.jpg", "images/NormalesFull/NormGokuFull.jpg");
createAlcancia("N", "Kahlo", "images/NormalesPrev/NormKahloPrev.jpg", "images/NormalesFull/NormKahloFull.jpg");
createAlcancia("N", "Lola Bunny", "images/NormalesPrev/NormLolaBunnyPrev.jpg", "images/NormalesFull/NormLolaBunnyFull.jpg");
createAlcancia("N", "Lotso", "images/NormalesPrev/NormLotsoPrev.jpg", "images/NormalesFull/NormLotsoFull.jpg");
createAlcancia("N", "Marvin", "images/NormalesPrev/NormMarvinPrev.jpg", "images/NormalesFull/NormMarvinFull.jpg");
createAlcancia("N", "Miraculous", "images/NormalesPrev/NormMiraculousPrev.jpg", "images/NormalesFull/NormMiraculousFull.jpg");
createAlcancia("N", "Mono", "images/NormalesPrev/NormMonoPrev.jpg", "images/NormalesFull/NormMonoFull.jpg");
createAlcancia("N", "MuÃ±equita", "images/NormalesPrev/NormMunequitaPrev.jpg", "images/NormalesFull/NormMunequitaFull.jpg");
createAlcancia("N", "Novia", "images/NormalesPrev/NormNoviaPrev.jpg", "images/NormalesFull/NormNoviaFull.jpg");
createAlcancia("N", "Novio", "images/NormalesPrev/NormNovioPrev.jpg", "images/NormalesFull/NormNovioFull.jpg");
createAlcancia("N", "Pato Lucas", "images/NormalesPrev/NormPatoLucasPrev.jpg", "images/NormalesFull/NormPatoLucasFull.jpg");
createAlcancia("N", "SantaF", "images/NormalesPrev/NormSantaFPrev.jpg", "images/NormalesFull/NormSantaFFull.jpg");
createAlcancia("N", "Santa", "images/NormalesPrev/NormSantaPrev.jpg", "images/NormalesFull/NormSantaFull.jpg");
createAlcancia("N", "Skye", "images/NormalesPrev/NormSkyePrev.jpg", "images/NormalesFull/NormSkyeFull.jpg");
createAlcancia("N", "Venom", "images/NormalesPrev/NormVenomPrev.jpg", "images/NormalesFull/NormVenomFull.jpg");
createAlcancia("N", "Winnie Pooh", "images/NormalesPrev/NormWinniePoohPrev.jpg", "images/NormalesFull/NormWinniePoohFull.jpg");
createAlcancia("N", "Ariel", "images/NormalesPrev/NormArielPrev.jpg", "images/NormalesFull/NormArielFull.jpg");
createAlcancia("P", "Cien Caras", "images/ParadosPrev/ParCienCarasPrev.jpg", "images/ParadosFull/ParCienCarasFull.jpg");
createAlcancia("P", "Goku", "images/ParadosPrev/ParGokuPrev.jpg", "images/ParadosFull/ParGokuFull.jpg");
createAlcancia("P", "Helga", "images/ParadosPrev/ParHelgaPrev.jpg", "images/ParadosFull/ParHelgaFull.jpg");
createAlcancia("P", "Hermione", "images/ParadosPrev/ParHermionePrev.jpg", "images/ParadosFull/ParHermioneFull.jpg");
createAlcancia("P", "Leonidas", "images/ParadosPrev/ParLeonidasPrev.jpg", "images/ParadosFull/ParLeonidasFull.jpg");
createAlcancia("P", "Mariachi", "images/ParadosPrev/ParMariachiPrev.jpg", "images/ParadosFull/ParMariachiFull.jpg");
createAlcancia("P", "Marina", "images/ParadosPrev/ParMarinaPrev.jpg", "images/ParadosFull/ParMarinaFull.jpg");
createAlcancia("P", "Mimo", "images/ParadosPrev/ParMimoPrev.jpg", "images/ParadosFull/ParMimoFull.jpg");
createAlcancia("P", "MuÃ±equita", "images/ParadosPrev/ParMunequitaPrev.jpg", "images/ParadosFull/ParMunequitaFull.jpg");
createAlcancia("P", "Slash", "images/ParadosPrev/ParSlashPrev.jpg", "images/ParadosFull/ParSlashFull.jpg");


createAlcancia("A", "Aeromar", "images/AvionesPrev/AviAeromarPrev.jpg", "images/AvionesFull/AviAeromarFull.jpg");
createAlcancia("A", "Aeromexico", "images/AvionesPrev/AviAeromexicoPrev.jpg", "images/AvionesFull/AviAeromexicoFull.jpg");
createAlcancia("A", "American Express", "images/AvionesPrev/AviAmericanAPrev.jpg", "images/AvionesFull/AviAmericanAFull.jpg");
createAlcancia("A", "Click", "images/AvionesPrev/AviClickPrev.jpg", "images/AvionesFull/AviClickFull.jpg");
createAlcancia("A", "Volaris", "images/AvionesPrev/AviVolarisPrev.jpg", "images/AvionesFull/AviVolarisFull.jpg");

createCatalogo(alcanciasA, "A");
createCatalogo(alcanciasP, "P");
createCatalogo(alcanciasN, "N");



$(document).ready(function(){
  //Condiciones iniciales temporales
    $('#regUestado option[value="0"]').attr("selected",true);
    $("#nuevosDatos").hide();
    $("#excesoPedidosTexto").hide();
    $("#continuarPedidoButton1").hide();
    $("#vaciarCarritoButton").hide();
    $("#subtotalText").hide();
    $("#datosEnvio1").hide();

    $("#actualizarInfoButton1").click(function(){
        $("#actualizarInfoButton1").prop("disabled", true);
        $("#nuevosDatos").show();
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
      

      if (usuarioConectado == null) {  
        $("#actualizarInfoButton1").hide();
        $("#noConnectedUserText").show();
      }

      else {
        $("#actualizarInfoButton1").show();
        $("#noConnectedUserText").hide();
      }
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

    var x;
    $(".alcanciaCont").click(function(){
      var arreglo;
      if (this.classList.contains('N') == true) {
        arreglo = alcanciasN;
      }

      else if (this.classList.contains('P') == true) {
        arreglo = alcanciasP;
      }

      else if (this.classList.contains('A') == true) {
        arreglo = alcanciasA;
      }
      
      let img = this.childNodes[0].src;
      let n;

      //getAlcanciaIndex de un contenedor
      for (var i = 0; i < arreglo.length; i++) {
        let p = arreglo[i].imagenPrev;
        if (img.includes(p) == true) {
          n = i;
          break;
        }
        
      }
      
      x = arreglo[n];

      $("#pic1").attr("src", x.imagenPrev);
      $("#pic2").attr("src", x.imagenFull);
      $("#picModelo").text(x.modelo);
      $("#picDiseÃ±o").text(x.diseÃ±o);
      $("#picPrecio").text(x.precio());

      $("#previewAlcancia").show();
    });

    $("#closePreviewButton").click(function(){
      $("#previewAlcancia").hide();
    });

    var pedidosArray = [];
    var counterPedidos = 0;
    var subtotal = 0;
    
    class pedido extends alcancia {
      constructor(modelo, diseÃ±o, imagenPrev, n){
        super(modelo, diseÃ±o, imagenPrev);
        this.n = n;
      }
      
      costoT() {
        return (this.precio() * this.n);
      }

      addCounterPedido() {
        counterPedidos += this.n;
      }
    }

    
    
    $("#agregarAlCarritoButton").click(function(){
      let p = Number($("#nAlcanciasAgregar").val());
      var y = new pedido(x.modelo, x.diseÃ±o, x.imagenPrev, p);
      y.addCounterPedido();
      var row = document.createElement("tr");
      let cell1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = x.imagenPrev;
      cell1.append(img);
      row.append(cell1);

      let cell2 = document.createElement("td");
      let text = 
        "Modelo: " + y.modelo +
        "DiseÃ±o: " + y.diseÃ±o +
        "Precio unitario: " + y.precio() +
        "Unidades: " + y.n;
      cell2.append(text);
      row.append(cell2);

      let cell3 = document.createElement("td");
      cell3.append(y.costoT());
      row.append(cell3);

      let cell4 = document.createElement("td");
      let removeButton = document.createElement("button");
      removeButton.textContent = "Eliminar del carrito";
      removeButton.addEventListener("click", function() {
        counterPedidos -= y.n;
        subtotal -= y.costoT();
        $("#subtotal").text(subtotal);
        let deletedRow = row;
        if (deletedRow.parentNode) {
          deletedRow.parentNode.removeChild(deletedRow);
        }

        if (counterPedidos < 4) {
          $("#agregarAlCarritoButton").prop('disabled', false);
        }


        if (counterPedidos <= 4) {
          $("#excesoPedidosTexto").hide();
        }

        if (counterPedidos == 0) {
          $("#carritoVacioText").show();
          $("#continuarPedidoButton1").hide();
          $("#vaciarCarritoButton").hide();
          $("#subtotalText").hide();
        }

        if (counterPedidos > 0) {
          $("#continuarPedidoButton1").show();
          $("#vaciarCarritoButton").show();
          $("#subtotalText").show();
        }
        
          
      });
      
      cell4.append(removeButton);
      row.append(cell4);
      $("#carritoTable").append(row);

      pedidosArray.push(y);

      subtotal += y.costoT();
      $("#subtotal").text(subtotal);

      if (counterPedidos >= 4) {
        $("#agregarAlCarritoButton").prop('disabled', true);
      }

      if (counterPedidos > 4) {
        $("#excesoPedidosTexto").show();
      }

      if (counterPedidos > 0) {
        $("#continuarPedidoButton1").show();
        $("#vaciarCarritoButton").show();
        $("#subtotalText").show();
      }


      $("#carritoVacioText").hide();
      

    });

    function newCarrito() {
      let tabla = `
      <table id="carritoTable">
      <tr>
          <th>Vista previa</th>
          <th>DescripciÃ³n del producto</th>
          <th>Costo</th>
          <th>Eliminar</th>
      </tr>
  </table>`

    $("#carritoPage").prepend(tabla);
    
    }
  
    $("#vaciarCarritoButton").click(function(){
      $("#carritoTable").remove();
      newCarrito();
      counterPedidos = 0;
      subtotal = 0;
      $("#subtotal").text(subtotal);
      $("#carritoVacioText").show();
      $("#excesoPedidosTexto").hide();
      $("#vaciarCarritoButton").hide();
      $("#continuarPedidoButton1").hide();
      $("#avisoContinuarCompra").hide();
      $("#datosEnvio1").hide();
      $("#subtotalText").hide();
      
    });

    $("#continuarPedidoButton1").click(function(){
      if (usuarioConectado) {
        fillDatosEnvio1();
        $("#datosEnvio1").show();
      }

      else {
        $("#avisoContinuarCompra").show();
        
      }
    });










    


/*
        FUNCION PARA ANADIR ALCANCIA AL CATALOGO
        0. Tomar en cuenta en cuÃ¡l de los 3 catÃ¡logos estÃ¡ anadiendo la alcancia con la ID del catalogo (contenedorCatalogoN)
        0.1 Pedir al cliente que aÃ±ada dos imagenes para la alcancia, una para la preview y otra con diferentes angulos en collage.
        0.2. Pedir tambien el nombre de la alcancÃ­a
        1. Crear un div
        2. AÃ±adir la clase "alcanciaCont" al div
        3. AÃ±adir la clase A, N o P segun sea el caso
        3. Asignar el atributo name del nombre del diseÃ±o
        4. AÃ±adir una img con src de la preview

        */

});






    var text = "";



$("#functionExec3").click(function() {
  text = "";
  for (var j = 0; j < usersArray.length; j++) {
    text += usersArray[j];
    
  }
  $("#demo").text(text); 
});

$("#functionExec4").click(function() {
  text = "";
  for (var j = 0; j < usersArray.length; j++) {
    text += usersArray[j];
    
  }
  $("#demo").text(text); 
});
  
var email, password, confPassword;






function registerUser1() {
  // Obtener los datos del formulario
  var correo = $("#regCorreo").val();
  var contrasena = $("#regPasword").val();

  // Enviar los datos mediante AJAX
  $.ajax({
      type: "POST",
      url: "register.php",
      data: { regCorreo: correo, regPassword: contrasena },
      dataType: "json",
      success: function(response) {
          // Mostrar el mensaje de registro en el contenedor
          $("#mensajeRegistro").text(response.mensaje);
      }
  });
}









/*0. Declarar funcion para registrar usuario*/
function registerUser3() {
  /*1. Se vacia la casillla de respuesta*/
  $("#respuestaRegU1").text("");
  /*2. Obtener los datos de los inputs*/
  email = $("#regUemail").val();
  password = $("#regUpassword").val();
  confPassword = $("#regUconfPassword").val();

  /*3.1 El email ingresado no tiene sintaxis de email*/
  if(!email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
    text = "ERROR: Se ha detectado una direccion de email invÃ¡lida. Corrija e intente de nuevo."
    $("#respuestaRegU").text(text); 
    return
  }

  /*3.2 La contraseÃ±a es demasiado corta*/
  else if(password.length < 8) {
    text = "ERROR: La contraseÃ±a es demasiado corta. Corrija e intente de nuevo."
    $("#respuestaRegU").text(text); 
    return
  }

  /*3.3 Validacion de datos en blanco*/
  else if (email == "" || password == "" || confPassword == "") {
    text = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
    $("#respuestaRegU").text(text); 
    return;
  }
  

  var correoRepetido = false;
  
  //Buscar el correo en la BD
  for (const user of usersArray) {  
    if (user.email === email) {
      correoRepetido = true;
      break;
    }
  }

  /*3.4 El correo ya estaba registrado*/
  if (correoRepetido == true) {
    text = "ERROR: El correo con el que intenta registrarse ya tiene una cuenta. Corrija e intente de nuevo."
  }

  /*3.5 Las contrasenas no coinciden*/
  else if (correoRepetido == false && password != confPassword) {
    text = "ERROR: Las contraseÃ±as no coinciden. Corrija e intente de nuevo."    
  }

  /*3.6 Correo unico y contrsenas coinciden*/
  else if (correoRepetido == false && password == confPassword) {

    $("#regUbutton1").prop('disabled', true);
    text = "Datos validados. Continue con el registro"

  /*3.61 Se despliega la segunda parte del registro*/
    $("#registroU2").show();
  }

  /*4. Se imprime el texto de respuesta*/
  $("#respuestaRegU").text(text);   
}

var estado, municipio, direccion, cp;
/*0. Declarar funcion para registrar usuario (parte 2)*/
function registerUser2() {
  text = "";
  $("#respuestaRegU").text("");
  /*1. Se vacia la casillla de respuesta*/
  $("#respuestaRegU2").text("");

  /*2. Obtener los datos de los inputs*/
estado = $("#regUestado").val();
municipio = $("#regUmunicipio").val();
direccion = $("#regUdireccion").val();
cp = $("#regUcp").val();

  /*3.0 Validacion de datos en blanco*/
  if (estado == 0 || municipio == null || municipio == 0 || direccion == "" || cp == "") {
    text = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
    $("#respuestaRegU2").text(text); 
    return;
  }
  
  /*3.1 Validacion de Codigo Postal de 5 numeros*/
  else if (cp.length != 5) {
    text = "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos."
  }

  else {
    $("#regUbutton2").prop('disabled', true);
  
    text = "Registro completado. Si desea cambiar algÃºn dato puede hacerlo en el apartado de Perfil."
    /*3.11 Se guarda en la BD de usuarios registrados el nuevo usuario registrado;*/

    const nuevoUsuario = new usuario(email, password, estado, municipio, direccion, cp);

    usersArray.push(nuevoUsuario);
  }
  
/*4. Se imprime el texto de respuesta*/
  $("#respuestaRegU2").text(text);  

}

var usuarioConectado;
/*1.Declarar funcion para iniciar sesion*/
function iniciarSesion() {
  text = "";
  var usuarioEncontrado = false;
  /*2. Obtener los datos de los inputs*/
  email = $("#iniUemail").val();
  password = $("#iniUpassword").val();

  if(!email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
    text = "ERROR: Se ha detectado una direccion de email invÃ¡lida. Corrija e intente de nuevo."
    $("#respuestaIniciarU").text(text); 
    return
  }


  for (const user of usersArray) {
    /*3.0 El correo esta en la BD de usuarios registrados y se ingreso la contrasena de ese correo*/
    if (user.email == email && user.password == password) {
      usuarioEncontrado = true;
      usuarioConectado = user;
      text = "La sesion ha sido iniciada correctamente";
      $("#iniciarUbutton").prop('disabled', true);
      $("#sesionActual").text(user.email);
      
      fillPerfil();
      

      break;
    }

    else if (user.email === email && user.password != password) {
      usuarioEncontrado = true;
      text = "ERROR. La contrasena es incorrecta. Corrija e intente nuevamente.";
      break;
    }
  }

  if (usuarioEncontrado == false) {
    text = "ERROR. El correo ingresado no esta registrado. Corrija o relice el registro primero.";
  }
  
  /*4. Se imprime el texto de respuesta*/
  $("#respuestaIniciarU").text(text); 
}





function actualizarDatos() {
  let text = "";
  let error = 0;
  let password2 = $("#password2").val();
  let confPassword2 = $("#confPassword2").val();
  let estado2 = $("#estado2").val();
  let municipio2 = $("#municipio2").val();
  let direccion2 = $("#direccion2").val();
  let cp2 = $("#cp2").val();
  /*5.1 Validacion de datos en blanco*/
  if (password2 == "" || confPassword2 == "" || estado2 == 0 || municipio2 == null || municipio2 == 0 || direccion2 == "" || cp2 == "") {
    text = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
    $("#respuestaActDatos").text(text);
    error = 1;
    return;
  }

  /*5.2 Las contrasenas no coinciden*/
  if (password2 != confPassword2) {
    text = "ERROR: Las contraseÃ±as no coinciden. Corrija e intente de nuevo.";
    $("#respuestaActDatos").text(text); 
    error = 1;
    return;
  }
  
  /*5.2 La contraseÃ±a es demasiado corta*/
  
  if (password2.length < 8) {
    text = "ERROR: La contraseÃ±a es demasiado corta. Corrija e intente de nuevo."
    $("#respuestaActDatos").text(text); 
    error = 1;
    return;
  }

  if (error == 0) {
    $("#nuevosDatos").hide();
    usuarioConectado.password = password2
    usuarioConectado.estado = estado2;
    usuarioConectado.municipio = municipio2;
    usuarioConectado.direccion = direccion2;
    usuarioConectado.cp = cp2;


    fillPerfil();
    $("#actualizarInfoButton1").prop("disabled", false);
  }
}


























/*Select de estados y municipios*/
var a,b,k;
var municipiosVisibles = [];


const arrayEstados = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila de Zaragoza","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán de Ocampo","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro Arteaga","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];



const arrayMunicipios = ["Aguascalientes","Asientos","Calvillo","Cosío","El Llano","Jesús María","Pabellón de Arteaga","Rincón de Romos","San Francisco de los Romo","San José de Gracia","Tepezalá","Ensenada","Mexicali","Playas de Rosarito","Tecate","Tijuana","Comondú","La Paz","Loreto","Los Cabos","Mulegé","Calakmul","Calkiní","Campeche","Candelaria","Carmen","Champotón","Escárcega","Hecelchakán","Hopelchén","Palizada","Tenabo","Acacoyagua","Acala","Acapetahua","Aldama","Altamirano","Amatán","Amatenango de la Frontera","Amatenango del Valle","Angel Albino Corzo","Arriaga","Bejucal de Ocampo","Bella Vista","Benemérito de las Américas","Berriozábal","Bochil","Cacahoatán","Catazajá","Chalchihuitán","Chamula","Chanal","Chapultenango","Chenalhó","Chiapa de Corzo","Chiapilla","Chicoasén","Chicomuselo","Chilón","Cintalapa","Coapilla","Comitán de Domínguez","Copainalá","El Bosque","El Porvenir","Escuintla","Francisco León","Frontera Comalapa","Frontera Hidalgo","Huehuetán","Huitiupán","Huixtán","Huixtla","Ixhuatán","Ixtacomitán","Ixtapa","Ixtapangajoya","Jiquipilas","Jitotol","Juárez","La Concordia","La Grandeza","La Independencia","La Libertad","La Trinitaria","Larráinzar","Las Margaritas","Las Rosas","Mapastepec","Maravilla Tenejapa","Marqués de Comillas","Mazapa de Madero","Mazatán","Metapa","Mitontic","Montecristo de Guerrero","Motozintla","Nicolás Ruíz","Ocosingo","Ocotepec","Ocozocoautla de Espinosa","Ostuacán","Osumacinta","Oxchuc","Palenque","Pantelhó","Pantepec","Pichucalco","Pijijiapan","Pueblo Nuevo Solistahuacán","Rayón","Reforma","Sabanilla","Salto de Agua","San Andrés Duraznal","San Cristóbal de las Casas","San Fernando","San Juan Cancuc","San Lucas","Santiago el Pinar","Siltepec","Simojovel","Sitalá","Socoltenango","Solosuchiapa","Soyaló","Suchiapa","Suchiate","Sunuapa","Tapachula","Tapalapa","Tapilula","Tecpatán","Tenejapa","Teopisca","Tila","Tonalá","Totolapa","Tumbalá","Tuxtla Chico","Tuxtla Gutiérrez","Tuzantán","Tzimol","Unión Juárez","Venustiano Carranza","Villa Comaltitlán","Villa Corzo","Villaflores","Yajalón","Zinacantán","Ahumada","Aldama","Allende","Aquiles Serdán","Ascensión","Bachíniva","Balleza","Batopilas","Bocoyna","Buenaventura","Camargo","Carichí","Casas Grandes","Chihuahua","Chínipas","Coronado","Coyame del Sotol","Cuauhtémoc","Cusihuiriachi","Delicias","Dr. Belisario Domínguez","El Tule","Galeana","Gómez Farías","Gran Morelos","Guachochi","Guadalupe","Guadalupe y Calvo","Guazapares","Guerrero","Hidalgo del Parral","Huejotitán","Ignacio Zaragoza","Janos","Jiménez","Juárez","Julimes","La Cruz","López","Madera","Maguarichi","Manuel Benavides","Matachí","Matamoros","Meoqui","Morelos","Moris","Namiquipa","Nonoava","Nuevo Casas Grandes","Ocampo","Ojinaga","Praxedis G. Guerrero","Riva Palacio","Rosales","Rosario","San Francisco de Borja","San Francisco de Conchos","San Francisco del Oro","Santa Bárbara","Santa Isabel","Satevó","Saucillo","Temósachic","Urique","Uruachi","Valle de Zaragoza","Álvaro Obregón","Azcapotzalco","Benito Juárez","Coyoacán","Cuajimalpa de Morelos","Cuauhtémoc","Gustavo A. Madero","Iztacalco","Iztapalapa","La Magdalena Contreras","Miguel Hidalgo","Milpa Alta","Tláhuac","Tlalpan","Venustiano Carranza","Xochimilco","Abasolo","Acuña","Allende","Arteaga","Candela","Castaños","Cuatrociénegas","Escobedo","Francisco I. Madero","Frontera","General Cepeda","Guerrero","Hidalgo","Jiménez","Juárez","Lamadrid","Matamoros","Monclova","Morelos","Múzquiz","Nadadores","Nava","Ocampo","Parras","Piedras Negras","Progreso","Ramos Arizpe","Sabinas","Sacramento","Saltillo","San Buenaventura","San Juan de Sabinas","San Pedro","Sierra Mojada","Torreón  ","Viesca","Villa Unión","Zaragoza","Armería","Colima","Comala","Coquimatlán","Cuauhtémoc","Ixtlahuacán","Manzanillo","Minatitlán","Tecomán","Canatlán","Canelas","Coneto de Comonfort","Cuencamé","Durango","El Oro","General Simón Bolívar","Gómez Palacio","Guadalupe Victoria","Guanaceví","Hidalgo","Indé","Lerdo","Mapimí","Mezquital","Nazas","Nombre de Dios","Nuevo Ideal","Ocampo","Otáez","Pánuco de Coronado","Peñón Blanco","Poanas","Pueblo Nuevo","Rodeo","San Bernardo","San Dimas","San Juan de Guadalupe","San Juan del Río","San Luis del Cordero","San Pedro del Gallo","Santa Clara","Santiago Papasquiaro","Súchil","Tamazula","Tepehuanes","Tlahualilo","Topia","Vicente Guerrero","Acambay","Acolman","Aculco","Almoloya de Alquisiras","Almoloya de Juárez","Almoloya del Río","Amanalco","Amatepec","Amecameca","Apaxco","Atenco","Atizapán","Atizapán de Zaragoza","Atlacomulco","Atlautla","Axapusco","Ayapango","Calimaya","Capulhuac","Chalco","Chapa de Mota","Chapultepec","Chiautla","Chicoloapan","Chiconcuac","Chimalhuacán","Coacalco de Berriozábal","Coatepec Harinas","Cocotitlán","Coyotepec","Cuautitlán","Cuautitlán Izcalli","Donato Guerra","Ecatepec de Morelos","Ecatzingo","El Oro","Huehuetoca","Hueypoxtla","Huixquilucan","Isidro Fabela","Ixtapaluca","Ixtapan de la Sal","Ixtapan del Oro","Ixtlahuaca","Jaltenco","Jilotepec","Jilotzingo","Jiquipilco","Jocotitlán","Joquicingo","Juchitepec","La Paz","Lerma","Luvianos","Malinalco","Melchor Ocampo","Metepec","Mexicaltzingo","Morelos","Naucalpan de Juárez","Nextlalpan","Nezahualcóyotl","Nicolás Romero","Nopaltepec","Ocoyoacac","Ocuilan","Otumba","Otzoloapan","Otzolotepec","Ozumba","Papalotla","Polotitlán","Rayón","San Antonio la Isla","San Felipe del Progreso","San José del Rincón","San Martín de las Pirámides","San Mateo Atenco","San Simón de Guerrero","Santo Tomás","Soyaniquilpan de Juárez","Sultepec","Tecámac","Tejupilco","Temamatla","Temascalapa","Temascalcingo","Temascaltepec","Temoaya","Tenancingo","Tenango del Aire","Tenango del Valle","Teoloyucán","Teotihuacán","Tepetlaoxtoc","Tepetlixpa","Tepotzotlán","Tequixquiac","Texcaltitlán","Texcalyacac","Texcoco","Tezoyuca","Tianguistenco","Timilpan","Tlalmanalco","Tlalnepantla de Baz","Tlatlaya","Toluca","Tonanitla","Tonatico","Tultepec","Tultitlán","Valle de Bravo","Valle de Chalco Solidaridad","Villa de Allende","Villa del Carbón","Villa Guerrero","Villa Victoria","Xalatlaco","Xonacatlán","Zacazonapan","Zacualpan","Zinacantepec","Zumpahuacán","Zumpango","Abasolo","Acambaro","Allende","Apaseo el alto","Apaseo el grande","Atarjea","Celaya","Comonfort","Coroneo","Cortazar","Cueramaro","Doctor mora","Dolores hidalgo","Guanajuato","Huanimaro","Irapuato","Jaral del progreso","Jerecuaro","Leon","Manuel doblado","Moroleon","Ocampo","Penjamo","Pueblo nuevo","Purisima del rincon","Romita","Salamanca","Salvatierra","San diego de la union","San felipe","San francisco del rincon","San jose iturbide","San luis de la paz","Santa catarina","Santa cruz de juventino rosas","Santiago maravatio","Silao","Tarandacuao","Tarimoro","Tierra blanca","Uriangato","Valle de santiago","Victoria","Villagran","Xichu","Yuriria","Acapulco de Juárez","Acatepec","Ahuacuotzingo","Ajuchitlán del Progreso","Alcozauca de Guerrero","Alpoyeca","Apaxtla","Arcelia","Atenango del Río","Atlamajalcingo del Monte","Atlixtac","Atoyac de Álvarez","Ayutla de los Libres","Azoyú","Benito Juárez","Buenavista de Cuéllar","Chilapa de Álvarez","Chilpancingo de los Bravo","Coahuayutla de José María Izazaga","Cochoapa el Grande","Cocula","Copala","Copalillo","Copanatoyac","Coyuca de Benítez","Coyuca de Catalán","Cuajinicuilapa","Cualác","Cuautepec","Cuetzala del Progreso","Cutzamala de Pinzón","Eduardo Neri","Florencio Villarreal","General Canuto A. Neri","General Heliodoro Castillo","Huamuxtitlán","Huitzuco de los Figueroa","Iguala de la Independencia","Igualapa","Iliatenco","Ixcateopan de Cuauhtémoc","José Joaquin de Herrera","Juan R. Escudero","Juchitán","La Unión de Isidoro Montes de Oca","Leonardo Bravo","Malinaltepec","Marquelia","Mártir de Cuilapan","Metlatónoc","Mochitlán","Olinalá","Ometepec","Pedro Ascencio Alquisiras","Petatlán","Pilcaya","Pungarabato","Quechultenango","San Luis Acatlán","San Marcos","San Miguel Totolapan","Taxco de Alarcón","Tecoanapa","Técpan de Galeana","Teloloapan","Tepecoacuilco de Trujano","Tetipac","Tixtla de Guerrero","Tlacoachistlahuaca","Tlacoapa","Tlalchapa","Tlalixtaquilla de Maldonado","Tlapa de Comonfort","Tlapehuala","Xalpatláhuac","Xochihuehuetlán","Xochistlahuaca","Zapotitlán Tablas","Zihuatanejo de Azueta","Zirándaro","Zitlala","Acatlán","Acaxochitlán","Actopan","Agua Blanca de Iturbide","Ajacuba","Alfajayucan","Almoloya","Apan","Atitalaquia","Atlapexco","Atotonilco de Tula","Atotonilco el Grande","Calnali","Cardonal","Chapantongo","Chapulhuacán","Chilcuautla","Cuautepec de Hinojosa","El Arenal","Eloxochitlán","Emiliano Zapata","Epazoyucan","Francisco I. Madero","Huasca de Ocampo","Huautla","Huazalingo","Huehuetla","Huejutla de Reyes","Huichapan","Ixmiquilpan","Jacala de Ledezma","Jaltocán","Juárez Hidalgo","La Misión","Lolotla","Metepec","Metztitlán","Mineral de la Reforma","Mineral del Chico","Mineral del Monte","Mixquiahuala de Juárez","Molango de Escamilla","Nicolás Flores","Nopala de Villagrán","Omitlán de Juárez","Pachuca de Soto","Pacula","Pisaflores","Progreso de Obregón","San Agustín Metzquititlán","San Agustín Tlaxiaca","San Bartolo Tutotepec","San Felipe Orizatlán","San Salvador","Santiago de Anaya","Santiago Tulantepec de Lugo Guerrero","Singuilucan","Tasquillo","Tecozautla","Tenango de Doria","Tepeapulco","Tepehuacán de Guerrero","Tepeji del Río de Ocampo","Tepetitlán","Tetepango","Tezontepec de Aldama","Tianguistengo","Tizayuca","Tlahuelilpan","Tlahuiltepa","Tlanalapa","Tlanchinol","Tlaxcoapan","Tolcayuca","Tula de Allende","Tulancingo de Bravo","Villa de Tezontepec","Xochiatipan","Xochicoatlán","Yahualica","Zacualtipán de Ángeles","Zapotlán de Juárez","Zempoala","Zimapán","Acatic","Acatlán de Juárez","Ahualulco de Mercado","Amacueca","Amatitán","Ameca","Arandas","Atemajac de Brizuela","Atengo","Atenguillo","Atotonilco el Alto","Atoyac","Autlán de Navarro","Ayotlán","Ayutla","Bolaños","Cabo Corrientes","Cañadas de Obregón","Casimiro Castillo","Chapala","Chimaltitán","Chiquilistlán","Cihuatlán","Cocula","Colotlán","Concepción de Buenos Aires","Cuautitlán de García Barragán","Cuautla","Cuquío","Degollado","Ejutla","El Arenal","El Grullo","El Limón","El Salto","Encarnación de Díaz","Etzatlán","Gómez Farías","Guachinango","Guadalajara","Hostotipaquillo","Huejúcar","Huejuquilla el Alto","Ixtlahuacán de los Membrillos","Ixtlahuacán del Río","Jalostotitlán","Jamay","Jesús María","Jilotlán de los Dolores","Jocotepec","Juanacatlán","Juchitlán","La Barca","La Huerta","La Manzanilla de la Paz","Lagos de Moreno","Magdalena","Mascota","Mazamitla","Mexticacán","Mezquitic","Mixtlán","Ocotlán","Ojuelos de Jalisco","Pihuamo","Poncitlán","Puerto Vallarta","Quitupan","San Cristóbal de la Barranca","San Diego de Alejandría","San Gabriel","San Ignacio Cerro Gordo","San Juan de los Lagos","San Juanito de Escobedo","San Julián","San Marcos","San Martín de Bolaños","San Martín Hidalgo","San Miguel el Alto","San Sebastián del Oeste","Santa María de los Ángeles","Santa María del Oro","Sayula","Tala","Talpa de Allende","Tamazula de Gordiano","Tapalpa","Tecalitlán","Techaluta de Montenegro","Tecolotlán","Tenamaxtlán","Teocaltiche","Teocuitatlán de Corona","Tepatitlán de Morelos","Tequila","Teuchitlán","Tizapán el Alto","Tlajomulco de Zúñiga","Tlaquepaque","Tolimán","Tomatlán","Tonalá","Tonaya","Tonila","Totatiche","Tototlán","Tuxcacuesco","Tuxcueca","Tuxpan","Unión de San Antonio","Unión de Tula","Valle de Guadalupe","Valle de Juárez","Villa Corona","Villa Guerrero","Villa Hidalgo","Villa Purificación","Yahualica de González Gallo","Zacoalco de Torres","Zapopan","Zapotiltic","Zapotitlán de Vadillo","Zapotlán del Rey","Zapotlán el Grande","Zapotlanejo","Acuitzio","Aguililla","Álvaro Obregón","Angamacutiro","Angangueo","Apatzingán","Aporo","Aquila","Ario","Arteaga","Briseñas","Buenavista","Carácuaro","Charapan","Charo","Chavinda","Cherán","Chilchota","Chinicuila","Chucándiro","Churintzio","Churumuco","Coahuayana","Coalcomán de Vázquez Pallares","Coeneo","Cojumatlán de Régules","Contepec","Copándaro","Cotija","Cuitzeo","Ecuandureo","Epitacio Huerta","Erongarícuaro","Gabriel Zamora","Hidalgo","Huandacareo","Huaniqueo","Huetamo","Huiramba","Indaparapeo","Irimbo","Ixtlán","Jacona","Jiménez","Jiquilpan","José Sixto Verduzco","Juárez","Jungapeo","La Huacana","La Piedad","Lagunillas","Lázaro Cárdenas","Los Reyes","Madero","Maravatío","Marcos Castellanos","Morelia","Morelos","Múgica","Nahuatzen","Nocupétaro","Nuevo Parangaricutiro","Nuevo Urecho","Numarán","Ocampo","Pajacuarán","Panindícuaro","Paracho","Parácuaro","Pátzcuaro","Penjamillo","Peribán","Purépero","Puruándiro","Queréndaro","Quiroga","Sahuayo","Salvador Escalante","San Lucas","Santa Ana Maya","Senguio","Susupuato","Tacámbaro","Tancítaro","Tangamandapio","Tangancícuaro","Tanhuato","Taretan","Tarímbaro","Tepalcatepec","Tingambato","Tingüindín","Tiquicheo de Nicolás Romero","Tlalpujahua","Tlazazalca","Tocumbo","Tumbiscatío","Turicato","Tuxpan","Tuzantla","Tzintzuntzan","Tzitzio","Uruapan","Venustiano Carranza","Villamar","Vista Hermosa","Yurécuaro","Zacapu","Zamora","Zináparo","Zinapécuaro","Ziracuaretiro","Zitácuaro","Amacuzac","Atlatlahucan","Axochiapan","Ayala","Coatlán del Río","Cuautla","Cuernavaca","Emiliano Zapata","Huitzilac","Jantetelco","Jiutepec","Jojutla","Jonacatepec","Mazatepec","Miacatlán","Ocuituco","Puente de Ixtla","Temixco","Temoac","Tepalcingo","Tepoztlán","Tetecala","Tetela del Volcán","Tlalnepantla","Tlaltizapán","Tlaquiltenango","Tlayacapan","Totolapan","Xochitepec","Yautepec","Yecapixtla","Zacatepec","Zacualpan","Acaponeta","Ahuacatlán","Amatlán de Cañas","Bahía de Banderas","Compostela","Del Nayar","Huajicori","Ixtlán del Río","Jala","La Yesca","Rosamorada","Ruíz","San Blas","San Pedro Lagunillas","Santa María del Oro","Santiago Ixcuintla","Tecuala","Tepic","Tuxpan","Xalisco","Abasolo","Agualeguas","Allende","Anáhuac","Apodaca","Aramberri","Bustamante","Cadereyta Jiménez","Carmen","Cerralvo","China","Ciénega de Flores","Dr. Arroyo","Dr. Coss","Dr. González","Galeana","García","Gral. Bravo","Gral. Escobedo","Gral. Terán","Gral. Treviño","Gral. Zaragoza","Gral. Zuazua","Guadalupe","Hidalgo","Higueras","Hualahuises","Iturbide","Juárez","Lampazos de Naranjo","Linares","Los Aldamas","Los Herreras","Los Ramones","Marín","Melchor Ocampo","Mier y Noriega","Mina","Montemorelos","Monterrey","Parás","Pesquería","Rayones","Sabinas Hidalgo","Salinas Victoria","San Nicolás de los Garza","San Pedro Garza García","Santa Catarina","Santiago","Vallecillo","Villaldama","Abejones","Acatlán de Pérez Figueroa","Ánimas Trujano","Asunción Cacalotepec","Asunción Cuyotepeji","Asunción Ixtaltepec","Asunción Nochixtlán","Asunción Ocotlán","Asunción Tlacolulita","Ayoquezco de Aldama","Ayotzintepec","Calihualá","Candelaria Loxicha","Capulálpam de Méndez","Chahuites","Chalcatongo de Hidalgo","Chiquihuitlán de Benito Juárez","Ciénega de Zimatlán","Ciudad Ixtepec","Coatecas Altas","Coicoyán de las Flores","Concepción Buenavista","Concepción Pápalo","Constancia del Rosario","Cosolapa","Cosoltepec","Cuilápam de Guerrero","Cuyamecalco Villa de Zaragoza","El Barrio de la Soledad","El Espinal","Eloxochitlán de Flores Magón","Fresnillo de Trujano","Guadalupe de Ramírez","Guadalupe Etla","Guelatao de Juárez","Guevea de Humboldt","Heroica Ciudad de Ejutla de Crespo","Heroica Ciudad de Huajuapan de León","Heroica Ciudad de Juchitán de Zaragoza","Heroica Ciudad de Tlaxiaco","Huautepec","Huautla de Jiménez","Ixpantepec Nieves","Ixtlán de Juárez","La Compañía","La Pe","La Reforma","La Trinidad Vista Hermosa","Loma Bonita","Magdalena Apasco","Magdalena Jaltepec","Magdalena Mixtepec","Magdalena Ocotlán","Magdalena Peñasco","Magdalena Teitipac","Magdalena Tequisistlán","Magdalena Tlacotepec","Magdalena Yodocono de Porfirio Díaz","Magdalena Zahuatlán","Mariscala de Juárez","Mártires de Tacubaya","Matías Romero Avendaño","Mazatlán Villa de Flores","Mesones Hidalgo","Miahuatlán de Porfirio Díaz","Mixistlán de la Reforma","Monjas","Natividad","Nazareno Etla","Nejapa de Madero","Nuevo Zoquiápam","Oaxaca de Juárez","Ocotlán de Morelos","Pinotepa de Don Luis","Pluma Hidalgo","Putla Villa de Guerrero","Reforma de Pineda","Reyes Etla","Rojas de Cuauhtémoc","Salina Cruz","San Agustín Amatengo","San Agustín Atenango","San Agustín Chayuco","San Agustín de las Juntas","San Agustín Etla","San Agustín Loxicha","San Agustín Tlacotepec","San Agustín Yatareni","San Andrés Cabecera Nueva","San Andrés Dinicuiti","San Andrés Huaxpaltepec","San Andrés Huayápam","San Andrés Ixtlahuaca","San Andrés Lagunas","San Andrés Nuxiño","San Andrés Paxtlán","San Andrés Sinaxtla","San Andrés Solaga","San Andrés Teotilálpam","San Andrés Tepetlapa","San Andrés Yaá","San Andrés Zabache","San Andrés Zautla","San Antonino Castillo Velasco","San Antonino el Alto","San Antonino Monte Verde","San Antonio Acutla","San Antonio de la Cal","San Antonio Huitepec","San Antonio Nanahuatípam","San Antonio Sinicahua","San Antonio Tepetlapa","San Baltazar Chichicápam","San Baltazar Loxicha","San Baltazar Yatzachi el Bajo","San Bartolo Coyotepec","San Bartolo Soyaltepec","San Bartolo Yautepec","San Bartolomé Ayautla","San Bartolomé Loxicha","San Bartolomé Quialana","San Bartolomé Yucuañe","San Bartolomé Zoogocho","San Bernardo Mixtepec","San Blas Atempa","San Carlos Yautepec","San Cristóbal Amatlán","San Cristóbal Amoltepec","San Cristóbal Lachirioag","San Cristóbal Suchixtlahuaca","San Dionisio del Mar","San Dionisio Ocotepec","San Dionisio Ocotlán","San Esteban Atatlahuca","San Felipe Jalapa de Díaz","San Felipe Tejalápam","San Felipe Usila","San Francisco Cahuacuá","San Francisco Cajonos","San Francisco Chapulapa","San Francisco Chindúa","San Francisco del Mar","San Francisco Huehuetlán","San Francisco Ixhuatán","San Francisco Jaltepetongo","San Francisco Lachigoló","San Francisco Logueche","San Francisco Nuxaño","San Francisco Ozolotepec","San Francisco Sola","San Francisco Telixtlahuaca","San Francisco Teopan","San Francisco Tlapancingo","San Gabriel Mixtepec","San Ildefonso Amatlán","San Ildefonso Sola","San Ildefonso Villa Alta","San Jacinto Amilpas","San Jacinto Tlacotepec","San Jerónimo Coatlán","San Jerónimo Silacayoapilla","San Jerónimo Sosola","San Jerónimo Taviche","San Jerónimo Tecóatl","San Jerónimo Tlacochahuaya","San Jorge Nuchita","San José Ayuquila","San José Chiltepec","San José del Peñasco","San José del Progreso","San José Estancia Grande","San José Independencia","San José Lachiguiri","San José Tenango","San Juan Achiutla","San Juan Atepec","San Juan Bautista Atatlahuca","San Juan Bautista Coixtlahuaca","San Juan Bautista Cuicatlán","San Juan Bautista Guelache","San Juan Bautista Jayacatlán","San Juan Bautista Lo de Soto","San Juan Bautista Suchitepec","San Juan Bautista Tlachichilco","San Juan Bautista Tlacoatzintepec","San Juan Bautista Tuxtepec","San Juan Bautista Valle Nacional","San Juan Cacahuatepec","San Juan Chicomezúchil","San Juan Chilateca","San Juan Cieneguilla","San Juan Coatzóspam","San Juan Colorado","San Juan Comaltepec","San Juan Cotzocón","San Juan de los Cués","San Juan del Estado","San Juan del Río","San Juan Diuxi","San Juan Evangelista Analco","San Juan Guelavía","San Juan Guichicovi","San Juan Ihualtepec","San Juan Juquila Mixes","San Juan Juquila Vijanos","San Juan Lachao","San Juan Lachigalla","San Juan Lajarcia","San Juan Lalana","San Juan Mazatlán","San Juan Mixtepec -Dto. 08-","San Juan Mixtepec -Dto. 26  -","San Juan Ñumí","San Juan Ozolotepec","San Juan Petlapa","San Juan Quiahije","San Juan Quiotepec","San Juan Sayultepec","San Juan Tabaá","San Juan Tamazola","San Juan Teita","San Juan Teitipac","San Juan Tepeuxila","San Juan Teposcolula","San Juan Yaeé","San Juan Yatzona","San Juan Yucuita","San Lorenzo","San Lorenzo Albarradas","San Lorenzo Cacaotepec","San Lorenzo Cuaunecuiltitla","San Lorenzo Texmelúcan","San Lorenzo Victoria","San Lucas Camotlán","San Lucas Ojitlán","San Lucas Quiaviní","San Lucas Zoquiápam","San Luis Amatlán","San Marcial Ozolotepec","San Marcos Arteaga","San Martín de los Cansecos","San Martín Huamelúlpam","San Martín Itunyoso","San Martín Lachilá","San Martín Peras","San Martín Tilcajete","San Martín Toxpalan","San Martín Zacatepec","San Mateo Cajonos","San Mateo del Mar","San Mateo Etlatongo","San Mateo Nejápam","San Mateo Peñasco","San Mateo Piñas","San Mateo Río Hondo","San Mateo Sindihui","San Mateo Tlapiltepec","San Mateo Yoloxochitlán","San Mateo Yucutindó","San Melchor Betaza","San Miguel Achiutla","San Miguel Ahuehuetitlán","San Miguel Aloápam","San Miguel Amatitlán","San Miguel Amatlán","San Miguel Chicahua","San Miguel Chimalapa","San Miguel Coatlán","San Miguel del Puerto","San Miguel del Río","San Miguel Ejutla","San Miguel el Grande","San Miguel Huautla","San Miguel Mixtepec","San Miguel Panixtlahuaca","San Miguel Peras","San Miguel Piedras","San Miguel Quetzaltepec","San Miguel Santa Flor","San Miguel Soyaltepec","San Miguel Suchixtepec","San Miguel Tecomatlán","San Miguel Tenango","San Miguel Tequixtepec","San Miguel Tilquiápam","San Miguel Tlacamama","San Miguel Tlacotepec","San Miguel Tulancingo","San Miguel Yotao","San Nicolás","San Nicolás Hidalgo","San Pablo Coatlán","San Pablo Cuatro Venados","San Pablo Etla","San Pablo Huitzo","San Pablo Huixtepec","San Pablo Macuiltianguis","San Pablo Tijaltepec","San Pablo Villa de Mitla","San Pablo Yaganiza","San Pedro Amuzgos","San Pedro Apóstol","San Pedro Atoyac","San Pedro Cajonos","San Pedro Comitancillo","San Pedro Coxcaltepec Cántaros","San Pedro el Alto","San Pedro Huamelula","San Pedro Huilotepec","San Pedro Ixcatlán","San Pedro Ixtlahuaca","San Pedro Jaltepetongo","San Pedro Jicayán","San Pedro Jocotipac","San Pedro Juchatengo","San Pedro Mártir","San Pedro Mártir Quiechapa","San Pedro Mártir Yucuxaco","San Pedro Mixtepec -Dto.22-","San Pedro Mixtepec -Dto.26-","San Pedro Molinos","San Pedro Nopala","San Pedro Ocopetatillo","San Pedro Ocotepec","San Pedro Pochutla","San Pedro Quiatoni","San Pedro Sochiápam","San Pedro Tapanatepec","San Pedro Taviche","San Pedro Teozacoalco","San Pedro Teutila","San Pedro Tidaá","San Pedro Topiltepec","San Pedro Totolápam","San Pedro y San Pablo Ayutla","San Pedro y San Pablo Teposcolula","San Pedro y San Pablo Tequixtepec","San Pedro Yaneri","San Pedro Yólox","San Pedro Yucunama","San Raymundo Jalpan","San Sebastián Abasolo","San Sebastián Coatlán","San Sebastián Ixcapa","San Sebastián Nicananduta","San Sebastián Río Hondo","San Sebastián Tecomaxtlahuaca","San Sebastián Teitipac","San Sebastián Tutla","San Simón Almolongas","San Simón Zahuatlán","San Vicente Coatlán","San Vicente Lachixío","San Vicente Nuñú","Santa Ana","Santa Ana Ateixtlahuaca","Santa Ana Cuauhtémoc","Santa Ana del Valle","Santa Ana Tavela","Santa Ana Tlapacoyan","Santa Ana Yareni","Santa Ana Zegache","Santa Catalina Quierí","Santa Catarina Cuixtla","Santa Catarina Ixtepeji","Santa Catarina Juquila","Santa Catarina Lachatao","Santa Catarina Loxicha","Santa Catarina Mechoacán","Santa Catarina Minas","Santa Catarina Quiané","Santa Catarina Quioquitani","Santa Catarina Tayata","Santa Catarina Ticuá","Santa Catarina Yosonotú","Santa Catarina Zapoquila","Santa Cruz Acatepec","Santa Cruz Amilpas","Santa Cruz de Bravo","Santa Cruz Itundujia","Santa Cruz Mixtepec","Santa Cruz Nundaco","Santa Cruz Papalutla","Santa Cruz Tacache de Mina","Santa Cruz Tacahua","Santa Cruz Tayata","Santa Cruz Xitla","Santa Cruz Xoxocotlán","Santa Cruz Zenzontepec","Santa Gertrudis","Santa Inés de Zaragoza","Santa Inés del Monte","Santa Inés Yatzeche","Santa Lucía del Camino","Santa Lucía Miahuatlán","Santa Lucía Monteverde","Santa Lucía Ocotlán","Santa Magdalena Jicotlán","Santa María Alotepec","Santa María Apazco","Santa María Atzompa","Santa María Camotlán","Santa María Chachoápam","Santa María Chilchotla","Santa María Chimalapa","Santa María Colotepec","Santa María Cortijo","Santa María Coyotepec","Santa María del Rosario","Santa María del Tule","Santa María Ecatepec","Santa María Guelacé","Santa María Guienagati","Santa María Huatulco","Santa María Huazolotitlán","Santa María Ipalapa","Santa María Ixcatlán","Santa María Jacatepec","Santa María Jalapa del Marqués","Santa María Jaltianguis","Santa María la Asunción","Santa María Lachixío","Santa María Mixtequilla","Santa María Nativitas","Santa María Nduayaco","Santa María Ozolotepec","Santa María Pápalo","Santa María Peñoles","Santa María Petapa","Santa María Quiegolani","Santa María Sola","Santa María Tataltepec","Santa María Tecomavaca","Santa María Temaxcalapa","Santa María Temaxcaltepec","Santa María Teopoxco","Santa María Tepantlali","Santa María Texcatitlán","Santa María Tlahuitoltepec","Santa María Tlalixtac","Santa María Tonameca","Santa María Totolapilla","Santa María Xadani","Santa María Yalina","Santa María Yavesía","Santa María Yolotepec","Santa María Yosoyúa","Santa María Yucuhiti","Santa María Zacatepec","Santa María Zaniza","Santa María Zoquitlán","Santiago Amoltepec","Santiago Apoala","Santiago Apóstol","Santiago Astata","Santiago Atitlán","Santiago Ayuquililla","Santiago Cacaloxtepec","Santiago Camotlán","Santiago Chazumba","Santiago Choápam","Santiago Comaltepec","Santiago del Río","Santiago Huajolotitlán","Santiago Huauclilla","Santiago Ihuitlán Plumas","Santiago Ixcuintepec","Santiago Ixtayutla","Santiago Jamiltepec","Santiago Jocotepec","Santiago Juxtlahuaca","Santiago Lachiguiri","Santiago Lalopa","Santiago Laollaga","Santiago Laxopa","Santiago Llano Grande","Santiago Matatlán","Santiago Miltepec","Santiago Minas","Santiago Nacaltepec","Santiago Nejapilla","Santiago Niltepec","Santiago Nundiche","Santiago Nuyoó","Santiago Pinotepa Nacional","Santiago Suchilquitongo","Santiago Tamazola","Santiago Tapextla","Santiago Tenango","Santiago Tepetlapa","Santiago Tetepec","Santiago Texcalcingo","Santiago Textitlán","Santiago Tilantongo","Santiago Tillo","Santiago Tlazoyaltepec","Santiago Xanica","Santiago Xiacuí","Santiago Yaitepec","Santiago Yaveo","Santiago Yolomécatl","Santiago Yosondúa","Santiago Yucuyachi","Santiago Zacatepec","Santiago Zoochila","Santo Domingo Albarradas","Santo Domingo Armenta","Santo Domingo Chihuitán","Santo Domingo de Morelos","Santo Domingo Ingenio","Santo Domingo Ixcatlán","Santo Domingo Nuxaá","Santo Domingo Ozolotepec","Santo Domingo Petapa","Santo Domingo Roayaga","Santo Domingo Tehuantepec","Santo Domingo Teojomulco","Santo Domingo Tepuxtepec","Santo Domingo Tlatayápam","Santo Domingo Tomaltepec","Santo Domingo Tonalá","Santo Domingo Tonaltepec","Santo Domingo Xagacía","Santo Domingo Yanhuitlán","Santo Domingo Yodohino","Santo Domingo Zanatepec","Santo Tomás Jalieza","Santo Tomás Mazaltepec","Santo Tomás Ocotepec","Santo Tomás Tamazulapan","Santos Reyes Nopala","Santos Reyes Pápalo","Santos Reyes Tepejillo","Santos Reyes Yucuná","Silacayoápam","Sitio de Xitlapehua","Soledad Etla","Tamazulápam del Espíritu Santo","Tanetze de Zaragoza","Taniche","Tataltepec de Valdés","Teococuilco de Marcos Pérez","Teotitlán de Flores Magón","Teotitlán del Valle","Teotongo","Tepelmeme Villa de Morelos","Tezoatlán de Segura y Luna","Tlacolula de Matamoros","Tlacotepec Plumas","Tlalixtac de Cabrera","Totontepec Villa de Morelos","Trinidad Zaachila","Unión Hidalgo","Valerio Trujano","Villa de Chilapa de Díaz","Villa de Etla","Villa de Tamazulápam del Progreso","Villa de Tututepec de Melchor Ocampo","Villa de Zaachila","Villa Díaz Ordaz","Villa Hidalgo","Villa Sola de Vega","Villa Talea de Castro","Villa Tejúpam de la Unión","Yaxe","Yogana","Yutanduchi de Guerrero","Zapotitlán Lagunas","Zapotitlán Palmas","Zimatlán de Álvarez","Acajete","Acateno","Acatlán","Acatzingo","Acteopan","Ahuacatlán","Ahuatlán","Ahuazotepec","Ahuehuetitla","Ajalpan","Albino Zertuche","Aljojuca","Altepexi","Amixtlán","Amozoc","Aquixtla","Atempan","Atexcal","Atlequizayan","Atlixco","Atoyatempan","Atzala","Atzitzihuacán","Atzitzintla","Axutla","Ayotoxco de Guerrero","Calpan","Caltepec","Camocuautla","Cañada Morelos","Caxhuacan","Chalchicomula de Sesma","Chapulco","Chiautla","Chiautzingo","Chichiquila","Chiconcuautla","Chietla","Chigmecatitlán","Chignahuapan","Chignautla","Chila","Chila de la Sal","Chilchotla","Chinantla","Coatepec","Coatzingo","Cohetzala","Cohuecan","Coronango","Coxcatlán","Coyomeapan","Coyotepec","Cuapiaxtla de Madero","Cuautempan","Cuautinchán","Cuautlancingo","Cuayuca de Andrade","Cuetzalan del Progreso","Cuyoaco","Domingo Arenas","Eloxochitlán","Epatlán","Esperanza","Francisco ZMena","General Felipe Ángeles","Guadalupe","Guadalupe Victoria","Hermenegildo Galeana","Honey","Huaquechula","Huatlatlauca","Huauchinango","Huehuetla","Huehuetlán el Chico","Huehuetlán el Grande","Huejotzingo","Hueyapan","Hueytamalco","Hueytlalpan","Huitzilan de Serdán","Huitziltepec","Ixcamilpa de Guerrero","Ixcaquixtla","Ixtacamaxtitlán","Ixtepec","Izúcar de Matamoros","Jalpan","Jolalpan","Jonotla","Jopala","Juan CBonilla","Juan Galindo","Juan NMéndez","La Magdalena Tlatlauquitepec","Lafragua","Libres","Los Reyes de Juárez","Mazapiltepec de Juárez","Mixtla","Molcaxac","Naupan","Nauzontla","Nealtican","Nicolás Bravo","Nopalucan","Ocotepec","Ocoyucan","Olintla","Oriental","Pahuatlán","Palmar de Bravo","Pantepec","Petlalcingo","Piaxtla","Puebla","Quecholac","Quimixtlán","Rafael Lara Grajales","San Andrés Cholula","San Antonio Cañada","San Diego la Mesa Tochimiltzingo","San Felipe Teotlalcingo","San Felipe Tepatlán","San Gabriel Chilac","San Gregorio Atzompa","San Jerónimo Tecuanipan","San Jerónimo Xayacatlán","San José Chiapa","San José Miahuatlán","San Juan Atenco","San Juan Atzompa","San Martín Texmelucan","San Martín Totoltepec","San Matías Tlalancaleca","San Miguel Ixitlán","San Miguel Xoxtla","San Nicolás Buenos Aires","San Nicolás de los Ranchos","San Pablo Anicano","San Pedro Cholula","San Pedro Yeloixtlahuaca","San Salvador el Seco","San Salvador el Verde","San Salvador Huixcolotla","San Sebastián Tlacotepec","Santa Catarina Tlaltempan","Santa Inés Ahuatempan","Santa Isabel Cholula","Santiago Miahuatlán","Santo Tomás Hueyotlipan","Soltepec","Tecali de Herrera","Tecamachalco","Tecomatlán","Tehuacán","Tehuitzingo","Tenampulco","Teopantlán","Teotlalco","Tepanco de López","Tepango de Rodríguez","Tepatlaxco de Hidalgo","Tepeaca","Tepemaxalco","Tepeojuma","Tepetzintla","Tepexco","Tepexi de Rodríguez","Tepeyahualco","Tepeyahualco de Cuauhtémoc","Tetela de Ocampo","Teteles de Avila Castillo","Teziutlán","Tianguismanalco","Tilapa","Tlachichuca","Tlacotepec de Benito Juárez","Tlacuilotepec","Tlahuapan","Tlaltenango","Tlanepantla","Tlaola","Tlapacoya","Tlapanalá","Tlatlauquitepec","Tlaxco","Tochimilco","Tochtepec","Totoltepec de Guerrero","Tulcingo","Tuzamapan de Galeana","Tzicatlacoyan","Venustiano Carranza","Vicente Guerrero","Xayacatlán de Bravo","Xicotepec","Xicotlán","Xiutetelco","Xochiapulco","Xochiltepec","Xochitlán de Vicente Suárez","Xochitlán Todos Santos","Yaonáhuac","Yehualtepec","Zacapala","Zacapoaxtla","Zacatlán","Zapotitlán","Zapotitlán de Méndez","Zaragoza","Zautla","Zihuateutla","Zinacatepec","Zongozotla","Zoquiapan","Zoquitlán","Amealco de Bonfil","Arroyo Seco","Cadereyta de Montes","Colón","Corregidora","El Marqués","Ezequiel Montes","Huimilpan","Jalpan de Serra","Landa de Matamoros","Pedro Escobedo","Peñamiller","Pinal de Amoles","Querétaro","San Joaquín","San Juan del Río","Bacalar","Benito Juárez","Cozumel","Felipe Carrillo Puerto","Isla Mujeres","José María Morelos","Lázaro Cárdenas","Othón P. Blanco","Puerto Morelos","Solidaridad","Tulum","Ahualulco","Alaquines","Aquismón","Armadillo de los Infante","Axtla de Terrazas","Cárdenas","Catorce","Cedral","Cerritos","Cerro de San Pedro","Charcas","Ciudad del Maíz","Ciudad Fernández","Ciudad Valles","Coxcatlán","Ebano","El Naranjo","Guadalcázar","Huehuetlán","Lagunillas","Matehuala","Matlapa","Mexquitic de Carmona","Moctezuma","Rayón","Rioverde","Salinas","San Antonio","San Ciro de Acosta","San Luis Potosí","San Martín Chalchicuautla","San Nicolás Tolentino","San Vicente Tancuayalab","Santa Catarina","Santa María del Río","Santo Domingo","Soledad de Graciano Sánchez","Tamasopo","Tamazunchale","Tampacán","Tampamolón Corona","Tamuín","Tancanhuitz","Tanlajás","Tanquián de Escobedo","Tierra Nueva","Vanegas","Venado","Villa de Arista","Villa de Arriaga","Villa de Guadalupe","Villa de la Paz","Villa de Ramos","Villa de Reyes","Villa Hidalgo","Villa Juárez","Xilitla","Zaragoza","Ahome","Angostura","Badiraguato","Choix","Concordia","Cosalá","Culiacán","El Fuerte","Elota","Escuinapa","Guasave","Mazatlán","Mocorito","Navolato","Rosario","Salvador Alvarado","San Ignacio","Sinaloa","Aconchi","Agua Prieta","Alamos","Altar","Arivechi","Arizpe","Atil","Bacadéhuachi","Bacanora","Bacerac","Bacoachi","Bácum","Banámichi","Baviácora","Bavispe","Benito Juárez","Benjamín Hill","Caborca","Cajeme","Cananea","Carbó","Cucurpe","Cumpas","Divisaderos","Empalme","Etchojoa","Fronteras","General Plutarco Elías Calles","Granados","Guaymas","Hermosillo","Huachinera","Huásabas","Huatabampo","Huépac","Imuris","La Colorada","Magdalena","Mazatán","Moctezuma","Naco","Nácori Chico","Nacozari de García","Navojoa","Nogales","Onavas","Opodepe","Oquitoa","Pitiquito","Puerto Peñasco","Quiriego","Rayón","Rosario","Sahuaripa","San Felipe de Jesús","San Ignacio Río Muerto","San Javier","San Luis Río Colorado","San Miguel de Horcasitas","San Pedro de la Cueva","Santa Ana","Santa Cruz","Sáric","Soyopa","Suaqui Grande","Tepache","Trincheras","Tubutama","Ures","Villa Hidalgo","Villa Pesqueira","Yécora","Balancán","Cárdenas","Centla","Centro","Comalcalco","Cunduacán","Emiliano Zapata","Huimanguillo","Jalapa","Jalpa de Méndez","Jonuta","Macuspana","Nacajuca","Paraíso","Tacotalpa","Teapa","Tenosique","Abasolo","Aldama","Altamira","Antiguo Morelos","Burgos","Bustamante","Camargo","Casas","Ciudad Madero","Cruillas","El Mante","Gómez Farías","González","Güémez","Guerrero","Gustavo Díaz Ordaz","Hidalgo","Jaumave","Jiménez","Llera","Mainero","Matamoros","Méndez","Mier","Miguel Alemán","Miquihuana","Nuevo Laredo","Nuevo Morelos","Ocampo","Padilla","Palmillas","Reynosa","Río Bravo","San Carlos","San Fernando","San Nicolás","Soto la Marina","Tampico","Tula","Valle Hermoso","Victoria","Villagrán","Xicoténcatl","Acuamanala de Miguel Hidalgo","Amaxac de Guerrero","Apetatitlán de Antonio Carvajal","Apizaco","Atlangatepec","Atltzayanca","Benito Juárez","Calpulalpan","Chiautempan","Contla de Juan Cuamatzi","Cuapiaxtla","Cuaxomulco","El Carmen Tequexquitla","Emiliano Zapata","Españita","Huamantla","Hueyotlipan","Ixtacuixtla de Mariano Matamoros","Ixtenco","La Magdalena Tlaltelulco","Lázaro Cárdenas","Mazatecochco de José María Morelos","Muñoz de Domingo Arenas","Nanacamilpa de Mariano Arista","Natívitas","Panotla","Papalotla de Xicohténcatl","San Damián Texóloc","San Francisco Tetlanohcan","San Jerónimo Zacualpan","San José Teacalco","San Juan Huactzinco","San Lorenzo Axocomanitla","San Lucas Tecopilco","San Pablo del Monte","Sanctórum de Lázaro Cárdenas","Santa Ana Nopalucan","Santa Apolonia Teacalco","Santa Catarina Ayometla","Santa Cruz Quilehtla","Santa Cruz Tlaxcala","Santa Isabel Xiloxoxtla","Tenancingo","Teolocholco","Tepetitla de Lardizábal","Tepeyanco","Terrenate","Tetla de la Solidaridad","Tetlatlahuca","Tlaxcala","Tlaxco","Tocatlán","Totolac","Tzompantepec","Xaloztoc","Xaltocan","Xicohtzinco","Yauhquemehcan","Zacatelco","Ziltlaltépec de Trinidad Sánchez Santos","Acajete","Acatlán","Acayucan","Actopan","Acula","Acultzingo","Agua Dulce","Álamo Temapache","Alpatláhuac","Alto Lucero de Gutiérrez Barrios","Altotonga","Alvarado","Amatitlán","Amatlán de los Reyes","Angel R. Cabada","Apazapan","Aquila","Astacinga","Atlahuilco","Atoyac","Atzacan","Atzalan","Ayahualulco","Banderilla","Benito Juárez","Boca del Río","Calcahualco","Camarón de Tejeda","Camerino Z. Mendoza","Carlos A. Carrillo","Carrillo Puerto","Castillo de Teayo","Catemaco","Cazones de Herrera","Cerro Azul","Chacaltianguis","Chalma","Chiconamel","Chiconquiaco","Chicontepec","Chinameca","Chinampa de Gorostiza","Chocamán","Chontla","Chumatlán","Citlaltépetl","Coacoatzintla","Coahuitlán","Coatepec","Coatzacoalcos","Coatzintla","Coetzala","Colipa","Comapa","Córdoba","Cosamaloapan de Carpio","Cosautlán de Carvajal","Coscomatepec","Cosoleacaque","Cotaxtla","Coxquihui","Coyutla","Cuichapa","Cuitláhuac","El Higo","Emiliano Zapata","Espinal","Filomeno Mata","Fortín","Gutiérrez Zamora","Hidalgotitlán","Huatusco","Huayacocotla","Hueyapan de Ocampo","Huiloapan de Cuauhtémoc","Ignacio de la Llave","Ilamatlán","Isla","Ixcatepec","Ixhuacán de los Reyes","Ixhuatlán de Madero","Ixhuatlán del Café","Ixhuatlán del Sureste","Ixhuatlancillo","Ixmatlahuacan","Ixtaczoquitlán","Jalacingo","Jalcomulco","Jáltipan","Jamapa","Jesús Carranza","Jilotepec","José Azueta","Juan Rodríguez Clara","Juchique de Ferrer","La Antigua","La Perla","Landero y Coss","Las Choapas","Las Minas","Las Vigas de Ramírez","Lerdo de Tejada","Los Reyes","Magdalena","Maltrata","Manlio Fabio Altamirano","Mariano Escobedo","Martínez de la Torre","Mecatlán","Mecayapan","Medellín de Bravo","Miahuatlán","Minatitlán","Misantla","Mixtla de Altamirano","Moloacán","Nanchital de Lázaro Cárdenas del Río","Naolinco","Naranjal","Naranjos Amatlán","Nautla","Nogales","Oluta","Omealca","Orizaba","Otatitlán","Oteapan","Ozuluama de Mascareñas","Pajapan","Pánuco","Papantla","Paso de Ovejas","Paso del Macho","Perote","Platón Sánchez","Playa Vicente","Poza Rica de Hidalgo","Pueblo Viejo","Puente Nacional","Rafael Delgado","Rafael Lucio","Río Blanco","Saltabarranca","San Andrés Tenejapan","San Andrés Tuxtla","San Juan Evangelista","San Rafael","Santiago Sochiapan","Santiago Tuxtla","Sayula de Alemán","Sochiapa","Soconusco","Soledad Atzompa","Soledad de Doblado","Soteapan","Tamalín","Tamiahua","Tampico Alto","Tancoco","Tantima","Tantoyuca","Tatahuicapan de Juárez","Tatatila","Tecolutla","Tehuipango","Tempoal","Tenampa","Tenochtitlán","Teocelo","Tepatlaxco","Tepetlán","Tepetzintla","Tequila","Texcatepec","Texhuacán","Texistepec","Tezonapa","Tierra Blanca","Tihuatlán","Tlachichilco","Tlacojalpan","Tlacolulan","Tlacotalpan","Tlacotepec de Mejía","Tlalixcoyan","Tlalnelhuayocan","Tlaltetela","Tlapacoyan","Tlaquilpa","Tlilapan","Tomatlán","Tonayán","Totutla","Tres Valles","Tuxpan","Tuxtilla","Ursulo Galván","Uxpanapa","Vega de Alatorre","Veracruz","Villa Aldama","Xalapa","Xico","Xoxocotla","Yanga","Yecuatla","Zacualpan","Zaragoza","Zentla","Zongolica","Zontecomatlán de López y Fuentes","Zozocolco de Hidalgo","Abalá","Acanceh","Akil","Baca","Bokobá","Buctzotz","Cacalchén","Calotmul","Cansahcab","Cantamayec","Celestún","Cenotillo","Chacsinkín","Chankom","Chapab","Chemax","Chichimilá","Chicxulub Pueblo","Chikindzonot","Chocholá","Chumayel","Conkal","Cuncunul","Cuzamá","Dzán","Dzemul","Dzidzantún","Dzilam de Bravo","Dzilam González","Dzitás","Dzoncauich","Espita","Halachó","Hocabá","Hoctún","Homún","Huhí","Hunucmá","Ixil","Izamal","Kanasín","Kantunil","Kaua","Kinchil","Kopomá","Mama","Maní","Maxcanú","Mayapán","Mérida","Mocochá","Motul","Muna","Muxupip","Opichén","Oxkutzcab","Panabá","Peto","Progreso","Quintana Roo","Río Lagartos","Sacalum","Samahil","San Felipe","Sanahcat","Santa Elena","Seyé","Sinanché","Sotuta","Sucilá","Sudzal","Suma","Tahdziú","Tahmek","Teabo","Tecoh","Tekal de Venegas","Tekantó","Tekax","Tekit","Tekom","Telchac Pueblo","Telchac Puerto","Temax","Temozón","Tepakán","Tetiz","Teya","Ticul","Timucuy","Tinum","Tixcacalcupul","Tixkokob","Tixmehuac","Tixpéhual","Tizimín","Tunkás","Tzucacab","Uayma","Ucú","Umán","Valladolid","Xocchel","Yaxcabá","Yaxkukul","Yobaín","Apozol","Apulco","Atolinga","Benito Juárez","Calera","Cañitas de Felipe Pescador","Chalchihuites","Concepción del Oro","Cuauhtémoc","El Plateado de Joaquín Amaro","El Salvador","Fresnillo","Genaro Codina","General Enrique Estrada","General Francisco R. Murguía","General Pánfilo Natera","Guadalupe","Huanusco","Jalpa","Jerez","Jiménez del Teul","Juan Aldama","Juchipila","Loreto","Luis Moya","Mazapil","Melchor Ocampo","Mezquital del Oro","Miguel Auza","Momax","Monte Escobedo","Morelos","Moyahua de Estrada","Nochistlán de Mejía","Noria de Ángeles","Ojocaliente","Pánuco","Pinos","Río Grande","Sain Alto","Santa María de la Paz","Sombrerete","Susticacán","Tabasco","Tepechitlán","Tepetongo","Teúl de González Ortega","Tlaltenango de Sánchez Román","Trancoso","Trinidad García de la Cadena","Valparaíso","Vetagrande","Villa de Cos","Villa García","Villa González Ortega","Villa Hidalgo","Villanueva","Zacatecas"]



function removeAllChildNodes() {
  var options = document.querySelectorAll('#regUmunicipio option');
  options.forEach(o => o.remove());

  var options = document.querySelectorAll('#municipio2 option');
  options.forEach(o => o.remove());
}




const arrayEstados = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila de Zaragoza","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán de Ocampo","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro Arteaga","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];



function setMunicipios1() {
  removeAllChildNodes();
  municipiosVisibles = [];
  var estado = $("#regUestado").val();

  if(estado ==""){a = 0;b = 0;}
  if(estado =="Aguascalientes"){a =1;b =11;}
  if(estado =="Baja California"){a =12;b =16;}
  if(estado =="Baja California Sur"){a =17;b =21;}
  if(estado =="Campeche"){a =22;b =32;}
  if(estado =="Chiapas"){a =33;b =150;}
  if(estado =="Chihuahua"){a =151;b =217;}
  if(estado =="Ciudad de México"){a =218;b =233;}
  if(estado =="Coahuila de Zaragoza"){a =234;b =271;}
  if(estado =="Colima"){a =272;b =280;}
  if(estado =="Durango"){a =281;b =319;}
  if(estado =="Estado de México"){a =320;b =444;}
  if(estado =="Guanajuato"){a =445;b =490;}
  if(estado =="Guerrero"){a =491;b =571;}
  if(estado =="Hidalgo"){a =572;b =655;}
  if(estado =="Jalisco"){a =656;b =780;}
  if(estado =="Michoacán de Ocampo"){a =781;b =893;}
  if(estado =="Morelos"){a =894;b =926;}
  if(estado =="Nayarit"){a =927;b =946;}
  if(estado =="Nuevo León"){a =947;b =997;}
  if(estado =="Oaxaca"){a =998;b =1567;}
  if(estado =="Puebla"){a =1568;b =1784;}
  if(estado =="Querétaro Arteaga"){a =1785;b =1800;}
  if(estado =="Quintana Roo"){a =1801;b =1811;}
  if(estado =="San Luis Potosí"){a =1812;b =1869;}
  if(estado =="Sinaloa"){a =1870;b =1887;}
  if(estado =="Sonora"){a =1888;b =1959;}
  if(estado =="Tabasco"){a =1960;b =1976;}
  if(estado =="Tamaulipas"){a =1977;b =2019;}
  if(estado =="Tlaxcala"){a =2020;b =2079;}
  if(estado =="Veracruz"){a =2080;b =2291;}
  if(estado =="Yucatán"){a =2292;b =2397;}
  if(estado =="Zacatecas"){a =2398;b =2455;}
    
  for(k=a; k<=b; k++) {
    municipiosVisibles.push(arrayMunicipios[k]);
  }

  text = "";
  for(k=0; k<municipiosVisibles.length; k++) {
    if (k== 0) {
    $('#regUmunicipio').append($('<option>', {
      value: "0",
      text: "Seleccione un municipio"
    }));
  }
    
    else {
    $('#regUmunicipio').append($('<option>', {
      value: municipiosVisibles[k],
      text: municipiosVisibles[k]
    }));
    }
  }
}




$('#regUestado').on('change',setMunicipios1);

