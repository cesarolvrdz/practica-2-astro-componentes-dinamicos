# Práctica 2 - Componentes Dinámicos en Astro

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

> **Proyecto académico** desarrollado para demostrar el uso de componentes dinámicos y estructura modular en Astro.

## Tabla de Contenido

- [Demo](#demo)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura](#estructura-del-proyecto)
- [Componentes](#componentes-principales)
- [Capturas](#capturas-de-pantalla)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)

## Demo

**[Ver Demo en Vivo](https://cesarolvrdz.github.io/practica-2-astro-componentes-dinamicos/)**

## Características

- **Componentes Dinámicos**: Sistema modular con props reutilizables
- **Datos Estructurados**: Gestión centralizada de información de proyectos
- **Renderizado Automático**: Generación de contenido mediante bucles
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **UI Moderna**: Sistema de diseño coherente con gradientes y animaciones
- **Filtros Interactivos**: JavaScript vanilla para filtrado por categorías
- **Navegación Dinámica**: Estados activos y menú hamburger en móvil

## Tecnologías

- **Framework**: [Astro 5.x](https://astro.build/)
- **Lenguajes**: JavaScript, TypeScript, HTML5, CSS3
- **Arquitectura**: Componentes modulares y datos estructurados
- **Styling**: CSS moderno con variables y sistema de grid
- **Assets**: Imágenes SVG vectoriales personalizadas

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/cesarolvrdz/practica-2-astro-componentes-dinamicos.git

# Navegar al directorio
cd practica-2-astro-componentes-dinamicos

# Instalar dependencias
npm install

# Ejecutar en desarrollo  
npm run dev
```

## Uso

```bash
# Desarrollo
npm run dev          # http://localhost:4321

# Producción
npm run build        # Generar build
npm run preview      # Vista previa del build
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.astro          # Navegación principal
│   ├── ProjectCard.astro     # Componente dinámico de proyectos
│   └── Footer.astro          # Pie de página
├── data/
│   └── proyectos.js          # Datos estructurados (5 proyectos)
├── layouts/
│   └── Layout.astro          # Layout base con estilos globales
├── pages/
│   ├── index.astro           # Página de inicio
│   ├── proyectos.astro       # Lista de proyectos (renderizado dinámico)
│   ├── contacto.astro        # Formulario de contacto
│   └── acerca.astro          # Información personal
└── public/
    └── images/               # Imágenes SVG de proyectos
```

## Componentes Principales

### ProjectCard.astro
Componente dinámico que recibe props y renderiza tarjetas de proyectos:

```astro
<ProjectCard
  titulo={proyecto.titulo}
  descripcion={proyecto.descripcion}
  categoria={proyecto.categoria}
  tecnologias={proyecto.tecnologias}
  estado={proyecto.estado}
  // ... más props
/>
```

### Datos Estructurados
Sistema centralizado de gestión de proyectos:

```javascript
// src/data/proyectos.js
export const proyectos = [
  {
    id: 1,
    titulo: "Portfolio Personal",
    descripcion: "Sitio web desarrollado con Astro...",
    categoria: "Desarrollo Web",
    tecnologias: ["Astro", "CSS", "JavaScript"],
    estado: "Completado"
  }
  // ... 4 proyectos más
];
```

## Capturas de Pantalla

### Página de Inicio
![Página de Inicio](https://via.placeholder.com/800x400/667eea/ffffff?text=Página+de+Inicio)

### Proyectos (Renderizado Dinámico)  
![Proyectos](https://via.placeholder.com/800x400/f093fb/ffffff?text=Proyectos+Dinámicos)

### Vista Móvil
![Responsive](https://via.placeholder.com/400x600/764ba2/ffffff?text=Vista+Móvil)

## Aprendizajes

### Conceptos Aplicados

- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Props Dinámicas**: Paso eficiente de datos entre componentes
- **Separación de Responsabilidades**: Datos independientes de la presentación
- **Renderizado por Bucles**: Automatización de generación de contenido
- **Responsive Design**: Diseño adaptativo con CSS Grid/Flexbox

### Problemas Resueltos

- ✅ Gestión de estados activos en navegación
- ✅ Sistema de filtrado eficiente con JavaScript
- ✅ Reutilización de estilos mediante variables CSS
- ✅ Optimización de rendimiento en componentes

## Autor

**César Olivares**
- GitHub: [@cesarolvrdz](https://github.com/cesarolvrdz)
- LinkedIn: [cesar-olivares](https://linkedin.com/in/cesar-olivares)
- Email: cesar.olivares@ejemplo.com

---

### Notas del Proyecto

Este proyecto fue desarrollado como parte de la **Práctica 2** del curso de Desarrollo Web, demostrando competencias en:

- Arquitectura de componentes con Astro
- Gestión de datos estructurados  
- Renderizado dinámico y reutilización de código
- Diseño responsive y moderno
- Documentación técnica profesional

**Si te gustó este proyecto, dale una estrella!**