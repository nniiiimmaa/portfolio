// ── HAMBURGER ──
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");

function openDrawer() {
  mobileDrawer.classList.add("open");
  hamburgerBtn.classList.add("open");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  mobileDrawer.classList.remove("open");
  hamburgerBtn.classList.remove("open");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", () => {
  mobileDrawer.classList.contains("open") ? closeDrawer() : openDrawer();
});

drawerBackdrop.addEventListener("click", closeDrawer);

document
  .querySelectorAll(".drawer-link")
  .forEach((a) => a.addEventListener("click", closeDrawer));

