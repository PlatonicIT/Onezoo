(function ($) {
    "use strict";
    jQuery(document).ready(function() {
        
        //Title for Icons
        $('[data-toggle="tooltip"]').tooltip();
        

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
        

        // Banner Animation
        if($(window).width() > 992 ) {

            var myElement = $('.hero-wrap.animation .container-fluid');
//            var hero_height = 750;
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                myElement.css({
                    'opacity': 1 - st / 800,
                });
                myElement.parents().css({                        
                    // 'height': hero_height - st,
                    'background-position-y': 0 + st / 3.5
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
//		pasted
		function createSticky(sticky) {            
                if (typeof sticky !== "undefined") {
              
                  var pos = sticky.offset().top,
                      win = $(window);
                    
                  win.on("scroll", function() {
                      win.scrollTop() >= pos ? sticky.addClass("sticky-menu") : sticky.removeClass("sticky-menu");      
                  });     
                }
            }
//		pasted
		
        if($(".navigation-wrap").hasClass('is-sticky')) {
            $(function(){  
                createSticky($(".is-sticky"));
            });
              
//            fuction moved
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
                    breakpoint: 1250,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
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
            
    });
})(jQuery);