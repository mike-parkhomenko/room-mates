$(function() {
	
	// Test
	$(".step").on('click', function() {
		$(this).toggleClass('step-active');
	});
	
	// Button Slected
	$(".item-footer .btn-wrap").on('click', function() {
		$(this).children().toggleClass('btn-standart-selected');
		$(this).parent('.item-footer').prev().prev().children().children().toggleClass('selected');
		$(this).parent().prev().prev().children('.logo-wrap').children().toggleClass('logo-selected');
	});
	
	//Bootstrap Datepicker
	$(".bootstrap-calendar").datepicker({startView: 3});
	
});