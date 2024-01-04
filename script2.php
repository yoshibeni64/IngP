<?php
// Incluir el archivo de conexión
include 'script.php';
require_once('conexion.php');

$sql = "SELECT * FROM Municipios WHERE idEstado = :idEstado";

// Preparar la consulta
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idEstado', $idEstado, PDO::PARAM_INT);

// Ejecutar la consulta
if ($stmt->execute()) {
    // Obtener los resultados
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Imprimir los resultados
    echo '<option value="0">Selecciona un municipio</option>';
    foreach ($resultados as $row) {
        echo '<option value="' . $row['nombreMunicipio'] . '">' . $row['nombreMunicipio'] . '</option>';
    }
} else {
    // Manejar errores si la consulta no se ejecuta correctamente
    echo "Error en la consulta: " . $stmt->errorInfo()[2];
}
?>
