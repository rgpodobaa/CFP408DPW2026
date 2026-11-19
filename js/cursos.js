/* ==========================================================================
   CFP N°408 — Gestión de Cursos e Inscripción
   ========================================================================== */

const courseAvailability = {
  "modelado-3d": false, // Estado especial indicado en la rama tarjetas-cursos
};

document.querySelectorAll("[data-course-id]").forEach((card) => {
  const courseId = card.dataset.courseId;
  // Si no está explícitamente marcado como false, asumimos disponible
  const isAvailable = courseAvailability[courseId] !== undefined 
    ? courseAvailability[courseId] 
    : true;

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
      registrationLink.textContent = "No disponible";
    }
  }
});

// Al hacer clic en inscribirme en una tarjeta, sincroniza el formulario de contacto si existe
document.querySelectorAll("[data-course-registration][href]").forEach((link) => {
  link.addEventListener("click", () => {
    const card = link.closest(".course-card");
    const titleEl = card ? card.querySelector(".course-card__title") : null;
    const courseName = titleEl ? titleEl.textContent.trim() : "";

    const courseSelect = document.querySelector("#contact-course");
    if (courseSelect && courseName) {
      const normalizedName = courseName.toLowerCase();
      for (const option of courseSelect.options) {
        if (
          option.textContent.trim().toLowerCase().includes(normalizedName)
          || normalizedName.includes(option.textContent.trim().toLowerCase())
        ) {
          courseSelect.value = option.value;
          break;
        }
      }
    }
  });
});
