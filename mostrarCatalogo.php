<?php
require_once('conexion.php');

$subcarpeta = isset($_GET['subcarpeta']) ? $_GET['subcarpeta'] : '';


$query = "SELECT precio FROM precios WHERE modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

$precio = ($row) ? $row['precio'] : "ERROR";

// Directorio base
$directorioBasePrev = 'images/Prev/';
$directorioBaseFull = 'images/Full/';

// Directorio completo con la subcarpeta
$directorioPrev = $directorioBasePrev . $subcarpeta . '/';
$directorioFull = $directorioBaseFull . $subcarpeta . '/';
$imagenesPrev = array();
$imagenesFull = array();
$alcanciasBD = array();

// Obtener todas las imágenes en el directorio Prev
foreach (glob($directorioPrev . "*.{jpg,jpeg,png}", GLOB_BRACE) as $imagenPrev) {
    $imagenesPrev[] = $imagenPrev;
    $nombreArchivo = pathinfo($imagenPrev, PATHINFO_FILENAME);
    $alcanciasBD[] = $nombreArchivo;
}


// Obtener todas las imágenes en el directorio Full y agregarlas a $imagenes2
foreach (glob($directorioFull . "*.{jpg,jpeg,png}", GLOB_BRACE) as $imagenFull) {
    $imagenesFull[] = $imagenFull;
}

$query = "SELECT diseno FROM cat_alc WHERE disponibilidad = 1 AND modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
$disenosCatalogo = array_column($row, 'diseno');

$interseccion = array_intersect($alcanciasBD, $disenosCatalogo);

echo json_encode(array('imagenesPrev' => $imagenesPrev, 'imagenesFull' => $imagenesFull, 'precio' => $precio, 'interseccion' => $interseccion));
?>

