// ============================================================
//   AULA: Funções Simples em JavaScript
// ============================================================

// Uma FUNÇÃO é um BLOCO DE CÓDIGO com nome, que pode ser executado
// quantas vezes quisermos (chamando-o pelo nome).
//
// Por que usar funções?
// • Evitar repetição de código.
// • Organizar o programa em pedaços menores e mais legíveis.
// • Reaproveitar a mesma lógica em diferentes lugares.


// ============================================================
// 1. DECLARANDO E CHAMANDO UMA FUNÇÃO
// ============================================================

// Forma clássica: function <nome>() { ... }

function saudacao() {
  console.log("Hello World!");
}

// Chamando (executando) a função:
saudacao();
saudacao();
saudacao();

// A mesma função foi executada 3 vezes — sem repetir o código.

console.log("_______________________________");


// ============================================================
// 2. POR QUE FUNÇÕES? (antes vs. depois)
// ============================================================

// SEM função (código repetido):
console.log("=================");
console.log("   RELATÓRIO 1   ");
console.log("=================");

console.log("=================");
console.log("   RELATÓRIO 2   ");
console.log("=================");

console.log("=================");
console.log("   RELATÓRIO 3   ");
console.log("=================");

// COM função (organizado e sem repetição):
function exibirCabecalho() {
  console.log("=================");
  console.log("    RELATÓRIO    ");
  console.log("=================");
}

exibirCabecalho();
exibirCabecalho();
exibirCabecalho();

console.log("_______________________________");


// ============================================================
// 3. ORDEM DE EXECUÇÃO
// ============================================================

// O código de DENTRO da função NÃO é executado quando você
// declara a função — apenas quando você CHAMA (com parênteses).

console.log("Antes de chamar a função.");

function mensagem() {
  console.log("Estou DENTRO da função!");
}

console.log("Depois de declarar, antes de chamar.");
mensagem();
console.log("Depois de chamar.");

console.log("_______________________________");


// ============================================================
// 4. FUNÇÕES PODEM CHAMAR OUTRAS FUNÇÕES
// ============================================================

function linhaSeparadora() {
  console.log("--------------------------------");
}

function tituloDaSecao() {
  linhaSeparadora();
  console.log("   SEÇÃO IMPORTANTE   ");
  linhaSeparadora();
}

tituloDaSecao();

console.log("_______________________________");


// ============================================================
// 5. AGRUPANDO LÓGICA – exemplo prático
// ============================================================

// Sem função, repetimos a mesma lógica em vários lugares.
// Com função, escrevemos UMA VEZ e reutilizamos.

function exibirHorario() {
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();
  console.log(`Horário atual: ${horas}:${minutos}:${segundos}`);
}

exibirHorario();
// ... outras coisas acontecem ...
exibirHorario();

console.log("_______________________________");


// ============================================================
// 6. ESCOPO
// ============================================================

// Variáveis declaradas DENTRO de uma função NÃO existem fora dela.
// Cada função tem seu próprio "espaço" de trabalho.
// Se declarar fora, possui escopo global.
// Similar ao for() e while()

const valorRandom = 123; // variável global, existe em todo o programa

function calcularTotal() {
  console.log(`Valor aleatório dentro da função: ${valorRandom}`);
  valorRandom = 555;

  const preco = 100; // só existe DENTRO desta função
  const desconto = 10; // só existe DENTRO desta função
  const total = preco - desconto; // só existe DENTRO desta função
  console.log(`Total dentro da função: ${total}`);
}

calcularTotal();
console.log(`Valor aleatório fora da função: ${valorRandom}`);
// console.log(preco); // ERRO! preco não existe aqui fora.

console.log("_______________________________");


// ============================================================
// 7. EXEMPLO PRÁTICO – menu de jogo
// ============================================================

// Cada parte do menu é uma função pequena.

function exibirTitulo() {
  console.log("================================");
  console.log("       JOGO DA ADIVINHAÇÃO       ");
  console.log("================================");
}

function exibirInstrucoes() {
  console.log("1. Pense em um número de 1 a 10.");
  console.log("2. O computador vai tentar adivinhar.");
  console.log("3. Responda 'sim' ou 'não' às perguntas.");
}

function exibirRodape() {
  console.log("--------------------------------");
  console.log("Pressione qualquer tecla para começar.");
}

// O "programa principal" fica MUITO mais limpo:
exibirTitulo();
exibirInstrucoes();
exibirRodape();

console.log("_______________________________");


// ============================================================
// 8. RESUMO RÁPIDO
// ============================================================

// • Função = bloco de código com nome.
// • Declarar: function nome() { ... }
// • Chamar: nome();
// • O código SÓ executa quando você chama.
// • Variáveis declaradas dentro são LOCAIS (escopo da função).
// • Funções podem chamar outras funções.
// • Use funções para EVITAR REPETIÇÃO e ORGANIZAR seu código.