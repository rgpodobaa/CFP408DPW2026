# Guía de diseño y desarrollo — CFP N°408

## 1. Objetivo

Este documento define la estructura, el aspecto visual y los criterios de implementación de la página web del Centro de Formación Profesional N°408. Sirve como guía compartida para que cada estudiante desarrolle una sección independiente y todas las partes puedan integrarse en una experiencia coherente.

La página será minimalista, responsive y accesible. Se utilizarán HTML semántico y CSS nativo. Se permite JavaScript para interacciones puntuales; no se utilizarán Tailwind, Bootstrap ni otros frameworks de estilos.

## 2. Identidad visual

Usar como fuente de verdad las variables incluidas en el README del proyecto:

```css
:root {
  --color-primary: #E6007E;
  --color-secondary: #00AEEF;
  --color-accent: #FFED00;
  --color-text: #1A1A1A;
  --color-bg-main: #FFFFFF;
  --color-bg-alt: #F8F9FA;
}
```

- **Magenta (`--color-primary`):** acciones principales, enlaces destacados y detalles de marca.
- **Celeste (`--color-secondary`):** acciones secundarias, enlaces o recursos informativos.
- **Amarillo (`--color-accent`):** acentos pequeños, etiquetas o indicadores; no usar como color de texto sobre blanco.
- **Texto y fondos:** priorizar texto oscuro sobre blanco o gris claro para facilitar la lectura.
- Mantener una jerarquía tipográfica clara, espacios generosos y pocos elementos decorativos.
- No incorporar colores de marca adicionales sin acordarlo con el equipo.

## 3. Estructura y contrato de integración

La página principal se ordenará así:

1. Navbar
2. Hero
3. Cursos
4. Institucional
5. Testimonios de egresados
6. Proceso de inscripción
7. Footer

El detalle de curso será una página extra a la que se accede desde una tarjeta. Se recomienda una página reutilizable, por ejemplo `curso.html`, que reciba un identificador de curso mediante la URL o un mecanismo acordado por el equipo. Si el proyecto todavía no tiene esa lógica, se puede comenzar con una página estática de ejemplo y dejar documentada la decisión.

### Acuerdos para trabajar en paralelo

- Antes de desarrollar, definir entre todos si las secciones se integrarán en un único `index.html` o en componentes HTML parciales. No duplicar `html`, `head` o `body` dentro de secciones parciales.
- Cada estudiante debe respetar el orden, los nombres de ancla y las variables de color de esta guía.
- Usar clases con nombres descriptivos y prefijos por sección para reducir colisiones (por ejemplo, `hero__title`, `courses__card`).
- Mantener los estilos comunes —reinicio básico, tipografía, contenedor, botones y variables— en una hoja compartida. Los estilos particulares de cada sección deben quedar agrupados y claramente identificados.
- No fijar alturas para bloques que contienen texto; permitir que el contenido crezca.
- Usar imágenes optimizadas, con texto alternativo cuando aporten información. Las imágenes decorativas deben tener `alt=""`.
- Toda sección debe funcionar con teclado, conservar el orden lógico de lectura y adaptarse a pantallas pequeñas.

## 4. Especificación por sección

### 4.1 Navbar

**Propósito:** orientar al visitante y permitir el acceso rápido a las partes principales del sitio.

**Contenido:**
- Identificación del CFP N°408 (nombre y, si está disponible, logotipo).
- Enlaces a Cursos, Institucional, Testimonios e Inscripción.
- Acción destacada para consultar cursos o iniciar la inscripción.

**Comportamiento y presentación:**
- En escritorio, presentar marca, navegación y acción en una sola fila.
- En móvil, usar navegación compacta. Si se implementa un menú desplegable, el botón debe indicar su estado (`aria-expanded`) y poder operarse con teclado.
- Los enlaces internos deben apuntar a identificadores únicos: `#cursos`, `#institucional`, `#testimonios` y `#inscripcion`.
- Mantener visible el foco de teclado y diferenciar el enlace activo o el estado hover sin depender únicamente del color.

**Entrega del estudiante:** estructura semántica (`header`/`nav`), estilos responsive y, solo si hace falta, JavaScript del menú móvil.

### 4.2 Hero

