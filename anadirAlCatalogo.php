<?php
require_once('conexion.php');

$modelo = $_POST['modelo'];
$diseno = $_POST['diseno'];

$query = "UPDATE cat_alc SET disponibilidad = 1 WHERE diseno = ? AND modelo = ?";
$stmt = $conn->prepare($query);
$stmt->execute([$diseno, $modelo]);
$conn = null;
?>
