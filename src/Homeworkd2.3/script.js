// Login Validation
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameRegex = /^[^\s][\w\s]*[^\s]$/; // No extra spaces and special characters
    const passwordRegex = /^[^\s@][\w@]*[^\s@]$/; // No spaces, only '@' as special character

    if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
        alert("Invalid Username or Password.");
        return false;
    }
    alert("Login successful!");
    return true;
}

// Setup the login form submission handler
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        validateLogin();
    });
}

// Real-Time Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    if (document.getElementById('clock')) {
        document.getElementById('clock').textContent = timeString;
    }
}
setInterval(updateClock, 1000);

// New Year Countdown
function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearTime = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeLeft = newYearTime - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (document.getElementById('countdown')) {
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
setInterval(updateCountdown, 1000);

// Calculator Functions
function calculate(operation, a, b) {
    let result = 0;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
            break;
    }
    alert("Result: " + result);
}
