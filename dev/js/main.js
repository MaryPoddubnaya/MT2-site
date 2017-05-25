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

    // Get the height of the header
    var headerHeight = $("header").height();

    $(".flex-nav .flex-item-list").find("a").bind("click", function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var scrollToPosition = $(target).offset().top - headerHeight;

        $("html, body").animate({ 'scrollTop': scrollToPosition }, 900, function(){
            window.location.hash = "" + target;
            $("html, body").animate({ 'scrollTop': scrollToPosition }, 0);
        });

    });
});


