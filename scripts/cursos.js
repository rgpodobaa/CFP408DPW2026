const courseAvailability = {
  "modelado-3d": false,
};

document.querySelectorAll("[data-course-id]").forEach((card) => {
  const courseId = card.dataset.courseId;
  const isAvailable = courseAvailability[courseId];

  if (typeof isAvailable !== "boolean") {
    throw new Error(`No se configuró la disponibilidad del curso "${courseId}".`);
  }

  card.dataset.available = String(isAvailable);
  card.classList.toggle("is-unavailable", !isAvailable);

  const status = card.querySelector("[data-course-status]");
  const registrationLink = card.querySelector("[data-course-registration]");

  if (status) {
    status.textContent = isAvailable
      ? "Curso vigente."
      : "Curso no vigente actualmente. Consultá en el centro para conocer futuras aperturas.";
  }

  if (registrationLink) {
    if (isAvailable) {
      registrationLink.href = "#inscripcion";
      registrationLink.removeAttribute("aria-disabled");
      registrationLink.textContent = "Inscribirme";
    } else {
      registrationLink.removeAttribute("href");
      registrationLink.setAttribute("aria-disabled", "true");
      registrationLink.textContent = "Inscripción no disponible";
    }
  }
});

document.querySelectorAll("[data-course-registration][href]").forEach((link) => {
  link.addEventListener("click", () => {
    const selection = document.querySelector("[data-registration-selection]");
    const courseName = link.closest(".course-card").querySelector(".course-card__title").textContent;
    selection.textContent = `Curso seleccionado: ${courseName}. Consultá en el CFP N°408 para confirmar vacantes e iniciar la inscripción.`;
  });
});
