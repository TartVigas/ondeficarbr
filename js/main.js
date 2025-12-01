<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Peruíbe – Guia Completo • OndeFicarBR</title>
  <meta name="description"
        content="Guia turístico completo de Peruíbe – SP: praias, trilhas, Costão, o que fazer e onde se hospedar. Hospedagens com contato direto e anúncios Premium." />
  <link rel="stylesheet" href="/css/style.css" />
</head>

<body class="page">

<!-- TOPBAR -->
<header class="topbar">
  <div class="topbar-inner">
    <div class="brand">
      <div class="brand-logo">OF</div>
      <div class="brand-text">
        <span class="brand-title">OndeFicarBR</span>
        <span class="brand-subtitle">Guia de Peruíbe</span>
      </div>
    </div>

    <div class="topbar-actions">
      <a href="/" class="chip-link">Home</a>

      <button id="themeToggle" class="theme-toggle" type="button">
        <div class="theme-toggle-icon">☾</div>
        <span>tema</span>
      </button>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="container hero-inner">
    <div>

      <nav class="breadcrumb">
        <a href="/">Início</a>
        <span>•</span>
        <span>Peruíbe – SP</span>
      </nav>

      <h1 class="hero-title">
        Guia Completo de <strong>Peruíbe – SP</strong>
      </h1>

      <p class="hero-text">
        Praias, Costão, trilhas, cachoeiras e hospedagens para todos os estilos.
        Aqui você encontra onde ficar, o que fazer e como explorar Peruíbe, tudo num só lugar.
      </p>

      <div class="hero-cta-row">
        <a href="#hospedagens" class="btn-primary">
          <span class="icon">🛏</span>
          <span>Ver Hospedagens</span>
        </a>

        <a href="#oque-fazer" class="btn-ghost">
          <span>Ver O que Fazer</span>
        </a>
      </div>

      <p class="hero-meta">
        Conteúdo real, independente e sempre em atualização.
      </p>

    </div>

    <aside class="hero-image-wrapper">
      <div class="hero-image"
           style="background-image:url('/img/hero-costao-peruibe.jpg');">
        <div class="hero-image-content">

          <div>
            <div class="hero-breadcrumb">
              <span>Brasil</span>
              <span class="separator">•</span>
              <span>Litoral Sul</span>
              <span class="separator">•</span>
              <span>Peruíbe</span>
            </div>
            <div class="hero-location">Costão de Peruíbe</div>
            <div class="hero-location-sub">
              Paisagem icônica e cartão-postal da cidade.
            </div>
          </div>

          <div class="hero-bottom-badge">
            <span>📍 Atualizado em 2025 • Conteúdo BRsys</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</section>

<main>

<!-- ============================================
     SEÇÃO – O QUE FAZER EM PERUÍBE
================================================= -->
<section class="section" id="oque-fazer">
  <div class="container">

    <header class="section-header">
      <p class="section-kicker">O que fazer</p>
      <h2 class="section-title">Experiências e pontos turísticos</h2>
      <p class="section-description">
        Uma seleção direta do que realmente vale a pena conhecer em Peruíbe.
      </p>
    </header>

    <div class="grid grid-3">

      <article class="card">
        <div class="card-header">
          <div class="card-icon">🌊</div>
          <div>
            <h3 class="card-title">Praia do Costão</h3>
            <p class="card-body">
              Praia extensa com vista incrível do costão rochoso e ondas fortes.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Peruíbe – SP</span>
        </div>
      </article>

      <article class="card">
        <div class="card-header">
          <div class="card-icon">🏞</div>
          <div>
            <h3 class="card-title">Rio Preto / Guaraú</h3>
            <p class="card-body">
              Natureza preservada, águas limpas e ideal para quem busca tranquilidade.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Guaraú</span>
        </div>
      </article>

      <article class="card">
        <div class="card-header">
          <div class="card-icon">🥾</div>
          <div>
            <h3 class="card-title">Trilhas e Cachoeiras</h3>
            <p class="card-body">
              Caminhadas leves a intensas para todos os níveis, sempre em meio ao verde.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Serra da Juréia</span>
        </div>
      </article>

    </div>

  </div>
</section>

<!-- ============================================
     SEÇÃO – HOSPEDAGENS (COM FILTROS)
