$(document).ready(function () {
    $('.bar').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
});