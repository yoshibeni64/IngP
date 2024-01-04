<?php
// Incluir el archivo de la clase de conexión
include 'conexion.php';  // Reemplaza 'nombre_del_archivo_anterior.php' con el nombre real de tu archivo

// Crear una instancia de la clase de conexión
$objConexion = new Cconexion();
$conn = $objConexion->ConexionBD();

try {
    // Realizar la consulta a la tabla "Usuarios"
    $query = "SELECT * FROM Usuarios";
    $stmt = $conn->query($query);

    // Imprimir los resultados
    echo "<h2>Resultados de la consulta:</h2>";
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Email</th></tr>";

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>{$row['idUsuario']}</td>";
        echo "<td>{$row['correo']}</td>";
        echo "<td>{$row['passwordUsuario']}</td>";
        echo "</tr>";
    }

    echo "</table>";
} catch (PDOException $e) {
    echo "Error en la consulta: " . $e->getMessage();
}

// Cerrar la conexión
$conn = null;
?>
