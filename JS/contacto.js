/**
 * HyperPunk Store — Validación y procesamiento del formulario de contacto
 * Requisitos: captura, validación JS y visualización de datos enviados
 */

function validarCampoTexto(valor, nombreCampo, minLength) {
    const texto = valor.trim();
    if (texto.length === 0) {
        return `El campo "${nombreCampo}" es obligatorio.`;
    }
    if (texto.length < minLength) {
        return `El campo "${nombreCampo}" debe tener al menos ${minLength} caracteres.`;
    }
    return '';
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(email.trim())) {
        return 'Ingrese un correo electrónico válido.';
    }
    return '';
}

function validarTelefono(telefono) {
    const numeros = telefono.replace(/\D/g, '');
    if (numeros.length !== 9) {
        return 'El teléfono debe tener 9 dígitos (formato Perú).';
    }
    return '';
}

function obtenerValorRadio(nombre) {
    const seleccionado = document.querySelector(`input[name="${nombre}"]:checked`);
    return seleccionado ? seleccionado.value : '';
}

function obtenerValorSelect(id) {
    const select = document.getElementById(id);
    if (!select || select.value === '') {
        return '';
    }
    return select.options[select.selectedIndex].text;
}

function obtenerValoresCheckbox(formulario) {
    const checkboxes = formulario.querySelectorAll('input[type="checkbox"]');
    const valores = {};
    checkboxes.forEach((checkbox) => {
        valores[checkbox.name] = checkbox.checked;
    });
    return valores;
}

function marcarError(input, mensaje) {
    input.classList.add('input-error');
    const errorEl = document.getElementById(`error-${input.id}`);
    if (errorEl) {
        errorEl.textContent = mensaje;
    }
}

function limpiarError(input) {
    input.classList.remove('input-error');
    const errorEl = document.getElementById(`error-${input.id}`);
    if (errorEl) {
        errorEl.textContent = '';
    }
}

function validarFormularioContacto(formulario) {
    const errores = [];

    const nombre = formulario.nombre;
    const apellidos = formulario.apellidos;
    const email = formulario.email;
    const telefono = formulario.telefono;
    const mensaje = formulario.mensaje;
    const categoria = formulario.categoria;
    const terminos = formulario.terminos;

    [nombre, apellidos, email, telefono, mensaje, categoria].forEach(limpiarError);

    const errorNombre = validarCampoTexto(nombre.value, 'Nombre', 2);
    if (errorNombre) {
        marcarError(nombre, errorNombre);
        errores.push(errorNombre);
    }

    const errorApellidos = validarCampoTexto(apellidos.value, 'Apellidos', 2);
    if (errorApellidos) {
        marcarError(apellidos, errorApellidos);
        errores.push(errorApellidos);
    }

    const errorEmail = validarEmail(email.value);
    if (errorEmail) {
        marcarError(email, errorEmail);
        errores.push(errorEmail);
    }

    const errorTelefono = validarTelefono(telefono.value);
    if (errorTelefono) {
        marcarError(telefono, errorTelefono);
        errores.push(errorTelefono);
    }

    const errorMensaje = validarCampoTexto(mensaje.value, 'Mensaje', 10);
    if (errorMensaje) {
        marcarError(mensaje, errorMensaje);
        errores.push(errorMensaje);
    }

    if (categoria.value === '') {
        marcarError(categoria, 'Seleccione una categoría de producto.');
        errores.push('Debe seleccionar una categoría de producto.');
    }

    const metodoContacto = obtenerValorRadio('metodo-contacto');
    if (!metodoContacto) {
        errores.push('Seleccione un método de contacto preferido.');
        const errorRadio = document.getElementById('error-metodo-contacto');
        if (errorRadio) errorRadio.textContent = 'Seleccione una opción.';
    } else {
        const errorRadio = document.getElementById('error-metodo-contacto');
        if (errorRadio) errorRadio.textContent = '';
    }

    if (!terminos.checked) {
        errores.push('Debe aceptar los términos y condiciones.');
        const errorTerminos = document.getElementById('error-terminos');
        if (errorTerminos) errorTerminos.textContent = 'Debe aceptar los términos.';
    } else {
        const errorTerminos = document.getElementById('error-terminos');
        if (errorTerminos) errorTerminos.textContent = '';
    }

    return errores;
}

function mostrarErrores(errores) {
    const alerta = document.getElementById('alerta-global');
    if (!alerta) return;

    if (errores.length > 0) {
        alerta.textContent = errores.join(' ');
        alerta.className = 'alerta-global visible error';
    } else {
        alerta.className = 'alerta-global';
        alerta.textContent = '';
    }
}

function mostrarDatosEnviados(datos) {
    const panel = document.getElementById('resultado-envio');
    const lista = document.getElementById('lista-datos');

    if (!panel || !lista) return;

    panel.classList.remove('oculto');
    panel.classList.add('exito');

    lista.innerHTML = `
        <li><strong>Nombre completo:</strong> ${datos.nombre} ${datos.apellidos}</li>
        <li><strong>Correo:</strong> ${datos.email}</li>
        <li><strong>Teléfono:</strong> ${datos.telefono}</li>
        <li><strong>Categoría:</strong> ${datos.categoria}</li>
        <li><strong>Método de contacto:</strong> ${datos.metodoContacto}</li>
        <li><strong>Mensaje:</strong> ${datos.mensaje}</li>
        <li><strong>Recibir ofertas:</strong> ${datos.recibirOfertas ? 'Sí' : 'No'}</li>
        <li><strong>Términos aceptados:</strong> ${datos.terminos ? 'Sí' : 'No'}</li>
    `;

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function procesarFormularioContacto(evento) {
    evento.preventDefault();

    const formulario = evento.target;
    const errores = validarFormularioContacto(formulario);

    mostrarErrores(errores);

    if (errores.length > 0) {
        return false;
    }

    const checkboxes = obtenerValoresCheckbox(formulario);

    const datos = {
        nombre: formulario.nombre.value.trim(),
        apellidos: formulario.apellidos.value.trim(),
        email: formulario.email.value.trim(),
        telefono: formulario.telefono.value.trim(),
        mensaje: formulario.mensaje.value.trim(),
        categoria: obtenerValorSelect('categoria'),
        metodoContacto: obtenerValorRadio('metodo-contacto'),
        recibirOfertas: checkboxes['recibir-ofertas'] || false,
        terminos: checkboxes.terminos || false
    };

    const alerta = document.getElementById('alerta-global');
    if (alerta) {
        alerta.textContent = '¡Formulario enviado correctamente! Revise los datos a continuación.';
        alerta.className = 'alerta-global visible exito';
    }

    mostrarDatosEnviados(datos);
    formulario.reset();

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-contacto');
    if (formulario) {
        formulario.addEventListener('submit', procesarFormularioContacto);
    }
});
