var into1 = function(){
    $(this).addClass('togreen');
    $(this).children().addClass('towhite');
    $('body').addClass('changeback1');
}

var out1 = function(){
    $(this).removeClass('togreen');
    $(this).children().removeClass('towhite');
    $('body').removeClass('changeback1');
}

var into2 = function(){
    $(this).addClass('togreen');
    $(this).children().addClass('towhite');
    $('body').addClass('changeback2');
}

var out2 = function(){
    $(this).removeClass('togreen');
    $(this).children().removeClass('towhite');
    $('body').removeClass('changeback2');
}

var into3 = function(){
    $(this).addClass('togreen');
    $(this).children().addClass('towhite');
    $('body').addClass('changeback3');
}

var out3 = function(){
    $(this).removeClass('togreen');
    $(this).children().removeClass('towhite');
    $('body').removeClass('changeback3');
}

var namein = function(){
    $(this).addClass('toyellow');
}

var nameout = function(){
    $(this).removeClass('toyellow');
}

var main = function(){
    $('.nav-1').hover(into1, out1);
    $('.nav-2').hover(into2, out2);
    $('.nav-3').hover(into3, out3);
    $('.nav-4').hover(into1, out1);
    $('.name').hover(namein, nameout);
};

$(document).ready(main);