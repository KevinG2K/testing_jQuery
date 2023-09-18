$(function () {

    $('#append').on('click', function(){
        var value = $('#contenedor-agregar input').val();
        var html = '<div class="item"><li>'+value+'</li></div>'
        $('#contenedor-nombres').append(html);
    });

    $('#prepend').on('click', function(){
        var value = $('#contenedor-agregar input').val();
        var html = '<div class="item"><li>'+value+'</li></div>'
        $('#contenedor-nombres').prepend(html);
    });

}); 