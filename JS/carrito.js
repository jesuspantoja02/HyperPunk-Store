/**
 * HyperPunk Store — Carrito de compras
 * Array carrito: inserción, lectura, actualización y eliminación por índice.
 * Bucles for / while para recorrer ítems y calcular totales.
 */

const CARRITO_STORAGE_KEY = 'hyperpunk_carrito';
const COMPRAS_STORAGE_KEY = 'hyperpunk_compras';

/** @type {{ id: string, nombre: string, marca: string, precio: number, imagen: string, cantidad: number }[]} */
let carrito = [];

/**
 * Historial de compras realizadas.
 * Cada compra: { id, fecha, total, unidades, productos: [...] }
 */
let compras = [];

function estaEnPaginas() {
    return window.location.pathname.includes('/pages/');
}

function rutaBase() {
    return estaEnPaginas() ? '' : 'pages/';
}

function cargarCarrito() {
    const guardado = localStorage.getItem(CARRITO_STORAGE_KEY);
    if (!guardado) {
        carrito = [];
        return;
    }

    try {
        carrito = JSON.parse(guardado);
        if (!Array.isArray(carrito)) {
            carrito = [];
        }
    } catch {
        carrito = [];
    }
}

function guardarCarrito() {
    localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
}

function cargarCompras() {
    const guardado = localStorage.getItem(COMPRAS_STORAGE_KEY);
    if (!guardado) {
        compras = [];
        return;
    }

    try {
        compras = JSON.parse(guardado);
        if (!Array.isArray(compras)) {
            compras = [];
        }
    } catch {
        compras = [];
    }
}

function guardarCompras() {
    localStorage.setItem(COMPRAS_STORAGE_KEY, JSON.stringify(compras));
}

/**
 * Copia los ítems del carrito a un nuevo registro de compra (inserción en array).
 * @param {{ metodo: string, titular: string, referencia: string }} [datosPago]
 * @returns {{ exito: boolean, mensaje: string, compra?: object }}
 */
function registrarCompra(datosPago) {
    if (carrito.length === 0) {
        return { exito: false, mensaje: 'El carrito está vacío.' };
    }

    const productos = [];
    for (let i = 0; i < carrito.length; i++) {
        productos.push({
            id: carrito[i].id,
            nombre: carrito[i].nombre,
            marca: carrito[i].marca,
            precio: carrito[i].precio,
            imagen: carrito[i].imagen,
            cantidad: carrito[i].cantidad
        });
    }

    const pago = datosPago || {};

    const compra = {
        id: 'HP-' + Date.now(),
        fecha: new Date().toLocaleString('es-PE'),
        total: calcularTotal(),
        unidades: contarUnidades(),
        productos: productos,
        pago: {
            metodo: pago.metodo || 'No especificado',
            titular: pago.titular || '',
            referencia: pago.referencia || '',
            estado: 'Pagado'
        }
    };

    compras.push(compra);
    guardarCompras();
    vaciarCarrito();

    return {
        exito: true,
        mensaje: `Pago confirmado. Compra ${compra.id} registrada.`,
        compra: compra
    };
}

/**
 * Lectura por índice del historial.
 */
function leerCompra(indice) {
    if (indice < 0 || indice >= compras.length) {
        return null;
    }
    return compras[indice];
}

/**
 * Elimina una compra del historial por índice.
 */
function eliminarCompra(indice) {
    if (indice < 0 || indice >= compras.length) {
        return { exito: false, mensaje: 'Índice fuera de rango.' };
    }

    compras.splice(indice, 1);
    guardarCompras();
    return { exito: true, mensaje: 'Compra eliminada del historial.' };
}

function vaciarHistorialCompras() {
    compras = [];
    guardarCompras();
}

function parsearPrecio(texto) {
    if (!texto) return 0;
    const limpio = texto.replace(/[^\d.,]/g, '').replace(/\s/g, '').replace(',', '.');
    // "1679.00" o "1.679.00" (miles con punto): quitar puntos de miles si hay más de un punto
    const partes = limpio.split('.');
    let numero = limpio;
    if (partes.length > 2) {
        numero = partes.slice(0, -1).join('') + '.' + partes[partes.length - 1];
    }
    const valor = parseFloat(numero);
    return Number.isFinite(valor) ? valor : 0;
}

/**
 * Normaliza rutas de imagen a formato raíz (image/...) para localStorage.
 */
