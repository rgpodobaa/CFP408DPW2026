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

// Al hacer clic en inscribirme en una tarjeta, actualiza el borrador de inscripción
document.querySelectorAll("[data-course-registration][href]").forEach((link) => {
  link.addEventListener("click", () => {
    const card = link.closest(".course-card");
    const titleEl = card ? card.querySelector(".course-card__title") : null;
    const courseName = titleEl ? titleEl.textContent.trim() : "";

    const selection = document.querySelector("[data-registration-selection]");
    if (selection && courseName) {
      selection.textContent = `Curso seleccionado: ${courseName}. Seguí los pasos abajo para enviar tu solicitud.`;
    }

    const emailButton = document.querySelector("#enrollment-email-link");
    if (emailButton && courseName) {
      const subject = encodeURIComponent(`Inscripción - ${courseName}`);
      const body = encodeURIComponent(`Hola,\n\nQuiero solicitar la inscripción al curso: ${courseName}.\n\nNombre completo: \nDNI: \nTeléfono: `);
      emailButton.href = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;
    }
  });
});
