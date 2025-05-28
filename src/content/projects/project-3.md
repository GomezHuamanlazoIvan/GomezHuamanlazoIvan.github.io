---
title: SEMANA 03
description: Desarrollo de páginas web Front-End con Bootstrap y Tailwind CSS. Layouts, componentes y práctica calificada.
publishDate: 'Oct 26 2024'
isFeatured: true
seo:
  image:
    src: '/project-3.jpg'
    alt: Imagen del proyecto 3
---

# Desarrollo Front-End con Bootstrap y Tailwind CSS

En esta semana se trabajó en el desarrollo de páginas web utilizando dos de las librerías CSS más populares: Bootstrap y Tailwind CSS, explorando layouts, componentes y buenas prácticas de diseño.
![Imagen del proyecto 3](/project-3.jpg)
---

## Desarrollo con Bootstrap

- **Bootstrap:** Es una librería CSS que facilita la creación de sitios web responsivos y modernos mediante clases predefinidas.
- **Layout:**  
  - Uso de contenedores (`.container`), filas (`.row`) y columnas (`.col`).
  - _Ejemplo:_  
    ```html
    <div class="container">
      <div class="row">
        <div class="col">Columna 1</div>
        <div class="col">Columna 2</div>
      </div>
    </div>
    ```
- **Componentes:**  
  - Botones, tarjetas, alertas, barras de navegación, formularios, modales, etc.
  - _Ejemplo:_  
    ```html
    <button class="btn btn-primary">Botón Bootstrap</button>
    ```

---

## Desarrollo con Tailwind CSS

- **Tailwind CSS:** Es una librería de utilidades CSS que permite diseñar directamente en el HTML usando clases utilitarias.
- **Tipografía y estilos:**  
  - Font, line-height, text color, background, borders, efectos, tablas, espaciado.
  - _Ejemplo:_  
    ```html
    <h1 class="text-2xl font-bold text-blue-600">Título con Tailwind</h1>
    <div class="bg-gray-100 border p-4">Caja con fondo y borde</div>
    ```
- **Layout:**  
  - Clases como `container`, `columns`, `break`, `box`, `block`, `inline-block`, `flex`, `grid`, `relative`, `absolute`.
  - _Ejemplo:_  
    ```html
    <div class="container mx-auto">
      <div class="flex flex-row gap-4">
        <div class="basis-1/2">Columna 1</div>
        <div class="basis-1/2">Columna 2</div>
      </div>
    </div>
    ```
- **Flexbox:**  
  - Clases para dirección (`flex-row`, `flex-col`), envoltura (`flex-wrap`), crecimiento (`flex-grow`), reducción (`flex-shrink`).
  - _Ejemplo:_  
    ```html
    <div class="flex flex-row flex-wrap">
      <div class="flex-grow">Elemento flexible</div>
    </div>
    ```

---

## Application UI con Tailwind

- **Elementos:**  
  - Avatares, badges, dropdowns, botones, grupos de botones.
  - _Ejemplo:_  
    ```html
    <span class="inline-block bg-green-200 text-green-800 px-2 rounded-full">Badge</span>
    <button class="btn btn-primary">Botón</button>
    ```
- **Shells y Layouts:**  
  - Encabezados, navegación, listas, formularios, feedback, overlays, componentes reutilizables.
  - _Ejemplo:_  
    ```html
    <header class="bg-blue-600 text-white p-4">Encabezado</header>
    <nav class="flex gap-4">
      <a href="#" class="text-blue-600">Inicio</a>
      <a href="#" class="text-blue-600">Contacto</a>
    </nav>
    ```

---

## Práctica Calificada 03

Durante la práctica se desarrolló un sitio web aplicando los conceptos de Bootstrap y Tailwind CSS, creando layouts responsivos, utilizando componentes y aplicando utilidades para lograr un diseño atractivo y funcional.

---

## Reflexión

Esta semana aprendí a utilizar Bootstrap y Tailwind CSS para crear sitios web modernos y responsivos. Comprendí la diferencia entre una librería de componentes y una de utilidades, y cómo ambas pueden acelerar el desarrollo Front-End. Aprendí practicando con ejemplos, explorando la documentación oficial y realizando la práctica calificada, lo que me permitió afianzar los conceptos y aplicarlos en un proyecto real.
