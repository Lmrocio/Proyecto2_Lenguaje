## SEGUNDA ENTREGA
### Uso de JavaScript (ES6)
## a) Identificar y clasificar los lenguajes de script de cliente relacionados con la web, destacando las características de JavaScript

## Lenguajes de Script de Cliente para la Web

Los lenguajes de script de cliente son aquellos que se ejecutan directamente en el navegador del usuario. Estos lenguajes permiten crear interactividad, manipulación del DOM (Document Object Model), validación de formularios, y muchas otras funcionalidades sin necesidad de recargar la página o hacer peticiones al servidor para realizar cambios en la interfaz.

### Lenguajes más comunes:

#### **JavaScript**

Es el lenguaje de scripting más utilizado en la web. Permite a los desarrolladores crear páginas web interactivas y dinámicas, modificando elementos HTML y CSS en tiempo real sin necesidad de recargar la página.

##### **Características clave de JavaScript**:

- Es un lenguaje interpretado, lo que significa que se ejecuta directamente en el navegador.
- Es dinámico y soporta programación orientada a objetos, programación funcional, y programación basada en eventos.
- JavaScript permite la manipulación del DOM, eventos, peticiones HTTP (AJAX), entre otros.

#### **TypeScript**

Es un superset de JavaScript que introduce tipado estático opcional, lo que permite detectar errores en tiempo de compilación antes de ejecutar el código. Es utilizado principalmente en proyectos grandes debido a su robustez y facilidad para manejar grandes volúmenes de código.

#### **CoffeeScript**

Es un lenguaje que compila a JavaScript y proporciona una sintaxis más sencilla y concisa que la de JavaScript. Aunque no es muy popular en la actualidad, en su momento se usó para simplificar la escritura de JavaScript.

#### **Dart**

Aunque no tan común como JavaScript, Dart es otro lenguaje de programación que se usa principalmente en el desarrollo web móvil (a través de Flutter). También se compila a JavaScript para su ejecución en navegadores.

## JavaScript y ECMAScript

JavaScript sigue las especificaciones de **ECMAScript (ES)**, que es un estándar de scripting que define cómo deben implementarse los lenguajes de programación como JavaScript. Cada versión de ECMAScript introduce nuevas características y mejoras en el lenguaje.

### Historia de ECMAScript:

- **ECMAScript 3 (1999):** Fue la primera versión ampliamente adoptada, que introdujo características básicas como expresiones regulares y funciones.
- **ECMAScript 5 (ES5) (2009):** Incluyó mejoras en la manipulación de objetos, propiedades y arrays. Fue la base para muchos proyectos hasta la llegada de ES6.
- **ECMAScript 6 (ES6) (2015):** Introdujo características fundamentales como `let`, `const`, funciones flecha (arrow functions), desestructuración, clases, y módulos, haciendo que JavaScript fuera mucho más fácil de escribir y leer.
- **ECMAScript 6+ (ES2016 en adelante):** A partir de ES6, ECMAScript se actualiza cada año con nuevas mejoras. Algunas características importantes de estas versiones incluyen `async/await`, operadores de propagación (spread/rest), entre otros.

### Clasificación de las versiones de ECMAScript:

- **ES3 (1999):** La primera versión ampliamente adoptada. Implementó las bases de JavaScript.
- **ES5 (2009):** Mejoró la gestión de objetos y arrays, y añadió nuevas características como `strict mode`.
- **ES6 (2015):** Introdujo características como `let`, `const`, funciones flecha, clases y módulos. Estas características hicieron de JavaScript un lenguaje más moderno y fácil de usar.
- **ES7+ (2016 en adelante):** Continuó mejorando el lenguaje con nuevas características, como `async/await` y mejoras en la sintaxis de los arrays y objetos.

### Relación entre JavaScript y ECMAScript

JavaScript es una implementación del estándar ECMAScript. Es decir, las nuevas características que se añaden a JavaScript en versiones posteriores son definidas por el estándar ECMAScript. De esta manera, cuando se dice que JavaScript ha sido "mejorado con ES6", en realidad se está hablando de que JavaScript ahora cumple con las especificaciones de ECMAScript 6, que incluyen nuevas características y funcionalidades.

## b) Aplicar sintaxis moderna de JavaScript, incluyendo variables, funciones y métodos.
En la implementación de JavaScript para este proyecto, se han utilizado características modernas de ES6+ para escribir un código más limpio y eficiente.

- **Uso de `let` y `const` para declarar variables**:
```
const searchInput = document.querySelector('.cabecera__input');
const productosBestsellers = document.querySelectorAll('.bestsellers__productos');
```
Estos son ejemplos sacados del código entregado. En ambos casos se hace uso de ``const`` para declarar constates que no cambian (puesto que así lo he considerado), aunque podrían usarse let en el caso de que las variables fuesen a cambiar (En referencia a los elementos del DOM).

- **Funciones flecha (Arrow functions) para una sintaxis más concisa**:
```
corazon.addEventListener('click', () => {
    corazon.classList.toggle('favorito');
});
```
Este tipo de funciones nos permite realizar una escritura más compacta, aunque legible, de nuetro código, además de evitar cualquier posible problema con el empleo de `this`.

## Conclusión sobre los Lenguajes de Script de Cliente

- JavaScript sigue siendo el lenguaje más importante para el desarrollo web, con soporte amplio para la manipulación del DOM, eventos, y la interacción en tiempo real.
- La evolución de ECMAScript ha hecho que JavaScript sea más potente y fácil de usar. Las versiones más recientes de ECMAScript (como ES6 y versiones posteriores) mejoraron significativamente el lenguaje con nuevas características, como las funciones flecha, las plantillas literales y la desestructuración.
- Otros lenguajes como TypeScript amplían las capacidades de JavaScript con características como el tipado estático, pero a menudo se compilan a JavaScript para su ejecución en el navegador.

