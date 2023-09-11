$(function () {

    //evento click directamente.
    $('#parrafo').on('click', function(){
        $(this).toggleClass('red');
    });

    //delegacion de evento
    $('#cuadrado').on('click', 'button.btn-color', function () {
        $(this).parent().toggleClass('background-green');
    });

    //evento change
    $('#contenedor').on('change', '#lista', function() {
        var elemento = $('#lista option:selected');
        var valor = elemento.val();
        if (valor) {
            $('#mensaje').html('Seleccionaste'+' '+valor);
        }
    });

    //evento del teclado
    $('#input-text').on('keyup', 'input', function(){
        $('#mensaje-input').html('Escribiendo: ' + $(this).val());
    });

}); 