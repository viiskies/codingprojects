$(document).ready(function(){

	// $("#sbs").children().removeClass();
	// $("#sbs").children().addClass("bg-dark").addClass("box").addClass("mx-auto");

	$("#hideThis").children().click(function() {
		$(this).hide();
	});


	$("#sbs").children().click(function() {
		$(this).siblings().removeClass('bg-info').addClass('bg-dark');
		$(this).removeClass('bg-dark').addClass('bg-info');

	});

	$("#child-div").children().click(function() {
		$(this).append("<div class='bg-light'>hello</>");

	});


	$("#parent-div").children().click(function() {
		$(this).parent().children().hide()
	});


	$("#tabel").children().click(function() {
		$(this).hide();
	});




	

});