function normalizarRutaImagen(src) {
    if (!src) return '';
    let ruta = src.replace(/\\/g, '/');
    while (ruta.indexOf('../') === 0) {
        ruta = ruta.slice(3);
    }
    if (ruta.indexOf('./') === 0) {
        ruta = ruta.slice(2);
    }
    if (ruta.indexOf('pages/') === 0) {
        ruta = ruta.slice(6);
    }
    return ruta;
}

function resolverRutaImagen(ruta) {
    const normalizada = normalizarRutaImagen(ruta);
    if (!normalizada) return '';
    if (normalizada.indexOf('http') === 0 || normalizada.indexOf('data:') === 0) {
        return normalizada;
    }
    return estaEnPaginas() ? '../' + normalizada : normalizada;
}

function formatearPrecio(monto) {
    return 'S/ ' + monto.toFixed(2);
}

function generarIdProducto(nombre, marca) {
    const base = (marca + '-' + nombre).toLowerCase();
    let id = '';
    for (let i = 0; i < base.length; i++) {
        const c = base.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
            id += c;
        } else if (c === ' ' || c === '-' || c === '/') {
            id += '-';
        }
    }
    while (id.indexOf('--') !== -1) {
        id = id.replace('--', '-');
    }
    return id;
}

/**
 * Busca un producto en el carrito por id usando for.
 * @returns {number} índice o -1
 */
function indiceEnCarrito(id) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === id) {
            return i;
        }
    }
    return -1;
}

/**
 * Inserción o incremento de cantidad.
 */
function agregarAlCarrito(producto) {
    const indice = indiceEnCarrito(producto.id);

    if (indice === -1) {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            marca: producto.marca,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    } else {
        carrito[indice].cantidad += 1;
    }

    guardarCarrito();
    actualizarContadorCarrito();
    return true;
}

/**
 * Actualización por índice: cambia la cantidad.
 */
function actualizarCantidad(indice, nuevaCantidad) {
    if (indice < 0 || indice >= carrito.length) {
        return { exito: false, mensaje: 'Índice fuera de rango.' };
    }

    const cantidad = Number(nuevaCantidad);
    if (!Number.isFinite(cantidad) || cantidad < 1) {
        return { exito: false, mensaje: 'La cantidad debe ser al menos 1.' };
    }

    carrito[indice].cantidad = Math.floor(cantidad);
    guardarCarrito();
    actualizarContadorCarrito();
    return { exito: true, mensaje: `Cantidad en índice ${indice} actualizada.` };
}

/**
 * Eliminación por índice.
 */
function eliminarDelCarrito(indice) {
    if (indice < 0 || indice >= carrito.length) {
        return { exito: false, mensaje: 'Índice fuera de rango.' };
    }

    carrito.splice(indice, 1);
    guardarCarrito();
    actualizarContadorCarrito();
    return { exito: true, mensaje: 'Producto eliminado del carrito.' };
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
}

/**
 * Total de unidades con while.
 */
function contarUnidades() {
    let total = 0;
    let i = 0;
    while (i < carrito.length) {
        total += carrito[i].cantidad;
        i++;
    }
    return total;
}

/**
 * Subtotal con for.
 */
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

function actualizarContadorCarrito() {
    const contadores = document.querySelectorAll('.carrito-contador');
    const unidades = contarUnidades();

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = String(unidades);
    }
}

function mostrarToastCarrito(mensaje) {
    let toast = document.getElementById('toast-carrito');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-carrito';
        toast.className = 'toast-carrito';
        toast.setAttribute('role', 'status');
        document.body.appendChild(toast);
    }

    toast.textContent = mensaje;
    toast.classList.add('visible');

    clearTimeout(mostrarToastCarrito._timer);
    mostrarToastCarrito._timer = setTimeout(() => {
        toast.classList.remove('visible');
    }, 2200);
}

function inyectarEnlaceCarrito() {
    const lista = document.querySelector('.header-tienda ul');
    if (!lista) return;

    if (!lista.querySelector('.enlace-carrito')) {
        const hrefCarrito = rutaBase() + 'carrito.html';
        const liCarrito = document.createElement('li');
        liCarrito.innerHTML = `Carrito<p><a href="${hrefCarrito}" class="enlace-carrito">Ver (<span class="carrito-contador">0</span>)</a></p>`;
        lista.appendChild(liCarrito);
    }

    if (!lista.querySelector('.enlace-compras')) {
        const hrefCompras = rutaBase() + 'compras.html';
        const liCompras = document.createElement('li');
        liCompras.innerHTML = `Mis compras<p><a href="${hrefCompras}" class="enlace-compras">Historial</a></p>`;
        lista.appendChild(liCompras);
    }
}

