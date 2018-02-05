// jquery
$(window).on('scroll',function() {
    var top_of_element = $(".count").offset().top;
    var bottom_of_element = $(".count").offset().top + $(".count").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    // if element is visible
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // show dynamic numbers
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $(window).off('scroll'); // unlink scroll event
    }
});