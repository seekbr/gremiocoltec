document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.createElement("div");
  headerPlaceholder.id = "header-placeholder";
  document.body.prepend(headerPlaceholder);

  fetch("/partials/header.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      // Agora o header existe no DOM, então podemos ativar o menu
      const menuToggle = document.getElementById("menu-toggle");
      const navbar = document.getElementById("navbar");

      if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
          console.log("Clique detectado!");
          menuToggle.classList.toggle("active");
          navbar.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("Erro ao carregar o header:", err));
});

document.addEventListener("DOMContentLoaded", () => {

  const fallback = "/assets/images/template.jpg";

  document.querySelectorAll("img").forEach(img => {

    function fallbackImage() {
      if (!img.src.includes("template.jpg")) {
        img.src = fallback;
      }
    }

    img.onerror = fallbackImage;

    // se já falhou antes do script rodar
    if (img.complete && img.naturalWidth === 0) {
      fallbackImage();
    }

  });

});