var soups = document.getElementById("soups");
var salads = document.getElementById("salads");

var inputSoup = document.getElementById("inputSoup");
var inputSalad = document.getElementById("inputSalad");

var vegan = document.getElementById("vegan");

inputSoup.style.display = "none";
inputSalad.style.display = "none";


soups.addEventListener("change", function() {
	if (soups.checked) {
		inputSoup.style.display = "block";
	} else {
		inputSoup.style.display = "none";
	}
})

salads.addEventListener("change", function() {
	if (salads.checked) {

		inputSalad.style.display = "block";
	} else {

		inputSalad.style.display = "none";

	}
})

// console.log(inputSoup.options);


vegan.addEventListener("change", function() {

	if (vegan.checked) {
		for (var i = 0; i < inputSoup.options.length; i++) {
			if (inputSoup.options[i].getAttribute("veg") == "false") {
				inputSoup.options[i].style.display = 'none';
			} 
		}
		for (var i = 0; i < inputSalad.options.length; i++) {
			if (inputSalad.options[i].getAttribute("veg") == "false") {
				inputSalad.options[i].style.display = 'none';
				if (inputSalad.options[i].selected == true) {
					inputSalad.options[i].style.display = 'block';
					inputSalad.options[i].parentElement.style.color = "red";
				} else {
					inputSalad.options[i].parentElement.style.color = "black";
				}
			} 
		}
	} else {
		for (var i = 0; i < inputSoup.options.length; i++) {
			inputSoup.options[i].style.display = 'block';
		}

		for (var i = 0; i < inputSalad.options.length; i++) {
			inputSalad.options[i].style.display = 'block';

		}
	}

})


var cb_halal = document.getElementById("halal");
var cb_koser = document.getElementById("koser");
var cb_gluten = document.getElementById("gluten");

// cb_halal.checked = true;
// cb_koser.checked = true;
// cb_gluten.checked = true;

var select_3way_opt = document.getElementById("3way-opt");


cb_halal.addEventListener("change", function() {

	if (cb_halal.checked) {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			if (select_3way_opt.options[i].getAttribute("halal") == "false") {
				select_3way_opt.options[i].style.display = 'none';
			} 
		}

	} else {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			select_3way_opt.options[i].style.display = 'block';
		}
	}

})

cb_koser.addEventListener("change", function() {

	if (cb_koser.checked) {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			if (select_3way_opt.options[i].getAttribute("koser") == "false") {
				select_3way_opt.options[i].style.display = 'none';
			} 
		}

	} else {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			select_3way_opt.options[i].style.display = 'block';
		}
	}

})
cb_gluten.addEventListener("change", function() {

	if (cb_gluten.checked) {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			if (select_3way_opt.options[i].getAttribute("gluten") == "false") {
				select_3way_opt.options[i].style.display = 'none';
			} 
		}

	} else {
		for (var i = 0; i < select_3way_opt.options.length; i++) {
			select_3way_opt.options[i].style.display = 'block';
		}
	}

})