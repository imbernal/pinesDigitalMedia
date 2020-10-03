(function ($) {
"use strict";
/*--
	Menu Sticky
-----------------------------------*/
var sticky = $('.header-area')
var windows = $(window);
windows.on('scroll', function() {
	var scroll = windows.scrollTop();
	if (scroll < 400) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});
/*--
	Header Height For Hero Area Top Space
-----------------------------------*/
windows.on("resize", function () {
    var headerHight = $('.header-area').height();
    $('.hero-area, .page-banner-area').css('margin-top', headerHight + 'px ');
}).resize();
/*--
	Search Toggle
-----------------------------------*/
$('.search-toggle').on('click', function(){
    $('.header-search-form').toggleClass('active');
})
/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = sticky.height() - 21;
$('.one-page-nav nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});
/*--
	Bootstrap Menu Fix For Mobile
-----------------------------------*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
/*--
	Testimonial Slider
-----------------------------------*/
$('.hero-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
});
/*--
	Testimonial Slider
-----------------------------------*/
$('.feature-slider, .case-slider, .testimonial-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
    ]
});
/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});
/*-- Image --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*-- Gallery Video --*/
var videGalleryPopup = $('.video-gallery-popup');
videGalleryPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	},
	gallery:{
		enabled:true
	}	
});
/*--
	Smooth Scroll
-----------------------------------*/
$('[data-scroll]').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: -90,
	});
});
/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
 

})(jQuery);	