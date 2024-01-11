<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el valor del código postal enviado desde el formulario
    $estadoCotizacion = $_POST['estadoCotizacion'];

    $query = "SELECT idEstado FROM estados WHERE nombreEstado = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$estadoCotizacion]);
    $idEstado = $stmt->fetchColumn();

    $query = "SELECT nombreEstado FROM estados WHERE idEstado = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$idEstado]);
    $estado = $stmt->fetchColumn();

    $query = "SELECT precioEnvio FROM estados WHERE idEstado = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$idEstado]);
    $precioEnvio = $stmt->fetchColumn();

    $mensaje = "El costo de envio para el estado de " . $estado . " seria igual a $" . $precioEnvio . " MXN";

    $datos = array(
        'mensaje' => $mensaje,
        'precioEnvio' => $precioEnvio // Asegúrate de tener el valor correcto de $precioEnvio
    );
    
    echo json_encode($datos);
    
    $conn = null;
}
?>
