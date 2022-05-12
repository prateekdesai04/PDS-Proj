$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


function readData(){
	var user_login = document.getElementById("user-login").value;
	var pass_login = document.getElementById("pass-login").value;
	console.log("User Login:",user_login);
	console.log("Pass Login:",pass_login);
}