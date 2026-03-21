#  Sistema de Pedidos QR — Proyecto Web y App Móvil

## Índice

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Diseño](#diseño)
   - [Descripción general](#11-descripción-general)
   - [Diseño de la base de datos](#12-diseño-de-la-base-de-datos)
3. [Implementación](#implementación)

---

## Descripción del proyecto

Este proyecto tiene como objetivo demostrar los conocimientos adquiridos, afianzándolos mediante un desarrollo personal, al tiempo que se exploran nuevas tecnologías necesarias para su realización.

El proyecto consiste en la creación de un **sistema de pedidos mediante códigos QR** para un restaurante o cafetería.

El desarrollo comenzará con el diseño general, partiendo del diseño de la base de datos con un modelo relacional hasta llegar al diseño del front-end con **Figma**.

---

## Diseño

### 1.1) Descripción general

> *(En desarrollo)*

---

### 1.2) Diseño de la base de datos

Se utilizará un diagrama relacional para definir la estructura de las tablas, sus relaciones y los datos que se irán almacenando.

**Paso 1 — Tablas y atributos principales**

Se nombran las tablas con sus principales atributos y su clave primaria (PK).
![Diagrama de tablas](docs/db-1-1.jpg)


**Paso 2 — Tipos de datos**

A continuación se define cómo se categorizan los datos:

| Campo | Tipo |
|---|---|
| `id` (de todas las tablas) | Entero (`INT`) |
| `precios`, `cantidad` | Entero (`INT`) |
| `codigo_qr`, `imagen` | Cadena de texto (enlace a JSON o ruta de archivo) |
| `nombre`, `descripcion` | Cadena de caracteres (`VARCHAR` / `TEXT`) |
| `fecha` | Fecha (`DATE`) |
| `hora` | Hora (`TIME`) |
| `disponibilidad` | Booleano (`BOOLEAN`) |
| `categoria` | Entero de rango fijo (ver tabla de categorías) |
| `estado` (Pedido) | Booleano — indica si está completado o no |
| `estado` (Cuenta) | Booleano — pagado o en proceso |

**Tabla de categorías:**

| Valor | Categoría |
|---|---|
| `0` | Entrantes |
| `1` | Principales |
| `2` | Postres |
| `3` | Bebidas |

**Paso 3 — Foreign Keys**

Por último, se establecen las relaciones mediante **Foreign Keys** para vincular las tablas entre sí.
![Diagrama relacional](docs/db-1-3.jpg)

### 1.2) Diseño de la interfaz de usuario
> *(En desarrollo)*
### 1.3) Diseño backend
> *(En desarrollo)*
### 1.4) Diseño de la app móvil
> *(En desarrollo)*

## Implementación

> *(En desarrollo)*

---

## 🛠️ Tecnologías

- **Base de datos:** Modelo relacional
- **Diseño UI/UX:** Figma
- **Integración QR:** Códigos QR enlazados a la carta digital