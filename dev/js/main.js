$(document).ready(function() {


    //header animation
        var shrinkHeader = 300;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.header').addClass('shrink');
            }
            else {
                $('.header').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
});


// Get the height of the header
var headerHeight = $("header").height();

$(".flex-nav .flex-item-list").find("a").bind("click", function(e) {

    e.preventDefault();
    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - headerHeight;

    $("html, body").animate({ 'scrollTop': scrollToPosition }, 900, function(){
        window.location.hash = "" + target;
        // This hash change will jump the page to the top of the div with the same id
        // so we need to force the page to back to the end of the animation
        $("html, body").animate({ 'scrollTop': scrollToPosition }, 0);
    });

});