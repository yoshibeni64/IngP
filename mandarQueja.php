<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $para = "riveraloarte51@gmail.com";
    $asunto = "Queja recibida desde el formulario";
    $mensaje = $_POST["queja"];

    // Procesar las imágenes
    $imagenes = $_FILES["imagenes"];

    // Configurar las cabeceras para el correo
    $cabeceras = "From: " . $_POST["email"] . "\r\n";
    $cabeceras .= "Reply-To: " . $_POST["email"] . "\r\n";
    $cabeceras .= "MIME-Version: 1.0\r\n";
    $cabeceras .= "Content-Type: text/html; charset=UTF-8\r\n";

}
?>