**Propósito:** presentar rápidamente al centro y comunicar qué puede hacer el visitante.

**Contenido:**
- Mensaje principal breve sobre la formación profesional.
- Texto secundario que explique el valor o la propuesta del CFP.
- Acción primaria que lleve a Cursos o Inscripción.
- Imagen o recurso visual relacionado con el centro/la formación, si hay material autorizado.

**Presentación:**
- Dar prioridad visual al título, al texto y a la acción principal.
- En pantallas amplias puede usarse una composición de texto e imagen; en móvil, apilar contenido con el texto primero.
- Evitar texto importante incrustado en imágenes.

**Entrega del estudiante:** sección con `id="inicio"` o integración coordinada con la marca de la Navbar, contenido adaptable y CTA funcional.

### 4.3 Cursos

**Propósito:** ayudar a encontrar y comparar la oferta formativa.

**Contenido de cada tarjeta:**
- Nombre del curso.
- Resumen breve, legible y de extensión similar entre tarjetas.
- Datos confirmados disponibles (por ejemplo, duración o modalidad); no completar datos faltantes con suposiciones.
- Enlace o botón “Ver curso” que abra el detalle correspondiente.

**Presentación y comportamiento:**
- Usar una grilla que reduzca el número de columnas al disminuir el ancho y termine en una columna en móvil.
- Hacer que la tarjeta tenga jerarquía clara, pero conservar un enlace identificable y accesible. Evitar elementos interactivos anidados.
- Si se agrega filtrado, incluir un estado vacío y permitir operar los controles con teclado. El filtrado no es requisito inicial.
- Si no hay datos definitivos, usar contenido de muestra claramente marcado para reemplazar; no presentarlo como oferta oficial.

**Entrega del estudiante:** sección con `id="cursos"`, tarjetas reutilizables visualmente y destino válido para cada enlace.

**Implementación inicial:** `cursos.html` contiene una página independiente con ocho tarjetas, fotografías locales ilustrativas y enlaces para iniciar la consulta de inscripción. Las imágenes de serigrafía e impresión 3D se atribuyen en la página según sus licencias Creative Commons; las demás son de Unsplash. Las descripciones son orientativas, no incluyen datos administrativos no confirmados y deben validarse con el centro antes de publicarse como oferta oficial. Los enlaces llevan a una sección informativa; no envían ni guardan datos personales. Habilidades Digitales y Modelado 3D se presentan por separado para completar las ocho tarjetas; confirmar que esta división coincide con la oferta del CFP.

La disponibilidad de Modelado 3D se configura en `scripts/cursos.js` (`courseAvailability["modelado-3d"]`): usar `true` para mostrarlo vigente y `false` para indicar que no está vigente. Esta configuración estática no es un panel administrativo; integrar una fuente de disponibilidad protegida si luego se requiere edición desde la página.

### 4.4 Detalle del curso (página extra)

**Propósito:** ofrecer la información necesaria para que una persona evalúe un curso y sepa cuál es el siguiente paso.

**Contenido recomendado:**
- Nombre del curso y descripción.
- Objetivos o aprendizajes.
- Requisitos de ingreso, duración, modalidad, horarios y sede, cuando estén confirmados.
- Información de inscripción o contacto y un CTA claro.
- Enlace para volver a la oferta de cursos.

**Presentación y comportamiento:**
- Aplicar la misma identidad visual y navegación de la página principal.
- Organizar la información con títulos y listas, no como un único bloque extenso.
- La página debe mostrar contenido coherente con el curso seleccionado. Acordar con el equipo cómo se identifica el curso y qué mostrar ante un identificador inexistente.
- No publicar datos administrativos no confirmados.

**Entrega del estudiante:** página de detalle responsive, navegación de regreso y contenido accesible. Coordinar con quien implemente las tarjetas para mantener los enlaces compatibles.

### 4.5 Institucional

**Propósito:** presentar el centro, su identidad y las personas que lo integran.

**Contenido:**
- Reseña o información general del CFP.
- Misión y visión claramente diferenciadas.
- Personal directivo y docente, con nombre, rol y fotografía solo cuando esos datos estén disponibles y autorizados.

