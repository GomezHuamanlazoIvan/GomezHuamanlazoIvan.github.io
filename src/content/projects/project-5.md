---
title: SEMANA 05
description: Desarrollo de aplicaciones FrontEnd con Framework JS, componentes, estilos y props.
publishDate: 'Nov 09 2024'
isFeatured: true
seo:
  image:
    src: '/project-5.jpg'
    alt: Imagen del proyecto 5
---

# Desarrollo FrontEnd con Framework JS

Esta semana se centró en el desarrollo de aplicaciones FrontEnd utilizando un framework de JavaScript moderno (como React), explorando su estructura, componentes, estilos y la gestión de datos entre componentes.
![Imagen del proyecto 1](/project-5.jpg)
---

## Estructura y Operación de un Framework JS

- Los frameworks JS como React, Vue o Angular permiten crear aplicaciones web dinámicas y escalables.
- **Client Side Rendering (CSR):** El renderizado ocurre en el navegador del usuario, mejorando la experiencia y velocidad de interacción.

---

## Gestión de Dependencias y Herramientas

- Uso de gestores de paquetes como **npm** o **yarn** para instalar librerías y dependencias.
- Herramientas como **Create React App**, **Vite** o **Next.js** facilitan la creación y configuración de proyectos.

---

## Desarrollo Basado en Componentes

- **Componentes:** Unidades reutilizables de interfaz.
- **JSX:** Sintaxis que permite escribir HTML dentro de JavaScript (usado en React).
  ```jsx
  function Saludo() {
    return <h1>Hola Mundo</h1>;
  }
  ```
- **Props:** Permiten pasar datos a los componentes.
  ```jsx
  function Saludo(props) {
    return <h1>Hola, {props.nombre}</h1>;
  }
  ```
- **Children:** Permiten anidar contenido dentro de un componente.
  ```jsx
  function Contenedor({ children }) {
    return <div>{children}</div>;
  }
  ```

---

## Utilización de Estilos en Framework JS

- **Styles inline:**  
  ```jsx
  <div style={{ color: 'red', fontSize: '20px' }}>Texto rojo</div>
  ```
- **Style Sheets:**  
  - Importar archivos CSS tradicionales.
    ```jsx
    import './App.css';
    ```
- **CSS Modules:**  
  - Permiten estilos locales a cada componente.
    ```jsx
    import styles from './App.module.css';
    <div className={styles.titulo}>Título</div>
    ```
- **Styled Components:**  
  - Librería para escribir CSS en JS.
    ```jsx
    import styled from 'styled-components';
    const Boton = styled.button`background: blue; color: white;`;
    ```
- **Framework CSS:**  
  - Integrar Tailwind, Bootstrap u otros dentro del framework.

---

## Laboratorio 05A: Props y Children

En el laboratorio se practicó el paso de datos entre componentes usando props y children, mostrando la información en un componente hijo y reforzando el desarrollo basado en componentes.

---

## Reflexión

Esta semana aprendí a estructurar aplicaciones FrontEnd con un framework JS, comprendiendo la importancia de los componentes, el paso de datos con props y children, y las distintas formas de aplicar estilos. Aprendí mediante la práctica, explorando ejemplos y realizando el laboratorio, lo que me permitió afianzar los conceptos y aplicarlos en proyectos reales.
