$(document).ready(function () {
    $('.bar').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    $('.navbar .e').click(function(e){
        e.preventDefault();
    });
    $('.drop-down').click(function(e){
        e.preventDefault();
        $('.d-flex').toggleClass('active');
    });
});