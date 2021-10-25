function checkInputs() {

	var test = true;

    const cake = document.getElementById('cakes');
	const fname = document.getElementById('fname');
	const message = document.getElementById('message');
	const ddate = document.getElementById('ddate');
	const address = document.getElementById('address');

    var cakeValue = cake.value;
	if (cakeValue === '') {
		errorMessage(cakes, "Please choose our product.");
		test = false;
	}
	else {
		success (cake);
	}
	
	var fnameValue = fname.value.trim();
	if (fnameValue === '') {
		errorMessage(fname, "Please fill in your name.");
		test = false;
	}
	else if (fnameValue.length > 100) {
		errorMessage(fname, "Your name should not exceed 100 characters.");
		test = false;
	} else {
		success (fname);
	}
	
	const messageValue = message.value.trim();
    if (messageValue.length > 30) {
		errorMessage(message, "Message should not exceed 30 characters.");
		test = false;
	}
	else {
		success (message);
	}
	
	const ddateValue = ddate.value;
	if (ddateValue === '') {
		errorMessage(ddate, "Please fill in your delivery date.");
		test = false;
	}
	else {
		success (ddate);
	}
	
	const addressValue = address.value.trim();
	if (addressValue === '') {
		errorMessage(address, "Please fill in your address.");
		test = false;
	}
	else if (addressValue.length > 500) {
		errorMessage(address, "Address should not exceed 500 characters.");
		test = false;
	}
	else {
		success (address);
	}
	// if (test == true) {
	// 	document.querySelector('#thank-you').style.visibility = 'visible';
	// }
	return test;
}

function errorMessage(input, message) {
	const label = input.parentElement;
	label.querySelector('.fa-exclamation-circle').style.visibility = 'visible';
	label.querySelector('.fa-check-circle').style.visibility = 'hidden';
	const small = label.querySelector('small');
	small.innerHTML = message;
	small.style.visibility = 'visible';
}

function success(input) {
	const label = input.parentElement;
	label.querySelector('.fa-check-circle').style.visibility = 'visible';
	label.querySelector('.fa-exclamation-circle').style.visibility = 'hidden';
	label.querySelector('small').style.visibility = 'hidden';
}
