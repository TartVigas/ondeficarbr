/* ============================================================
   OndeFicarBR – main.js
   Tema + Filtros + JSON (Blog + Hospedagens)
   Projeto BRsys • 2025
============================================================ */

/* ------------------------------------------------------------
   1) DARK / LIGHT MODE
------------------------------------------------------------ */

const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("of_theme");
if (savedTheme) {
  htmlEl.setAttribute("data-theme", savedTheme);
}

function updateThemeIcon() {
  if (!toggleBtn) return;
  const isLight = htmlEl.getAttribute("data-theme") === "light";
  const icon = toggleBtn.querySelector(".theme-toggle-icon");
  if (!icon) return;
  icon.textContent = isLight ? "☀" : "☾";
}

updateThemeIcon();

function toggleTheme() {
  const current = htmlEl.getAttribute("data-theme") || "dark";
  const next = current === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-theme", next);
  localStorage.setItem("of_theme", next);
  updateThemeIcon();
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTheme);
}

/* ------------------------------------------------------------
   2) FILTRO DE HOSPEDAGENS
------------------------------------------------------------ */

function filterHospedagem(tipo) {
  const lista = document.getElementById("listaHospedagens");
  if (!lista) return;

  const cards = lista.querySelectorAll(".card");

  cards.forEach(card => {
    const cardTipo = card.getAttribute("data-tipo");

    if (tipo === "todos") {
      card.style.display = "block";
      return;
    }

    card.style.display = cardTipo === tipo ? "block" : "none";
  });
}

/* ------------------------------------------------------------
   3) JSON – HOSPEDAGENS DE PERUÍBE
------------------------------------------------------------ */

async function renderHospedagensPeruibe() {
  const lista = document.getElementById("listaHospedagens");
  if (!lista) return; // Não está na página peruibe.html

  try {
    const response = await fetch("/data/hospedagens-peruibe.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      console.error("Erro ao carregar hospedagens-peruibe.json:", response.status);
      return;
    }

    const data = await response.json();
    const hospedagens = (data && data.hospedagens) ? data.hospedagens : [];

    lista.innerHTML = "";

    if (!hospedagens.length) {
      lista.innerHTML = `
        <p style="font-size:13px; color:var(--color-text-soft);">
          Ainda não há hospedagens cadastradas. Volte em breve. 🙂
        </p>
      `;
      return;
    }

    // Ordena por campo "ordem" (se existir) e prioriza Premium
    hospedagens.sort((a, b) => {
      const pa = a.premium ? 0 : 1;
      const pb = b.premium ? 0 : 1;
      if (pa !== pb) return pa - pb;
      return (a.ordem || 999) - (b.ordem || 999);
    });

    hospedagens.forEach(h => {
      const card = document.createElement("article");
      card.className = "card";
      if (h.premium) {
        card.classList.add("card-premium");
      }
      card.setAttribute("data-tipo", h.tipo || "outro");

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">
            ${h.tipo === "pousada" ? "🏡"
              : h.tipo === "hotel" ? "🏨"
              : h.tipo === "hostel" ? "🛌"
              : h.tipo === "camping" ? "⛺"
              : "⭐"}
          </div>
          <div>
            <h3 class="card-title">${h.nome}</h3>
            <p class="card-body">
              ${h.resumo || ""}
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>${(h.tipo || "").charAt(0).toUpperCase() + (h.tipo || "").slice(1)}${h.bairro ? " • " + h.bairro : ""}</span>
          <a href="${h.url || "/hospedagem.html"}" class="chip-link">Ver mais</a>
        </div>
      `;

      lista.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao processar hospedagens-peruibe.json:", error);
  }
}

/* ------------------------------------------------------------
   4) JSON – POSTS DO BLOG
------------------------------------------------------------ */

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

    grid.innerHTML = "";

    if (!posts.length) {
      grid.innerHTML = `
        <p style="font-size:13px; color:var(--color-text-soft);">
          Ainda não temos artigos publicados. Volte em breve. 🙂
        </p>
      `;
      return;
    }

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
   5) ON LOAD
------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  renderHospedagensPeruibe();
  renderBlogPosts();
  console.log("OndeFicarBR • main.js carregado com sucesso 🚀");
});
