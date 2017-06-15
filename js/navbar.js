
$(window).ready(function() {

var navoffset = $(".nav").offset().top;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > navoffset) {

        $('.nav').addClass('fixed');

    } else {

        $('.nav').removeClass('fixed');

    }
});

});
