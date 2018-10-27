$(document).ready(function() {

	/* Call plugins hrere ...*/
	
			$("#testimonials_slider").owlCarousel({
			items : 1,
			singleItem : true
		});

		$(".fancybox").fancybox();

		$('#portfolio').mixItUp();
     
});

$(function() {
 		var pull        = $('#pull');
 		menu        = $('#pull_navigation');
 		menuHeight  = menu.height();

 		$(pull).on('click', function(e) {
 			e.preventDefault();
 			menu.slideToggle();
 		});

 		$(window).resize(function(){
 			var w = $(window).width();
 			if(w > 320 && menu.is(':hidden')) { 
 				menu.removeAttr('style');
 			}
 		});
});