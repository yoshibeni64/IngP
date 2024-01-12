<?php
require_once('conexion.php');

$arrayIds = $_POST['arrayIds'];
$arrayUnidades = $_POST['arrayUnidades'];
$nuevaFechaEstimadaEntrega = $_POST['nuevaFechaEstimadaEntrega'];
$costoContenido = $_POST['costoContenido'];
$costoEnvio = $_POST['costoEnvio'];
$correo = $_POST['correo'];
$fechaHoy = date("Y-m-d");

$query = "SELECT idUsuario FROM usuarios WHERE correo = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$correo]);
        $result = $stmt->fetch();

        $idUsuario = $result['idUsuario'];

$query = "INSERT INTO pedidos(idUsuario, idStatus, costoContenido, costoEnvio, fechaPedido, fechaEstimadaEntrega)
VALUES (?,?,?,?,?,?)";
$stmt = $conn->prepare($query);
$stmt->execute([$idUsuario, 1, $costoContenido, $costoEnvio, $fechaHoy, $nuevaFechaEstimadaEntrega]);


$idPedidoInsertado = $conn->lastInsertId();
$idAlcanciaArray = $_POST['arrayIds'];
$cantidadArray = $_POST['arrayUnidades'];

$query = "INSERT INTO det_pedido(idPedido, idAlcancia, cantidad) VALUES (?,?,?)";
$stmt = $conn->prepare($query);

foreach ($idAlcanciaArray as $key => $idAlcancia) {
    $cantidad = $cantidadArray[$key];
    $stmt->execute([$idPedidoInsertado, $idAlcancia, $cantidad]);
}

echo json_encode($idPedidoInsertado);
$conn = null;
?>