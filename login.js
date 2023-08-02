// login.js
function checkCredentials(username, password) {
  // Replace these with your actual validation logic.
  var desiredUsername = "admin";
  var desiredPassword = "12345";
  return username === desiredUsername && password === desiredPassword;
}

function showPopup(message) {
  alert(message);
}

function validate(){
  window.location = 'main.html'
}

function login(callback) {
  event.preventDefault();
  var usernameInput = document.getElementById("field1");
  var passwordInput = document.getElementById("field2");
  var errorDiv = document.getElementById("error");

  var username = usernameInput.value.trim();
  var password = passwordInput.value;

  if (username === "" || password === "") {
    errorDiv.innerText = "Please enter both username and password.";
  } else {
    if (checkCredentials(username, password)) {
      console.log("Login successful!");
      // Redirect to the main page or perform any other action for successful login.
      callback();
    } else {
      console.log("Login failed!");
      errorDiv.innerText = "Incorrect username or password. Please try again.";
      showPopup("Incorrect username or password. Please try again.");
    }
  }
}

function redirectToMainPage() {
  // Replace this with the actual URL of the main page.
  window.location.href = "main.html";
}

function ValidateUsername() {
  var usernameInput = document.getElementById("field1");
  var err1 = document.getElementById("err1");
  var username = usernameInput.value.trim();

  if (username === "") {
    err1.innerText = "Field cannot be empty";
    usernameInput.style.border = '1px solid red';
    return false;
  } else if (username === 'admin') {
    err1.innerText = "";
    usernameInput.style.border = '2px solid green';
    return true;
  } else {
    err1.innerText = "Invalid username";
    usernameInput.style.border = '1px solid red';
    return false;
  }
}

function ValidatePassword() {
  var pwd = document.getElementById('field2');
  var err2 = document.getElementById('err2');
  var desiredPassword = "12345";
  var password = pwd.value.trim();

  if (password === '') {
    err2.innerText = "Field cannot be empty";
    pwd.style.border = '1px solid red';
    return false;
  } else if (password === desiredPassword) {
    err2.innerText = "Password is strong";
    pwd.style.border = '2px solid green';
    return true;
  } else {
    err2.innerText = "Incorrect password";
    pwd.style.border = '1px solid red';
    return false;
  }
}
