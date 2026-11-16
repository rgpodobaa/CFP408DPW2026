const courses = {
  "diseno-web": {
    name: "Dise├▒o de p├ígina web",
    description:
      "Formaci├│n para iniciarte en el dise├▒o y desarrollo de p├íginas web.",
    learning:
      "Conocer los fundamentos del dise├▒o de p├íginas web y dar los primeros pasos para crear sitios propios.",
    days: "Martes y jueves",
    hours: "14:00 a 17:00",
    teacher: "Rodrigo Podoba",
  },
  "gestion-redes-fotoproducto": {
    name: "Gesti├│n de redes: Fotoproducto",
    description:
      "Curso orientado a incorporar la fotograf├¡a de productos como recurso para comunicar en redes sociales.",
    learning:
      "Explorar la creaci├│n de im├ígenes de productos y su uso en contenidos para redes sociales.",
    days: "Lunes y mi├®rcoles",
    hours: "14:00 a 17:00",
    teacher: "Daiana Cabello",
  },
  "gestion-redes-video": {
    name: "Gesti├│n de redes: Video",
    description:
      "Curso orientado a la producci├│n de contenidos en video para comunicar en redes sociales.",
    learning:
      "Explorar la creaci├│n de contenidos en video y su aplicaci├│n en redes sociales.",
    days: "Lunes y mi├®rcoles",
    hours: "14:00 a 17:00",
    teacher: "Macarena Moyano",
  },
  "diseno-grafico-1": {
    name: "Dise├▒o gr├ífico 1",
    description:
      "Una introducci├│n al dise├▒o gr├ífico y a la creaci├│n de piezas visuales.",
    learning:
      "Conocer conceptos iniciales del dise├▒o gr├ífico y aplicarlos en la creaci├│n de piezas visuales.",
    days: "Lunes y mi├®rcoles",
    hours: "14:00 a 17:00",
    teacher: "Laura Piriz",
  },
  "diseno-grafico-2": {
    name: "Dise├▒o gr├ífico 2",
    description:
      "Continuaci├│n de la formaci├│n en dise├▒o gr├ífico y creaci├│n de piezas visuales.",
    learning:
      "Profundizar los conocimientos de dise├▒o gr├ífico mediante la creaci├│n de piezas visuales.",
    days: "Lunes y mi├®rcoles",
    hours: "10:00 a 13:00",
    teacher: "Laura Piriz",
  },
  "habilidades-digitales": {
    name: "Habilidades digitales",
    description:
      "Formaci├│n para desarrollar habilidades de uso de herramientas y recursos digitales.",
    learning:
      "Incorporar conocimientos y pr├ícticas para desenvolverse con herramientas digitales.",
    days: "Martes y jueves",
    hours: "17:00 a 19:00",
    teacher: "Rodrigo Podoba",
  },
  serigrafia: {
    name: "Serigraf├¡a",
    description:
      "Formaci├│n introductoria en serigraf├¡a como t├®cnica de impresi├│n y reproducci├│n gr├ífica.",
    learning:
      "Conocer la serigraf├¡a y sus posibilidades como t├®cnica de impresi├│n.",
    days: "Lunes y mi├®rcoles",
    hours: "14:00 a 17:00",
    teacher: "Sabrina Lara",
  },
  "modelado-3d": {
    name: "Modelado en 3D",
    description:
      "Una introducci├│n al modelado tridimensional y a la creaci├│n de objetos digitales en 3D.",
    learning:
      "Acercarse a los conceptos b├ísicos del modelado tridimensional.",
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
  document.title = `${course.name} | CFP N┬░408`;
  document.querySelector("#course-title").textContent = course.name;
  document.querySelector("#breadcrumb-course").textContent = course.name;
  document.querySelector("#course-description").textContent =
    course.description;
  document.querySelector("#course-learning").textContent = course.learning;
  document.querySelector("#course-tools").textContent =
    "Las tecnolog├¡as y herramientas espec├¡ficas se informar├ín pr├│ximamente.";

  const facts = [
    ["Duraci├│n", "16 semanas"],
    ["Modalidad", "Presencial"],
    ["D├¡as", course.days],
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
