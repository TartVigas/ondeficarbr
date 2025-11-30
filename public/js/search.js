
(function(){
  if (!window.estabelecimentos) return;
  const input = document.getElementById("searchInput");
  const resultsEl = document.getElementById("searchResults");
  if (!input || !resultsEl) return;
  const render = (items) => {
    resultsEl.innerHTML = "";
    if (!items.length) return;
    const list = document.createElement("div");
    list.className = "list-grid";
    items.forEach((item) => {
      const a = document.createElement("a");
      a.className = "item-card";
      a.href = "/peruibe/estabelecimentos/" + item.slug + ".html";
      a.innerHTML = `<div class="item-title">${item.nome}</div>
        <div class="item-info">📍 ${item.bairro}<br>${item.descricao || ""}</div>`;
      list.appendChild(a);
    });
    list.scrollIntoView({behavior:"smooth", block:"start"});
    resultsEl.appendChild(list);
  };
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { resultsEl.innerHTML = ""; return; }
    const filtered = window.estabelecimentos.filter(e =>
      e.nome.toLowerCase().includes(q) ||
      (e.bairro || "").toLowerCase().includes(q) ||
      (e.tipo || "").toLowerCase().includes(q)
    );
    render(filtered);
  });
})();
