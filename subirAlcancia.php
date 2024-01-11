<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensaje = "";
    $error = 0;

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
    if (empty($nuevoDiseno)) {
        $mensaje .= "ERROR: El campo 'nuevoDiseno' no puede estar vacío.<br>";
        $error = 1;
    }
    
    
    if (!preg_match('/^[a-zA-Z0-9\s-]+$/', $nuevoDiseno)) {
        $mensaje .= "ERROR: La entrada debe contener solo letras, números, espacios y el signo '-'.<br>";
        $error = 1;
    }
    
    $carpetaLocal = __DIR__ . "/images/";

    // Verificar si la imagenPrev existe en la carpeta local
    if (file_exists($carpetaLocal . $imagenPrev["name"])) {
        $mensaje .= "ERROR: La imagen Prev ya existe en la carpeta de imágenes";
        $error = 1;
    }

    // Verificar si la imagenFull existe en la carpeta local
    if (file_exists($carpetaLocal . $imagenFull["name"])) {
        $mensaje .= "ERROR: La imagen Full ya existe en la carpeta de imágenes";
        $error = 1;
    }

    $extensionImagenPrev = strtolower(pathinfo($imagenPrev["name"], PATHINFO_EXTENSION));
    if ($extensionImagenPrev != "png" && $extensionImagenPrev != "jpg") {
        $mensaje .= "ERROR: La imagenPrev debe ser de tipo PNG o JPG.<br>";
        $error = 1;
    }

    // Verificar si la imagenFull es de tipo png o jpg
    $extensionImagenFull = strtolower(pathinfo($imagenFull["name"], PATHINFO_EXTENSION));
    if ($extensionImagenFull != "png" && $extensionImagenFull != "jpg") {
        $mensaje .= "ERROR: La imagenFull debe ser de tipo PNG o JPG.<br>";
        $error = 1;
    }

    $query = "SELECT diseno FROM cat_alc WHERE modelo = ? AND diseno = ?";

    $stmt = $conn->prepare($query);
    $stmt->execute([$modelo, $nuevoDiseno]);

    if ($stmt->rowCount() > 0) {
        $mensaje .= "ERROR: Ya existe un registro con el mismo diseño para el modelo especificado.<br>";
        $error = 1;
    }

    if ($error == 0) {
        // Mover la imagenPrev al directorio de destino con un nombre único basado en $nuevoDiseno
        move_uploaded_file($imagenPrev["tmp_name"], $nombreImagenPrev);

        // Mover la imagenFull al directorio de destino con un nombre único basado en $nuevoDiseno
        $nombreImagenFull = $directorioDestinoFull . $nuevoDiseno . "." . pathinfo($imagenFull["name"], PATHINFO_EXTENSION);
        move_uploaded_file($imagenFull["tmp_name"], $nombreImagenFull);


        $query = "INSERT INTO cat_alc(modelo, diseno, disponibilidad)
            VALUES(?,?,1)";

        $stmt = $conn->prepare($query);
        $stmt->execute([$modelo, $nuevoDiseno]);
        $mensaje = "¡Imágenes subidas con éxito! El diseño " . $nuevoDiseno . " ya se encuentra en el catálogo de modelo " . $modelo;
    }

    $conn = null;

} else {
    // Mensaje de error si la solicitud no es POST
    $mensaje = "ERROR: No se pudo completar la operación.";
}

// Enviar la respuesta como JSON
echo json_encode(array('mensaje' => $mensaje));
?>
