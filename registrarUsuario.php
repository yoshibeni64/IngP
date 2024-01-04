<?php
// Incluye el archivo de conexión
require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el correo electrónico enviado desde el formulario
    $correoReg = filter_input(INPUT_POST, 'correoR', FILTER_SANITIZE_EMAIL);
    $contrasenaReg = filter_input(INPUT_POST, 'passwordR', FILTER_SANITIZE_STRING);
    $contrasenaConf = filter_input(INPUT_POST, 'passwordConfR', FILTER_SANITIZE_STRING);
    $registro2 = 0;

    if (filter_var($correoReg, FILTER_VALIDATE_EMAIL)) {
        // Realiza la consulta SQL para obtener los usuarios con el correo específico
        $query = "SELECT * FROM Usuarios WHERE correo = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$correoReg]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $mensaje = ($row) ? "ERROR: Ya existe una cuenta registrada con este correo." : "a";

        if ($mensaje == "a") {
            if ($contrasenaReg == $contrasenaConf) {
                $mensaje = "Los datos han sido validados. Llene los siguientes datos para finalizar el registro.";
                $registro2++;
            } else {
                $mensaje = "ERROR: Las contraseñas no coinciden. Corrije e intenta nuevamente.";
            }
        }

        // Imprime el mensaje como JSON para que pueda ser procesado por JavaScript
        header('Content-Type: application/json');
        echo json_encode(array("mensaje" => $mensaje, "registro2" => $registro2));
    } else {
        $mensaje = "ERROR: No se proporcionó un correo válido. Corrija e intente nuevamente.";
        // Imprime el mensaje como JSON para que pueda ser procesado por JavaScript
        header('Content-Type: application/json');
        echo json_encode(array("mensaje" => $mensaje, "registro2" => $registro2));
    }
}
?>
