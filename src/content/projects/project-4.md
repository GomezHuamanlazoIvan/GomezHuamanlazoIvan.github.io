---
title: SEMANA 04
description: Desarrollo Front-End con JavaScript y TypeScript. Variables, funciones, DOM, canvas y animaciones.
publishDate: 'Nov 02 2024'
isFeatured: true
seo:
  image:
    src: '/project-4.jpg'
    alt: Imagen del proyecto 4
---

# Desarrollo Front-End con JavaScript y TypeScript

En esta semana se profundizó en el desarrollo web utilizando JavaScript y TypeScript, abarcando desde los fundamentos del lenguaje hasta la manipulación avanzada del DOM y la creación de animaciones con canvas.
![Imagen del proyecto 1](/project-4.jpg)
---

## Motores JavaScript

- Los motores JavaScript (como V8 en Chrome, SpiderMonkey en Firefox) interpretan y ejecutan el código JS en el navegador.

---

## Variables y Operadores

- **Declaración de variables:**  
  - `var`, `let`, `const`
  - _Ejemplo:_  
    ```js
    let nombre = "Juan";
    const PI = 3.14;
    ```
- **Operadores:**  
  - Aritméticos: `+`, `-`, `*`, `/`
  - Comparación: `==`, `===`, `!=`, `<`, `>`
  - Lógicos: `&&`, `||`, `!`

---

## Tipos de Datos

- **Números:**  
  ```js
  let edad = 25;
  ```
- **Strings:**  
  ```js
  let saludo = "Hola Mundo";
  ```
- **Objetos y métodos:**  
  ```js
  let persona = { nombre: "Ana", saludar() { return "Hola " + this.nombre; } };
  ```
- **Booleanos:**  
  ```js
  let esActivo = true;
  ```
- **Otros:** null, undefined, arrays, etc.

---

## Estructuras de Control y Bucles

- **Condicionales:**  
  ```js
  if (edad > 18) { /* ... */ } else { /* ... */ }
  ```
- **Bucles:**  
  - `for`, `while`, `do...while`
  - _Ejemplo:_  
    ```js
    for(let i=0; i<5; i++) { console.log(i); }
    ```

---

## Funciones en JavaScript

- **Sintaxis básica:**  
  ```js
  function sumar(a, b) { return a + b; }
  ```
- **Invocación:**  
  `sumar(2, 3);`
- **Funciones anónimas:**  
  ```js
  const saludar = function() { return "Hola"; }
  ```
- **Función objeto:**  
  Las funciones en JS son objetos y pueden tener propiedades.
- **Funciones flecha:**  
  ```js
  const multiplicar = (a, b) => a * b;
  ```
- **Funciones auto invocadas:**  
  ```js
  (function() { console.log("Auto invocada"); })();
  ```
- **Closures:**  
  ```js
  function contador() {
    let num = 0;
    return function() { num++; return num; }
  }
  let miContador = contador();
  miContador(); // 1
  miContador(); // 2
  ```

---

## TypeScript

- Superset de JavaScript que añade tipado estático.
- _Ejemplo:_  
  ```typescript
  let edad: number = 20;
  function saludar(nombre: string): string {
    return "Hola " + nombre;
  }
  ```

---

## Manejo del DOM con JavaScript

- **Seleccionar elementos:**  
  ```js
  let titulo = document.getElementById("titulo");
  let items = document.querySelectorAll(".item");
  ```
- **Modificar estilos y contenido:**  
  ```js
  titulo.textContent = "Nuevo título";
  titulo.style.color = "red";
  ```
- **Eventos:**  
  ```js
  titulo.addEventListener("click", () => alert("¡Clic en el título!"));
  ```

---

## Canvas: Animaciones y Gráficos

- **Canvas:** Permite dibujar gráficos y animaciones en la web.
- _Ejemplo básico:_  
  ```html
  <canvas id="miCanvas" width="200" height="100"></canvas>
  <script>
    let c = document.getElementById("miCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 150, 80);
  </script>
  ```

---

## Laboratorio 04: Animación con JavaScript

En el laboratorio se desarrolló una animación simple utilizando canvas y JavaScript, aplicando los conceptos de variables, funciones, bucles y manipulación del DOM.

---

## Reflexión

Esta semana aprendí a programar con JavaScript y TypeScript, comprendiendo la importancia de las funciones, el manejo del DOM y la creación de animaciones con canvas. Aprendí practicando con ejemplos, resolviendo ejercicios y desarrollando una animación en el laboratorio, lo que me permitió afianzar los conceptos y ver su aplicación real en el desarrollo web moderno.
