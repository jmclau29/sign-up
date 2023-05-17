function verifyPassword(form) {
    const userPassword = form.user-password.value;
    const confirmPassword = form.confirm-password.value;

    if (userPassword != confirmPassword) {
        alert("These passwords don't match!");
    } else {
        alert("Password created!");
    }
}