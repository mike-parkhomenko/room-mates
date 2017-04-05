$(function() {

	// Custom JS
	
	//Open | Close Search Parametrs
	$(".select").on("click", function() {
		$(".user-looking").html("<i class='arrow-down'></i>" + $(this).text());
		$(".select-wrap").css("display", "none");
	});
	
	$(".choice-location").hover( function() {
		$(".select-wrap").css("display", "block");
	
	}, function() {
		$(".select-wrap").css("display", "none");
	});

	Date.prototype.yyyymmdd = function() {
	var mm = this.getMonth() + 1;
	var dd = this.getDate();

	return [this.getFullYear(),
				(mm>9 ? '' : '-0') + mm,
				(dd>9 ? '' : '0') + '-' + dd
			 ].join('');
	};

	var date = new Date();
	date.yyyymmdd();

	// Owl Carousel(Slider)
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplaySpeed: 800
	});


	// Flatpickr (date calendar)
	$(".flat-date").flatpickr({
		
		onChange: function() {
			if ( $(".flat-date").val() === date.yyyymmdd() ) {
				$(".flatpickr-input").val("Today");
			}
		}
	
	}).clear();
	

	//Animation
	$(".section-roommates .apartment-card").animated("fadeInRight", "fadeInRight");
	$(".section-roommates .chat-card").animated("fadeInUp", "fadeInUp");

});
