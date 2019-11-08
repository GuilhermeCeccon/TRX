var nextArrow = $('.next_caro');
var prevArrow = $('.previous_caro');
$(document).ready(function () {
    $('.carroussel').slick({
        dots: true,
        infinite: true,
        autoplay: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        nextArrow: nextArrow,
        prevArrow: prevArrow
    });

});
// $('.navbar--list').mouseover(function () {
//     $('body').css({
//         backgroundColor: 'rgba(17, 17, 17, 0.15)'
//     })
// });
// $('.navbar--list').mouseout(function () {
//     $('body').css({
//         backgroundColor: 'white'
//     });
// });