# Funcionalidades Interactivas

Este documento describe las funcionalidades interactivas implementadas en el proyecto web de cosmética natural **"Magnolia"**, en cumplimiento con los criterios de evaluación establecidos para la Fase 3.

---

## 1. Galería Interactiva Dinámica

### Funcionalidad esperada

Permite cambiar la imagen principal de un producto cuando se hace clic sobre una miniatura. Proporciona una experiencia de usuario interactiva y moderna. Está ubicada en los productos que aparecen en la sección de bestsellers de la página principal.

```js
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
```

### Explicación:
- Al cargar la página, se agrega un `eventListener` al contenedor principal de la sección de "bestsellers".
- Cuando el usuario hace clic sobre una miniatura (`.miniatura`), el código:
  - Captura la nueva `src` (ruta de la imagen).
  - Encuentra la imagen principal del producto (`.bestsellers__producto-imagen`) dentro del mismo contenedor padre.
  - Cambia dinámicamente la imagen principal por la miniatura seleccionada.

  
---

## 2. Formulario con Validación Dinámica

### Funcionalidad esperada

Validar entradas del usuario y mostrar mensajes inmediatos de error o éxito. Mejora la experiencia sin necesidad de enviar el formulario a un servidor. Está ubicada en la página principal, concretamente en la sección de asesorías personales.

```js
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
        mensaje.className = "";

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
```

### Explicación:
- Se añade validación personalizada para un formulario.
- Verifica que el nombre tenga más de 2 caracteres.
- Comprueba que el correo tenga un formato válido con una expresión regular.
- Muestra errores o mensaje de éxito directamente en el DOM, sin recargar la página.

---

## 3. Filtros Dinámicos de Productos

### Funcionalidad esperada

Brindar al usuario control para visualizar únicamente los productos que le interesan según filtros activos. Está ubicada en la página de productos, a la que se accede al pulsar el icono '+' de la sección bestsellers.

```js
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
```

### Explicación:
- Cada checkbox de filtro activa una función al cambiar su estado.
- Se recopilan las categorías seleccionadas y se filtran los productos.
- Se muestran/ocultan productos según su `data-categoria`.


---

## 4. Flujo Libre: Carrito de Compras Interactivo

### Funcionalidad esperada

Simula el proceso de añadir productos al carrito de forma interactiva, sin necesidad de backend. Al pulsar en 'CART' ubicado en la cabecera se despliega el carrito de compra. Está ubicada en la página de prodcutos a la que se accede por el icono '+' de la sección de bestsellers.

```js
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
```

### Explicación:
- Muestra un desplegable del carrito cuando el usuario hace clic.
- Permite añadir productos al carrito.
- Crea elementos dinámicos en el DOM para representar los productos añadidos.
- Muestra un mensaje temporal indicando que un producto ha sido añadido.

