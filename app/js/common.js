$(function() {

	// Custom JS
	
	//Open | Close Vertical Menu on Mobile Devices
	$(".burger-wrap").on("click", function() {
		$(".vert-mnu").addClass("active");
	});

	$(".btn-close").on("click", function() {
		$(".vert-mnu").removeClass("active");
	});

	//Fixed Menu
	if (screen.width >= 768) {
		var scrollMnu = $(this).scrollTop();
		
		if(scrollMnu > 40) {
			$(".top-line").addClass("fixed");
			$(".burger-wrap").addClass("fixed");
		}

		$(window).scroll( function(scrollMnu) {
			var scrollMnu = $(this).scrollTop();

			if(scrollMnu > 40) {
				$(".top-line").addClass("fixed");
				$(".burger-wrap").addClass("fixed");
			} else {
				$(".top-line").removeClass("fixed");
				$(".burger-wrap").removeClass("fixed");
			};
		});
	}
	
	//Preloader
	$('.preloader').fadeOut(500);
	
	// Select Placeholder
	$('.select-item').change(function() {
		$(this).toggleClass('select-item', !$(this).val());
	});
	
});