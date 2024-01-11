<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el valor del código postal enviado desde el formulario
    $cpCotizacion = $_POST['cpCotizacion'];
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

        $datos = [
            "mensaje" => "El Código Postal proviene del estado de " . $estado . " y el costo de envío sería igual a $" . $precioEnvio . " MXN",
            "precioEnvio" => $precioEnvio
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
