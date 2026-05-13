import { T } from "./translation-object.js";

// ── STATE ──
export let currentLang = "en";

// ── TRANSLATIONS ──


function applyLang(lang) {
    currentLang = lang;
    const t = T[lang];
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", t.dir);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.getElementById("lang-picker").value = lang;
}

document
  .getElementById("lang-picker")
  .addEventListener("change", (e) => applyLang(e.target.value));

// ── SMOOTH INIT ──
applyLang("en");

// Mobile lang/theme mirrors desktop
document
  .getElementById("lang-picker-mobile")
  .addEventListener("change", (e) => {
    applyLang(e.target.value);
    document.getElementById("lang-picker").value = e.target.value;
  });

document.getElementById("theme-btn-mobile").addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
  document.getElementById("theme-btn-mobile").textContent =
    currentTheme === "dark" ? "☀" : "◐";
});

// Keep desktop lang picker in sync with mobile
document.getElementById("lang-picker").addEventListener("change", (e) => {
  document.getElementById("lang-picker-mobile").value = e.target.value;
});
