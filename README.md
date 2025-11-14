```

## 🔧 Personalización

### Agregar Nuevos Proyectos
1. Editar `src/data/proyectos.js`
2. Agregar objeto con la estructura requerida
3. Los cambios se reflejan automáticamente

### Modificar Estilos
- Variables CSS globales en `src/layouts/Layout.astro`
- Estilos específicos en cada componente/página
- Sistema de colores y espaciados centralizados

## 📚 Reflexiones Técnicas

### 1. ¿En qué se diferencia un componente estático de uno dinámico?

**Componente Estático:**
- Contiene información fija y predefinida
- No recibe props externas
- Siempre renderiza el mismo contenido
- Ejemplo: Un footer con información de copyright

**Componente Dinámico:**
- Recibe datos através de props
- Puede renderizar contenido diferente según los datos recibidos
- Reutilizable en múltiples contextos
- Ejemplo: `ProjectCard` que muestra diferentes proyectos según las props

### 2. ¿Qué ventajas ofrece manejar datos externos en lugar de escribir el contenido directamente en la página?

**Ventajas principales:**

- **Mantenibilidad**: Cambiar datos en un solo lugar actualiza toda la aplicación
- **Escalabilidad**: Fácil agregar/quitar elementos sin modificar componentes
- **Reutilización**: Los mismos datos pueden usarse en diferentes páginas/componentes
- **Separación de responsabilidades**: Datos separados de la presentación
- **Facilidad de testing**: Datos aislados son más fáciles de probar
- **Futuro desarrollo**: Preparado para conectar con APIs o bases de datos

**Ejemplo práctico:**
```javascript
// En lugar de hardcodear en cada página:
<h3>Portfolio Personal</h3>
<p>Sitio web desarrollado con Astro...</p>

// Usamos datos centralizados:
{proyectos.map(proyecto => (
  <ProjectCard {...proyecto} />
))}
```

### 3. ¿Cómo aplicarías este mismo enfoque si tuvieras que mostrar datos provenientes de una base de datos real?

**Migración a datos reales:**

1. **Reemplazar archivo estático**:
```javascript
// Antes: src/data/proyectos.js
export const proyectos = [...]

// Después: src/api/proyectos.js
export async function getProyectos() {
  const response = await fetch('API_ENDPOINT/proyectos');
  return response.json();
}
```

2. **Actualizar componentes**:
```astro
---
import { getProyectos } from '../api/proyectos.js';
const proyectos = await getProyectos();
---
```

3. **Beneficios adicionales**:
- Datos actualizados en tiempo real
- Gestión de estado complejo
- Paginación y filtrado en servidor
- Múltiples usuarios y permisos

4. **Consideraciones**:
- Manejo de errores de red
- Estados de carga (loading, error)
- Cache para optimizar rendimiento
- Validación de datos recibidos

## 🎯 Problemas Encontrados y Soluciones

### 1. **Gestión de Estados Activos en Navegación**
**Problema**: Mantener el estado activo correcto en el menú de navegación.
**Solución**: Prop `currentPage` en el Header que se compara con las rutas definidas.

### 2. **Responsive Design Complejo**
**Problema**: Diferentes layouts en distintos tamaños de pantalla.
**Solución**: Sistema de grid responsivo con breakpoints bien definidos y mobile-first approach.

### 3. **Reutilización de Estilos**
**Problema**: Repetición de estilos similares en diferentes componentes.
**Solución**: Variables CSS globales y clases utilitarias en el layout principal.

### 4. **Rendimiento en Filtros**
**Problema**: Filtrado de proyectos podría ser lento con muchos elementos.
**Solución**: JavaScript eficiente con métodos de array optimizados y clases CSS para show/hide.

## 🔮 Futuras Mejoras

- **CMS Integration**: Conectar con un headless CMS para gestión de contenido
- **SEO Optimization**: Meta tags dinámicos y sitemap automático
- **Performance**: Lazy loading para imágenes y optimización de assets
- **Accessibility**: Mejorar la accesibilidad con ARIA labels y navegación por teclado
- **Testing**: Implementar tests unitarios y de integración
- **Internationalization**: Soporte multi-idioma

## 👨‍💻 Autor

Desarrollado como parte de la Práctica 2 del curso de Desarrollo Web 2.

**Características demostradas:**
- Arquitectura modular con Astro
- Componentes dinámicos y reutilizables  
- Gestión de datos estructurados
- Diseño responsive y moderno
- Navegación funcional entre páginas
- Documentación técnica completa

---

*Este proyecto demuestra competencias en desarrollo frontend moderno, arquitectura de componentes, y mejores prácticas de documentación técnica.*

### 🎯 Objetivos Cumplidos

- ✅ **Componentes modulares y reutilizables**: Creación de componentes dinámicos que reciben props
- ✅ **Contenido dinámico**: Generación automática de contenido desde datos estructurados
- ✅ **Props y bucles**: Implementación de renderizado mediante iteraciones
- ✅ **Navegación interna**: Sistema de rutas conectadas entre páginas
- ✅ **Documentación técnica**: README completo con reflexiones

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro    # Navegación principal con estado activo
│   ├── ProjectCard.astro # Tarjeta de proyecto (componente dinámico)
│   └── Footer.astro    # Pie de página
├── data/               # Datos estructurados
│   └── proyectos.js    # Array de 5 proyectos con funciones helper
├── layouts/            # Layouts base
│   └── Layout.astro    # Layout principal con estilos globales
├── pages/              # Páginas del sitio
│   ├── index.astro     # Página de inicio
│   ├── proyectos.astro # Página de proyectos (renderizado dinámico)
│   ├── contacto.astro  # Página de contacto
│   └── acerca.astro    # Página acerca de mí
└── styles/             # Estilos adicionales
```

