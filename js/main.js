/* ============================================================
   OndeFicarBR – main.js
   Tema + Filtros
   Projeto BRsys • 2025
============================================================ */

/* ------------------------------------------------------------
   1) DARK / LIGHT MODE
------------------------------------------------------------ */

// Recupera o elemento HTML
const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// Checa no localStorage o tema anterior
const savedTheme = localStorage.getItem("of_theme");

// Aplica o tema salvo (se existir)
if (savedTheme) {
  htmlEl.setAttribute("data-theme", savedTheme);
}

// Atualiza o ícone baseado no tema atual
function updateThemeIcon() {
  if (!toggleBtn) return;

  const isLight = htmlEl.getAttribute("data-theme") === "light";
  const icon = toggleBtn.querySelector(".theme-toggle-icon");

  icon.textContent = isLight ? "☀" : "☾"; // Sol ou Lua
}

// Chama ao carregar a página
updateThemeIcon();

// Função para alternar o tema
function toggleTheme() {
  const current = htmlEl.getAttribute("data-theme") || "dark";
  const newTheme = current === "light" ? "dark" : "light";

  htmlEl.setAttribute("data-theme", newTheme);

  // Salva no localStorage
  localStorage.setItem("of_theme", newTheme);

  updateThemeIcon();
}

// Listener do botão
if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTheme);
}

/* ------------------------------------------------------------
   2) FILTRO DE HOSPEDAGENS
------------------------------------------------------------ */

function filterHospedagem(tipo) {
  const cards = document.querySelectorAll("#listaHospedagens .card");

  cards.forEach(card => {
    const cardTipo = card.getAttribute("data-tipo");

    // Se for "todos", mostra tudo
    if (tipo === "todos") {
      card.style.display = "block";
      return;
    }

    // Se o tipo for igual ao atributo, mostra, senão esconde
    card.style.display = cardTipo === tipo ? "block" : "none";
  });
}

/* ------------------------------------------------------------
   3) Suporte para futuras funcionalidades
   - Busca interna
   - Paginação
   - Botão "voltar ao topo"
   - Dinamização futura com JSON de hospedagens
------------------------------------------------------------ */

console.log("OndeFicarBR • main.js carregado com sucesso 🚀");
