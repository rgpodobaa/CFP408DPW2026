# Informe de Integración Colaborativa — Proyecto CFP N°408

**Rama:** `integracion-sitio`  
**Docente:** Rodrigo Podoba  
**Curso:** Diseño de Página Web — CFP N°408  
**Fecha:** Noviembre 2026  

---

## 1. Resumen del proyecto

En este proyecto colaborativo, cada equipo/estudiante tuvo a su cargo el diseño y maquetación de una sección de la página web del **Centro de Formación Profesional N°408**, utilizando HTML y CSS nativo y asistidos por agentes de Inteligencia Artificial para acelerar el desarrollo.

Cada sección fue guardada en su propia rama de Git. La tarea docente consistió en unificar todo el trabajo en un único sitio web coherente, modular, accesible y funcional, preservando la identidad visual del instituto y articulando las diferentes secciones creadas.

---

## 2. Aportes de cada rama

| Rama de origen | Responsable/Sección | Componentes y Archivos Integrados |
| :--- | :--- | :--- |
| `origin/HeroSection` | **Navbar & Hero** | Barra de navegación responsive (`site-nav`) con menú hamburguesa accesible en móvil, y portada principal (`hero`) con animación continua de tarjetas de muestra y accesos directos. |
| `origin/tarjetas-cursos` | **Oferta de Cursos** | Grilla adaptable de 8 cursos (`courses__grid`) con imágenes ilustrativas optimizadas en `assets/cursos/` y lógica de estado/disponibilidad. |
| `origin/Detalle-Curso` | **Página de Detalle** | Página independiente `curso.html` que lee dinámicamente el parámetro `?id=...` para mostrar horarios, sede, docente a cargo y contenidos. |
| `origin/institucional` | **Institucional / Equipo** | Tarjetas del equipo directivo y docente con roles, fotos/avatares SVG y bios con estilo accesible. |
| `origin/Testimonios/Inscripcion` | **Testimonios e Inscripción** | Tarjetas de experiencias de egresados (`#testimonios`) y guía paso a paso (01 al 04) con botón inteligente de preinscripción hacia Gmail (`#inscripcion`). |
| `origin/Footer` | **Pie de Página** | Footer institucional con ondas SVG dinámicas con los colores del CFP, datos de contacto, enlaces de anclaje y accesos a redes sociales. |
| `origin/Imagenesdocentes` | **Fotografías del Equipo Docente** | Incorporación de fotografías reales del equipo docente y directivo en `assets/imagenes profe/`, integración en fichas institucionales y visualización dinámica en `curso.html`. |
| `origin/fix-imagenes-navbar-y-tarjeta-deshabilitada` | **Logo, Imágenes de Cursos y Estado 3D** | Incorporación del logo oficial del CFP en barra de navegación y pie de página, fotografías reales de cursos (`assets/Imagenes Cursos y Logo/`), optimización del navbar a la derecha y estado visual de curso deshabilitado para Modelado 3D. |

---

## 3. Desafíos encontrados y cómo se resolvieron

Al ser un curso inicial con estudiantes en proceso de aprendizaje, surgieron inconsistencias naturales que se abordaron con un criterio pedagógico e integrador:

### A. Estructura de archivos dispersa
- **Situación:** Algunos estudiantes ubicaron sus archivos en carpetas `styles/` y `scripts/`, otros directamente en la raíz con nombres genéricos como `style.css`.
- **Solución:** Se estandarizó la arquitectura del repositorio en carpetas claras:
  - `css/` (con hojas modulares por sección y un `base.css` compartido).
  - `js/` (scripts específicos para navbar, cursos, institucional y detalle).
  - `assets/` (imágenes organizadas).

