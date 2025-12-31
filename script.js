document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("burger-toggle").checked = false;
    });
  });
});
