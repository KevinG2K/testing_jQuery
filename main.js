$(function(){
    
    $(".primero").mouseenter(function(){
        // $("#segundo").slideDown();
        $("#segundo").fadeOut();
    });

    $(".primero").mouseleave(function(){
        // $("#segundo").slideUp();
        $("#segundo").fadeIn();
    });

});