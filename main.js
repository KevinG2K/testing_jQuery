$(function(){
    
    $("#btn-hide").click(function(){
        $("h1").toggleClass("red");
        // $("h1").addClass("red");
    });

    $("#btn-show").click(function(){
        $("h1").removeClass("red");
    });

});