<?php
// Inicializar la variable mensaje
$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nuevoDiseno = $_POST["nuevoDiseno"];
    $modelo = $_POST["modelo"];
    $imagenPrev = $_FILES["imagenPrev"];
    $imagenFull = $_FILES["imagenFull"];

    // Directorio donde se almacenarán las imágenes Prev (asegúrate de tener permisos de escritura)
    $directorioBasePrev = "images/Prev/";
    $directorioBaseFull = "images/Full/";

    if ($modelo === "Normal") {
        $directorioDestinoPrev = $directorioBasePrev . "Normal/";
        $directorioDestinoFull = $directorioBaseFull . "Normal/";
    } elseif ($modelo === "Parado") {
        $directorioDestinoPrev = $directorioBasePrev . "Parado/";
        $directorioDestinoFull = $directorioBaseFull . "Parado/";
    } elseif ($modelo === "Avion") {
        $directorioDestinoPrev = $directorioBasePrev . "Avion/";
        $directorioDestinoFull = $directorioBaseFull . "Avion/";
    }

    // Nuevo nombre de la imagenPrev basado en $nuevoDiseno y sin hash
    $nombreImagenPrev = $directorioDestinoPrev . $nuevoDiseno . "." . pathinfo($imagenPrev["name"], PATHINFO_EXTENSION);

    // Verificar si la imagen ya existe en el directorio de destino
    if (!preg_match('/^[a-zA-Z0-9]+$/', $nuevoDiseno)) {
        $mensaje .= "Error: La entrada debe contener solo letras y números." . "\n";
    }
    
    else if (file_exists($nombreImagenPrev)) {
        $mensaje .= "Error: La imagen ya existe en el directorio de destino." . "\n";
    } 
    
    else {
        // Mover la imagenPrev al directorio de destino con un nombre único basado en $nuevoDiseno
        move_uploaded_file($imagenPrev["tmp_name"], $nombreImagenPrev);

        // Mover la imagenFull al directorio de destino con un nombre único basado en $nuevoDiseno
        $nombreImagenFull = $directorioDestinoFull . $nuevoDiseno . "." . pathinfo($imagenFull["name"], PATHINFO_EXTENSION);
        move_uploaded_file($imagenFull["tmp_name"], $nombreImagenFull);

        // Aquí puedes realizar cualquier otra acción necesaria, como almacenar información en una base de datos.

        // Mensaje de éxito
        $mensaje = "¡Imágenes subidas con éxito! El diseño " . $nuevoDiseno . " ya se encuentra en el catálogo de modelo " . $subcarpeta;
    }
} else {
    // Mensaje de error si la solicitud no es POST
    $mensaje = "ERROR: No se pudo completar la operación.";
}

// Enviar la respuesta como JSON
echo json_encode(array('mensaje' => $mensaje));
?>
