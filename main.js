$(function () {

    $('#after').on('click', function(){
        var value = $('#contenedor-agregar input').val();
        var html = '<div class="item"><li>'+value+'</li></div>'
        $('#contenedor-nombres').children().last().after(html);
    });

    $('#before').on('click', function(){
        var value = $('#contenedor-agregar input').val();
        var html = '<div class="item"><li>'+value+'</li></div>'
        $('#contenedor-nombres').children().first().before(html);
    });

}); 