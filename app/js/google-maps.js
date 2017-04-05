(function(window, google) {
	
	// map options
	var options = {
		center: {lat: 47.497871, lng: 19.040729},
		zoom: 10
	};
	
	var element = document.getElementById('map-canvas');
	// map
	var map = new google.maps.Map(element, options);
	
}(window, google))