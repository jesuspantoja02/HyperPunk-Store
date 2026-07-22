/**
 * HyperPunk Store — Gestión de usuarios con array
 * Cada usuario: { usuario, contrasena, nombres, apellidos }
 *
 * Demuestra: inserción (push), lectura por índice, actualización por índice
 * y recorrido con bucles for / while.
 */

const STORAGE_KEY = 'hyperpunk_usuarios';
const SESSION_KEY = 'hyperpunk_sesion';

let usuarios = [
    { usuario: 'demo@hyperpunk.com', contrasena: 'demo1234', nombres: 'Usuario', apellidos: 'Demo' }
];

function cargarUsuarios() {
    const guardados = localStorage.getItem(STORAGE_KEY);
    if (guardados) {
        try {
            usuarios = JSON.parse(guardados);
        } catch {
            usuarios = [];
        }
    }
}

function guardarUsuarios() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

/**
 * Lectura por índice: busca el correo recorriendo el array con for.
 * @returns {number} índice del usuario o -1 si no existe
 */
function indiceUsuario(correo) {
    const usuarioNormalizado = correo.trim().toLowerCase();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario.toLowerCase() === usuarioNormalizado) {
            return i;
        }
    }

    return -1;
}

function buscarUsuario(correo) {
    const indice = indiceUsuario(correo);
    if (indice === -1) {
        return null;
    }
    return usuarios[indice];
}

function existeUsuario(correo) {
    return indiceUsuario(correo) !== -1;
}

/**
 * Inserción: agrega un usuario al final del array (push).
 */
function registrarUsuario(datos) {
    if (existeUsuario(datos.usuario)) {
        return { exito: false, mensaje: 'Este correo ya está registrado. Inicie sesión.' };
    }

    usuarios.push({
        usuario: datos.usuario.trim().toLowerCase(),
        contrasena: datos.contrasena,
        nombres: datos.nombres.trim(),
        apellidos: datos.apellidos.trim()
    });

    guardarUsuarios();
    return { exito: true, mensaje: 'Cuenta creada correctamente. Ahora puede iniciar sesión.' };
}

/**
 * Actualización por índice: modifica nombres/apellidos del usuario encontrado.
 */
function actualizarUsuario(correo, nuevosDatos) {
    const indice = indiceUsuario(correo);

    if (indice === -1) {
        return { exito: false, mensaje: 'No se encontró el usuario a actualizar.' };
    }

    if (nuevosDatos.nombres !== undefined) {
        usuarios[indice].nombres = nuevosDatos.nombres.trim();
    }
    if (nuevosDatos.apellidos !== undefined) {
        usuarios[indice].apellidos = nuevosDatos.apellidos.trim();
    }
    if (nuevosDatos.contrasena !== undefined && nuevosDatos.contrasena.length > 0) {
        usuarios[indice].contrasena = nuevosDatos.contrasena;
    }

    guardarUsuarios();
    return {
        exito: true,
        mensaje: `Usuario en índice ${indice} actualizado correctamente.`,
        usuario: usuarios[indice]
    };
}

function iniciarSesion(correo, contrasena) {
    const indice = indiceUsuario(correo);

    if (indice === -1) {
        return {
            exito: false,
            tipo: 'no-existe',
            mensaje: 'No existe una cuenta con ese correo. Debe registrarse primero.'
        };
    }

    const usuario = usuarios[indice];

    if (usuario.contrasena !== contrasena) {
        return {
            exito: false,
            tipo: 'contrasena-incorrecta',
            mensaje: 'La contraseña es incorrecta. Intente nuevamente.'
        };
    }

    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
        usuario: usuario.usuario,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos
    }));

    return {
        exito: true,
        mensaje: `Bienvenido, ${usuario.nombres} ${usuario.apellidos}.`,
        usuario
    };
}

/**
 * Recorrido con while: lista todos los correos registrados (útil para depuración/defensa).
 */
function listarCorreosRegistrados() {
    const correos = [];
    let i = 0;

    while (i < usuarios.length) {
        correos.push(usuarios[i].usuario);
        i++;
    }

    return correos;
}

function obtenerSesionActiva() {
    const sesion = sessionStorage.getItem(SESSION_KEY);
    if (!sesion) return null;
    try {
        return JSON.parse(sesion);
    } catch {
        return null;
    }
}

function cerrarSesion() {
    sessionStorage.removeItem(SESSION_KEY);
}

cargarUsuarios();
