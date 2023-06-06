async function resgister() {
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');

    let errors = document.querySelector('.errors');
    console.log(errors);

    if (username.value.length < 2 || username.value === '') {
        username.style.border = '1px solid red';
        errors.innerText = 'El nombre de usuario es muy corto.'
    } else if (email.value.indexOf('@') === -1 || email.value === '') {
        email.style.border = '1px solid red';
        errors.innerText = 'Email invalido'
    } else if (password.value.length < 5) {
        password.style.border = '1px solid red';
        errors.innerText = 'La contraseña es demasiado corta'
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid red';
        errors.innerText = 'Las contraseñas no coinciden';
    } else {
        console.log("yey")
    }

    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/users';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    });

    console.log(response);

    if (response.status >= 200) {
        location.href = './login.html';
    } else {
        errors.innerHTML = 'Error'
    }
}