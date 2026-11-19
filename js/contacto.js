const contactForm = document.querySelector("#contact-form");

if (contactForm instanceof HTMLFormElement) {
  const contactEmail = document.querySelector("#contact-email");
  const contactCourse = document.querySelector("#contact-course");
  const contactMessage = document.querySelector("#contact-message");
  const contactStatus = document.querySelector("#contact-status");
  const contactFallback = document.querySelector("#contact-fallback");

  if (
    contactEmail instanceof HTMLInputElement
    && contactCourse instanceof HTMLSelectElement
    && contactMessage instanceof HTMLTextAreaElement
    && contactStatus instanceof HTMLElement
    && contactFallback instanceof HTMLAnchorElement
  ) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const subject = `Consulta sobre ${contactCourse.value} - CFP N°408`;
      const body = [
        `Correo de contacto: ${contactEmail.value}`,
        `Curso: ${contactCourse.value}`,
        "",
        contactMessage.value,
      ].join("\n");
      const composeUrl = new URL("https://mail.google.com/mail/");
      composeUrl.search = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: "cfp408@abc.gob.ar",
        su: subject,
        body,
      }).toString();

      contactFallback.href = composeUrl.toString();
      const composeWindow = window.open(composeUrl.toString(), "_blank");

      if (composeWindow) {
        composeWindow.opener = null;
        contactStatus.textContent = "Se abrió un borrador en Gmail. Revisá la consulta y presioná Enviar.";
        contactFallback.hidden = true;
      } else {
        contactStatus.textContent = "El navegador bloqueó la nueva pestaña. Usá este enlace para abrir el borrador.";
        contactFallback.hidden = false;
      }
    });
  }
}