### B. Documentos completos en lugar de secciones parciales
- **Situación:** Prácticamente todas las ramas crearon un archivo `index.html` completo con sus propios `<!doctype html>`, `<head>`, y `<body>`.
- **Solución:** En lugar de forzar un `git merge` automático (que hubiera generado decenas de conflictos en etiquetas repetidas), se realizó una **integración modular**: se conservó un único `index.html` maestro, importando cada `<section>` en su orden semántico correcto:
  1. `site-nav` (Navbar)
  2. `hero` (Portada de inicio)
  3. `courses` (Cursos del CFP)
  4. `institutional` (Equipo directivo y docente)
  5. `testimonials` (Voces de la comunidad)
  6. `enrollment` (Proceso de inscripción)
  7. `site-footer` (Pie de página)

### C. Conexión de funcionalidades desconectadas
- **Situación:** El equipo de *Cursos* había puesto botones que iban directo a `#inscripcion`, perdiendo el enlace con el trabajo del equipo de *Detalle de Curso* (`curso.html`).
- **Solución:** Se diseñó una botonera dual en cada tarjeta:
  - **"Ver detalles":** navega a `curso.html?id=nombre-del-curso` para consultar horarios y contenidos.
  - **"Inscribirme":** hace scroll suave hacia `#inscripcion` y preselecciona automáticamente el curso en el mensaje de Gmail.

### D. Colisiones y armonía visual de CSS
- **Situación:** Cada rama definió su propio `:root` y estilos para `body`.
- **Solución:**
  - Se creó un archivo común `css/base.css` con la fuente de verdad de las variables de color del CFP (`--color-primary`, `--color-secondary`, etc.), tipografía del sistema y reset accesible.
  - Como los alumnos utilizaron buenas prácticas de nombres con prefijos (`hero__`, `course-card__`, `institutional__`), los estilos de cada sección conviven en perfecta armonía.

---

## 4. Estructura final del proyecto

```text
CFP408DPW2026/
├── index.html                      # Página de inicio unificada
├── curso.html                      # Página de detalle dinámico por URL (?id=...)
├── css/
│   ├── base.css                    # Variables :root, resets y utilidades globales
│   ├── hero-navbar.css             # Estilos de la cabecera y el hero animado
│   ├── cursos.css                  # Grilla y tarjetas de oferta educativa
│   ├── institucional.css           # Directivos, docentes y fichas del equipo
│   ├── testimonios-inscripcion.css # Citas de egresados y pasos de inscripción
│   ├── footer.css                  # Pie de página y ondas decorativas SVG
│   └── curso-detalle.css           # Estilos específicos para curso.html
├── js/
│   ├── hero-navbar.js              # Menú móvil desplegable y accesibilidad (Escape/Aria)
│   ├── cursos.js                   # Manejo de disponibilidad y preselección de cursos
│   ├── institucional.js            # Interacciones de las fichas institucionales
│   └── curso-detalle.js            # Renderizado dinámico del detalle según el parámetro URL
├── assets/
│   ├── cursos/                     # Fotografías ilustrativas y de muestra iniciales
│   ├── Imagenes Cursos y Logo/     # Logo oficial del CFP 408 y fotos de cursos en taller
│   └── imagenes profe/             # Fotografías reales del equipo directivo y docente
└── docs/
    ├── guia-diseno-y-desarrollo.md # Especificación y contratos iniciales
    └── informe-integracion.md      # Este documento
```

---

## 5. Próximos pasos recomendados para los alumnos

Para continuar con el curso y enriquecer el aprendizaje, se sugiere que los alumnos realicen las siguientes actividades sobre esta base unificada:

1. **Reemplazo de datos ficticios por reales:**
   - Incorporar testimonios reales de estudiantes del CFP N°408.
   - Completar las fotografías reales del equipo docente y directivo en lugar de los placeholders SVG.
2. **Refinamiento de prompts de IA:**
   - Analizar en clase qué prompts generaron código más limpio y modular (ej. quién usó BEM vs quién usó nombres genéricos).
   - Pedirle a la IA que genere nuevas tarjetas de cursos respetando la estructura existente.
3. **Optimización de accesibilidad:**
   - Probar la navegación completa exclusivamente mediante el teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`).
   - Verificar contrastes de color y textos alternativos (`alt`) en lectores de pantalla.
