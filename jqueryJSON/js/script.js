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
 
            // thead
            $("#recipes").append("<thead>");
            $("#recipes thead").append("<tr>");
            $("#recipes thead tr").append("<th>NUMBER");
 
            $.each(Object.keys(result[0]), function(index, value) {
                if( index == 1) {
                    $("#recipes tr").append("<th colspan='2'>" + value.toUpperCase());
                } else {
                    $("#recipes tr").append("<th>" + value.toUpperCase());
                }
            });
 
            //  tbody
            $("#recipes").append("<tbody>");
 
            $.each(result, function(i, field) {

                let counter = i + 1;
 
                let ingredients = [];

                $.each(field.contents, function(index, value) {
                    ingredients.push( index );
                });
 
                let rowsp = "rowspan='" + ingredients.length + "'";
 
                $("#recipes tbody").append(
 
                    "<tr><th " + rowsp + ">" + 
                    counter + "<td " + rowsp + ">" +
                    field.name + "<td " + rowsp + ">" +
                    field.time_to_prepare + "<td " + rowsp + ">" +
                    field.vegan
                   
                    );
 
                let recipeList = '<th>' + ingredients[0] + '<td>' + Object.values(field.contents)[0];
 
                $("#recipes tbody tr:last-child>td:eq(0)").after(recipeList);
                $.each(ingredients, function(index, value) {
                    if(index != 0) {
                        $("#recipes tbody").append (
 
                            '<tr><th>' + value +
                            '<td>' + Object.values(field.contents)[index]
 
                        );
                    }
                });
            });
        });
    });



	

});

