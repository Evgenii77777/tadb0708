document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("navbarToggler");
  const navbarNav = document.getElementById("navbarNav");
  if (!toggler || !navbarNav) return;
  navbarNav.addEventListener("shown.bs.collapse", function () {
    toggler.classList.add("active");
  });
  navbarNav.addEventListener("hidden.bs.collapse", function () {
    toggler.classList.remove("active");
  });
});
