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

cb_halal.checked = true;
cb_koser.checked = true;
cb_gluten.checked = true;

var checkedList = ["halal", "koser", "gluten"];

cb_halal.addEventListener("change", function() {
	var index;
	if (cb_halal.checked) {
		checkedList.push("halal");
	} else {
		index1 = checkedList.indexOf("halal");
		checkedList.splice(index, 1);
	}
	showOrHide();

})

cb_koser.addEventListener("change", function() {
	var index;
	if (cb_koser.checked) {
		checkedList.push("koser");
	} else {
		index = checkedList.indexOf("koser");
		checkedList.splice(index, 1);
	}
	showOrHide();

})

cb_gluten.addEventListener("change", function() {
	var index;
	if (cb_gluten.checked) {
		checkedList.push("gluten");
	} else {
		index = checkedList.indexOf("gluten");
		checkedList.splice(index, 1);
	}
	showOrHide();

})

var select_3way_opt = document.getElementById("3way-opt").options;


function showOrHide() {
	let lastAdded = false;

	//going through options
	for (let i = 0; i < select_3way_opt.length; i++) {
		lastAdded = false;

		// going through checked items
		for (let j = 0; j < checkedList.length; j++) {

			//if currennt option should be shown
			if (select_3way_opt[i].getAttribute(checkedList[j]) == "true") {
				select_3way_opt[i].style.display = 'block';
				lastAdded = true;
				break;
			}
		}
		if (lastAdded == false) {
			select_3way_opt[i].style.display = 'none';
		}


	}

}


