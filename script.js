const loginPopup = document.getElementById('loginPage');
const signUp = document.getElementById('signupPage');
loginPopup.style.display = "none";
signUp.style.display = "none";

function openForm() {
	loginPopup.style.display = "block";
}

function closeForm() {
	loginPopup.style.display = "none";
}

function openForm2() {
	loginPopup.style.display = "none";
	signUp.style.display = "block";
}

function closeForm2() {
	signUp.style.display = "none";
}
