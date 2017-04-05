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

//	Date.prototype.yyyymmdd = function() {
//	var mm = this.getMonth() + 1;
//	var dd = this.getDate();
//
//	return [this.getFullYear(),
//				(mm>9 ? '' : '0') + mm,
//				(dd>9 ? '' : '0')  + dd
//			 ].join('');
//	};
//
//	var date = new Date();
//	console.log(date.yyyymmdd());
	
	//Bootstrap Datepicker
	$(".input-number").datepicker({startView: 3});
	
	// Owl Carousel(Slider)
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplaySpeed: 800
	});

});
