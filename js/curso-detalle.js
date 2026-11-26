const courses = {
  "diseno-web": {
    name: "Diseño de página web",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Pagina-Web.jpg",
    description:
      "Formación para iniciarte en el diseño y desarrollo de páginas web.",
    learning:
      "Conocer los fundamentos del diseño de páginas web y dar los primeros pasos para crear sitios propios.",
    days: "Martes y jueves",
    hours: "14:00 a 17:00",
    tools: ["VS Code", "HTML5", "CSS3", "GitHub"],
    teacher: "Rodrigo Podoba",
    teacherDescription:
      "Profesor de matemática e informática con experiencia en diseño web y lenguajes de programación como JavaScript y Python. Estudiante de la tecnicatura en programación en la Universidad Nacional Guillermo Brown.",
  },
  "gestion-redes-fotoproducto": {
    name: "Gestión de redes: Fotoproducto",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Fotoproducto.jpg",
    description:
      "Curso orientado a incorporar la fotografía de productos como recurso para comunicar en redes sociales.",
    learning:
      "Explorar la creación de imágenes de productos y su uso en contenidos para redes sociales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    tools: ["Instagram", "Photoshop", "Canva", "Google Fotos"],
    teacher: "Daiana Cabello",
    teacherDescription:
      "Fotógrafa Profesional y Directora de arte en Publicidad. Especializada en fotografía de producto en estudio y en gestión de redes sociales para emprendedores. Formación complementaria en Community Management y producción de contenido digital.",
  },
  "gestion-redes-video": {
    name: "Gestión de redes: Video",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Video-Redes.jpg",
    description:
      "Curso orientado a la producción de contenidos en video para comunicar en redes sociales.",
    learning:
      "Explorar la creación de contenidos en video y su aplicación en redes sociales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    tools: ["Instagram", "Premiere"],
    teacher: "Macarena Moyano",
    teacherDescription:
      "Diseñadora de Imagen y Sonido (UBA) y docente. Dirijo una productora audiovisual especializada en contenido para redes sociales, enfocada en fotografía y video de producto.",
  },
  "diseno-grafico-1": {
    name: "Diseño gráfico",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Dise%C3%B1o-G1.jpg",
    description:
      "Una introducción al diseño gráfico y a la creación de piezas visuales.",
    learning:
      "Conocer conceptos iniciales del diseño gráfico y aplicarlos en la creación de piezas visuales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    teacher: "Laura Piriz",
    teacherDescription:
      "Diseñadora Gráfica y profesora de Artes Visuales con orientación en Pintura. Experiencia en administración digital, maquetación editorial y fotografía. Actualmente cursando segunda orientación en Escultura.",
  },
  "diseno-grafico": {
    name: "Diseño gráfico",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Dise%C3%B1o-G2.jpg",
    description:
      "Una introducción al diseño gráfico y a la creación de piezas visuales.",
    learning:
      "Conocer conceptos iniciales del diseño gráfico y aplicarlos en la creación de piezas visuales.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    teacher: "Laura Piriz",
    teacherDescription:
      "Diseñadora Gráfica y profesora de Artes Visuales con orientación en Pintura. Experiencia en administración digital, maquetación editorial y fotografía. Actualmente cursando segunda orientación en Escultura.",
  },
  "habilidades-digitales": {
    name: "Habilidades digitales",
    image: "assets/cursos/habilidades-digitales.jpg",
    description:
      "Formación para desarrollar habilidades de uso de herramientas y recursos digitales.",
    learning:
      "Incorporar conocimientos y prácticas para desenvolverse con herramientas digitales.",
    days: "Martes y jueves",
    hours: "17:00 a 19:00",
    tools: ["Windows", "Word", "Excel", "PowerPoint", "Google"],
    teacher: "Rodrigo Podoba",
    teacherDescription:
      "Profesor de matemática e informática con experiencia en diseño web y lenguajes de programación como JavaScript y Python. Estudiante de la tecnicatura en programación en la Universidad Nacional Guillermo Brown.",
  },
  serigrafia: {
    name: "Serigrafía",
    image: "assets/Imagenes%20Cursos%20y%20Logo/Serigrafia.jpg",
    description:
      "Formación introductoria en serigrafía como técnica de impresión y reproducción gráfica.",
    learning:
      "Conocer la serigrafía y sus posibilidades como técnica de impresión.",
    days: "Lunes y miércoles",
    hours: "14:00 a 17:00",
    tools: ["Photoshop"],
    teacher: "Sabrina Lara",
    teacherDescription:
      "Profesora de Artes Visuales con orientación en Grabado y Arte Impreso recibida de la Universidad Nacional de Arte (UNA). Me dedico hace más de veinte años a la serigrafía y la educación, especialmente a la enseñanza de artes a niños, adolescentes y adultos en distintos ámbitos.",
  },
  "modelado-3d": {
    name: "Diseño y modelado 3D",
    image: "assets/cursos/modelado-3d.jpg",
    description:
      "Una introducción al modelado tridimensional y a la creación de objetos digitales en 3D.",
    learning:
      "Acercarse a los conceptos básicos del modelado tridimensional.",
    days: "A confirmar",
    hours: "A confirmar",
    teacher: null,
    teacherDescription:
      "La información del equipo docente se publicará próximamente.",
  },
};

