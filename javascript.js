function verifyPassword() {

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    if (password.value != confirmPassword.value) {
        document.getElementById('cpwmessage').innerHTML = "* Password does not match.";
        return false;
    } else if (password.value === confirmPassword.value) {
        document.getElementById('cpwmessage').innerHTML = "";
        return true;
    }
}

document.getElementById('')