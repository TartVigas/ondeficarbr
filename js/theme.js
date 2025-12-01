// /public/js/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  const saved = localStorage.getItem("ofbr-theme");
  if (saved === "light" || saved === "dark") {
    html.setAttribute("data-theme", saved);
  } else {
    html.setAttribute("data-theme", "dark");
  }

  const refreshIcon = () => {
    if (!toggle) return;
    const current = html.getAttribute("data-theme") || "dark";
    toggle.textContent = current === "dark" ? "🌙" : "☀️";
  };
// theme.js – BRsys Premium Theme Switcher

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// 1. Carregar tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  html.classList.remove("dark");
  toggleBtn.textContent = "🌙";
}

// 2. Alternar tema ao clicar
toggleBtn.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

  refreshIcon();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("ofbr-theme", next);
      refreshIcon();
    });
  }
});
