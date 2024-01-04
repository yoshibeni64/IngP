<?php
require_once('conexion.php');

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores de los inputs
    $estado = $_POST["estadoSelect"];
    $municipio = $_POST["municipioReg"];
    $direccion = $_POST["regUdireccion"];
    $codigoPostal = $_POST["regUcp"];
    $numeroExterior = $_POST["regUnumExt"];

    if ($estado == 0 || $municipio == 0 || $direccion == "" || $numeroExterior == "" || $codigoPostal == "" || $numeroExterior == "") {
        $mensaje = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
    } elseif (strlen($codigoPostal) != 5) {
        $mensaje = "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos.";
    } else {
        $mensaje = "El registro se ha realizado correctamente.";
    }

    $datos = array(
        "estado" => $estado,
        "municipio" => $municipio,
        "direccion" => $direccion,
        "codigoPostal" => $codigoPostal,
        "mensaje" => $mensaje,
        "numeroExterior" => $numeroExterior
    );

    // Convertir el array a formato JSON
    echo json_encode($datos);

    // Aquí puedes realizar cualquier otra operación o guardar los datos en la base de datos
} else {
    // Manejar el caso en el que el formulario no se ha enviado correctamente
    $mensaje = "El formulario no se ha enviado correctamente.";
    $datos = array("mensaje" => $mensaje);
    echo json_encode($datos);
}
?>
