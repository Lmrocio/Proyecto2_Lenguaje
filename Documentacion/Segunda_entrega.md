# SEGUNDA ENTREGA

## Uso de JavaScript (ES6)

### a) Identificar y clasificar los lenguajes de script de cliente relacionados con la web, destacando las características de JavaScript

---

## Lenguajes de Script de Cliente para la Web

Los lenguajes de script de cliente son aquellos que se ejecutan directamente en el navegador del usuario. Estos lenguajes permiten crear interactividad, manipulación del DOM (Document Object Model), validación de formularios, y muchas otras funcionalidades sin necesidad de recargar la página o hacer peticiones al servidor para realizar cambios en la interfaz.

### Lenguajes más comunes:

#### **JavaScript**
Es el lenguaje de scripting más utilizado en la web. Permite a los desarrolladores crear páginas web interactivas y dinámicas, modificando elementos HTML y CSS en tiempo real sin necesidad de recargar la página.

**Características clave de JavaScript:**
- Es un lenguaje interpretado, lo que significa que se ejecuta directamente en el navegador.
- Es dinámico y soporta programación orientada a objetos, programación funcional, y programación basada en eventos.
- JavaScript permite la manipulación del DOM, eventos, peticiones HTTP (AJAX), entre otros.

#### **TypeScript**
Es un _superset_ de JavaScript que introduce tipado estático opcional, lo que permite detectar errores en tiempo de compilación antes de ejecutar el código. Es utilizado principalmente en proyectos grandes debido a su robustez y facilidad para manejar grandes volúmenes de código.

#### **CoffeeScript**
Es un lenguaje que compila a JavaScript y proporciona una sintaxis más sencilla y concisa que la de JavaScript. Aunque no es muy popular en la actualidad, en su momento se usó para simplificar la escritura de JavaScript.

#### **Dart**
Aunque no tan común como JavaScript, Dart es otro lenguaje de programación que se usa principalmente en el desarrollo web móvil (a través de Flutter). También se compila a JavaScript para su ejecución en navegadores.

---

## JavaScript y ECMAScript

JavaScript sigue las especificaciones de **ECMAScript (ES)**, que es un estándar de scripting que define cómo deben implementarse los lenguajes de programación como JavaScript. Cada versión de ECMAScript introduce nuevas características y mejoras en el lenguaje.

### Historia de ECMAScript:

- **ECMAScript 3 (1999):** Fue la primera versión ampliamente adoptada, que introdujo características básicas como expresiones regulares y funciones.
- **ECMAScript 5 (ES5) (2009):** Incluyó mejoras en la manipulación de objetos, propiedades y arrays. Fue la base para muchos proyectos hasta la llegada de ES6.
- **ECMAScript 6 (ES6) (2015):** Introdujo características fundamentales como `let`, `const`, funciones flecha (_arrow functions_), desestructuración, clases, y módulos, haciendo que JavaScript fuera mucho más fácil de escribir y leer.
- **ECMAScript 6+ (ES2016 en adelante):** A partir de ES6, ECMAScript se actualiza cada año con nuevas mejoras. Algunas características importantes de estas versiones incluyen `async/await`, operadores de propagación (_spread/rest_), entre otros.

### Clasificación de las versiones de ECMAScript:

- **ES3 (1999):** La primera versión ampliamente adoptada. Implementó las bases de JavaScript.
- **ES5 (2009):** Mejoró la gestión de objetos y arrays, y añadió nuevas características como `strict mode`.
- **ES6 (2015):** Introdujo características como `let`, `const`, funciones flecha, clases y módulos. Estas características hicieron de JavaScript un lenguaje más moderno y fácil de usar.
- **ES7+ (2016 en adelante):** Continuó mejorando el lenguaje con nuevas características, como `async/await` y mejoras en la sintaxis de los arrays y objetos.

---

## Relación entre JavaScript y ECMAScript

JavaScript es una implementación del estándar **ECMAScript**. Es decir, las nuevas características que se añaden a JavaScript en versiones posteriores son definidas por el estándar ECMAScript.