================================================= -->
<section class="section" id="hospedagens">
  <div class="container">

    <header class="section-header">
      <p class="section-kicker">Onde ficar</p>
      <h2 class="section-title">Hospedagens em Peruíbe</h2>
      <p class="section-description">
        Lista leve com pousadas, hotéis, hostels e campings. Premium aparece primeiro.
      </p>
    </header>

    <!-- FILTROS SIMPLES -->
    <div style="
      margin-bottom: 16px;
      display:flex;
      gap:10px;
      flex-wrap:wrap;
    ">
      <button class="chip-link" onclick="filterHospedagem('todos')">Todos</button>
      <button class="chip-link" onclick="filterHospedagem('pousada')">Pousadas</button>
      <button class="chip-link" onclick="filterHospedagem('hotel')">Hotéis</button>
      <button class="chip-link" onclick="filterHospedagem('hostel')">Hostels</button>
      <button class="chip-link" onclick="filterHospedagem('camping')">Camping</button>
    </div>

    <!-- GRID DE HOSPEDAGENS -->
    <div class="grid grid-3" id="listaHospedagens">

      <!-- PREMIUM -->
      <article class="card card-premium" data-tipo="pousada">
        <div class="card-header">
          <div class="card-icon">⭐</div>
          <div>
            <h3 class="card-title">Pousada Premium Exemplo</h3>
            <p class="card-body">
              Localização excelente e atendimento diferenciado. Selo Premium.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Pousada • Guaraú</span>
          <a href="/hospedagem.html" class="chip-link">Ver mais</a>
        </div>
      </article>

      <!-- GRATUITOS -->
      <article class="card" data-tipo="pousada">
        <div class="card-header">
          <div class="card-icon">🏡</div>
          <div>
            <h3 class="card-title">Pousada do Centro</h3>
            <p class="card-body">
              Opção simples e bem localizada, perto de mercados e praias.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Pousada</span>
          <a href="/hospedagem.html" class="chip-link">Ver mais</a>
        </div>
      </article>

      <article class="card" data-tipo="hotel">
        <div class="card-header">
          <div class="card-icon">🏨</div>
          <div>
            <h3 class="card-title">Hotel Vista Mar</h3>
            <p class="card-body">
              Quartos amplos e vista para o mar. Boa opção para famílias.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Hotel</span>
          <a href="/hospedagem.html" class="chip-link">Ver mais</a>
        </div>
      </article>

      <article class="card" data-tipo="hostel">
        <div class="card-header">
          <div class="card-icon">🛌</div>
          <div>
            <h3 class="card-title">Hostel Raiz</h3>
            <p class="card-body">
              Ambiente jovem, econômico e próximo da praia.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Hostel</span>
          <a href="/hospedagem.html" class="chip-link">Ver mais</a>
        </div>
      </article>

      <article class="card" data-tipo="camping">
        <div class="card-header">
          <div class="card-icon">⛺</div>
          <div>
            <h3 class="card-title">Camping Guaraú</h3>
            <p class="card-body">
              Área ampla e arborizada, ideal para quem gosta de natureza.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <span>Camping</span>
          <a href="/hospedagem.html" class="chip-link">Ver mais</a>
        </div>
      </article>

    </div>

    <!-- CTA PREMIUM -->
    <div class="premium-cta" style="margin-top:20px;">
      <span>
        <strong>Destaque sua hospedagem no topo da lista!</strong><br />
        Plano Premium por <strong>R$ 49,90/mês</strong>. Inclui selo Premium, prioridade e
        página dedicada.
      </span>

      <a class="whatsapp-link"
         href="https://wa.me/5513997408157?text=Quero+o+plano+Premium+do+OndeFicarBR"
         target="_blank" rel="noopener noreferrer">
        💬 WhatsApp
      </a>
    </div>

  </div>
</section>

</main>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <span>© OndeFicarBR • Peruíbe – SP • 2025</span>

    <span>
      Feito por BRsys •
      <a href="https://wa.me/5513997408157" target="_blank" rel="noopener noreferrer">
        Sites, SEO e Sistemas
      </a>
    </span>
  </div>
</footer>

<script src="/js/main.js"></script>
</body>
</html>

