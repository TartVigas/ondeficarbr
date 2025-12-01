/* ============================================================
   OndeFicarBR – main.js
   Tema + Filtros + Sistema JSON de Posts
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

  if (!icon) return;

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
   2) FILTRO DE HOSPEDAGENS (Peruíbe)
------------------------------------------------------------ */

function filterHospedagem(tipo) {
  const lista = document.getElementById("listaHospedagens");
  if (!lista) return; // Se não estiver na página de hospedagens, sai.

  const cards = lista.querySelectorAll(".card");

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
   3) SISTEMA JSON – CARREGAR POSTS DO BLOG
------------------------------------------------------------ */

/**
 * Renderiza os posts do /data/posts.json dentro do grid #blogPostsGrid
 */
async function renderBlogPosts() {
  const grid = document.getElementById("blogPostsGrid");
  if (!grid) return; // Não está na página do blog

  try {
    const response = await fetch("/data/posts.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      console.error("Erro ao carregar posts.json:", response.status);
      return;
    }

    const data = await response.json();
    const posts = data.posts || [];

    // Limpa o grid (caso tenha algo)
    grid.innerHTML = "";

    if (!posts.length) {
      grid.innerHTML = `
        <p style="font-size:13px; color:var(--color-text-soft);">
          Ainda não temos artigos publicados. Volte em breve. 🙂
        </p>
      `;
      return;
    }

    // Para cada post, cria um card com a mesma identidade visual
    posts.forEach(post => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">📰</div>
          <div>
            <h3 class="card-title">${post.titulo}</h3>
            <p class="card-body">${post.resumo}</p>
          </div>
        </div>
        <div class="card-footer">
          <span>${post.categoria || "Artigo"}</span>
          <a href="${post.url || "/blog-post.html"}" class="chip-link">Ler artigo</a>
        </div>
      `;

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao processar posts.json:", error);
  }
}

/* ------------------------------------------------------------
   4) ON LOAD
------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  // Carrega posts do blog caso esteja em /blog.html
  renderBlogPosts();

  console.log("OndeFicarBR • main.js carregado com sucesso 🚀");
});
