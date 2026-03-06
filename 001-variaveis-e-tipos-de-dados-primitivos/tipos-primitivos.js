// ============================================================
//   AULA: Variáveis e Tipos de Dados Primitivos em JavaScript
// ============================================================

// ============================================================
// 0. INTRODUÇÃO
// ============================================================

// Para inserir comentários no código, utilizamos:

// Duas aspas para comentário simples
console.log(); // Duas aspas para comentário simples - funciona na linha após o código

/*
  Para inserir comentários no código, utilizamos:

  - Duas aspas para comentário simples
  - Barra e asterisco para comentários de várias linhas
*/

// Para exibir valores no console, utilizamos o console.log()

console.log("Olá, Mundo!"); // exibe a mensagem "Olá, Mundo!" no console

// Posso exibir várias coisas juntas, separando por vírgula
console.log("Nome:", "outra informação", 1, 2, 3);

// ============================================================
// 1. DECLARAÇÃO DE VARIÁVEIS
// ============================================================

// var  → forma antiga, evite usar (escopo global/função)
// let  → valor pode ser alterado (escopo de bloco)
// const → valor NÃO pode ser reatribuído (escopo de bloco)

var   nomePessoa  = "Carlos";   // não recomendado
let   idade       = 25;         // pode mudar
const PI          = 3.14159;    // constante, não muda

console.log(nomePessoa, idade, PI);
console.log("_______________________________");

// Observações:

// NÃO É POSSÍVEL CRIAR DUAS VARIÁVEIS COM O MESMO NOME
// Exemplo de utilização para informações similares:
let nome1 = "fulano"
let nome2 = "ciclano"
let nome3 = "beltrano"

console.log("Nome2 original:", nome2);

// Se eu quiser substituir o valor de nome2, posso fazer:
nome2 = "ciclano Silva";
// Observe: Não utilizei let ou const, pois a variável já foi declarada/criada

console.log("Nome2 após alteração:", nome2);

// ============================================================
// 2. TIPOS PRIMITIVOS
// ============================================================

// ── 2.1 String (texto) ──────────────────────────────────────
let saudacao       = "Olá, Mundo!";      // aspas duplas
let linguagem      = 'JavaScript';        // aspas simples
let templateString = `Eu estudo ${linguagem} todo dia!`; // template literal

console.log(saudacao);
console.log(linguagem);
console.log(templateString);
console.log(typeof saudacao); // "string"
console.log("_______________________________");


// ── 2.2 Number (número inteiro e decimal) ───────────────────
let inteiro  = 42;
let decimal  = 9.99;
let negativo = -100;

console.log(inteiro, decimal, negativo);
console.log(typeof inteiro); // "number"
console.log("_______________________________");


// ── 2.3 Boolean (verdadeiro ou falso) ───────────────────────
let estaChovendo   = false;
let estudandoHoje  = true;

console.log(estaChovendo);            // false
console.log(estudandoHoje);           // true
console.log(typeof estudandoHoje);    // "boolean"
console.log("_______________________________");


// ── 2.4 Undefined (variável declarada sem valor) ─────────────
let semValor;
console.log(semValor);           // undefined
console.log(typeof semValor);    // "undefined"
console.log("_______________________________");


// ── 2.5 Null (ausência intencional de valor) ─────────────────
let usuarioLogado = null; // intencionalmente vazio
console.log(usuarioLogado);          // null
console.log(typeof usuarioLogado);   // "object" - regra do JS
console.log("_______________________________");