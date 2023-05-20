const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener("input", verifyPassword())

function verifyPassword() {
        if (password != confirmPassword) {
            alert("password doesn't match.");
            return false;
        } else if (password === confirmPassword) {
            alert("password matches.");
            return true;
        }
    }