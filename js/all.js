$(document).ready(function () {
    $('.bar').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    $('.navbar .e').click(function(e){
        e.preventDefault();
    });
});