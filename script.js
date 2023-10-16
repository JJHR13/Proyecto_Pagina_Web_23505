document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validación del campo Nombre
        if (nombreInput.value.trim() === '') {
            nombreError.textContent = 'El campo Nombre es obligatorio';
        } else {
            nombreError.textContent = '';
        }

        // Validación del campo Correo Electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'El correo electrónico no es válido';
        } else {
            emailError.textContent = '';
        }

        // Envía el formulario si ambos campos son válidos
        if (nombreError.textContent === '' && emailError.textContent === '') {
            // Aquí se puede enviar los datos del formulario al servidor o comunicar el registro existoso
            alert('Registro exitoso');
        }
    });
});