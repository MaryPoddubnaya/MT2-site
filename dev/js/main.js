$(document).ready(function() {

    // hide-menu
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $('.flex-nav').toggleClass('hide-mobile');
    });

    //header animation
    $(window).on('resize scroll', function() {
        var width = $(document).width();

        if ($(window).scrollTop()) {
            $('header').addClass('shrink');
        }
        else {
            $('header').removeClass('shrink');
        }
        if (width < 768) {
            $('header').removeClass('shrink');
        }
    });

    // scroll to sections
    $(".flex-nav li").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
});


