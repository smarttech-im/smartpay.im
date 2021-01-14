
(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #mainmenu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: true,
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /* Scroll
    ===================*/
    let last_known_scroll_position = 0;
    let ticking = false;
    document.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;
      
        if (!ticking) {
          window.requestAnimationFrame(function() {
            var elementList = document.getElementsByClassName("scroll-trigger");
            if (elementList !== undefined) {
                for (let index = 0; index < elementList.length; index++) {
                    const element = elementList[index];
                    if (element.hasAttribute('scroll-trigger')) {
                        let eTop = element.getBoundingClientRect().top;
                        let isInView = eTop > 0 && eTop < window.innerHeight;
                        let className = element.getAttribute('scroll-trigger');

                        if (isInView) {
                            //console.log('Show');
                            element.classList.add(className);
                        } else {
                            //console.log('Hide');
                            element.classList.remove(className);
                        }

                        if (element.hasAttribute('scroll-trigger-alt-class')) {
                            let altClass = element.getAttribute('scroll-trigger-alt-class');
                            if (isInView) {
                                element.classList.remove(altClass);
                                
                            } else {
                                element.classList.add(altClass);
                            }
                        }
        
                        //console.log('scroll ' + last_known_scroll_position + ' item ' + e[0].getBoundingClientRect().top);
                    }
                }
            }


            

             
            ticking = false;
          });
      
          ticking = true;
        }
      });

    //Background Parallax

    $('#accordion .panel-title a').prepend('<span></span>');






    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('.caption-slider'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });





    // Select all links with hashes
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


  


    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });
})(jQuery);