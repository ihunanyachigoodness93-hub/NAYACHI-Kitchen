const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const loginButton = document.querySelector(".login-button");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (!emailInput.checkValidity()) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent =
            "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    loginButton.disabled = true;
    loginButton.textContent = "Signing in...";

    message.textContent = "Welcome to NAYACHI Kitchen!";
    message.style.color = "#E85D04";

    setTimeout(function () {
        window.location.href = "home.html";
    }, 1000);
});