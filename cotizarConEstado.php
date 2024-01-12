<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el valor del código postal enviado desde el formulario
    $estadoCotizacion = $_POST['estadoCotizacion'];
    $nUnidades = $_POST['nUnidades'];

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

    //Cuenta cuántas alcancías hay por el momento en la Base de Datos, por cada 200 aumenta 7 días la fecha de Entrega con respecto a la primera fecha de entrega,
    //la cual corresponde al 04 de febrero de 2023
    $querySuma = "SELECT SUM(cantidad) AS suma FROM det_pedido";

        // Preparar la consulta
        $stmtSuma = $conn->prepare($querySuma);
        
        // Ejecutar la consulta
        $stmtSuma->execute();
        
        // Obtener y mostrar los resultados
        $resultSuma = $stmtSuma->fetch(PDO::FETCH_ASSOC);
        
        // Guardar la suma en la variable $suma
        $suma = $resultSuma["suma"] + $nUnidades;

        //Ultimo pedido
       $query = "SELECT MIN(fechaEstimadaEntrega) AS fechaMasPequena,
                     FLOOR( ? / 200) * 7 AS nDias,
                     MIN(fechaEstimadaEntrega) + INTERVAL FLOOR(SUM(cantidad) / 200) * 7 DAY AS nuevaFechaEstimadaEntrega
              FROM pedidos
              JOIN det_pedido ON pedidos.idPedido = det_pedido.idPedido";


        $stmt = $conn->prepare($query);

        // Asignar el valor del parámetro y ejecutar la consulta
        $stmt->execute([$suma]);
    
        // Obtener y mostrar los resultados
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $nuevaFechaEstimadaEntrega = $result["nuevaFechaEstimadaEntrega"];

    $mensaje = "El costo de envio para el estado de " . $estado . " seria igual a $" . $precioEnvio . " MXN";

    $datos = array(
        'mensaje' => $mensaje,
        'precioEnvio' => $precioEnvio,
        "nuevaFechaEstimadaEntrega" => $nuevaFechaEstimadaEntrega
    );
    
    echo json_encode($datos);
    
    $conn = null;
}
?>