<hr>

### Manipulación del DOM

- **Seleccionar y acceder a elementos del documento web utilizando diferentes métodos**:

En JavaScript, la selección de elementos es una de las tareas más comunes cuando se interactúa con el DOM (Document Object Model). Los métodos más utilizados para acceder a los elementos son:

1. `getElementById(id)`: Selecciona el primer elemento que tiene el atributo `id` correspondiente. Es muy eficiente cuando se sabe que solo habrá un elemento con ese `id`.
    
```
const modoNocturnoBtn = document.getElementById('modoNocturnoBtn');
```

2.`querySelector(selector)`: Selecciona el primer elemento que coincide con el selector CSS proporcionado. Es muy versátil y permite seleccionar elementos por `id`, `class`, `tag` o cualquier selector válido de CSS.

```
const searchInput = document.querySelector('.cabecera__input');
console.log(searchInput);
```
    
3.`querySelectorAll(selector)`: Similar a `querySelector`, pero devuelve una lista de nodos de todos los elementos que coinciden con el selector, no solo el primero.

````   
const productosBestsellers = document.querySelectorAll('.bestsellers__productos');
console.log(productosBestsellers);
````

4.`getElementsByClassName(className)`: Selecciona todos los elementos que tienen la clase indicada. Devuelve una colección de nodos que puede ser recorrida con un bucle.

```
const corazones = document.getElementsByClassName('bestsellers__producto-favorito');
console.log(corazones);
````

- **Se han creado y modificado elementos de documentos web, y se han eliminado elementos de documentos web**:

1. Uso de `createElement`:
   
```   
const mensaje = document.createElement('div');
mensaje.classList.add('mensaje');

const texto = document.createElement('p');
texto.textContent = 'Nuestra tienda aún no está disponible';
````
En el primer ejemplo, estamos creando un nuevo elemento, <di>, para posteriormente modificarlo con un mensaje. En el segundo caso, estamos asignado un texto a un elemento ya creado.

2. Uso de `appendChild`:

```
mensaje.appendChild(texto);
mensaje.appendChild(botonCerrar);
mensajeContenedor.appendChild(mensaje);
````
Se usa para agregar un párrafo y un boton dentro de un elemento. Este método asegura que los elementos se añadan de una manera jerárquicca, es decir, respetando una estructura definida.

3. Uso de `removeChild`:

```
botonCerrar.addEventListener('click', () => {
    mensajeContenedor.removeChild(mensaje);
});
````
En este fragmento, se utiliza removeChild para eliminar el mensaje del DOM cuando el usuario hace clic en el botón de cierre. removeChild toma como argumento el nodo que se desea eliminar (en este caso, el mensaje) y lo elimina de su nodo padre (en este caso, mensajeContenedor).

- **Se han realizado modificaciones sobre los estilos de un documento web.**:

1. Uso de `classList.toggle()` para Modificar Estilos Dinámicamente:

```
document.addEventListener("DOMContentLoaded", () => {
    const corazones = document.querySelectorAll('.bestsellers__producto-favorito');

    corazones.forEach(corazon => {
        corazon.addEventListener('click', () => {
            corazon.classList.toggle('favorito');
        });
    });
});
````

En este caso, cuando un usuario hace clic en un icono de "favorito", se agrega o se elimina la clase favorito del elemento. Esto permite cambiar su estilo (por ejemplo, cambiar el color o la apariencia del icono de corazón).

2. Uso de `setAttribute()` para Modificar Propiedades de Estilo Directamente:

```
 if (localStorage.getItem('modoNocturno') === 'activo') {
        document.body.setAttribute('data-theme', 'dark');
        iconoModoNocturno.classList.remove('fa-toggle-off');
        iconoModoNocturno.classList.add('fa-toggle-on');
    } else {
        document.body.setAttribute('data-theme', 'light');
        iconoModoNocturno.classList.remove('fa-toggle-on');
        iconoModoNocturno.classList.add('fa-toggle-off');
    }
````

En este ejemplo, el método cambia el atributo data-theme del body para activar el modo oscuro (cambiando, a su vez, el valor de las variables definidas). Aunque empleo esta función en el código, también podría emplearse style.property, que nos permitiría modificar las propiedades CSS de un elemento directamente.

3. Uso de `classList.add()` para añadir una clase: este método se emplea para añadir una clase a un elemento, lo cual es útil para aplicar estilos o cambiar la apariencia de un elemento de forma dinámica.

```
document.addEventListener("DOMContentLoaded", () => {
    const corazones = document.querySelectorAll('.bestsellers__producto-favorito');

    corazones.forEach(corazon => {
        corazon.addEventListener('click', () => {
            corazon.classList.add('favorito');  // Se añade la clase 'favorito'
        });
    });
});
````

Aquí, cuando un usuario hace clic en un icono de "favorito", se añade la clase favorito al elemento que ha sido clicado. Esto generalmente cambia su estilo (como cambiar el color del icono o agregar un efecto visual).

4. Uso de `classList.remove()` para eliminar una clase:

```
   if (localStorage.getItem('modoNocturno') === 'activo') {
        document.body.setAttribute('data-theme', 'dark');
        iconoModoNocturno.classList.remove('fa-toggle-off'); 
        iconoModoNocturno.classList.add('fa-toggle-on');
````
Esto elimina la clase fa-toggle-off del icono cuando el modo nocturno está activado, creando el efecto de desplazar un botón para activar los modos. 