**Presentación:**
- Separar los bloques con subtítulos y mantener los textos breves.
- Presentar al equipo con tarjetas o una lista accesible; no usar la imagen como único medio para identificar a una persona.
- Si hay mucha información, priorizar una introducción breve y evitar saturar la página principal.

**Entrega del estudiante:** sección con `id="institucional"`, estructura semántica y datos revisados por el centro.

### 4.6 Testimonios de egresados

**Propósito:** compartir experiencias que ayuden a comprender el impacto de la formación.

**Contenido de cada testimonio:**
- Cita breve, fiel al testimonio original.
- Nombre o identificación acordada con la persona.
- Curso realizado y, opcionalmente, año de egreso, si fueron confirmados y existe autorización de publicación.

**Presentación y comportamiento:**
- Mostrar las citas de forma legible y con atribución clara.
- Si se implementa un carrusel, incluir controles accesibles, estado visible y alternativa para navegar sin gestos; no iniciar movimiento automático.
- La sección debe funcionar aunque solo haya uno o dos testimonios.

**Entrega del estudiante:** sección con `id="testimonios"` y contenido autorizado. No inventar testimonios ni publicar datos personales sin consentimiento.

### 4.7 Proceso de inscripción

**Propósito:** explicar de forma concreta cómo avanzar desde el interés hasta la inscripción.

**Contenido:**
- Pasos numerados y en orden.
- Requisitos y documentación necesarios, únicamente si fueron confirmados por el centro.
- Canal, lugar o enlace para realizar consultas o iniciar el trámite.
- CTA de contacto o inscripción con destino válido.

**Presentación:**
- Cada paso debe poder entenderse por separado, con número o título y una explicación breve.
- En móvil, presentar los pasos en una columna.
- No prometer fechas, vacantes ni condiciones que no estén verificadas.

**Entrega del estudiante:** sección con `id="inscripcion"`, pasos responsive y enlaces probados.

### 4.8 Footer

**Propósito:** cerrar la página y facilitar el acceso a información útil.

**Contenido recomendado:**
- Nombre del Centro de Formación Profesional N°408.
- Dirección, teléfono, correo y redes oficiales, solo cuando estén confirmados.
- Enlaces principales de navegación.
- Información legal o de créditos que corresponda al proyecto.

**Presentación:**
- Mantener buen contraste y orden visual, especialmente en móvil.
- Usar enlaces con etiquetas descriptivas y destinos válidos.
- Evitar mostrar iconos de redes sociales sin indicar su destino de forma accesible.

**Entrega del estudiante:** elemento `footer` responsive e integrado con la navegación general.

## 5. Preguntas frecuentes (etapa futura)

La sección de FAQ no forma parte de la entrega inicial. Reservar la posibilidad de incorporarla más adelante, idealmente entre el Proceso de inscripción y el Footer. Cuando se implemente, usar preguntas reales y respuestas validadas por el centro. Si se utiliza un acordeón, sus controles deben ser botones accesibles, indicar el estado expandido y funcionar con teclado.

## 6. Criterios responsive y accesibilidad

- Diseñar primero para móvil y ampliar progresivamente; usar media queries CSS y evitar depender de dimensiones rígidas.
- Como guía inicial, considerar cambios de composición cerca de `600px` y `900px`; ajustar según el contenido real.
- Evitar desplazamiento horizontal, tamaños de texto demasiado pequeños y controles difíciles de pulsar.
- Utilizar encabezados en orden jerárquico, enlaces para navegar y botones para acciones.
- Proporcionar foco visible, contraste suficiente y etiquetas comprensibles.
- No transmitir información solo mediante color, animación o imagen.
- Respetar `prefers-reduced-motion` si se agregan transiciones o movimiento.

## 7. Lista de verificación para cada entrega

- [ ] La sección cumple su propósito y contiene solo información confirmada.
- [ ] Se adapta a móvil y escritorio sin desbordamientos.
- [ ] Usa las variables y convenciones visuales compartidas.
- [ ] Los enlaces y botones tienen destinos o acciones funcionales.
- [ ] Se puede navegar con teclado y el foco es visible.
- [ ] Las imágenes tienen texto alternativo adecuado.
- [ ] No hay errores de estructura HTML ni estilos globales que afecten otras secciones.
- [ ] La sección se integra en el orden y con los identificadores acordados.
