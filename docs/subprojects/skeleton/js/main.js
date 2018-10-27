$(document).ready(function() {

	/* Call plugins hrere ...*/
	$("#slider_container").owlCarousel({

		// Most important owl features
		items : 2,
		itemsCustom : false,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : false,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
		
		// Navigation
//		navigation : true,
//		navigationText : ["<img src=\"img/arrow_left.png\">","<img src=\"img/arrow_right.png\">"],
//		rewindNav : true,
//		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		//transitionStyle : "backSlide"

		

	});
	
    $(".fancybox").fancybox();
    
    
    
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
    
});