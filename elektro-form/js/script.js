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





var txt_inputName = document.getElementById("inputName");

function checkIfNotEmpty(inputas) {
	if (inputas.value == '') {
		document.getElementById(inputas.id).style.backgroundColor = "red";
	} else {
		document.getElementById(inputas.id).style.backgroundColor = "green";
	}

}

function checkIfValidEmail(inputas) {
	var inputtedEmail = document.getElementById(inputas.id).value;
	console.log(inputtedEmail);
}