/**
 * Detecta celdas de producto (tienen marca, nombre y precio S/)
 * e inserta botón "Agregar al carrito".
 */
function activarBotonesProducto() {
    const celdas = document.querySelectorAll('.table-tienda td, .table-ventanas td');

    for (let i = 0; i < celdas.length; i++) {
        const celda = celdas[i];
        if (celda.querySelector('.btn-agregar-carrito')) continue;
        if (celda.querySelector('a[href]') && !celda.querySelector('h3')) continue;

        const marcaEl = celda.querySelector('h3');
        const nombreEl = celda.querySelector('h4');
        const precioEl = celda.querySelector('p');
        const imgEl = celda.querySelector('img');

        if (!marcaEl || !nombreEl || !precioEl || !imgEl) continue;

        const textoPrecio = precioEl.textContent || '';
        if (textoPrecio.indexOf('S/') === -1) continue;

        const idCatalogo = celda.getAttribute('data-producto-id');
        const producto = {
            id: idCatalogo || generarIdProducto(nombreEl.textContent, marcaEl.textContent),
            nombre: nombreEl.textContent.trim(),
            marca: marcaEl.textContent.trim(),
            precio: parsearPrecio(textoPrecio),
            imagen: normalizarRutaImagen(imgEl.getAttribute('src') || '')
        };

        if (producto.precio <= 0) continue;

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'btn-agregar-carrito';
        boton.textContent = 'Agregar al carrito';
        boton.setAttribute('data-id', producto.id);
        boton.addEventListener('click', (evento) => {
            evento.preventDefault();
            evento.stopPropagation();
            agregarAlCarrito(producto);
            mostrarToastCarrito('Agregado: ' + producto.nombre);
        });

        celda.appendChild(boton);
    }
}

function renderizarPaginaCompras() {
    const lista = document.getElementById('lista-compras');
    const vacio = document.getElementById('compras-vacio');
    const acciones = document.getElementById('compras-acciones');

    if (!lista || !vacio) return;

    if (compras.length === 0) {
        vacio.classList.remove('oculto');
        if (acciones) acciones.classList.add('oculto');
        lista.innerHTML = '';
        return;
    }

    vacio.classList.add('oculto');
    if (acciones) acciones.classList.remove('oculto');

    let html = '';
    // Más recientes primero
    for (let i = compras.length - 1; i >= 0; i--) {
        const compra = compras[i];
        let itemsHtml = '';
        let j = 0;

        while (j < compra.productos.length) {
            const p = compra.productos[j];
            itemsHtml += `
                <li class="compra-producto">
                    <img src="${resolverRutaImagen(p.imagen)}" alt="${p.nombre}" width="56" height="56" loading="lazy">
                    <div>
                        <p><strong>${p.marca}</strong> — ${p.nombre}</p>
                        <p>${p.cantidad} × ${formatearPrecio(p.precio)}</p>
                    </div>
                </li>
            `;
            j++;
        }

        html += `
            <li class="item-compra" data-indice="${i}">
                <div class="item-compra-cabecera">
                    <div>
                        <h3>Pedido ${compra.id}</h3>
                        <p class="compra-fecha">${compra.fecha}</p>
                    </div>
                    <div class="item-compra-meta">
                        <p>${compra.unidades} unidad(es)</p>
                        <p class="compra-total">${formatearPrecio(compra.total)}</p>
                        <p class="compra-pago">${compra.pago ? compra.pago.metodo + ' · ' + (compra.pago.estado || 'Pagado') : 'Sin datos de pago'}</p>
                        <button type="button" class="btn-eliminar-compra" data-indice="${i}">Eliminar</button>
                    </div>
                </div>
                <ul class="compra-productos">${itemsHtml}</ul>
            </li>
        `;
    }

    lista.innerHTML = html;
}

function enlazarEventosPaginaCompras() {
    const lista = document.getElementById('lista-compras');
    const btnVaciar = document.getElementById('btn-vaciar-compras');

    if (lista) {
        lista.addEventListener('click', (evento) => {
            const boton = evento.target.closest('.btn-eliminar-compra');
            if (!boton) return;

            const indice = Number(boton.getAttribute('data-indice'));
            const resultado = eliminarCompra(indice);
            mostrarToastCarrito(resultado.mensaje);
            renderizarPaginaCompras();
        });
    }

    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            if (compras.length === 0) return;
            vaciarHistorialCompras();
            renderizarPaginaCompras();
            mostrarToastCarrito('Historial de compras vaciado');
        });
    }
}

