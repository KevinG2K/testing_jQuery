$(function () {

    // delegacion de evento
    $('.contenedor').on('click', 'a.div-href', function(e){
        e.preventDefault();
        // atravesando el DOM
        // $(this).closest('.contenedor').find('.mas-info').fadeIn(1000);  //Este efecto hace que el elemento se muestre de a poco.
        // $(this).closest('.contenedor').find('.mas-info').fadeOut(1000);  //Este efecto hace que el elemento se oculte de a poco.
        $(this).closest('.contenedor').find('.mas-info').fadeToggle(1000);  //Este efecto hace las dos cosas.
    });
    
}); 