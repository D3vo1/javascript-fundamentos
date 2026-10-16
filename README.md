# 📘 JavaScript — Fundamentos, POO y algoritmos

![Pruebas](https://github.com/D3vo1/javascript-fundamentos/actions/workflows/tests.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A520-339933?logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)

Ejercicios de un curso de JavaScript (enero de 2026), organizados por tema: desde operadores y ciclos hasta recursión, programación orientada a objetos y algoritmos de álgebra lineal. Cada archivo se puede ejecutar por separado y todas las funciones tienen pruebas automatizadas con el *test runner* nativo de Node.

## 📂 Contenido

| Tema | Archivo | Qué se practica |
|---|---|---|
| **1. Fundamentos** | [`operadores-y-condicionales.js`](01-fundamentos/operadores-y-condicionales.js) | `==` vs `===`, operadores lógicos, ternario, `if/else`, `switch(true)` con rangos |
| | [`ciclos-arreglos-y-matrices.js`](01-fundamentos/ciclos-arreglos-y-matrices.js) | `while`, `do…while`, `for`, arreglos, matrices, sumas y promedios |
| **2. Funciones y recursión** | [`recursion.js`](02-funciones-y-recursion/recursion.js) | Recorrer y construir listas con recursión, parámetros por defecto, desestructuración |
| | [`torres-de-hanoi.js`](02-funciones-y-recursion/torres-de-hanoi.js) | Torres de Hanói **recursivo e iterativo** (2ⁿ − 1 movimientos) |
| **3. Objetos y clases** | [`objetos.js`](03-objetos-y-clases/objetos.js) | Objetos literales, getters/setters, funciones constructoras, `prototype`, `for…in`, JSON, `call`/`apply` |
| | [`clases-y-herencia.js`](03-objetos-y-clases/clases-y-herencia.js) | Clases ES6, `extends`/`super`, sobrescritura de métodos y `toString` |
| **4. Álgebra lineal con clases** | [`matrices.js`](04-algebra-lineal-con-clases/matrices.js) | Transpuesta, producto de matrices, **Gauss-Jordan con pivoteo parcial**, Fibonacci |

## 🚀 Cómo ejecutarlo

Requiere Node.js 20 o superior. No hay dependencias que instalar.

```bash
# Ejecutar cualquier ejercicio
node 02-funciones-y-recursion/torres-de-hanoi.js 5
node 04-algebra-lineal-con-clases/matrices.js

# Correr todas las pruebas
npm test
```

## 🧪 Pruebas

[`tests/ejercicios.test.js`](tests/ejercicios.test.js) usa `node:test` y `node:assert`, sin librerías externas. Entre otras cosas verifica que:

- ambas versiones de Torres de Hanói dejan todos los discos en el poste destino, para 1 a 8 discos;
- Gauss-Jordan resuelve sistemas de 2×2 y 3×3, incluido uno con cero en la posición del pivote;
- el producto de matrices rechaza dimensiones incompatibles.

GitHub Actions corre las pruebas en cada *push*.

## 🛠️ Tecnologías

JavaScript (ES2022) · Node.js · `node:test` · GitHub Actions

---

Desarrollado por **David Melgoza** ([@D3vo1](https://github.com/D3vo1)).
