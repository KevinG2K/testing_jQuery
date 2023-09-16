$(function () {

    $('#contenedor').on('click', 'a', function(e) {
        // metodo de jQuery para anular el comportamiento predeterminado
        e.preventDefault();
        // metodo de jQuery para impedir la propagacion de eventos
        e.stopPropagation();
        // console.log('esta redireccionando');
        console.log('ahora no se redirecciona');
    });

    // este segundo evento es usado como ejemplo para el metodo stopPropagation()
    $('#contenedor').on('click', function(e) {
        console.log('click en el contenedor')
    });
}); 