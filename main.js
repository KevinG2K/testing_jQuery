$(function () {
    //CSS selector
    //var result = $('#humanos .hombre');

    //Dom traversing
    // var result = $('#humanos').find('.hombre');

    //CSS selector
    //var result = $('#humanos > div');

    //Dom traversing
    // var result = $('#humanos').children('div');
    // console.log(result);

    //first(), last()
    // $('#humanos').children().first().addClass('red');
    // $('#humanos').children().last().addClass('yellow');

    //prev(), next()
    // $('#humanos').children().first().children()
    // .last().prev().prev().addClass('red');
    // $('#humanos').children().last().children()
    // .first().next().next().addClass('yellow');

    //para buscar elementos padres: parent(), parents()
    $('#elegido').parents().addClass('red')
    $('#elegida').parent().addClass('yellow')
}); 