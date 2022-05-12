$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});

function readData() {
  var user_login = document.getElementById('user-login').value;
  var pass_login = document.getElementById('pass-login').value;
  console.log('User Login:', user_login);
  console.log('Pass Login:', pass_login);

  url =
    'http://127.0.0.1:5500/users?username=' +
    user_login +
    '&password=' +
    pass_login;
  $.ajax({
    url: url,
    type: 'GET',
    datatype: 'json',
    cors: 'true',
    success: function (response) {
      console.log('SUCCESS!!!!', response);
    },
    error: function (data) {
      console.log(data);
      alert('Something went wrong, please try again.');
    },
  });
}
