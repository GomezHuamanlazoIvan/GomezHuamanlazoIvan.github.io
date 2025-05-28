---
title: SEMANA 07
description: Uso de Hooks en Framework JS useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo y hooks personalizados.
publishDate: 'Nov 23 2024'
isFeatured: true
seo:
  image:
    src: '/project-7.jpg'
    alt: Imagen del proyecto 7
---

# Uso de Hooks en Framework JS

Esta semana se profundizó en el uso de hooks en frameworks como React, permitiendo gestionar el estado, efectos secundarios, contexto, referencias y optimización de componentes funcionales.

![Imagen del proyecto 7](/project-7.jpg)

---

## Principales Hooks

- **useState:** Permite manejar el estado en componentes funcionales.
  ```jsx
  const [contador, setContador] = useState(0);
  ```
- **useEffect:** Permite ejecutar efectos secundarios (fetch, suscripciones, etc.) en el ciclo de vida del componente.
  ```jsx
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);
  ```
- **useContext:** Permite acceder a valores globales definidos en un contexto.
  ```jsx
  const valor = useContext(MiContexto);
  ```
- **useRef:** Permite crear referencias a elementos del DOM o valores persistentes.
  ```jsx
  const inputRef = useRef(null);
  ```
- **useReducer:** Permite manejar estados complejos con lógica de reducción.
  ```jsx
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  ```
- **useCallback:** Memoriza funciones para evitar recrearlas en cada render.
  ```jsx
  const handleClick = useCallback(() => { /* ... */ }, []);
  ```
- **useMemo:** Memoriza valores calculados para optimizar el rendimiento.
  ```jsx
  const valorCalculado = useMemo(() => calcularAlgo(data), [data]);
  ```

---

## Hooks Personalizados

- Permiten reutilizar lógica de estado y efectos en diferentes componentes.
  ```jsx
  function useContador(inicial = 0) {
    const [valor, setValor] = useState(inicial);
    const incrementar = () => setValor(v => v + 1);
    return [valor, incrementar];
  }
  ```

---

## Evaluación de Logro 01

Se realizó una evaluación práctica donde se aplicaron los conocimientos sobre hooks, gestionando estados, efectos y contexto en una aplicación real.

---

## Laboratorio 06: Uso de Hooks

En el laboratorio se desarrollaron ejercicios prácticos utilizando los principales hooks y creando hooks personalizados para resolver problemas comunes en el desarrollo de aplicaciones.

---

## Reflexión

Esta semana aprendí a utilizar los hooks de React para gestionar el estado, efectos secundarios, contexto y referencias, así como a optimizar componentes y crear hooks personalizados. Aprendí mediante la práctica, resolviendo ejercicios y aplicando los conceptos en el laboratorio y la evaluación, lo que me permitió consolidar el uso de hooks en el desarrollo Front-End moderno.
