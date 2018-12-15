
function viewPassword() {
    let passwordInput = document.querySelector('#password-field');
    let passStatus = document.querySelector('#pass-status');

    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        passStatus.className = 'fa fa-eye-slash';

    }
    else {
        passwordInput.type = 'password';
        passStatus.className = 'fa fa-eye';
    }
}


