<?php
require_once('conexion.php');

$subcarpeta = isset($_GET['subcarpeta']) ? $_GET['subcarpeta'] : '';

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

$query = "SELECT precio FROM precios WHERE modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$precio = ($row) ? $row['precio'] : "ERROR";


$query = "SELECT diseno FROM cat_alc WHERE disponibilidad = 1 AND modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
$disenosCatalogo = array_column($row, 'diseno');

if (empty($disenosCatalogo)) {
    $mensaje = "Por el momento no se encuentran disponibles diseños de este modelo.";
}

else {
    $mensaje = "";
}

$query = "SELECT diseno FROM cat_alc WHERE modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
$disenosBD = array_column($row, 'diseno');

$query = "SELECT idAlcancia FROM cat_alc WHERE modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$subcarpeta]);
$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
$idsArray = array_column($row, 'idAlcancia');

$conn = null;

echo json_encode(array('imagenesPrev' => $imagenesPrev, 'imagenesFull' => $imagenesFull, 'precio' => $precio, 'disenosCatalogo' => $disenosCatalogo, 'disenosBD' => $disenosBD, 'mensaje' => $mensaje, "idsArray" => $idsArray));
?>

