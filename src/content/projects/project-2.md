---
title: SEMANA 02
description: Construcción de páginas web con HTML, XML y CSS3. Estructura, etiquetas, DOM, SEO, compatibilidad y diseño responsivo.
publishDate: 'Oct 19 2024'
isFeatured: true
seo:
  image:
    src: '/project-2.jpg'
    alt: Imagen del proyecto 2
---

# Construcción de Páginas Web con HTML, XML y CSS3

En esta semana se abordaron los conceptos y prácticas fundamentales para construir páginas web modernas utilizando HTML, XML y CSS3, así como técnicas de optimización y compatibilidad.
![Imagen del proyecto 2](/project-2.jpg)
---

## Lenguaje Marcado de Hipertexto HTML y Lenguaje Marcado Extensible XML

- **HTML (HyperText Markup Language):** Es el lenguaje principal para estructurar el contenido de la web.  
  _Ejemplo:_  
  ```html
  <h1>Bienvenido a mi página</h1>
  <p>Gomez Huamanlazo Ivan Paul.</p>
  ```

- **XML (eXtensible Markup Language):** Es un lenguaje de marcado flexible para almacenar y transportar datos.  
  _Ejemplo:_  
  ```xml
  <persona>
    <nombre>Paul</nombre>
    <edad>26</edad>
  </persona>
  ```

---

## Estándar Open Web Platform

La Open Web Platform es un conjunto de tecnologías abiertas (HTML, CSS, JavaScript, SVG, etc.) que permiten crear aplicaciones web interoperables y accesibles en cualquier navegador moderno.

---

## Estructura HTML y XML

- **HTML:**  
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Mi Página Web</title>
    </head>
    <body>
      <h1>Hola Mundo</h1>
    </body>
  </html>
  ```
- **XML:**  
  ```xml
  <libro>
    <titulo>Desarrollo Web</titulo>
    <autor>Ivan Gomez</autor>
  </libro>
  ```

---

## Etiquetas principales de HTML5

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<h1>`-`<h6>`, `<p>`, `<img>`, `<a>`, `<ul>`, `<li>`, `<form>`, `<input>`, `<button>`, etc.

---

## Árbol DOM y Renderizado

- **DOM (Document Object Model):** Representa la estructura de la página como un árbol de nodos.
- **Árbol de Nodos:** Cada elemento HTML es un nodo en el árbol.
- **Renderizado de Árbol:** El navegador interpreta el DOM y lo convierte en la visualización de la página.
- **Ciclo de Vida de una Página Web:**  
  1. El navegador solicita la página al servidor.
  2. Recibe el HTML y construye el DOM.
  3. Aplica CSS y JavaScript.
  4. Renderiza la página para el usuario.

---

## Optimización en Motores de Búsqueda (SEO)

- Uso correcto de etiquetas semánticas (`<header>`, `<main>`, `<footer>`, etc.).
- Títulos y descripciones relevantes.
- Uso de atributos `alt` en imágenes.
- URLs amigables.
- Contenido de calidad y bien estructurado.

---

## Compatibilidad entre Navegadores

- Probar el sitio en diferentes navegadores (Chrome, Firefox, Edge, Safari).
- Usar prefijos y propiedades compatibles.
- Validar el código HTML y CSS.
- Evitar funciones experimentales sin soporte.

---

## Diseño de la Página Web con CSS3

- **Sintaxis básica:**  
  ```css
  h1 { color: blue; }
  ```
- **Display:**  
  - `block`, `inline`, `inline-block`
- **Unidades de medida:**  
  - Absolutas: `px`, `cm`, `mm`
  - Relativas: `%`, `em`, `rem`, `vw`, `vh`
- **Flexbox:**  
  - Permite crear diseños flexibles y alineaciones sencillas.
  - _Ejemplo:_  
    ```css
    .contenedor {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```
- **Grid Layout:**  
  - Permite crear estructuras de diseño en dos dimensiones.
  - _Ejemplo:_  
    ```css
    .grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    ```
- **Tipos de position:**  
  - `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Diseño fluido:**  
  - Uso de porcentajes y unidades relativas para adaptarse a diferentes tamaños de pantalla.
- **Diseño web responsivo:**  
  - Uso de media queries para adaptar el diseño a dispositivos móviles y de escritorio.
  - _Ejemplo:_  
    ```css
    @media (max-width: 600px) {
      body { font-size: 14px; }
    }
    ```

---

## Laboratorio 02A: Diseño Flexbox, Fluido y Responsivo

En el laboratorio se practicó la creación de layouts usando flexbox, el diseño fluido con unidades relativas y la adaptación responsiva mediante media queries.

---

## Reflexión

Durante esta semana aprendí a estructurar páginas web utilizando HTML5 y XML, comprendiendo la importancia de las etiquetas semánticas y la estructura del DOM. Aprendí cómo los navegadores procesan y renderizan las páginas, y la relevancia de optimizar para SEO y compatibilidad. Además, experimenté con CSS3, flexbox, grid y diseño responsivo, aplicando estos conceptos en ejercicios prácticos. El aprendizaje fue principalmente práctico, reforzado con ejemplos, documentación oficial y la experimentación en el laboratorio, lo que me permitió afianzar los conceptos y ver su aplicación real en el desarrollo web.
