document.addEventListener("DOMContentLoaded", () => {
  // Botão do menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  // Menu de usuário (dropdown no avatar)
  const userMenuButton = document.getElementById("user-menu-button");
  const userDropdown = document.getElementById("user-dropdown");

  userDropdown?.classList.add("hidden"); // Esconde o menu ao carregar a página

  userMenuButton?.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede o clique de subir e fechar instantaneamente
    userDropdown?.classList.toggle("hidden");
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener("click", (event) => {
    if (!userDropdown?.classList.contains("hidden")) {
      const isClickInside = userMenuButton.contains(event.target) || userDropdown.contains(event.target);
      if (!isClickInside) {
        userDropdown.classList.add("hidden");
      }
    }
  });
});
