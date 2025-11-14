// Datos de proyectos para la práctica de componentes dinámicos
export const proyectos = [
  {
    id: 1,
    titulo: "Portfolio Personal",
    descripcion: "Sitio web personal. Incluye galería de proyectos, blog personal y formulario de contacto.",
    categoria: "Desarrollo Web",
    fecha: "2025-09-01",
    imagen: "/images/proyectos/proyecto1.jpg",
    tecnologias: ["Astro", "CSS", "JavaScript"],
    estado: "Completado"
  },
  {
    id: 2,
    titulo: "App de Gestión de una Carroceria",
    descripcion: "Aplicación web para gestionar las citas del taller con funcionalidades de crear, editar, eliminar y marcar como completadas.",
    categoria: "Aplicación Web",
    fecha: "2025-02-01",
    imagen: "/images/proyectos/proyecto2.jpg",
    tecnologias: ["React", "Node.js", "MongoDB"],
    estado: "En desarrollo"
  },
];

// Función helper para obtener proyectos por categoría
export function getProyectosPorCategoria(categoria) {
  return proyectos.filter(proyecto => proyecto.categoria === categoria);
}

// Función helper para obtener proyecto por ID
export function getProyectoPorId(id) {
  return proyectos.find(proyecto => proyecto.id === id);
}

// Función helper para obtener todas las categorías únicas
export function getCategorias() {
  return [...new Set(proyectos.map(proyecto => proyecto.categoria))];
}