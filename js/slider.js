/* Allows the images to slide automatically */ 
$(document).ready(function(){
      $('.slider').slick({
        slidesToShow: 1, 
		slidesToScroll: 1, 
		autoplay: true, 
		autoplaySpeed: 2000,
		arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
      });
	   
});
