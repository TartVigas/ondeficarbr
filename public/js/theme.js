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
