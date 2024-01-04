<?php
// Obtener el valor del select
$opcionSeleccionada = $_POST['opcion'];
$idEstado = 0;
// Realizar alguna lógica basada en el valor seleccionado
if ($opcionSeleccionada == 'Aguascalientes') {    $idEstado = 1;}
elseif ($opcionSeleccionada == 'Baja California') {    $idEstado = 2;}
elseif ($opcionSeleccionada == 'Baja California Sur') {    $idEstado = 3;}
elseif ($opcionSeleccionada == 'Campeche') {    $idEstado = 4;}
elseif ($opcionSeleccionada == 'Chiapas') {    $idEstado = 5;}
elseif ($opcionSeleccionada == 'Chihuahua') {    $idEstado = 6;}
elseif ($opcionSeleccionada == 'Ciudad de México') {    $idEstado = 7;}
elseif ($opcionSeleccionada == 'Coahuila de Zaragoza') {    $idEstado = 8;}
elseif ($opcionSeleccionada == 'Colima') {    $idEstado = 9;}
elseif ($opcionSeleccionada == 'Durango') {    $idEstado = 10;}
elseif ($opcionSeleccionada == 'Estado de México') {    $idEstado = 11;}
elseif ($opcionSeleccionada == 'Guanajuato') {    $idEstado = 12;}
elseif ($opcionSeleccionada == 'Guerrero') {    $idEstado = 13;}
elseif ($opcionSeleccionada == 'Hidalgo') {    $idEstado = 14;}
elseif ($opcionSeleccionada == 'Jalisco') {    $idEstado = 15;}
elseif ($opcionSeleccionada == 'Michoacán de Ocampo') {    $idEstado = 16;}
elseif ($opcionSeleccionada == 'Morelos') {    $idEstado = 17;}
elseif ($opcionSeleccionada == 'Nayarit') {    $idEstado = 18;}
elseif ($opcionSeleccionada == 'Nuevo León') {    $idEstado = 19;}
elseif ($opcionSeleccionada == 'Oaxaca') {    $idEstado = 20;}
elseif ($opcionSeleccionada == 'Puebla') {    $idEstado = 21;}
elseif ($opcionSeleccionada == 'Querétaro Arteaga') {    $idEstado = 22;}
elseif ($opcionSeleccionada == 'Quintana Roo') {    $idEstado = 23;}
elseif ($opcionSeleccionada == 'San Luis Potosí') {    $idEstado = 24;}
elseif ($opcionSeleccionada == 'Sinaloa') {    $idEstado = 25;}
elseif ($opcionSeleccionada == 'Sonora') {    $idEstado = 26;}
elseif ($opcionSeleccionada == 'Tabasco') {    $idEstado = 27;}
elseif ($opcionSeleccionada == 'Tamaulipas') {    $idEstado = 28;}
elseif ($opcionSeleccionada == 'Tlaxcala') {    $idEstado = 29;}
elseif ($opcionSeleccionada == 'Veracruz') {    $idEstado = 30;}
elseif ($opcionSeleccionada == 'Yucatán') {    $idEstado = 31;}
elseif ($opcionSeleccionada == 'Zacatecas') {    $idEstado = 32;}

// Devolver la respuesta
echo $idEstado;
?>
