function fecharModal() {
    document.getElementById("welcomeModal").style.display = "none";
    document.getElementById("formContainer").classList.remove("hidden");
    localStorage.setItem("modalExibido", "true");
  }

  window.onload = function () {
    const modalExibido = localStorage.getItem("modalExibido");
    if (modalExibido) {
      document.getElementById("welcomeModal").style.display = "none";
      document.getElementById("formContainer").classList.remove("hidden");
    }
  };
  const modal = document.getElementById("receptionModal");
  const closeModalButton = document.getElementById("closeModal");
  const goToFormButton = document.getElementById("goToFormButton");
  const formContainer = document.querySelector(".max-w-5xl");

  window.onload = function() {
      modal.style.display = "block";
  };

  closeModalButton.onclick = function() {
      modal.style.display = "none";
  };

  goToFormButton.onclick = function() {
      modal.style.display = "none";
      formContainer.style.display = "block";
  };

  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
           formContainer.style.display = "block";
      }
  };