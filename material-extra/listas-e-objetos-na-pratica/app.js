// ============================================================
//  DADOS MOKADOS — Lista de Objetos
//  Cada artista É um objeto { } com propriedades.
//  Todos os artistas estão dentro de um array [ ].
//  A propriedade "musicas" também é um array [ ] de strings.
// ============================================================

let artistas = [
  {
    id: 1,
    nome: "Arctic Monkeys",
    genero: "Indie Rock",
    pais: "Reino Unido",
    musicas: ["Do I Wanna Know?", "R U Mine?", "505", "Fluorescent Adolescent"]
  },
  {
    id: 2,
    nome: "Tame Impala",
    genero: "Psychedelic Rock",
    pais: "Austrália",
    musicas: ["The Less I Know The Better", "Feels Like We Only Go Backwards", "Eventually"]
  },
  {
    id: 3,
    nome: "Dua Lipa",
    genero: "Pop",
    pais: "Reino Unido",
    musicas: ["Levitating", "Don't Start Now", "Physical", "One Kiss"]
  },
  {
    id: 4,
    nome: "Caetano Veloso",
    genero: "MPB",
    pais: "Brasil",
    musicas: ["Sozinho", "Cucurrucucú Paloma", "O Leãozinho"]
  }
];

// Próximo ID disponível (simula auto-increment de banco de dados)
let proximoId = artistas.length + 1;

// ============================================================
//  RENDERIZAÇÃO — Painel de Estrutura de Dados
// ============================================================

function gerarCodigoSintaxe(lista) {
  const ind = (n) => "  ".repeat(n); // indentação

  let linhas = [];
  linhas.push(`<span class="token-comment">// Lista (array) de artistas — ${lista.length} item(s) no total</span>`);
  linhas.push(`<span class="token-var">let</span> artistas = <span class="token-bracket">[</span>`);

  lista.forEach((artista, i) => {
    const virgula = i < lista.length - 1 ? "," : "";
    linhas.push(`${ind(1)}<span class="token-brace">{</span>`);
    linhas.push(`${ind(2)}<span class="token-key">id</span>: <span class="token-number">${artista.id}</span>,`);
    linhas.push(`${ind(2)}<span class="token-key">nome</span>: <span class="token-string">"${artista.nome}"</span>,`);
    linhas.push(`${ind(2)}<span class="token-key">genero</span>: <span class="token-string">"${artista.genero}"</span>,`);
    linhas.push(`${ind(2)}<span class="token-key">pais</span>: <span class="token-string">"${artista.pais}"</span>,`);
    linhas.push(`${ind(2)}<span class="token-key">musicas</span>: <span class="token-bracket">[</span><span class="token-comment"> // array com ${artista.musicas.length} música(s)</span>`);
    artista.musicas.forEach((m, mi) => {
      const vc = mi < artista.musicas.length - 1 ? "," : "";
      linhas.push(`${ind(3)}<span class="token-string">"${m}"</span>${vc}`);
    });
    linhas.push(`${ind(2)}<span class="token-bracket">]</span>`);
    linhas.push(`${ind(1)}<span class="token-brace">}</span>${virgula}`);
  });

  linhas.push(`<span class="token-bracket">]</span>;`);
  return linhas.join("\n");
}

function atualizarPainelCodigo() {
  document.getElementById("estrutura-codigo").innerHTML = gerarCodigoSintaxe(artistas);
}

// ============================================================
//  RENDERIZAÇÃO — Cards dos Artistas
// ============================================================

function renderizarArtistas() {
  const container = document.getElementById("lista-artistas");
  const contador  = document.getElementById("contador");

  contador.textContent = `${artistas.length} artista(s) cadastrado(s) — índices [0] a [${artistas.length - 1}]`;

  container.innerHTML = "";

  artistas.forEach((artista, index) => {
    const card = document.createElement("div");
    card.className = "artista-card";
    card.id = `card-${artista.id}`;

    const musicasHTML = artista.musicas
      .map((m, i) => `
        <li>
          <span class="musica-index">[${i}]</span>
          ${m}
        </li>`)
      .join("");

    card.innerHTML = `
      <div class="artista-card-header">
        <span class="artista-nome">${artista.nome}</span>
        <span class="artista-id">artistas[${index}]</span>
      </div>
      <div class="artista-meta">
        <span class="badge badge-genero">${artista.genero}</span>
        <span class="badge badge-pais">📍 ${artista.pais}</span>
      </div>
      <p class="musicas-label">
        musicas <span>array[${artista.musicas.length}]</span>
      </p>
      <ul class="musicas-lista">${musicasHTML}</ul>
      <button class="btn-remover" onclick="removerArtista(${artista.id})">
        🗑 Remover artista
      </button>
    `;

    container.appendChild(card);
  });

  atualizarSelect();
  atualizarPainelCodigo();
}

// ============================================================
//  SELECT — Atualizar lista de artistas no formulário
// ============================================================

function atualizarSelect() {
  const select = document.getElementById("artista-select");
  const valorAtual = select.value;

  select.innerHTML = `<option value="">-- Escolha um artista --</option>`;
  artistas.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a.id;
    opt.textContent = a.nome;
    select.appendChild(opt);
  });

  // Mantém a seleção se ainda existir
  if (valorAtual) select.value = valorAtual;
}

// ============================================================
//  AÇÕES — Adicionar Artista (cria novo OBJETO e insere no ARRAY)
// ============================================================

document.getElementById("form-artista").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome          = document.getElementById("nome").value.trim();
  const genero        = document.getElementById("genero").value.trim();
  const pais          = document.getElementById("pais").value.trim();
  const musicaInicial = document.getElementById("musica-inicial").value.trim();

  // Criando um novo OBJETO com as informações do formulário
  const novoArtista = {
    id: proximoId++,
    nome: nome,
    genero: genero,
    pais: pais,
    musicas: [musicaInicial]   // array já começa com a primeira música
  };

  // Adicionando o objeto ao final do ARRAY
  artistas.push(novoArtista);

  renderizarArtistas();
  this.reset();
  mostrarToast(`✅ "${nome}" adicionado(a) à lista!`);
});

// ============================================================
//  AÇÕES — Adicionar Música (insere string no ARRAY do objeto)
// ============================================================

document.getElementById("form-musica").addEventListener("submit", function (e) {
  e.preventDefault();

  const artistaId  = parseInt(document.getElementById("artista-select").value);
  const novaMusica = document.getElementById("nova-musica").value.trim();

  // Encontrando o objeto correto dentro do array (pelo id)
  const artista = artistas.find(a => a.id === artistaId);

  if (!artista) {
    mostrarToast("⚠️ Selecione um artista válido.");
    return;
  }

  // Adicionando a música ao array de músicas DAQUELE objeto
  artista.musicas.push(novaMusica);

  renderizarArtistas();
  document.getElementById("nova-musica").value = "";
  mostrarToast(`🎵 "${novaMusica}" adicionada às músicas de ${artista.nome}!`);
});

// ============================================================
//  AÇÕES — Remover Artista (remove objeto do array)
// ============================================================

function removerArtista(id) {
  const index = artistas.findIndex(a => a.id === id);
  if (index === -1) return;

  const nome = artistas[index].nome;

  // Removendo o objeto do array pelo índice
  artistas.splice(index, 1);

  renderizarArtistas();
  mostrarToast(`🗑 "${nome}" removido(a) da lista.`);
}

// ============================================================
//  UTILITÁRIO — Toast de notificação
// ============================================================

let toastTimer;

function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}

// ============================================================
//  INICIALIZAÇÃO
// ============================================================

renderizarArtistas();
