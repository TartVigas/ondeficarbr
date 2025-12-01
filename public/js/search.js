// /public/js/search.js
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results || !window.estabelecimentos) return;

  const baseUrl = "/public"; // ajuste se o Vercel usar outro caminho

  const renderResults = (items) => {
    results.innerHTML = "";

    if (!items.length) {
      const div = document.createElement("div");
      div.className = "search-empty";
      div.textContent = "Nenhuma hospedagem encontrada.";
      results.appendChild(div);
      return;
    }

    items.slice(0, 20).forEach((item) => {
      const a = document.createElement("a");
      a.className = "search-item";
      a.href = `${baseUrl}/peruibe/estabelecimentos/${item.slug}.html`;
      a.innerHTML = `
        <strong>${item.nome}</strong>
        <span>${item.tipo} • ${item.bairro || "Bairro não informado"} • ${
        item.cidade
      }</span>
      `;
      results.appendChild(a);
    });
  };

  const handle = () => {
    const q = input.value.trim().toLowerCase();

    if (!q) {
      results.innerHTML = "";
      return;
    }

    const filtered = window.estabelecimentos.filter((e) => {
      const txt = (
        e.nome +
        " " +
        (e.tipo || "") +
        " " +
        (e.bairro || "") +
        " " +
        (e.cidade || "")
      ).toLowerCase();
      return txt.includes(q);
    });

    renderResults(filtered);
  };

  input.addEventListener("input", handle);
  input.addEventListener("focus", handle);
  document.addEventListener("click", (ev) => {
    if (!results.contains(ev.target) && ev.target !== input) {
      results.innerHTML = "";
    }
  });
});
