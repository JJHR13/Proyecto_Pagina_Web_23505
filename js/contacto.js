document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    var errorMsg = '';
    if (!nombre || !email) {
        errorMsg = 'Por favor, complete todos los campos.';
    }

    var errorSpan = document.getElementById('error-msg');

    if (errorMsg === '') {
        // Registro exitoso, muestra una alerta
        alert('¡Registro exitoso! En breve nos comunicaremos contigo.');
        // Puedes redirigir al usuario a otra página aquí si es necesario
    } else {
        errorSpan.textContent = errorMsg;
    }
});
