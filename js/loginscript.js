$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

var loginbtn = document.getElementById("loginbtn");

// loginbtn.addEventListener("click", function (evt) {
$("#login-form").submit(function (evt) {
  evt.preventDefault();
  // var form = $(this);
  var user_login = document.getElementById("user-login").value;
  var pass_login = document.getElementById("pass-login").value;
  console.log("User Login:", user_login);
  console.log("Pass Login:", pass_login);
  url = "http://127.0.0.1:5500/login";
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify({ username: user_login, password: pass_login }),
    headers: {
      "Content-Type": "application/json",
    },
    success: function (response) {
      console.log("SUCCESS!!!!", response);
      window.location.replace("./page2.html");
    },
    error: function (data) {
      console.log(data["responseJSON"]);
      alert(data["responseJSON"]["msg"]);
    },
  });
});
