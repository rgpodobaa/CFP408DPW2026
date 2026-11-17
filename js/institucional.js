(() => {
  const section = document.querySelector(".institutional");

  if (!section) {
    return;
  }

  const cards = section.querySelectorAll(".institutional__card, .institutional__about-card");

  const revealCards = () => {
    cards.forEach((card, index) => {
      window.setTimeout(() => {
        card.classList.add("is-visible");
      }, index * 120);
    });
  };

  const roleButtons = section.querySelectorAll(".institutional__role[data-destino]");

  roleButtons.forEach((button) => {
    const destinationId = button.dataset.destino.trim();

    if (!destinationId) {
      return;
    }

    const destination = document.getElementById(destinationId);

    if (!destination) {
      console.error(
        `[CFP 408] No existe la sección con id="${destinationId}" configurada en un botón de cargo.`
      );
      return;
    }

    button.disabled = false;
    button.addEventListener("click", () => {
      window.location.hash = destination.id;
    });
  });

  revealCards();
})();
