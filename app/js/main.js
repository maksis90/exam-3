'use strict';

(function($){
	$(document).ready(function() {
		// Code

		//burger menu
        $('.burger-menu').click(function() {
            $(this).toggleClass('burger-menu--active');
            $('body').toggleClass('is-menu-shown');
        });

        //slick slider
        $('.slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<img src='../images/icons/arrow-black.png' class='prev'>",
            nextArrow: "<img src='../images/icons/arrow-black.png' class='next'>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows:false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows:false
                    }
                }
            ]
        });
	});


})(jQuery);
