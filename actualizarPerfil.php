<?php
// Incluye el archivo de conexión
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correoA = $_POST["correoA"];
    $passwordA = filter_input(INPUT_POST, 'passwordA', FILTER_SANITIZE_STRING);
    $passwordConfA = filter_input(INPUT_POST, 'passwordConfA', FILTER_SANITIZE_STRING);
    $estadoA = $_POST["estadoSelectA"];
    $municipioA = $_POST["municipioA"];
    $calleA = $_POST["calleA"];
    $codigoPostalA = $_POST["cpA"];
    $numeroExteriorA = $_POST["numExtA"];
    $error = 0;


        if ($estadoA == 0 || $municipioA == 0 || $calleA == "" || $numeroExteriorA == "" || $codigoPostalA == "") {
            $mensaje = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
            $error = 1;
        }

        else if ($passwordA != $passwordConfA) {
            $mensaje = "ERROR. Las contraseñas no coinciden. Corrige e intenta nuevamente.";
            $error = 1;
        }
    
        else if(strlen($codigoPostalA) != 5) {
            $mensaje = "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos.";
            $error = 1;
        }
    
        if ($error == 0) {
            $mensaje = "La actualización de datos se ha realizado correctamente.";

            $query = "SELECT idEstado FROM estados WHERE nombreEstado = ?";
            $stmt = $conn->prepare($query);
            $stmt->execute([$estadoA]);
            $idEstadoA = $stmt->fetchColumn();

            //Asignar idMunicipio
            $query = "SELECT idMunicipio FROM municipios WHERE idEstado = ? AND nombreMunicipio = ?";
            $stmt = $conn->prepare($query);
            $stmt->execute([$idEstadoA, $municipioA]);
            $idMunicipioA = $stmt->fetchColumn();


            $query = "UPDATE usuarios SET passwordUsuario = ?, idEstado = ?, idMunicipio = ?, cp = ?, calle = ?, numeroExterior = ? 
            WHERE correo = ?";

            $stmt = $conn->prepare($query);
            $stmt->execute([$passwordA, $idEstadoA, $idMunicipioA, $codigoPostalA, $calleA, $numeroExteriorA, $correoA]);

            $conn = null;
        }
       
    
    
        $datos = array(
            "password" => $passwordA,
            "passwordConf" => $passwordConfA,
            "estado" => $estadoA,
            "municipio" => $municipioA,
            "calle" => $calleA,
            "cp" => $codigoPostalA,
            "numeroExterior" => $numeroExteriorA,
            "mensaje" => $mensaje  
        );
    
        // Convertir el array a formato JSON
        echo json_encode($datos);





}

else {
    // Manejar el caso en el que el formulario no se ha enviado correctamente
    $mensaje = "El formulario no se ha enviado correctamente.";
    $datos = array("mensaje" => $mensaje);
    echo json_encode($datos);
}

?>

