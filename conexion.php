<?php
$dsn = 'mysql:host=localhost;dbname=IngP';
$usuario = 'root';
$contrasena = 'Pruebas123+';

try {
    $conn = new PDO($dsn, $usuario, $contrasena);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
