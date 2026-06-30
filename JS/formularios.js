/**
 * HyperPunk Store — Validación y lógica de login / registro
 */

function validarCampoVacio(valor, nombreCampo) {
    if (valor.trim().length === 0) {
        return `El campo "${nombreCampo}" no puede estar vacío.`;
    }
    return '';
}

function validarEmailLogin(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(email.trim())) {
        return 'Ingrese un correo electrónico válido.';
    }
    return '';
}

function validarContrasena(contrasena, minLength) {
    if (contrasena.length < minLength) {
        return `La contraseña debe tener al menos ${minLength} caracteres.`;
    }
    return '';
}

function mostrarErrorCampo(inputId, mensaje) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(`error-${inputId}`);
    if (input) input.classList.add('input-error');
    if (errorEl) errorEl.textContent = mensaje;
}

function limpiarErrorCampo(inputId) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(`error-${inputId}`);
    if (input) input.classList.remove('input-error');
    if (errorEl) errorEl.textContent = '';
}

function mostrarAlerta(id, mensaje, tipo) {
    const alerta = document.getElementById(id);
    if (!alerta) return;
    alerta.innerHTML = mensaje;
    alerta.className = `alerta-global visible ${tipo}`;
}

function validarLogin(evento) {
    evento.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    ['email', 'password'].forEach(limpiarErrorCampo);

    const errores = [];

    const errorEmail = validarCampoVacio(email.value, 'Correo') || validarEmailLogin(email.value);
    if (errorEmail) {
        mostrarErrorCampo('email', errorEmail);
        errores.push(errorEmail);
    }

    const errorPassword = validarCampoVacio(password.value, 'Contraseña');
    if (errorPassword) {
        mostrarErrorCampo('password', errorPassword);
        errores.push(errorPassword);
    }

    if (errores.length > 0) {
        mostrarAlerta('alerta-login', errores.join(' '), 'error');
        return false;
    }

    const resultado = iniciarSesion(email.value, password.value);

    if (!resultado.exito) {
        if (resultado.tipo === 'no-existe') {
            mostrarAlerta(
                'alerta-login',
                `${resultado.mensaje} <a href="registrarse.html">Ir a registro</a>`,
                'error'
            );
        } else {
            mostrarAlerta('alerta-login', resultado.mensaje, 'error');
        }
        return false;
    }

    mostrarAlerta('alerta-login', resultado.mensaje, 'exito');

    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);

    return true;
}

function validarRegistro(evento) {
    evento.preventDefault();

    const campos = ['nombres', 'apellidos', 'email', 'password', 'confirm-password'];
    campos.forEach(limpiarErrorCampo);

    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const errores = [];

    const errorNombres = validarCampoVacio(nombres.value, 'Nombres');
    if (errorNombres) {
        mostrarErrorCampo('nombres', errorNombres);
        errores.push(errorNombres);
    }

    const errorApellidos = validarCampoVacio(apellidos.value, 'Apellidos');
    if (errorApellidos) {
        mostrarErrorCampo('apellidos', errorApellidos);
        errores.push(errorApellidos);
    }

    const errorEmail = validarCampoVacio(email.value, 'Correo') || validarEmailLogin(email.value);
    if (errorEmail) {
        mostrarErrorCampo('email', errorEmail);
        errores.push(errorEmail);
    }

    const errorPassword = validarCampoVacio(password.value, 'Contraseña');
    if (errorPassword) {
        mostrarErrorCampo('password', errorPassword);
        errores.push(errorPassword);
    } else {
        const errorLongitud = validarContrasena(password.value, 6);
        if (errorLongitud) {
            mostrarErrorCampo('password', errorLongitud);
            errores.push(errorLongitud);
        }
    }

    if (password.value !== confirmPassword.value) {
        mostrarErrorCampo('confirm-password', 'Las contraseñas no coinciden.');
        errores.push('Las contraseñas no coinciden.');
    }

    if (errores.length > 0) {
        mostrarAlerta('alerta-registro', errores.join(' '), 'error');
        return false;
    }

    const resultado = registrarUsuario({
        usuario: email.value,
        contrasena: password.value,
        nombres: nombres.value,
        apellidos: apellidos.value
    });

    if (!resultado.exito) {
        mostrarAlerta('alerta-registro', `${resultado.mensaje} <a href="login.html">Ir a login</a>`, 'error');
        return false;
    }

    mostrarAlerta('alerta-registro', resultado.mensaje, 'exito');

    setTimeout(() => {
        window.location.href = 'login.html?registrado=1';
    }, 2000);

    return true;
}

function mostrarMensajeRegistroExitoso() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('registrado') === '1') {
        mostrarAlerta('alerta-login', 'Registro completado. Ahora puede iniciar sesión.', 'exito');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');

    if (formLogin) {
        formLogin.addEventListener('submit', validarLogin);
        mostrarMensajeRegistroExitoso();
    }
    if (formRegistro) {
        formRegistro.addEventListener('submit', validarRegistro);
    }
});
