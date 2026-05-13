// ── STATE ──
let currentTheme = "dark";

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const icon = theme === "dark" ? "☀" : "◐";
  document.getElementById("theme-btn").textContent = icon;
  const mob = document.getElementById("theme-btn-mobile");
  if (mob) mob.textContent = icon;
}

document
  .getElementById("theme-btn")
  .addEventListener("click", () =>
    applyTheme(currentTheme === "dark" ? "light" : "dark"),
  );

// ── SMOOTH INIT ──
applyTheme("dark");
