var cb_option_private = document.getElementById("option-private");
var cb_option_business = document.getElementById("option-business");

var div_business = document.getElementById("business-part");

div_business.style.display = "none";



cb_option_private.addEventListener("change", function() {

	if (cb_option_private.checked) {
		div_business.style.display = "none";
		cb_option_business.parentElement.classList.remove('active');
		cb_option_private.parentElement.classList.add('active');
	} 
})

cb_option_business.addEventListener("change", function() {

	if (cb_option_business.checked) {
		cb_option_private.parentElement.classList.remove('active');
		cb_option_business.parentElement.classList.add('active');
		div_business.style.display = "block";
	}

})


var cb_radio_shop = document.getElementById("radio_shop");
var cb_radio_address = document.getElementById("radio_address");

var div_delivery = document.getElementById("delivery-part");

div_delivery.style.display = "none";

cb_radio_shop.addEventListener("change", function() {

	if (cb_radio_shop.checked) {
		div_delivery.style.display = "none";

	} 
})

cb_radio_address.addEventListener("change", function() {

	if (cb_radio_address.checked) {
		div_delivery.style.display = "block";
	}

})


var problemsWithForm = [];

document.getElementById("option-private");

var txt_inputName = document.getElementById("inputName");

function checkIfNotEmpty(inputas, minLen = 3) {
	var index;
	if (inputas.value.length < minLen) {
		document.getElementById(inputas.id).style.borderColor = "red";
		if (problemsWithForm.indexOf(inputas.id) == -1){
			problemsWithForm.push(inputas.id);
		};
	} else {
		document.getElementById(inputas.id).style.borderColor = "initial";
		index = problemsWithForm.indexOf(inputas.id);
		problemsWithForm.splice(index, 1);
	}

	console.log(problemsWithForm);
	showErrors();

}

function checkIfValidEmail(inputas) {
	var index;
	var inputtedEmail = document.getElementById(inputas.id).value;
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (inputtedEmail.search(emailRegex) == -1) {
		document.getElementById(inputas.id).style.borderColor = "red";
		if (problemsWithForm.indexOf(inputas.id) == -1){
			problemsWithForm.push(inputas.id);
		};
	} else {
		document.getElementById(inputas.id).style.borderColor = "initial";
		index = problemsWithForm.indexOf(inputas.id);
		problemsWithForm.splice(index, 1);
	}

	console.log(problemsWithForm);
	showErrors();
}

function checkPassword(inputas) {
	checkIfNotEmpty(inputas, 8);
	if(document.getElementById(inputPass.id).value != "" && document.getElementById(inputPassAgain.id).value != ""){

		if(document.getElementById(inputPass.id).value != document.getElementById(inputPassAgain.id).value) {
			document.getElementById(inputPass.id).style.borderColor = "red";
			document.getElementById(inputPassAgain.id).style.borderColor = "red";
		} else {
			document.getElementById(inputPass.id).style.borderColor = "green";
			document.getElementById(inputPassAgain.id).style.borderColor = "green";
		}
	}


}


var errorbox = document.getElementById("errorbox");
errorbox.style.display = 'none';


function showErrors() {
	var problemsHTML = "";
	if (problemsWithForm.length > 0) {
		for (var i = 0; i < problemsWithForm.length; i++) {
			problemsHTML += "<p>" + problemsWithForm[i] + "</p>";
		}
		errorbox.innerHTML = problemsHTML;
		errorbox.style.display = 'block';
	} else {
		errorbox.style.display = 'none';
	}
	
}