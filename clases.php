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

class Pedido {
    public $idPedido;
    public $idUsuario;
    public $idStatus;
    public $costoContenido;
    public $costoEnvio;
    public $fechaPedido;
    public $fechaEstimadaEntrega;
    public $fechaRealEntrega;
    public $fechaRecibido;

    public function __construct($idPedido, $idUsuario, $idStatus, $costoContenido, $costoEnvio, $fechaPedido, $fechaEstimadaEntrega, $fechaRealEntrega, $fechaRecibido) {
        $this->idPedido = $idPedido;
        $this->idUsuario = $idUsuario;
        $this->idStatus = $idStatus;
        $this->costoContenido = $costoContenido;
        $this->costoEnvio = $costoEnvio;
        $this->fechaPedido = $fechaPedido;
        $this->fechaEstimadaEntrega = $fechaEstimadaEntrega;
        $this->fechaRealEntrega = $fechaRealEntrega;
        $this->fechaRecibido = $fechaRecibido;
    }
}


class Alcancia {
    public $idAlcancia;
    public $modelo;
    public $diseno;
    public $cantidad;
    public $precio;
    public $imgPrev;
    public $imgFull;

    public function __construct($idAlcancia, $modelo, $diseno, $cantidad, $precio, $imgPrev, $imgFull) {
        $this->idAlcancia = $idAlcancia;
        $this->modelo = $modelo;
        $this->diseno = $diseno;
        $this->cantidad = $cantidad;
        $this->precio = $precio;
        $this->imgPrev = $imgPrev;
        $this->imgFull = $imgFull;
    }
}
?>