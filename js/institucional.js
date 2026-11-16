(() => {
  const section = document.querySelector(".institutional");

  if (!section) {
    return;
  }

  const roleButtons = section.querySelectorAll(".institutional__role[data-destino]");

  roleButtons.forEach((button) => {
    const destinationId = button.dataset.destino.trim();

    if (!destinationId) {
      return;
    }

    const destination = document.getElementById(destinationId);

    if (!destination) {
      console.error(
        `[CFP 408] No existe la secci├│n con id="${destinationId}" configurada en un bot├│n de cargo.`
      );
      return;
    }

    button.disabled = false;
    button.addEventListener("click", () => {
      window.location.hash = destination.id;
    });
  });
})();
