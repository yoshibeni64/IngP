
function letraContenedor(letra) {
    var modelo;

    if (letra === 'A') {
        modelo = 'Avion';
    } else if (letra === 'N') {
        modelo = 'Normal';
    } else if (letra === 'P') {
        modelo = 'Parado';
    }

    return modelo;
}
    

function obtenerImagenes(contenedorID, subcarpeta) {
    // Llamada Ajax para obtener las rutas de las imágenes
    $.ajax({
        url: 'mostrarCatalogo.php',
        type: 'GET',
        dataType: 'json',
        data: { subcarpeta: subcarpeta },
        success: function(data) {
            // Imprimir las imágenes en el contenedor específico
            var contenedor = $('#' + contenedorID);
            contenedor.empty(); // Limpiar el contenedor antes de agregar nuevas imágenes

            $.each(data.imagenesPrev, function(index, imagePath) {
                // Obtener el nombre de la imagen desde la ruta y quitar la extensión
                var diseño = imagePath.split('/').pop().split('.')[0]; // Obtener el nombre sin extensión

                var imagePathFull = imagePath.replace("Prev", "Full");
                    
                var alcanciaCont = $('<div class="alcanciaCont"></div>');
            
                alcanciaCont.on('click', function() {
                    $("#previewAlcancia").show();
                    $("#pic1").attr("src", imagePath);
                    $("#pic2").attr("src", imagePathFull);
                    $("#picModelo").text(subcarpeta);
                    $("#picDiseño").text(diseño);
                    $("#picPrecio").text(data.precio);
                });
            
                alcanciaCont.append('<img src="' + imagePath + '" alt="' + diseño + '">');

                alcanciaCont.append('<p>' + diseño + '</p>'); // Agregar el nombre de la imagen como párrafo


                
                // Agregar el div 'alcanciaCont' al contenedor
                contenedor.append(alcanciaCont);

            });
            
        },
        error: function(error) {
            console.error('Error al obtener las imágenes: ' + error.responseText);
        }
    });
}


    // Asociar la función obtenerImagenes al evento click de los botones
    $(document).ready(function() {
        $('#buttonCatalogoN').click(function() {
            obtenerImagenes('contenedorCatalogoN', 'Normal');
        });

        $('#buttonCatalogoP').click(function() {
            obtenerImagenes('contenedorCatalogoP', 'Parado');
        });

        $('#buttonCatalogoA').click(function() {
            obtenerImagenes('contenedorCatalogoA', 'Avion');
        });

        $("#catalogoLink").click(function(){
            obtenerImagenes('contenedorCatalogoN', 'Normal');
            $("#contenedorCatalogoN").show();
            $("#contenedorCatalogoP").hide();
            $("#contenedorCatalogoA").hide();   
            $("#previewAlcancia").hide();
        });
    });
