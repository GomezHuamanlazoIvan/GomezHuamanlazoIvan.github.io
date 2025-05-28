---
title: SEMANA 06
description: Aplicaciones con eventos, condicionales, bucles y consumo de APIs en Framework JS.
publishDate: 'Nov 16 2024'
isFeatured: true
seo:
  image:
    src: '/project-6.jpg'
    alt: Imagen del proyecto 6
---

# Aplicaciones con Eventos, Condicionales y Bucles en Framework JS

Esta semana se enfocó en el desarrollo de aplicaciones interactivas utilizando un framework JS (como React), trabajando con eventos, renderizado condicional, bucles, formularios y consumo de APIs.
![Imagen del proyecto 1](/project-6.jpg)
---

## Eventos en Framework JS

- Los eventos permiten responder a acciones del usuario, como clics, cambios en formularios, etc.
  ```jsx
  <button onClick={() => alert('¡Clic!')}>Haz clic</button>
  ```

---

## Renderizado Condicional

- Permite mostrar u ocultar elementos según condiciones.
  ```jsx
  {isLoggedIn ? <p>Bienvenido</p> : <p>Por favor inicia sesión</p>}
  ```

---

## Renderizado Iterativo (Listas)

- Se utiliza para mostrar listas de elementos a partir de un array.
  ```jsx
  const items = ['Manzana', 'Banana', 'Naranja'];
  <ul>
    {items.map((item, idx) => <li key={idx}>{item}</li>)}
  </ul>
  ```

---

## Formularios y Routing

- **Formularios:**  
  - Manejo de inputs, estados y envío de datos.
    ```jsx
    const [nombre, setNombre] = useState('');
    <input value={nombre} onChange={e => setNombre(e.target.value)} />
    ```
- **Routing:**  
  - Navegación entre páginas usando librerías como React Router.
    ```jsx
    import { BrowserRouter, Route, Link } from 'react-router-dom';
    ```

---

## Consumo de APIs

- **Promesas y async/await:**  
  - Permiten manejar operaciones asíncronas, como obtener datos de una API.
    ```js
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => console.log(data));
    // Con async/await
    async function obtenerDatos() {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
      console.log(data);
    }
    ```
- **Axios:**  
  - Librería para hacer peticiones HTTP de forma sencilla.
    ```js
    import axios from 'axios';
    axios.get('https://api.example.com/data')
      .then(res => console.log(res.data));
    ```

---

## Laboratorio 06A: Eventos y Renderizado Condicional e Iterativo con Datos de una API

En el laboratorio se desarrolló una aplicación que responde a eventos del usuario, muestra información de manera condicional e iterativa, y consume datos de una API utilizando promesas y async/await.

---

## Reflexión

Esta semana aprendí a manejar eventos, condicionales y bucles en aplicaciones con framework JS, así como a consumir APIs externas y manejar datos asíncronos. Aprendí practicando con ejemplos, resolviendo ejercicios y desarrollando una aplicación en el laboratorio, lo que me permitió consolidar los conceptos y aplicarlos en proyectos reales.
