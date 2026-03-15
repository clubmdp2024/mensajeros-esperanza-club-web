document.addEventListener("DOMContentLoaded", () => {
  const currentPage = "inicio";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.dataset.nav === currentPage) link.classList.add("active");
  });
});