function renderizarPaginaCarrito() {
    const lista = document.getElementById('lista-carrito');
    const vacio = document.getElementById('carrito-vacio');
    const resumen = document.getElementById('carrito-resumen');
    const totalEl = document.getElementById('carrito-total');

    if (!lista || !vacio || !resumen || !totalEl) return;

    if (carrito.length === 0) {
        vacio.classList.remove('oculto');
        resumen.classList.add('oculto');
        lista.innerHTML = '';
        return;
    }

    vacio.classList.add('oculto');
    resumen.classList.remove('oculto');

    let html = '';
    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        const subtotal = item.precio * item.cantidad;
        html += `
            <li class="item-carrito" data-indice="${i}">
                <img src="${resolverRutaImagen(item.imagen)}" alt="${item.nombre}" width="80" height="80" loading="lazy">
                <div class="item-carrito-info">
                    <p class="item-marca">${item.marca}</p>
                    <h3>${item.nombre}</h3>
                    <p class="item-precio">${formatearPrecio(item.precio)} c/u</p>
                    <p class="item-subtotal">Subtotal: ${formatearPrecio(subtotal)}</p>
                </div>
                <div class="item-carrito-acciones">
                    <label>
                        Cantidad
                        <input type="number" min="1" value="${item.cantidad}" class="input-cantidad" data-indice="${i}" aria-label="Cantidad de ${item.nombre}">
                    </label>
                    <button type="button" class="btn-eliminar-item" data-indice="${i}">Eliminar</button>
                </div>
            </li>
        `;
    }

    lista.innerHTML = html;
    totalEl.textContent = formatearPrecio(calcularTotal());
}

function enlazarEventosPaginaCarrito() {
    const lista = document.getElementById('lista-carrito');
    const btnVaciar = document.getElementById('btn-vaciar-carrito');
    const btnCheckout = document.getElementById('btn-finalizar-compra');

    if (lista) {
        lista.addEventListener('change', (evento) => {
            const input = evento.target.closest('.input-cantidad');
            if (!input) return;

            const indice = Number(input.getAttribute('data-indice'));
            const resultado = actualizarCantidad(indice, input.value);

            if (!resultado.exito) {
                mostrarToastCarrito(resultado.mensaje);
                input.value = carrito[indice] ? carrito[indice].cantidad : 1;
                return;
            }

            renderizarPaginaCarrito();
        });

        lista.addEventListener('click', (evento) => {
            const boton = evento.target.closest('.btn-eliminar-item');
            if (!boton) return;

            const indice = Number(boton.getAttribute('data-indice'));
            eliminarDelCarrito(indice);
            renderizarPaginaCarrito();
            mostrarToastCarrito('Producto eliminado');
        });
    }

    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            if (carrito.length === 0) return;
            vaciarCarrito();
            renderizarPaginaCarrito();
            mostrarToastCarrito('Carrito vaciado');
        });
    }

    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            if (carrito.length === 0) {
                mostrarToastCarrito('El carrito está vacío');
                return;
            }

            window.location.href = rutaBase() + 'pago.html';
        });
    }
}

/**
 * Resumen del pedido + formulario de pago en pago.html
 */
function renderizarPaginaPago() {
    const resumen = document.getElementById('pago-resumen-lista');
    const totalEl = document.getElementById('pago-total');
    const vacio = document.getElementById('pago-vacio');
    const panel = document.getElementById('pago-panel');

    if (!resumen || !totalEl || !vacio || !panel) return;

    if (carrito.length === 0) {
        vacio.classList.remove('oculto');
        panel.classList.add('oculto');
        return;
    }

    vacio.classList.add('oculto');
    panel.classList.remove('oculto');

    let html = '';
    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        const subtotal = item.precio * item.cantidad;
        html += `
            <li class="pago-item">
                <span>${item.cantidad} × ${item.nombre}</span>
                <strong>${formatearPrecio(subtotal)}</strong>
            </li>
        `;
    }

    resumen.innerHTML = html;
    totalEl.textContent = formatearPrecio(calcularTotal());
    actualizarCamposSegunMetodo();
}

function actualizarCamposSegunMetodo() {
    const metodoEl = document.getElementById('pago-metodo');
    const bloqueTarjeta = document.getElementById('campos-tarjeta');
    const bloqueYape = document.getElementById('campos-yape');
    const bloqueTransferencia = document.getElementById('campos-transferencia');

    if (!metodoEl) return;

    const metodo = metodoEl.value;

    if (bloqueTarjeta) bloqueTarjeta.classList.toggle('oculto', metodo !== 'Tarjeta');
    if (bloqueYape) bloqueYape.classList.toggle('oculto', metodo !== 'Yape / Plin');
    if (bloqueTransferencia) bloqueTransferencia.classList.toggle('oculto', metodo !== 'Transferencia bancaria');
}

