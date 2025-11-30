🏨 OndeFicarBR

Guia independente de hospedagens no Brasil — começando por Peruíbe (SP)
Desenvolvido por BRsys • 2025

📌 Sobre o projeto

OndeFicarBR é um guia rápido, leve e moderno para ajudar viajantes a encontrarem:

Pousadas

Hotéis

Hostels

Campings

Tudo organizado por cidade, categorias, bairros e páginas individuais otimizadas para SEO.

O projeto nasceu com foco em Peruíbe – SP, mas já foi estruturado para expansão futura para todas as cidades do Brasil.

🚀 Características principais
✔ Site estático (HTML/CSS/JS) — 100% ideal para deploy no Vercel

Não usa backend, banco ou frameworks pesados.
Rápido, leve e com manutenção super simples.

✔ Tema Dark/Light

Com persistência automática (LocalStorage).

✔ Buscador inteligente

Busca por nome, bairro ou categoria em tempo real.

✔ Páginas individuais profissionais (Modelo 3)

Cada hospedagem tem sua página própria contendo:

Nome + categoria + bairro

Descrição

Endereço

Blocos opcionais para site e Booking

Mapa

CTA “Quero exibir meu WhatsApp”
(WhatsApp BRsys: +55 13 99740-8157)

✔ Estrutura limpa e preparada para SEO

URLs amigáveis usando slug
Ex.: /peruibe/estabelecimentos/pousada-bicho-preguica.html

🗂 Estrutura do projeto
ondeficarbr/
  index.html                 ← Home principal
  public/
    css/style.css            ← Tema claro/escuro, estilos gerais
    js/data.js               ← Lista das hospedagens (20 registros)
    js/search.js             ← Algoritmo de busca
    js/theme.js              ← Switch de tema
    img/                     ← Imagens padrão/ilustrações
  peruibe/
    index.html               ← Página da cidade
    tipos/
      pousadas.html
      hoteis.html
      hostels.html
      camping.html
    lista-completa.html      ← Útil para SEO
    estabelecimentos/
      *.html                 ← 20 páginas individuais geradas

📍 Expansão para outras cidades

A estrutura permite replicar rapidamente:

/santos/
/itatiba/
/ubatuba/
/praia-grande/
/rio-de-janeiro/


Cada cidade tem:

index.html

/tipos/

/estabelecimentos/

lista-completa.html

🏆 Modelo de monetização (BRsys)

Página gratuita

Nome

Bairro

Descrição básica

Foto padrão

Links oficiais (Google, Booking, Site — quando permitido por lei)

Plano Premium (anunciante)

Fotos personalizadas

WhatsApp liberado

Botões de reservas diretos

Destaque no topo das listas

Card especial “selo premium”

WhatsApp oficial BRsys para negociação:
📱 +55 13 99740-8157

🛠 Tecnologias utilizadas

HTML5

CSS3

JavaScript puro

Deploy ideal: Vercel

Repositório: GitHub

📦 Como rodar localmente

Baixe ou clone o repositório

git clone https://github.com/TartVigas/ondeficarbr.git


Abra o arquivo:

index.html


Navegue normalmente pelo navegador.

🌎 Deploy no Vercel

Crie um novo projeto

Selecione este repositório

Root Directory: /

Build: nenhuma

Output: static

Deploy fica instantâneo.

👨‍💻 Autor

Projeto criado e mantido por BRsys — soluções digitais e sistemas web.
Contato: +55 13 99740-8157
