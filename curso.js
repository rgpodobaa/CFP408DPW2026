const courses = {
  "diseno-web": {
    name: "Diseño de página web",
    description:
      "Formación para iniciarte en el diseño y desarrollo de páginas web.",
    learning:
      "Conocer los fundamentos del diseño de páginas web y dar los primeros pasos para crear sitios propios.",
    days: "Martes y jueves",
    hours: "14:00 a 17:00",
    teacher: "Rodrigo Podoba",
  },
  "gestion-redes-fotoproducto": {
    name: "Gestión de redes: Fotoproducto",
    description:
      "Curso orientado a incorporar la fotografía de productos como recurso para comunicar en redes sociales.",
    learning:
      "Explorar la creación de imágenes de productos y su uso en contenidos para redes sociales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    teacher: "Daiana Cabello",
  },
  "gestion-redes-video": {
    name: "Gestión de redes: Video",
    description:
      "Curso orientado a la producción de contenidos en video para comunicar en redes sociales.",
    learning:
      "Explorar la creación de contenidos en video y su aplicación en redes sociales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    teacher: "Macarena Moyano",
  },
  "diseno-grafico-1": {
    name: "Diseño gráfico 1",
    description:
      "Una introducción al diseño gráfico y a la creación de piezas visuales.",
    learning:
      "Conocer conceptos iniciales del diseño gráfico y aplicarlos en la creación de piezas visuales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    teacher: "Laura Piriz",
  },
  "diseno-grafico-2": {
    name: "Diseño gráfico 2",
    description:
      "Continuación de la formación en diseño gráfico y creación de piezas visuales.",
    learning:
      "Profundizar los conocimientos de diseño gráfico mediante la creación de piezas visuales.",
    days: "Lunes y miércoles",
    hours: "10:00 a 13:00",
    teacher: "Laura Piriz",
  },
  "habilidades-digitales": {
    name: "Habilidades digitales",
    description:
      "Formación para desarrollar habilidades de uso de herramientas y recursos digitales.",
    learning:
      "Incorporar conocimientos y prácticas para desenvolverse con herramientas digitales.",
    days: "Martes y jueves",
    hours: "17:00 a 19:00",
    teacher: "Rodrigo Podoba",
  },
  serigrafia: {
    name: "Serigrafía",
    description:
      "Formación introductoria en serigrafía como técnica de impresión y reproducción gráfica.",
    learning:
      "Conocer la serigrafía y sus posibilidades como técnica de impresión.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    teacher: "Sabrina Lara",
  },
  "modelado-3d": {
    name: "Modelado en 3D",
    description:
      "Una introducción al modelado tridimensional y a la creación de objetos digitales en 3D.",
    learning:
      "Acercarse a los conceptos básicos del modelado tridimensional.",
    days: "A confirmar",
    hours: "A confirmar",
    teacher: null,
  },
};

const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");
const course =
  courseId && Object.prototype.hasOwnProperty.call(courses, courseId)
    ? courses[courseId]
    : undefined;
const content = document.querySelector("#course-content");
const notFound = document.querySelector("#course-not-found");

if (course && content && notFound) {
  document.title = `${course.name} | CFP N°408`;
  document.querySelector("#course-title").textContent = course.name;
  document.querySelector("#breadcrumb-course").textContent = course.name;
  document.querySelector("#course-description").textContent =
    course.description;
  document.querySelector("#course-learning").textContent = course.learning;
  document.querySelector("#course-tools").textContent =
    "Las tecnologías y herramientas específicas se informarán próximamente.";

  const facts = [
    ["Duración", "16 semanas"],
    ["Modalidad", "Presencial"],
    ["Días", course.days],
    ["Horario", course.hours],
  ];
  const factsList = document.querySelector("#course-facts");
  facts.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "course-fact";
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = value;
    item.append(term, detail);
    factsList.append(item);
  });

  const teacherPanel = document.querySelector("#course-teacher-panel");
  if (course.teacher) {
    document.querySelector("#course-teacher").textContent = course.teacher;
  } else {
    teacherPanel.hidden = true;
  }
} else if (content && notFound) {
  content.hidden = true;
  notFound.hidden = false;
}