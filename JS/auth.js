/**
 * HyperPunk Store — Gestión de usuarios con array
 * Cada usuario: { usuario, contrasena, nombres, apellidos }
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

function buscarUsuario(correo) {
    const usuarioNormalizado = correo.trim().toLowerCase();
    return usuarios.find((u) => u.usuario.toLowerCase() === usuarioNormalizado) || null;
}

function existeUsuario(correo) {
    return buscarUsuario(correo) !== null;
}

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

function iniciarSesion(correo, contrasena) {
    const usuario = buscarUsuario(correo);

    if (!usuario) {
        return {
            exito: false,
            tipo: 'no-existe',
            mensaje: 'No existe una cuenta con ese correo. Debe registrarse primero.'
        };
    }

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
