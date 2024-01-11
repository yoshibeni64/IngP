$(document).ready(function() {
    function fillContenidoPedido() {

        var tablasPedido = document.getElementsByClassName('pedidoTable');
        var carritoTable = document.getElementById('carritoTable');

        for (var i = 0; i < tablasPedido.length; i++) {
          var tablaClonada = carritoTable.cloneNode(true);

          for (var j = 0; j < tablaClonada.rows.length; j++) {
            var ultimaCelda = tablaClonada.rows[j].cells[tablaClonada.rows[j].cells.length - 1];
            tablaClonada.rows[j].deleteCell(ultimaCelda.cellIndex);
          }
          tablasPedido[i].innerHTML = '';
          tablasPedido[i].appendChild(tablaClonada);
        }
      }
    
      function fillCostoPedidoSin(costoP, costoE) {
        // Crear las filas y celdas con el contenido deseado
        var fila1 = $('<tr><td>Costo del pedido</td><td>$' + costoP + ' MXN</td></tr>');
        var fila2 = $('<tr><td>Costo del envío</td><td>$' + costoE + ' MXN</td></tr>');
    
        $('#costosTotalesTableSin').empty();
        $('#costosTotalesTableSin').append(fila1, fila2);
        $('#costosTotalesTableSin').show();
    }

    $("#cpCotizacionButton").click(function(event) {
        // Detener el evento de clic por defecto
        event.preventDefault();

        // Obtener el valor del código postal del input
        var cpCotizacion = $("#cpCotizacion").val();

        // Realizar la solicitud Ajax
        $.ajax({
            type: "POST",
            url: "cotizarConCP.php",
            data: { cpCotizacion: cpCotizacion },
            dataType: 'json',
            async: true, // Hacer la solicitud asíncrona
            success: function(datos) {
                // Actualizar el contenido del div con id 'costoEnvioSin' con la respuesta del servidor
                $("#mensajeCostoEnvioS").show();
                $("#mensajeCostoEnvioS").html(datos.mensaje);

                if (datos.hasOwnProperty('precioEnvio')) {
                    fillContenidoPedido();

                    var subtotal = Number($('#subtotalSpan').text());
                    fillCostoPedidoSin(subtotal,datos.precioEnvio);
                    //Proceder con el pago
                }
            }
        });
    });
});
