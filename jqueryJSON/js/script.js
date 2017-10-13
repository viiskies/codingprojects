$(document).ready(function(){

	// $("#sbs").children().removeClass();
	// $("#sbs").children().addClass("bg-dark").addClass("box").addClass("mx-auto");

	$("#get_data").click(function() {

		$.getJSON("http://ca-php.lt/json/products.php", function(result){
			$.each(result, function(i, field){
				let counter = i+1;
				$("#tabel tbody").append("<tr><th>" + counter + "</th><td>" + result[i].name + "</td><td>" + result[i].price + "</td><td>" + result[i].stock + "</td></tr");
			});
		});

	});

	$("#get_data_workers").click(function() {

		$.getJSON("http://ca-php.lt/json/emploees.php", function(result){
			$.each(result, function(i, field){
				let counter = i + 1;
				$("#workers tbody").append("<tr><th>" + counter + "</th><td>" + result[i].name + "</td><td>" + result[i].surname + "</td><td>" + result[i].email + "</td><td>" + result[i].drinks + "</td></tr");
			});
		});

	});

	$("#get_data_recipes").click(function() {

		$.getJSON("http://ca-php.lt/json/recipes.php", function(result){
			$.each(result, function(i, field){
				let counter = i + 1;
				$("#recipes tbody").append("<tr>");
				$("#recipes tbody").append("<th>" + counter + "</th>");
				$("#recipes tbody").append("<td>" + result[i].name + "</td>");
				console.log(result[i].contents);
				// $(result[i].contents).each(function(j, field) {
				// 	console.log(result[i].contents[0]);
				// });
				$("#recipes tbody").append("<td>" + result[i].time_to_prepare + "</td>");
				$("#recipes tbody").append("<td>" + result[i].vegan + "</td>");
				$("#recipes tbody").append("</tr>");
			});
		});

	});



	

});

