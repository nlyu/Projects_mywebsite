var speed = 300;

var turnred = function(){
    $(this).addClass('tored');
    setTimeout(function(){
        speed = 300;
    }, 
    1000);
    $(this).removeClass('tored');
}

var jumpedu = function(){
    $(document.body).animate({scrollTop: $('.sectOne').offset().top}, speed); 
};

var jumpemp = function(){
    $(document.body).animate({scrollTop: $('.sectTwo').offset().top}, speed); 
};

var jumpexp = function(){
    $(document.body).animate({scrollTop: $('.sectThree').offset().top}, speed); 
};

var jumppro = function(){
    $(document.body).animate({scrollTop: $('.sect4').offset().top}, speed); 
};

var jumpski = function(){
    $(document.body).animate({scrollTop: $('.sect5').offset().top}, speed); 
};

var main = function(){    
    $('#edulink').on("click", jumpedu); 
    $('#emplink').on("click", jumpemp); 
    $('#explink').on("click", jumpexp); 
    $('#prolink').on("click", jumppro); 
    $('#skilink').on("click", jumpski); 
    $('#accordion').accordion();
};

$(document).ready(main);