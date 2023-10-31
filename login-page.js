/**
 * 
 */

 const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var c=50;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(password.length <6)
    
    alert("Please should be more than 6 character ");

    if (username === "Dinesh" && password === "Dinesh@123") {
       // alert("You have successfully logged in.");
        window.location.href = "homepage.html";
        //location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

/*function message(number){
	var a=10;
	var b=50;
	var c = a+b;
	alert("number = "+number);
	
			//alert("Welcome Javascript = "+ c);
		}*/