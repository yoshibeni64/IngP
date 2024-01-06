<?php
require_once('conexion.php');

$subcarpeta = isset($_GET['subcarpeta']) ? $_GET['subcarpeta'] : '';


    $query = "SELECT precio FROM Precios WHERE modelo = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$subcarpeta]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $precio = ($row) ? $row['precio'] : "ERROR";

    $conn = null;


// Directorio base
$directorioBasePrev = 'images/Prev/';
$directorioBaseFull = 'images/Full/';

// Directorio completo con la subcarpeta
$directorioPrev = $directorioBasePrev . $subcarpeta . '/';
$directorioFull = $directorioBaseFull . $subcarpeta . '/';
$imagenesPrev = array();
$imagenesFull = array();

// Obtener todas las imágenes en el directorio Prev
foreach (glob($directorioPrev . "*.{jpg,jpeg,png}", GLOB_BRACE) as $imagenPrev) {
    $imagenesPrev[] = $imagenPrev;
}

// Obtener todas las imágenes en el directorio Full y agregarlas a $imagenes2
foreach (glob($directorioFull . "*.{jpg,jpeg,png}", GLOB_BRACE) as $imagenFull) {
    $imagenesFull[] = $imagenFull;
}


echo json_encode(array('imagenesPrev' => $imagenesPrev, 'imagenesFull' => $imagenesFull, 'precio' => $precio));
?>