## ⚡ Características Principales

### 1. Componente Dinámico `ProjectCard`
- **Props recibidas**: `titulo`, `descripcion`, `categoria`, `fecha`, `imagen`, `tecnologias`, `estado`
- **Funcionalidad**: Muestra información de proyectos de forma consistente
- **Estados**: Diferentes estilos según el estado del proyecto (Completado, En desarrollo, etc.)
- **Interactividad**: Efectos hover y botones de acción

### 2. Renderizado Dinámico
```astro
{proyectos.map(proyecto => (
  <ProjectCard
    titulo={proyecto.titulo}
    descripcion={proyecto.descripcion}
    categoria={proyecto.categoria}
    // ... más props
  />
))}
```

### 3. Datos Estructurados
El archivo `src/data/proyectos.js` contiene:
- Array con 5 proyectos completos
- Funciones helper para filtrado (`getProyectosPorCategoria`, `getCategorias`)
- Estructura consistente con campos obligatorios

### 4. Navegación Dinámica
- Componente `Header` con estado activo según la página actual
- Menú responsive con hamburger en móvil
- Enlaces internos funcionales entre todas las páginas

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework principal para el sitio estático
- **JavaScript**: Lógica de componentes y datos
- **CSS3**: Estilos modernos con variables CSS y grid/flexbox
- **HTML5**: Estructura semántica y accesible

## 🎨 Características Visuales

### Sistema de Diseño Coherente
- **Variables CSS**: Colores, espaciados y tipografías consistentes
- **Responsive Design**: Adaptable a desktop, tablet y móvil
- **Animaciones**: Transiciones suaves y efectos hover
- **Gradientes**: Fondos dinámicos para secciones destacadas

### Componentes Reutilizables
- **Cards**: Para proyectos, habilidades y valores
- **Botones**: Primarios, secundarios y variantes de tamaño
- **Grid System**: Sistema flexible para layouts responsivos

## 🔄 Funcionamiento del Renderizado Dinámico

### 1. Datos de Origen
```javascript
export const proyectos = [
  {
    id: 1,
    titulo: "Portfolio Personal",
    descripcion: "Sitio web personal desarrollado con Astro...",
    categoria: "Desarrollo Web",
    fecha: "2024-11-01",
    imagen: "/images/portfolio.jpg",
    tecnologias: ["Astro", "CSS", "JavaScript"],
    estado: "Completado"
  },
  // ... más proyectos
];
```

### 2. Componente Dinámico
El componente `ProjectCard` recibe estos datos como props y los renderiza automáticamente:
- **Título y descripción**: Mostrados prominentemente
- **Metadatos**: Categoría, fecha y estado con estilos diferenciados
- **Tecnologías**: Lista de badges dinámicos
- **Estados visuales**: Colores diferentes según el estado del proyecto

### 3. Beneficios del Enfoque
- **Mantenibilidad**: Fácil agregar/editar proyectos desde un solo archivo
- **Consistencia**: Todos los proyectos siguen el mismo formato visual
- **Escalabilidad**: El sistema funciona con cualquier cantidad de proyectos
- **Reutilización**: El componente `ProjectCard` puede usarse en diferentes contextos

## 📱 Páginas Implementadas

### 🏠 Inicio (`index.astro`)
- Hero section con presentación personal
- Skills grid con tecnologías
- Estadísticas destacadas
- Preview de proyectos
- Call-to-action

### 💼 Proyectos (`proyectos.astro`)
- **Renderizado dinámico**: Lista completa de proyectos usando bucles
- **Filtros interactivos**: Por categoría con JavaScript
- **Estadísticas**: Resumen de proyectos por estado
- **Grid responsive**: Adaptable a diferentes tamaños de pantalla

### 📞 Contacto (`contacto.astro`)
- Formulario completo con validaciones
- Información de contacto organizada
- Estados de disponibilidad
- Sección de FAQs

### 👨‍💻 Acerca de (`acerca.astro`)
- Historia personal y profesional
- Skills con barras de progreso
- Valores y filosofía de trabajo
- Intereses personales

## 🚀 Instrucciones de Uso

### Prerequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Navegar al directorio
cd "Practica 2, DW2"

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

### Desarrollo
```bash
# Servidor de desarrollo
npm run dev
# El sitio estará disponible en http://localhost:4321

# Preview de producción
npm run preview
```

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
