$(function () {

    $('#agregar').on('click', 'button', function(){
        var value = $('#agregar input').val();
        var html = '<div class="item"><li>'+value+'<button class="eliminar">Eliminar</button></li></div>'
        $('#contenedor-nombres').append(html);
    });

    // NO SIRVE
    // $('#contenedor-nombres .eliminar').on('click', function() {
    //     var parent = $(this).parent().remove();
    // });

    // AHORA USANDO DELEGACION DE EVENTOS
    $('#contenedor-nombres').on('click', '.eliminar', function() {
        $(this).parent().remove();
    });

}); 