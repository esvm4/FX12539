function checkInputs() {

	var test = true;

	const fname = document.getElementById('fname');
	const email = document.getElementById('email');
	const subject = document.getElementById('subject');
	const message = document.getElementById('message');
	
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
	
	const emailValue = email.value.trim();
	if (emailValue === '') {
		errorMessage(email, "Please fill in your email.");
		test = false;
	}
	else if (!isEmail(emailValue)) {
		errorMessage(email, 'Please fill in a valid email.');
		test = false;
	}
	else if (emailValue.length > 100) {
		errorMessage(email, "Your email should not exceed 100 characters.");
		test = false;
	}
	else {
		success (email);
	}
	
	const subjectValue = subject.value.trim();
	if (subjectValue === '') {
		errorMessage(subject, "Please fill in your subject.");
		test = false;
	}
	else if (subjectValue.length < 50) {
		errorMessage(subject, "Subject should not be shorter than 50 characters.");
		test = false;
	}
	else if (subjectValue.length > 250) {
		errorMessage(subject, "Subject should not exceed 250 characters.");
		test = false;
	}
	else {
		success (subject);
	}
	
	const messageValue = message.value.trim();
	if (messageValue === '') {
		errorMessage(message, "Please fill in your message.");
		test = false;
	}
	else if (messageValue.length < 50) {
		errorMessage(message, "Subject should not shorter than 50 characters.");
		test = false;
	}
	else if (messageValue.length > 250) {
		errorMessage(message, "Subject should not exceed 250 characters.");
		test = false;
	}
	else {
		success (message);
	}
	// if (test == true) {
	// 	document.querySelector('#thank-you').style.visibility = 'visible';
	// }
	return test;
}

// function checkFname() {
// 	const fnameValue = fname.value.trim();
// 	if (fnameValue === '') {
// 		errorMessage(fname, "Please fill in your name.");
// 		return false;
// 	}
// 	if (fnameValue.length > 100) {
// 		errorMessage(fname, "Your name should not exceed 100 characters.");
// 		return false;
// 	}
// 		success (fname);
// 		return true;
// }

// function checkEmail() {
// 	const emailValue = email.value.trim();
// 	if (emailValue === '') {
// 		errorMessage(email, "Please fill in your email.");
// 		return false;
// 	}
// 	else if (!isEmail(emailValue)) {
// 		errorMessage(email, 'Please fill in a valid email.');
// 		return false;
// 	}
// 	else if (emailValue.length > 100) {
// 		errorMessage(email, "Your email should not exceed 100 characters.");
// 		return false;
// 	}
// 		success (email);
// 		return true;
// }

// function checkSubject() {
// 	const subjectValue = subject.value.trim();
// 	if (subjectValue === '') {
// 		errorMessage(subject, "Please fill in your subject.");
// 		return false;
// 	}
// 	if (subjectValue.length < 50) {
// 		errorMessage(subject, "Subject should not be shorter than 50 characters.");
// 		return false;
// 	}
// 	if (subjectValue.length > 250) {
// 		errorMessage(subject, "Subject should not exceed 250 characters.");
// 		return false;
// 	}
// 		success (subject);
// 		return true;
// }

// function checkMessage() {
// 	const messageValue = message.value.trim();
// 	if (messageValue === '') {
// 		errorMessage(message, "Please fill in your message.");
// 		return false;
// 	}
// 	if (messageValue.length < 50) {
// 		errorMessage(message, "Subject should not shorter than 50 characters.");
// 		return false;
// 	}
// 	if (messageValue.length > 250) {
// 		errorMessage(message, "Subject should not exceed 250 characters.");
// 		return false;
// 	}
// 	else {
// 		success (message);
// 		return true;
// 	}
// }

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

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