function validarFormularioPago(formulario) {
    const errores = [];
    const titular = formulario['pago-titular'].value.trim();
    const email = formulario['pago-email'].value.trim();
    const metodo = formulario['pago-metodo'].value;

    if (titular.length < 3) {
        errores.push('Ingrese el nombre del titular.');
    }

    if (email.indexOf('@') === -1) {
        errores.push('Ingrese un correo válido.');
    }

    if (!metodo) {
        errores.push('Seleccione un método de pago.');
    }

    if (metodo === 'Tarjeta') {
        const numero = formulario['pago-tarjeta'].value.replace(/\s/g, '');
        const vencimiento = formulario['pago-vencimiento'].value.trim();
        const cvv = formulario['pago-cvv'].value.trim();

        if (numero.length < 13 || numero.length > 19 || !/^\d+$/.test(numero)) {
            errores.push('Número de tarjeta inválido.');
        }
        if (!/^\d{2}\/\d{2}$/.test(vencimiento)) {
            errores.push('Vencimiento debe ser MM/AA.');
        }
        if (cvv.length < 3 || cvv.length > 4 || !/^\d+$/.test(cvv)) {
            errores.push('CVV inválido.');
        }
    }

    if (metodo === 'Yape / Plin') {
        const celular = formulario['pago-celular'].value.replace(/\D/g, '');
        if (celular.length !== 9) {
            errores.push('Ingrese un celular de 9 dígitos para Yape/Plin.');
        }
    }

    if (metodo === 'Transferencia bancaria') {
        const banco = formulario['pago-banco'].value.trim();
        if (banco.length < 2) {
            errores.push('Indique el banco de la transferencia.');
        }
    }

    return errores;
}

function generarReferenciaPago(metodo) {
    const codigo = String(Date.now()).slice(-8);
    if (metodo === 'Tarjeta') return 'TRJ-' + codigo;
    if (metodo === 'Yape / Plin') return 'YPE-' + codigo;
    if (metodo === 'Transferencia bancaria') return 'TRF-' + codigo;
    return 'PAGO-' + codigo;
}

function enlazarEventosPaginaPago() {
    const form = document.getElementById('form-pago');
    const metodoEl = document.getElementById('pago-metodo');
    const alerta = document.getElementById('pago-alerta');

    if (metodoEl) {
        metodoEl.addEventListener('change', actualizarCamposSegunMetodo);
    }

    if (!form) return;

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        if (carrito.length === 0) {
            if (alerta) {
                alerta.textContent = 'No hay productos para pagar.';
                alerta.className = 'alerta-global visible error';
            }
            return;
        }

        const errores = validarFormularioPago(form);

        if (errores.length > 0) {
            let texto = '';
            for (let i = 0; i < errores.length; i++) {
                texto += errores[i] + ' ';
            }
            if (alerta) {
                alerta.textContent = texto.trim();
                alerta.className = 'alerta-global visible error';
            }
            return;
        }

        const metodo = form['pago-metodo'].value;
        const resultado = registrarCompra({
            metodo: metodo,
            titular: form['pago-titular'].value.trim(),
            referencia: generarReferenciaPago(metodo)
        });

        if (!resultado.exito) {
            if (alerta) {
                alerta.textContent = resultado.mensaje;
                alerta.className = 'alerta-global visible error';
            }
            return;
        }

        if (alerta) {
            alerta.textContent = resultado.mensaje + ' Referencia: ' + resultado.compra.pago.referencia;
            alerta.className = 'alerta-global visible exito';
        }

        mostrarToastCarrito('Pago generado correctamente');

        setTimeout(() => {
            window.location.href = rutaBase() + 'compras.html';
        }, 1200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    cargarCompras();
    inyectarEnlaceCarrito();
    actualizarContadorCarrito();
    activarBotonesProducto();

    if (document.getElementById('lista-carrito')) {
        renderizarPaginaCarrito();
        enlazarEventosPaginaCarrito();
    }

    if (document.getElementById('lista-compras')) {
        renderizarPaginaCompras();
        enlazarEventosPaginaCompras();
    }

    if (document.getElementById('form-pago') || document.getElementById('pago-panel')) {
        renderizarPaginaPago();
        enlazarEventosPaginaPago();
    }
});
