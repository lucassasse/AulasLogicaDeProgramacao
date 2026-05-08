// ============================================================
//   AULA: Estruturas de Dados – Vetor (Array)
// ============================================================

// Um VETOR (também chamado de array ou lista) é uma estrutura
// de dados que armazena vários valores em uma única variável,
// onde cada valor possui uma posição (índice) numérica.
//
// Visualmente:
//
//   índice:   0       1        2        3
//   valor:  "Ana"  "Bruno"  "Carla"  "Diego"
//
//   prática: [ "Ana", "Bruno", "Carla", "Diego" ]
//
// O índice SEMPRE começa em 0 e o último é (length - 1).


// ============================================================
// 1. DECLARAÇÃO E ACESSO
// ============================================================

const nomes = ["Ana", "Bruno", "Carla", "Diego"];

console.log(nomes);              // todo o vetor
console.log(nomes[0]);           // primeiro: "Ana"
console.log(nomes[2]);           // terceiro: "Carla"
console.log(nomes[nomes.length - 1]); // Sempre o último: "Diego"

// .length retorna a quantidade de itens armazenados
console.log(`Total de nomes: ${nomes.length}`);

console.log("_______________________________");


// ============================================================
// 2. ALTERANDO E ADICIONANDO ELEMENTOS
// ============================================================

const numeros = [10, 20, 30];

// Alterar um valor existente — pelo índice
numeros[1] = 222;
console.log(numeros); // [10, 222, 30]

// Adicionar no FIM
numeros.push(40);
console.log("push ->", numeros); // [10, 222, 30, 40]

// Adicionar no INÍCIO
numeros.unshift(111);
console.log("unshift ->", numeros); // [111, 10, 222, 30, 40]

// Remover do FIM
numeros.pop();
console.log("pop ->", numeros); // [111, 10, 222, 30]

// Remover do INÍCIO
numeros.shift();
console.log("shift ->", numeros); // [10, 222, 30]

console.log("_______________________________");


// ============================================================
// 3. PERCORRENDO UM VETOR COM FOR
// ============================================================

// O laço for é a forma clássica de percorrer um vetor.
// Vamos do índice 0 até (length - 1).

const frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Percorrendo com for tradicional:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}: ${frutas[i]}`);
}

// A utilização do for é ótima quando precisamos trabalhar com listas
// seja para exibir os itens ou cadastrá-los.

console.log("_______________________________");


// ============================================================
// 4. FOR...OF — percorrendo apenas os VALORES
// ============================================================

// Quando NÃO precisamos do índice, o for...of pode ser utilizado (não é comum em JS puro).

console.log("Percorrendo com for...of:");
for (const fruta of frutas) {
  console.log(fruta);
}

for(const qqCoisa of frutas) {
  console.log(qqCoisa);
}

console.log("_______________________________");


// ============================================================
// 5. EXEMPLOS PRÁTICOS COM VETOR + LAÇOS
// ============================================================

// 5.1 — Soma de todos os números
const valores = [15, 30, 45, 60, 75];
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}
console.log(`Soma com indice: ${soma}`);

// ----------------------------

for (const numeroAtual of valores) {
  soma += numeroAtual;
}
console.log(`Soma com for...of: ${soma}`);

// ----------------------------

soma = valores.reduce((total, valorAtual) => total + valorAtual, 0);
console.log(`Soma com reduce(): ${soma}`);


// 5.2 — Maior valor de um vetor
const notas = [7.5, 9.2, 6.1, 8.8, 5.4];
let maior = notas[0];

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maior) {
    maior = notas[i];
  }
}
console.log(`Maior nota utilizando for(): ${maior}`);

// ----------------------------

console.log(`Maior nota utilizando Math.max(): ${Math.max(...notas)}`);


// 5.3 — Média dos valores
let total = 0;
for (const nota of notas) {
  total += nota;
}
const media = total / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);
// por ser a soma do total / pela quantidade de notas =
//    posso utilizar o qualquer método de soma visto anteriormente para obter o total,
//    e depois dividir pela quantidade de notas (length).

console.log("_______________________________");


// ============================================================
// 6. BUSCANDO UM ELEMENTO
// ============================================================

frutas = ["maçã", "banana", "laranja", "uva"];

// includes() — verifica se um valor existe (true/false)
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("kiwi"));   // false

// indexOf() — retorna o índice do valor (ou -1 se não achar)
console.log(frutas.indexOf("laranja")); // 2
console.log(frutas.indexOf("kiwi")); // -1

// Busca manual com for + break
const procurado = "uva";
let achouNoIndice = -1;

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === procurado) {
    achouNoIndice = i;
    break;
  }
}

if (achouNoIndice === -1) {
  console.log(`"${procurado}" não está na lista.`);
} else {
  console.log(`"${procurado}" está no índice ${achouNoIndice}.`);
}

console.log("_______________________________");


// ============================================================
// 7. VETORES DE OBJETOS (muito comum no dia a dia)
// ============================================================

const alunos = [
  { nome: "Ana",    nota: 8.5 },
  { nome: "Bruno",  nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Diana",  nota: 4.8 },
];

console.log("Lista de alunos:");
console.table(alunos);

// Filtrando aprovados (nota >= 7)
console.log("Aprovados:");
for (const aluno of alunos) {
  if (aluno.nota >= 7) {
    console.log(`- ${aluno.nome} (${aluno.nota})`);
  }
}

console.log("_______________________________");


// ============================================================
// 8. RESUMO
// ============================================================

// • Vetor armazena vários valores em uma única variável.
// • Acesso pelo índice: vetor[i] (começa em 0).
// • .length informa quantos itens existem.
// • Para percorrer: for tradicional (com índice) ou for...of (apenas valores).
// • Métodos úteis: push, pop, shift, unshift, includes, indexOf.
// • Vetores podem conter qualquer tipo, inclusive objetos.