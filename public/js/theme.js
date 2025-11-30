
(function() {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  const stored = localStorage.getItem("of_theme");
  if (stored === "light" || stored === "dark") {
    body.setAttribute("data-theme", stored);
  } else {
    body.setAttribute("data-theme", "dark");
  }
  const sync = () => {
    const cur = body.getAttribute("data-theme");
    toggle.textContent = cur === "light" ? "🌙" : "☀️";
  };
  sync();
  toggle.addEventListener("click", () => {
    const cur = body.getAttribute("data-theme");
    const next = cur === "light" ? "dark" : "light";
    body.setAttribute("data-theme", next);
    localStorage.setItem("of_theme", next);
    sync();
  });
})();