const teacherPhotos = {
  "Rodrigo Podoba": "assets/imagenes%20profe/Rodrigo.jpg",
  "Daiana Cabello": "assets/imagenes%20profe/daiana.jpg",
  "Macarena Moyano": "assets/imagenes%20profe/Macarena.jpg",
  "Laura Piriz": "assets/imagenes%20profe/Laura.jpg",
  "Sabrina Lara": "assets/imagenes%20profe/Sabrina.jpg",
};

const factIcons = {
  duration: "M8 3v3m8-3v3M5 9h14M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  modality: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01",
  days: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z",
  hours: "M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};

const toolIconMarks = {
  "VS Code": { label: "<>" },
  HTML5: { label: "5", shape: "shield" },
  CSS3: { label: "3", shape: "shield" },
  GitHub: { label: "GH" },
  Instagram: { shape: "instagram" },
  Photoshop: { label: "Ps" },
  Canva: { label: "C" },
  "Google Fotos": { shape: "photo" },
  Premiere: { label: "Pr" },
  Illustrator: { label: "Ai" },
  InDesign: { label: "Id" },
  Windows: { shape: "windows" },
  Word: { label: "W" },
  Excel: { label: "X" },
  PowerPoint: { label: "P" },
  Google: { label: "G" },
};

const createFactIcon = (name) => {
  const namespace = "http://www.w3.org/2000/svg";
  const icon = document.createElementNS(namespace, "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("aria-hidden", "true");
  icon.setAttribute("focusable", "false");
  const path = document.createElementNS(namespace, "path");
  path.setAttribute("d", factIcons[name]);
  icon.append(path);
  return icon;
};

const createToolIcon = (name) => {
  const namespace = "http://www.w3.org/2000/svg";
  const icon = document.createElementNS(namespace, "svg");
  const mark = toolIconMarks[name];
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("aria-hidden", "true");
  icon.setAttribute("focusable", "false");

  if (mark.shape === "instagram") {
    const camera = document.createElementNS(namespace, "rect");
    camera.setAttribute("x", "3");
    camera.setAttribute("y", "3");
    camera.setAttribute("width", "18");
    camera.setAttribute("height", "18");
    camera.setAttribute("rx", "5");
    icon.append(camera);
    const lens = document.createElementNS(namespace, "circle");
    lens.setAttribute("cx", "12");
    lens.setAttribute("cy", "12");
    lens.setAttribute("r", "4");
    icon.append(lens);
    const flash = document.createElementNS(namespace, "circle");
    flash.setAttribute("cx", "17.5");
    flash.setAttribute("cy", "6.5");
    flash.setAttribute("r", "0.8");
    icon.append(flash);
  } else if (mark.shape === "photo") {
    const frame = document.createElementNS(namespace, "rect");
    frame.setAttribute("x", "3");
    frame.setAttribute("y", "4");
    frame.setAttribute("width", "18");
    frame.setAttribute("height", "16");
    frame.setAttribute("rx", "2");
    icon.append(frame);
    const landscape = document.createElementNS(namespace, "path");
    landscape.setAttribute("d", "m4 17 5-5 3 3 3-4 5 6");
    icon.append(landscape);
    const sun = document.createElementNS(namespace, "circle");
    sun.setAttribute("cx", "9");
    sun.setAttribute("cy", "9");
    sun.setAttribute("r", "1");
    icon.append(sun);
  } else if (mark.shape === "windows") {
    ["M3 5l8-1v7H3z", "M13 4l8-1v8h-8z", "M3 13h8v7l-8-1z", "M13 13h8v8l-8-1z"].forEach((pathData) => {
      const pane = document.createElementNS(namespace, "path");
      pane.setAttribute("d", pathData);
      icon.append(pane);
    });
  } else {
    if (mark.shape === "shield") {
      const shield = document.createElementNS(namespace, "path");
      shield.setAttribute("d", "M4 3h16l-1.5 17L12 22l-6.5-2z");
      icon.append(shield);
    }
    if (mark.label === "<>") {
      const code = document.createElementNS(namespace, "path");
      code.setAttribute("d", "m9 7-5 5 5 5m6-10 5 5-5 5");
      icon.append(code);
    } else {
      const label = document.createElementNS(namespace, "text");
      label.setAttribute("x", "12");
      label.setAttribute("y", "16.5");
      label.setAttribute("text-anchor", "middle");
      label.textContent = mark.label;
      icon.append(label);
    }
  }

  return icon;
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
  document.querySelector("#course-description").textContent =
    course.description;
  const courseImage = document.querySelector("#course-image");
  courseImage.src = course.image;
  courseImage.alt = `Imagen del curso ${course.name}`;
  document.querySelector("#course-learning").textContent = course.learning;
  const toolsList = document.querySelector("#course-tools");
  const toolsEmpty = document.querySelector("#course-tools-empty");
  if (course.tools) {
    course.tools.forEach((name) => {
      const item = document.createElement("li");
      item.className = "course-tools__item";
      const icon = document.createElement("span");
      icon.className = "course-tools__icon";
      icon.append(createToolIcon(name));
      const label = document.createElement("span");
      label.textContent = name;
      item.append(icon, label);
      toolsList.append(item);
    });
  } else {
    toolsEmpty.hidden = false;
  }

  const facts = [
    ["days", "Días", course.days],
    ["hours", "Horario", course.hours],
    ["duration", "Duración", "16 semanas"],
    ["modality", "Modalidad", "Presencial"],
  ];
  const factsList = document.querySelector("#course-facts");
  facts.forEach(([iconName, label, value]) => {
    const item = document.createElement("div");
    item.className = "course-fact";
    item.append(createFactIcon(iconName));
    const copy = document.createElement("div");
    copy.className = "course-fact__copy";
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = value;
    copy.append(term, detail);
    item.append(copy);
    factsList.append(item);
  });

  const teacherName = document.querySelector("#course-teacher");
  const teacherDescription = document.querySelector("#course-teacher-description");
  const teacherPhoto = document.querySelector("#course-teacher-photo");
  const teacherPhotoPlaceholder = document.querySelector(
    "#course-teacher-photo-placeholder",
  );
  if (course.teacher) {
    teacherName.textContent = course.teacher;
    const photo = teacherPhotos[course.teacher];
    if (photo) {
      teacherPhoto.src = photo;
      teacherPhoto.alt = `Foto de ${course.teacher}`;
      teacherPhoto.hidden = false;
      teacherPhotoPlaceholder.hidden = true;
    }
  } else {
    teacherName.textContent = "Equipo docente";
  }
  teacherDescription.textContent = course.teacherDescription;
} else if (content && notFound) {
  content.hidden = true;
  notFound.hidden = false;
}
