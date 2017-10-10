var product_name      = document.getElementById("product_name");
var desc      = document.getElementById("desc");
var price     = document.getElementById("price");
var quantity  = document.getElementById("quantity");
var country   = document.getElementById("country");
var counter = 1;
var formIsValid = false;


function addToTable() {
	// var input_operation = document.getElementById("operation");
	// arc_height = parseInt(arc_height.value) || 0;
	if (!product_name.value) {
		alert('oops');
	} else if (!desc.value) {
		alert('oops');
	}else if (!price.value) {
		alert('oops');
	}else if (!quantity.value) {
		alert('oops');
	}else if (!country.value) {
		alert('oops');
	} else {
		formIsValid = true;
	}

	if (formIsValid) {
		var myTable = document.getElementById("myTable");

		var tr = myTable.insertRow(-1);

		var td0 = tr.insertCell(0);
		var td1 = tr.insertCell(1);
		var td2 = tr.insertCell(2);
		var td3 = tr.insertCell(3);
		var td4 = tr.insertCell(4);
		var td5 = tr.insertCell(5);

		// result = whHeight * 2 + whDiameter;
		var d = new Date();
		var dabartineData = d.toDateString();

		td0.innerHTML = counter;
		counter++;
		td1.innerHTML = product_name.value;
		td2.innerHTML = desc.value;
		td3.innerHTML = price.value;
		td4.innerHTML = quantity.value;
		td5.innerHTML = dabartineData;

		product_name.value = '';
		desc.value      = '';
		price.value   = '';
		quantity.value  = '';
		country.value = '';
		formIsValid = false;
	}



	// td0.innerHTML = document.getElementById('diameter')
}