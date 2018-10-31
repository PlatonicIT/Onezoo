(function ($) {
    "use strict";
    jQuery(document).ready(function() {

        // Custom Navigation Menu
        var $window = $(window),
        $window_width = $window.width(),
        $win_location = window.location.href,
        $location_split = $win_location.split("#"),
        $body = $("body"),
        $mainnav = $("#main-nav"),
        $nav_link = $("#main-nav li a");

        function nav_handlr(e, a) {
        var s = e;
        !0 === (!0 === a || "open" === a || 1 === a) ? s.slideDown(600) : (s.slideUp(500), s.find("li.nav-opened").removeClass("nav-opened").children("ul").slideUp(300))
        }

        function mobileNav_handlr() {
            $window.width() < 767 ? ($mainnav.removeClass("nav-mobile"), $mainnav.find(".has-children").removeClass("nav-opened").removeClass("rollover").children("ul").removeAttr("style")) : $mainnav.addClass("nav-mobile")
        }
        "ontouchstart" in document.documentElement || $body.addClass("no-touch");
        var $win_resize = $window_width;
        $window.on("resize", function() {
            $win_resize = $window_width
        });
        $nav_link.length > 0 && $nav_link.each(function() {
            $win_location === this.href && "" !== $location_split[1] && $(this).closest("li").addClass("is-active").parent().closest("li").addClass("is-active")
        });
        var $navbar = $(".navigation-wrap"),
        $nav_li = $mainnav.find("li"),
        $nav_a = $mainnav.find("a");
        mobileNav_handlr(), $window.on("resize", function() {
            mobileNav_handlr()
        }), $nav_li.has("ul").addClass("has-children"), $nav_li.on({
        mouseenter: function() {
            $(this).addClass("rollover")
        },
        mouseleave: function() {
            $(this).removeClass("rollover")
        }
        }), $nav_a.on("click touchstart", function(a) {
        var $this = $(this),
            $this_parent = $this.parent(),
            $this_link = $this.attr("href");
        return "click" === a.type && $win_resize > 0 || ($this_parent.hasClass("has-children") ? $this_parent.hasClass("nav-opened") ? ($this_parent.removeClass("nav-opened"), "#" !== $this_link || (nav_handlr($this_parent.children("ul"), "close"), !1)) : ($this_parent.addClass("nav-opened"), $this_parent.siblings().removeClass("nav-opened"), nav_handlr($this_parent.siblings().children("ul"), "close"), setTimeout(function() {
            nav_handlr($this_parent.children("ul"), "open")
        }, 150), !1) : "#" !== $this_link && void 0)
        });


        $('.main-nav li.has-children').on( 'click mouseover', function() {
            $(this).addClass('nav-opened');
        } );

        $('.main-nav li.has-children').on( 'mouseleave', function() {
            $(this).removeClass('nav-opened');
        } );


        //add active class on nav
        $('.main-menu ul').on('click', 'li',function(){
            // $(this).addClass('is-active').siblings().removeClass('is-active');
        });

        $('#contact-btn, .contact-btn').on( 'click', function() {
            $('.contact-popup').toggleClass('active');
        });
        
        $('.hero-wrap').on( 'click', function() {
            $('.contact-popup').removeClass('active');
        });
        
        //Title for Icons
        $('[data-toggle="tooltip"]').tooltip();


        // Backgrond Slider
        $('.slider-background').owlCarousel({
            items: 1,
            fade: true,
            autoplay: true,
            animateOut: 'fadeOut',
            nav: true,
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
        

        // Search
        var $search_btn = $(".btn_search"),
            $search_close = $("#search_close"),
            $search_content = $("#search_content");        
        $search_btn.on('click', function(){
            $(this).toggleClass('open');
            $search_content.toggleClass('active');
            $(".search-overlay").toggleClass('active');
            return false;
        });
        $search_close.on('click', function(){
            $search_btn.removeClass('open');
            $search_content.removeClass('active');
            $(".search-overlay").removeClass('active');
            return false;
        });


        $('.cta-form > div input').on( 'click', function() {
            $(this).parent().addClass('active').siblings().removeClass('active');
        } );
        

        // Banner Animation
        if($(window).width() > 992 ) {

            var myElement = $('.hero-wrap.animation .container-fluid');
            var hero_height = 750;
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                myElement.css({
                    'opacity': 1 - st / 800,
                });
                myElement.parents().css({                        
                    // 'height': hero_height - st,
                    'background-position-y': 50 + st / 3.5
                });
            });
        }


        // Slick Nav Start
        $('#menu').slicknav({
            prependTo: '.mobile-menu'
        });


        // Dropdown 1
        $('.dd').on('click', function(e) {
            e.preventDefault();
        });
        $('.dd-1').on('click', function(){
            $('.ddi-1').toggleClass('show');
        });

        // Dropdown 2
        $('.dd-2').on('click', function(){
            $('.ddi-2').toggleClass('show');
        });

        // Dropdown 3
        $('.dd-3').on('click', function(){
            $('.ddi-3').toggleClass('show');
        });

        // Sticky Menu
        if($(".navigation-wrap").hasClass('is-sticky')) {
            $(function(){  
                createSticky($(".is-sticky"));
            });
              
            function createSticky(sticky) {            
                if (typeof sticky !== "undefined") {
              
                  var pos = sticky.offset().top,
                      win = $(window);
                    
                  win.on("scroll", function() {
                      win.scrollTop() >= pos ? sticky.addClass("sticky-menu") : sticky.removeClass("sticky-menu");      
                  });     
                }
            }
        }


        // Testimonial Slider
        $('.testimonial-slide').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            autoplay:false,
            autoplaySpeed:3000,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        slidesToShow: 1
                    }
                },
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
        });

        // Click to Scroll down
        $(".down-arrow-click").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1000);
            console.log($($(this).attr("href")).offset().top);
        });


        // Custom Select Menu
        //TOGGLING NESTED ul
        $(".menu-1").click(function() {
            $(".drop-down .options.options-1 ul").toggle();
        });
        $(".menu-2").click(function() {
            $(".drop-down .options.options-2 ul").toggle();
        });

        //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
        $(".drop-down .options ul li a").click(function() {
            var text = $(this).html();
            $(".select-menu").html(text);
            $(".drop-down .options ul").hide();
        }); 


        //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("drop-down"))
                $(".drop-down .options ul").hide();
        });

        $('.jumper').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
              scrollTop: $("#learnMore").offset().top - 100
            }, 500);
        });



        $(".play-video").magnificPopup({
	        type: 'iframe',
	        removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
	        zoom: {
	            enabled: true,
	            duration: 300, // duration of the effect, in milliseconds
	            easing: 'ease-in-out', // CSS transition easing function
	        }
	    });

        // Activate WOW JS
        new WOW().init();


        // Custom Tooltip
        $(function () {
            $('.trigger').myTooltip();
        });          
        $.fn.myTooltip = function () {            
            var $this = $(this),
                $tooltip = $this.find('.my-tooltip');
            
            $this.mouseenter(function () {
                $(this).find('.my-tooltip').addClass('show');
            }).mouseleave(function () {
                $(this).find('.my-tooltip').removeClass('show');
            }); 
            
            $tooltip.click(function () {
                $(this).find('.my-tooltip').removeClass('show');
            });
        };
            
    });
})(jQuery);