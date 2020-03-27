$(document).ready(function (){
    let menuitem = $('.menu-item');
     
    menuitem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.color-up').toggleClass('color-up');
        $(this).toggleClass('color-up');
    });
});