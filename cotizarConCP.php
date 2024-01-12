<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el valor del código postal enviado desde el formulario
    $cpCotizacion = $_POST['cpCotizacion'];
    $nUnidades = $_POST['nUnidades'];
    $error = 0;

    $query = "SELECT idEstado FROM estados WHERE ? BETWEEN cpInicial AND cpFinal";
    $stmt = $conn->prepare($query);
    $stmt->execute([$cpCotizacion]);
    $idEstado = $stmt->fetchColumn();

    if (strlen($cpCotizacion) != 5) {
        $datos = [
            "mensaje" => "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos."
        ];
        $error = 1;
    }

    else if ($idEstado == false && $idEstado == null) {
        $datos = [
            "mensaje" => "El Código Postal no corresponde con ningún estado de la República Mexicana. Corrija e intente nuevamente"
        ];
        $error = 1;
    }

    if ($error == 0) {
        $query = "SELECT nombreEstado, precioEnvio FROM estados WHERE idEstado = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$idEstado]);
        $result = $stmt->fetch();

        $estado = $result['nombreEstado'];
        $precioEnvio = $result['precioEnvio'];


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

        $datos = [
            "mensaje" => "El Código Postal proviene del estado de " . $estado . " y el costo de envío sería igual a $" . $precioEnvio . " MXN",
            "precioEnvio" => $precioEnvio,
            "nuevaFechaEstimadaEntrega" => $nuevaFechaEstimadaEntrega
        ];

        
    } 

    echo json_encode($datos);
}

else {
    // Manejar el caso en el que el formulario no se ha enviado correctamente
    $mensaje = "El formulario no se ha enviado correctamente.";
    $datos = array("mensaje" => $mensaje);
    echo json_encode($datos);
}

$conn = null;
?>
