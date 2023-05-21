function verifyPassword() {

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Password doesn't match.")
        confirmPassword.className('error')
        return false;
    } else if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
        confirmPassword.className('')
        return true;
    }
}