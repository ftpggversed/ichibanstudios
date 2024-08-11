document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Replace "admin" with your desired username
  // Replace "admin" with your desired password
  if (username === "admin" && password === "admin") {
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect username or password. Please try again.");
  }
});