De esta manera, cuando se dice que JavaScript ha sido "mejorado con ES6", en realidad se está hablando de que JavaScript ahora cumple con las especificaciones de ECMAScript 6, que incluyen nuevas características y funcionalidades.


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

En este proyecto he aplicado los conocimientos adquiridos sobre JavaScript moderno (ES6+) y manipulación del DOM, cumpliendo con los criterios de evaluación del RA3. A continuación, explico cómo se aplican los distintos criterios en el código desarrollado.

---

#### 1. **Selección y acceso a elementos del documento web (Criterio 3.c)**

He utilizado métodos como `querySelector` y `querySelectorAll` para seleccionar distintos elementos del DOM de forma precisa y eficiente. Por ejemplo:

- `const searchInput = document.querySelector('.cabecera__input');` me permite acceder al input de búsqueda.
- `const productosBestsellers = document.querySelectorAll('.bestsellers__productos');` selecciona todos los productos destacados.

Estos métodos se han elegido por su flexibilidad y por permitir seleccionar elementos mediante selectores CSS, lo que simplifica el código y mejora la legibilidad.

---

#### 2. **Creación y modificación dinámica de elementos (Criterio 3.d)**

He utilizado `createElement`, `appendChild` y `textContent` para crear dinámicamente un mensaje que informa al usuario de que la tienda aún no está disponible. Este mensaje solo aparece cuando el usuario empieza a escribir en el input de búsqueda.

Dentro del evento `input.addEventListener('input', ...)`, se lanza una función llamada `mostrarMensaje()` que:

- Crea un nuevo `div` con la clase `.mensaje`.
- Añade un `p` con el texto de aviso.
- Añade un botón para cerrar el mensaje.

```js
    const mensaje = document.createElement('div');
    mensaje.classList.add('mensaje');
    const texto = document.createElement('p');
    texto.textContent = 'Nuestra tienda aún no está disponible';
```

Este enfoque demuestra el uso correcto de la manipulación del DOM para añadir contenido dinámico.

---

#### 3. **Eliminación de elementos del DOM (Criterio 3.e)**

Cuando el usuario borra el contenido del input, o cuando pulsa el botón "X" del mensaje, este se elimina del DOM usando `removeChild`.

Ejemplo: 

```js
    mensajeContenedor.removeChild(mensaje);
```

Este método permite mantener el DOM limpio y evitar duplicaciones o errores visuales. Además, se verifica previamente que el mensaje existe antes de eliminarlo, lo que garantiza una gestión eficiente de los elementos.

---

#### 4. **Modificación de estilos desde JavaScript (Criterio 3.f)**

Se ha utilizado `classList.toggle` para modificar dinámicamente los estilos de los elementos interactivos. En concreto, en la sección de productos favoritos, al hacer clic sobre el icono del corazón (`.bestsellers__producto-favorito`), se añade o elimina la clase `.favorito`, cambiando su apariencia.

Ejemplo de uso:  

```js
    corazon.classList.toggle('favorito');
```

Esto mejora la experiencia de usuario y demuestra el uso correcto de la manipulación de clases en respuesta a eventos.

---

#### 5. **Uso de JavaScript moderno y buenas prácticas (Criterio 3.b)**

En todo el código se ha utilizado sintaxis moderna de ES6+:

- Declaración de variables con `const` y `let`.
- Uso de `arrow functions` en los `addEventListener`, como por ejemplo:
  
```js
      corazones.forEach(corazon => {
          corazon.addEventListener('click', () => {
              corazon.classList.toggle('favorito');
          });
      });
```

- Uso de `template literals` donde ha sido necesario (en otras partes del proyecto).
- Código indentado correctamente, estructurado en bloques con comentarios, y con eventos bien definidos que mejoran la legibilidad.

---

En resumen, este código demuestra que se han aplicado correctamente los métodos de selección, creación, eliminación y modificación de elementos del DOM, junto con buenas prácticas y sintaxis moderna de JavaScript. Todo está orientado a generar una experiencia de usuario dinámica, clara y bien estructurada.

