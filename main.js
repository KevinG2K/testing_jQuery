$(function () {

    // delegacion de evento
    $('.contenedor').on('click', 'a.div-href', function(e){
        e.preventDefault();
        // atravesando el DOM
        // $(this).closest('.contenedor').find('.mas-info').show(1000);    //busca arriba el padre "contenedor", y luego de ahi busca el hijo "mas-info".
                                                                        //puede tener un segundo parametro como una funcion para mostrar un alert
                                                                        //despues que termina de ejecutarse los milisegundos definidos.
        $(this).closest('.contenedor').find('.mas-info').toggle(1000);    //Esto muestra y oculta alternadamente.                                                                        
    });
    
}); 