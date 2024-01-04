<?php
class Usuario {
    public $email;
    public $password;
    public $estado;
    public $municipio;
    public $cp;
    public $colonia;
    public $calle;

    public function __construct($email, $password, $estado, $municipio, $cp, $colonia, $calle) {
        $this->email = $email;
        $this->password = $password;
        $this->estado = $estado;
        $this->municipio = $municipio;
        $this->cp = $cp;
        $this->colonia = $colonia;
        $this->calle = $calle;
    }
}

$query = "SELECT * FROM Usuarios WHERE correo = 'adminRiveralo64@gmail.com'";
$stmt = $conn->query($query);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $usuarioConectado = new Usuario(
        $row['correo'],
        $row['passwordUsuario'],
        $row['idEstado'],
        $row['idMunicipio'],
        $row['cp'],
        $row['colonia'],
        $row['calle']
    );
}

print_r($usuarioConectado);
?>