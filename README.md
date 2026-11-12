# CFP408DPW2026
Repositorio de la nueva página del Centro de formación profesional n°408

VARIABLES CSS


:root {
  /* Colores de Marca */
  --color-primary: #E6007E;
  --color-secondary: #00AEEF;
  --color-accent: #FFED00;
  
  /* Escala de Grises y Fondos */
  --color-text: #1A1A1A;
  --color-bg-main: #FFFFFF;
  --color-bg-alt: #F8F9FA;
}

## Hero y navegación

La entrega inicial está dividida en fragmentos para integrarse en la página principal:

- `sections/hero.html`: Hero y carrusel visual de cursos.
- `sections/navbar.html`: navegación principal y menú móvil.
- `styles/hero-navbar.css`: estilos compartidos de ambas secciones.
- `scripts/hero-navbar.js`: comportamiento del menú móvil.
- `index.html`: página de vista previa con Hero, Navbar y secciones de muestra para probar los enlaces.

Abrí `index.html` con una extensión de servidor local como Live Server para probarla en el navegador. El archivo incluye una copia integrada de los fragmentos; las secciones de muestra sirven para probar los enlaces y deben reemplazarse al incorporar el contenido definitivo. El Navbar queda después del Hero en el flujo del documento para que aparezca al desplazarse y permanezca fijo sobre el contenido siguiente. Las fotografías son imágenes de stock temporales servidas por Unsplash.