<?php
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el correo electrónico enviado desde el formulario
    $correoIniciar = filter_input(INPUT_POST, 'correoI', FILTER_SANITIZE_EMAIL);
    $contrasenaIniciar = filter_input(INPUT_POST, 'passwordI', FILTER_SANITIZE_STRING);
    $correoPerfil = "";
    $contrasenaPerfil = "";
    $estadoPerfil = "";
    $municipioPerfil = "";
    $cpPerfil = "";
    $callePerfil = "";
    $numeroExteriorPerfil = "";

    if (filter_var($correoIniciar, FILTER_VALIDATE_EMAIL)) {

        // Realiza la consulta SQL para obtener los usuarios con el correo específico
        $query = "SELECT * FROM Usuarios WHERE correo = ?";

        $stmt = $conn->prepare($query);
        $stmt->execute([$correoIniciar]);
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $mensaje = ($row) ? "a" : "ERROR: El correo no se encuentra registrado";

        if ($mensaje == "a") {
            $query = 
            
            "SELECT U.idUsuario,
            U.correo,
            U.passwordUsuario,
            E.nombreEstado,
            M.nombreMunicipio,
            U.cp,
            U.calle,
            U.numeroExterior
            FROM Usuarios U
            JOIN Estados E ON U.idEstado = E.idEstado
            JOIN Municipios M ON U.idMunicipio = M.idMunicipio
            WHERE U.correo = ? AND U.passwordUsuario = ?";

            $stmt = $conn->prepare($query);
            $stmt->execute([$correoIniciar, $contrasenaIniciar]);

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $mensaje = ($row) ? "b" : "ERROR: La contraseña es incorrecta. Corrija e intente nuevamente.";

            if ($mensaje == "b") {
                $mensaje = "Has iniciado sesión exitosamente.";
                $correoPerfil = $row['correo'];    
                $contrasenaPerfil = $row['passwordUsuario'];
                $estadoPerfil = $row['nombreEstado'];
                $municipioPerfil = $row['nombreMunicipio'];
                $cpPerfil = $row['cp'];
                $callePerfil = $row['calle'];
                $numeroExteriorPerfil = $row['numeroExterior'];
            }

        }

        $datos = array("mensaje" => $mensaje, 
        'correoPerfil' => $correoPerfil,
        'contrasenaPerfil' => $contrasenaPerfil,
        'estadoPerfil' => $estadoPerfil,
        'municipioPerfil' => $municipioPerfil,
        'cpPerfil' => $cpPerfil,
        'callePerfil' => $callePerfil,
        'numeroExteriorPerfil' => $numeroExteriorPerfil);        
    } 
    
    else {

        $mensaje = "ERROR: No se proporcionó un correo válido. Corrija e intente nuevamente.";

        $datos = array("mensaje" => $mensaje, 
        'correoPerfil' => $correoPerfil,
        'contrasenaPerfil' => $contrasenaPerfil,
        'estadoPerfil' => $estadoPerfil,
        'municipioPerfil' => $municipioPerfil,
        'cpPerfil' => $cpPerfil,
        'callePerfil' => $callePerfil,
        'numeroExteriorPerfil' => $numeroExteriorPerfil);

        
    }


    echo json_encode($datos);
}

?>




