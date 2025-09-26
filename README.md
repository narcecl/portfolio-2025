# Nicolás Arce | Portfolio 2025

Mi portafolio personal como Desarrollador Front-end, mostrando mi experiencia, proyectos y habilidades técnicas.

## Características

- **Multi idioma**: Español e Inglés con internacionalización completa
- **SEO Optimizado**: Meta tags, Open Graph, sitemap automático y hreflang
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Performance**: Construcción estática optimizada con Astro
- **Accesibilidad**: Cumple estándares web modernos

## Tecnologías

- **[Astro](https://astro.build/)** - Framework para sitios web ultrarrápidos
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **Content Collections** - Gestión de contenido con validación de esquemas

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/narcecl/portfolio-2025.git
cd portfolio-2025

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🔧 Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa del build
npm run format       # Formatear código con Prettier
npm run lint         # Ejecutar ESLint
```

## Estructura i18n

```
src/
├── content/
│   ├── projects/
│   │   ├── *.md        # Proyectos en español
│   │   └── en/         # Proyectos en inglés
│   └── work/
│       ├── *.md        # Experiencia en español
│       └── en/         # Experiencia en inglés
├── i18n/
│   └── lang.json       # Traducciones de la interfaz
└── pages/
    ├── index.astro     # Página principal (ES)
    └── en/
        └── index.astro # Página principal (EN)
```

## Licencia

Este proyecto está bajo la Licencia MIT.
