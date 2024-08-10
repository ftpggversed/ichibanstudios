document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var password = document.getElementById("password").value;
  
    // Replace "admin" with your desired password
    if (password === "admin") {
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  });