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


/*********************************************************
                        MODO NOCHE
*********************************************************/
const toggleModoNocturno = () => {
    const modoNocturnoBtn = document.getElementById('modoNocturnoBtn');
    const iconoModoNocturno = modoNocturnoBtn.querySelector('span');

    if (localStorage.getItem('modoNocturno') === 'activo') {
        document.body.setAttribute('data-theme', 'dark');
        iconoModoNocturno.classList.remove('fa-toggle-off');
        iconoModoNocturno.classList.add('fa-toggle-on');

    } else {
        document.body.setAttribute('data-theme', 'light');
        iconoModoNocturno.classList.remove('fa-toggle-on');
        iconoModoNocturno.classList.add('fa-toggle-off');
    }

    modoNocturnoBtn.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            iconoModoNocturno.classList.remove('fa-toggle-off');
            iconoModoNocturno.classList.add('fa-toggle-on');
            localStorage.setItem('modoNocturno', 'activo');
        } else {
            document.body.setAttribute('data-theme', 'light');
            iconoModoNocturno.classList.remove('fa-toggle-on');
            iconoModoNocturno.classList.add('fa-toggle-off');
            localStorage.setItem('modoNocturno', 'inactivo');
        }
    });
};
toggleModoNocturno();