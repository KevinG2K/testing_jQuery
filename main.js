/*
// SINTAXIS
$(this). //nos referimos al elemento
animate(    //este es el metodo
// como 1era parametro recibe las propiedades CSS
// como 2do parametro recibe el tiempo, puede ser unidades o palabras (slow, fast)
// como 3er parametro se puede ejecutar una funcion.
{}, '', function(){}
);
*/

$(function () {
    $('#cuadrado1').on('click', function() {
        $(this).animate({
            opacity: 0.3
        }, 'fast', function() {
            alert('cuadrado1');
        });
    });

    $('#cuadrado2').on('click', function() {
        $(this).animate({
            left: 200
        }, 'slow');
    });

    $('#cuadrado3').on('click', function() {
        $(this).animate({
            left: '+=50', width: 200
        }, 500);
    });
});