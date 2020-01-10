function validate(evt) {

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("mail").value;
	var pswd = document.getElementById("pswd").value;
	var submit = true;

	document.getElementById('error-FirstName').innerHTML =  "";
	document.getElementById('error-lastName').innerHTML = "";
	document.getElementById('error-email').innerHTML = "";
	document.getElementById('error-pswd').innerHTML = "";

  evt.preventDefault();

	if(firstName === " " || !firstName){
		document.getElementById('error-FirstName').innerHTML = "Enter Your Name *"
		submit = false;
	}else{
		submit = true;
	}

	if(lastName === " " || !lastName){
		document.getElementById('error-lastName').innerHTML = "Enter A Last Name *";
		submit = false;
	}else{
		submit = true;
	}

	if(email === " " || !email){
		document.getElementById('error-email').innerHTML = "Enter Your Email *";
		submit = false;
	}else{
		submit = true;
	}
	
	if( pswd < 8 || pswd > 16 || pswd === " " || !pswd ){
		document.getElementById('error-pswd').innerHTML = "Enter A Password *";
		submit = false;
	}else{
		submit = true;
	}

	if(submit == false){
		return false;
  }else{
    let formElement = {
        "fName": firstName,
        "lName": lastName,
        "email": email,
        "pswd": pswd
      };
    var request = new XMLHttpRequest();
    request.open('POST', './signUp.js');
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(formElement));
	};
}