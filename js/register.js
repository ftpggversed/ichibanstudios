
function register() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Client-side form validation
  if (username.trim() === '' || password.trim() === '') {
    Swal.fire('Error', 'Please enter both username and password.', 'error');
    return false;
  }

  // Send form data to server-side script using AJAX
  $.ajax({
    url: 'register_user.php', // Replace with the actual URL of your server-side script
    method: 'POST', // Use the appropriate HTTP method (POST or GET) for your server-side script
    data: { username: username, password: password },
    success: function(response) {
      // Handle the response from the server
      if (response === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully registered!',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
          // Redirect user to login page
          window.location.href = '/login.html';
        });
      } else {
        Swal.fire('Error', 'Registration failed. Please try again later.', 'error');
      }
    },
    error: function(xhr, status, error) {
      // Handle any errors that occur during the AJAX request
      Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
    }
  });

  // Prevent the default form submission behavior
  return false;
}
