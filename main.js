$(function () {

    // delegacion de evento
    $('.contenedor').on('click', 'a.div-href', function(e){
        e.preventDefault();
        // atravesando el DOM
        // $(this).closest('.contenedor').find('.mas-info').slideDown(1000);  //Este efecto hace que el elemento se deslice hacia abajo y desaparezca
        // $(this).closest('.contenedor').find('.mas-info').slideUp(1000);  //Este efecto hace que el elemento se deslice hacia arriba y aparezca
        $(this).closest('.contenedor').find('.mas-info').slideToggle(1000);  //Este efecto hace las dos cosas.
    });
    
}); 