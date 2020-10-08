// Подключить слайдер
$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        arrows: true,
        dots: false,
// //         // adaptiveHeight: true
        slidesToShow: 1,
//         infinite: false,
// //         // centerMode: true,
// //         // variableWidth: true

    });
    new WOW().init();
});