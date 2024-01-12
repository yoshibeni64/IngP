<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensaje = "";

    $buscarPedidoID = $_POST["buscarPedidoID"];

    $query = "SELECT * FROM pedidos WHERE idPedido = ?";

        $stmt = $conn->prepare($query);
        $stmt->execute([$buscarPedidoID]);
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $mensaje = ($row) ? "ID de pedido validado, puede continuar con la queja." : "ERROR: El ID ingresado no corresponde con un pedido existente. Corrija e intente de nuevo";

        echo json_encode($mensaje);

}
?>
