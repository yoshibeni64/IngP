<?php
// Incluye el archivo de conexión
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el correo electrónico enviado desde el formulario
    $correoA = filter_input(INPUT_POST, 'correoA', FILTER_SANITIZE_EMAIL);
    $passwordA = filter_input(INPUT_POST, 'passwordA', FILTER_SANITIZE_STRING);
    $passwordConfA = filter_input(INPUT_POST, 'passwordConfA', FILTER_SANITIZE_STRING);
    $estadoA = $_POST["estadoSelectA"];
    $municipioA = $_POST["municipioA"];
    $calleA = $_POST["calleA"];
    $codigoPostalA = $_POST["cpA"];
    $numeroExteriorA = $_POST["numExtA"];

        // Realiza la consulta SQL para obtener los usuarios con el correo específico
        $query = "SELECT * FROM usuarios WHERE correo = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$correoA]);
        
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($estadoA == 0 || $municipioA == 0 || $calleA == "" || $numeroExteriorA == "" || $codigoPostalA == "") {
            $mensaje = "ERROR. Favor de no dejar casillas en blanco. Corrija e intente nuevamente.";
        }

        elseif ($passwordA != $passwordConfA) {
            $mensaje = "ERROR. Las contraseñas no coinciden. Corrige e intenta nuevamente.";
        }
    
        elseif(strlen($codigoPostalA) != 5) {
            $mensaje = "ERROR. Procura que el Codigo Postal cuente con 5 digitos exactos.";
        }
    
        else {
            $mensaje = "La actualización de datos se ha realizado correctamente.";
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

?>

