$(function() {
	
	// Open | Close Login Registration Section
	$(".login-registration-wrap").on("click", function(e) {
		e.stopPropagation();
	});
	
	$(".login").on('click', function() {
		$(".login-registration-section").addClass('active');
		$("body").addClass("do-not-scroll");
	});
	
	$(".login-registration-section .btn-close").on("click", function() {
		$(".login-registration-section").removeClass('active');
		$("body").removeClass("do-not-scroll");
	});
	
	$(".login-registration-section").on("click", function() {
		$(".login-registration-section").removeClass('active');
		$("body").removeClass("do-not-scroll");
	});
	
	// Show Incorrect Email
	$("#loginEmail").on('blur', function() {
		$(".form-group").addClass('has-error');
	});
	
});