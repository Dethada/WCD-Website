// jquery
/* 
https://stackoverflow.com/questions/32134451/call-function-on-scroll-only-once
https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport?lq=1
https://stackoverflow.com/questions/17441065/how-to-detect-scroll-position-of-page-using-jquery
https://codepen.io/shivasurya/pen/FatiB
*/
$(window).on('scroll',function() {
    var countElement = $(".count");
    var top_of_element = countElement.offset().top;
    var bottom_of_element = top_of_element + countElement.outerHeight();
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