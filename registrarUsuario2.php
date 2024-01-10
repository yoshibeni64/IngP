<?php
require_once('conexion.php');

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $correoReg = $_POST["correoR"];
    $contrasenaReg = $_POST["passwordR"];
    $contrasenaConf = $_POST["passwordConfR"];
    $estado = $_POST["estadoSelect"];
    $municipio = $_POST["municipioReg"];
    $calle = $_POST["regUcalle"];
    $codigoPostal = $_POST["regUcp"];
    $numeroExterior = $_POST["regUnumExt"];
    $error = 0;

    if ($estado == 0 || $municipio == 0 || $calle == "" || $numeroExterior == "" || $codigoPostal == "" || $numeroExterior == "") {
        $mensaje = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
        $error = 1;
    } 
    if (strlen($codigoPostal) != 5) {
        $mensaje = "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos.";
        $error = 1;
    } 
    
    if ($error == 0) {
        $mensaje = "El registro se ha realizado correctamente.";

        //Asignar idEstado
        $query = "SELECT idEstado FROM estados WHERE nombreEstado = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$estado]);
        $idEstado = $stmt->fetchColumn();

        //Asignar idMunicipio
        $query = "SELECT idMunicipio FROM municipios WHERE idEstado = ? AND nombreMunicipio = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$idEstado, $municipio]);
        $idMunicipio = $stmt->fetchColumn();

        $query = "INSERT INTO usuarios (correo, passwordUsuario, idEstado, idMunicipio, cp, calle, numeroExterior) 
                VALUES (?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($query);
        $stmt->execute([$correoReg, $contrasenaReg, $idEstado, $idMunicipio, $codigoPostal, $calle, $numeroExterior]);
    }

    
    $conn = null;


    $datos = array(
        "correoReg" => $correoReg,
        "contrasenaReg" => $contrasenaReg,
        "contrasenaConf" => $contrasenaConf,
        "estado" => $estado,
        "municipio" => $municipio,
        "direccion" => $calle,
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
