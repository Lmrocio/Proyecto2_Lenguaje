/**********************************************************************************
 Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.
**********************************************************************************/

const searchInput = document.querySelector('.cabecera__input');
const productosBestsellers = document.querySelectorAll('.bestsellers__productos');

console.log(searchInput)
console.log(productosBestsellers);


/***********************************************************
 Se han creado y modificado elementos de documentos web
                        y
 Se han eliminado elementos de documentos web
 **********************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.cabecera__input');
    const mensajeContenedor = document.querySelector('.cabecera__seccion-mensaje');

    function mostrarMensaje() {


        const mensaje = document.createElement('div');
        mensaje.classList.add('mensaje');

        const texto = document.createElement('p');
        texto.textContent = 'Nuestra tienda aún no está disponible';

        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'X';
        botonCerrar.classList.add('cerrar');

        mensaje.appendChild(texto);
        mensaje.appendChild(botonCerrar);

        mensajeContenedor.appendChild(mensaje);

        botonCerrar.addEventListener('click', () => {
            mensajeContenedor.removeChild(mensaje);
        });
    }

    input.addEventListener('input', () => {

        if (input.value !== '' && !mensajeContenedor.querySelector('.mensaje')) {
            mostrarMensaje();
        }

        else if (input.value === '' && mensajeContenedor.querySelector('.mensaje')) {
            mensajeContenedor.removeChild(mensajeContenedor.querySelector('.mensaje'));
        }
    });
});


/**********************************************************************
 Se han realizado modificaciones sobre los estilos de un documento web.
 **********************************************************************/

document.addEventListener("DOMContentLoaded", () => {

    const corazones = document.querySelectorAll('.bestsellers__producto-favorito');


    corazones.forEach(corazon => {
        corazon.addEventListener('click', () => {

            corazon.classList.toggle('favorito');
        });
    });
});


/*****************************************************************************************************
Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente.
******************************************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".bestsellers__container");

    contenedor.addEventListener("click", (e) => {

        if (e.target.classList.contains("miniatura")) {
            const nuevaSrc = e.target.src;
            const producto = e.target.closest(".bestsellers__productos");
            const imagenPrincipal = producto.querySelector(".bestsellers__producto-imagen");
            imagenPrincipal.src = nuevaSrc;
        }

    });
});


/********************************************************************************************************************
 Diseñar un formulario con validación dinámica que muestre mensajes de error o éxito según la interacción del usuario.
 ********************************************************************************************************************/
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".asesorias__formulario");
    const nombreInput = document.querySelector("input[placeholder='Nombre completo']");
    const emailInput = document.querySelector("input[placeholder='Correo electrónico']");
    let mensaje = document.getElementById("asesorias__mensaje");

    if (!mensaje) {
        mensaje = document.createElement("div");
        mensaje.id = "asesorias__mensaje";
        formulario.appendChild(mensaje);
    }

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        mensaje.innerHTML = "";
        mensaje.className = ""; // Limpiar clases previas

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();

        const errores = [];

        if (nombre.length < 3) {
            errores.push("El nombre debe tener al menos 3 caracteres.");
        }

        if (email === "") {
            errores.push("El correo electrónico es obligatorio.");
        } else if (!validarEmail(email)) {
            errores.push("El correo electrónico no tiene un formato válido.");
        }

        if (errores.length > 0) {
            mensaje.classList.add("mensaje-error");
            mensaje.innerHTML = `<ul>${errores.map(err => `<li>${err}</li>`).join("")}</ul>`;
        } else {
            mensaje.classList.add("mensaje-exito");
            mensaje.textContent = "¡Formulario enviado con éxito!";
            formulario.reset();
        }
    });

    function validarEmail(correo) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
        return regex.test(correo);
    }
});

/***************************************************************************************
 Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página
****************************************************************************************/

document.querySelectorAll('.tienda__filtro input').forEach(filtro => {
    filtro.addEventListener('change', () => {
        const seleccionados = Array.from(document.querySelectorAll('.tienda__filtro input:checked'))
            .map(input => input.value);

        document.querySelectorAll('.producto').forEach(producto => {
            const categoria = producto.dataset.categoria;
            if (seleccionados.length === 0 || seleccionados.includes(categoria)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});


/****************************************************************************************************
 Crear un flujo libre del proyecto. (por ejemplo proceso de incluir productos al carrito de compra.)
****************************************************************************************************/
document.addEventListener("DOMContentLoaded", () => {
    const carritoBtn = document.querySelector(".cabecera__login-enlace--carrito");
    const carritoContenedor = document.querySelector(".carrito");
    const botonesAñadir = document.querySelectorAll(".producto__boton");
    const listaCarrito = document.querySelector(".carrito__lista");
    const mensajeVacio = document.querySelector(".carrito__vacio");

    const carrito = [];

    carritoBtn.addEventListener("click", () => {
        carritoContenedor.classList.toggle("carrito--activo");
        actualizarCarrito();
    });

    botonesAñadir.forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = boton.closest(".producto");
            const nombre = boton.dataset.nombre;
            const precio = boton.dataset.precio;

            if (!precio || !nombre) return;

            carrito.push({ nombre, precio });
            actualizarCarrito();
            mostrarAviso(`${nombre} añadido al carrito.`);
        });
    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            mensajeVacio.style.display = "block";
            return;
        }

        mensajeVacio.style.display = "none";

        carrito.forEach(producto => {
            const item = document.createElement("div");
            item.classList.add("carrito__producto");

            item.innerHTML = `
                <span class="carrito__producto-nombre">${producto.nombre}</span>
                <span class="carrito__producto-precio">${producto.precio}€</span>
            `;

            listaCarrito.appendChild(item);
        });
    }

    function mostrarAviso(texto) {
        const aviso = document.createElement("div");
        aviso.textContent = texto;
        aviso.className = "carrito__aviso";

        document.body.appendChild(aviso);

        setTimeout(() => {
            aviso.remove();
        }, 2000);
    }
});
