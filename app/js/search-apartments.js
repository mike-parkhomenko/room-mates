$(function (){
	
	// Drop Down Advanced Search
	$(".open-advanced-search").on("click", function() {
		$(".advanced-search").slideToggle(50);
		$(".fadding-buttons").fadeToggle(1);
		$(".input-search-wrap").fadeToggle(1);
		$(".open-advanced-search .arrow-down").toggleClass('arrow-rotate');
	});
	
	//Close Advanced Search
	$(".close-button-wrap").on("click", function() {
		$(".advanced-search").slideToggle(50);
		$(".fadding-buttons").fadeToggle(1);
		$(".input-search-wrap").fadeToggle(1);
		$(".open-advanced-search .arrow-down").toggleClass('arrow-rotate');
	});
	
	// Owl Carousel for Apartments Card
	$(".owl-carousel").owlCarousel({
		singleItem: true,
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag: false,
		touchDrag: false
	});
	
	//Magnific Popup
	$(".enlarge-map").magnificPopup({
		type: 'iframe',
		fixedContentPos: false
	});

});

// Google Map API
function initMap() {
	var myLatLng = {lat: -25.363, lng: 131.044};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}

function setMarkers(map) {
	var image = {
		url: '../img/sprite/google-maps-marker.png',
		size: new google.maps.Size(20,32),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(0,32)
	};
}
