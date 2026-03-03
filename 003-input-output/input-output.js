
// ============================================================
// AULA: Input e Output (Entrada e Saída) em JavaScript
// ============================================================

// Esta aula mostra formas comuns de saída (output) com console
// e formas de entrada (input) usando o pacote readline-sync.

// Antes de executar, instale o pacote dentro da pasta deste arquivo com:
//     npm install readline-sync
// Este pacote permite a captura de entrada do usuário via terminal.

// Para executar o arquivo, use o seguinte comando no terminal:
//     node input-output.js


// ============================================================
// 1. OUTPUT (saída de dados) — usos comuns do console
// ============================================================

console.log('Olá, mundo!'); // saída básica
console.info('Info: este é um exemplo de console.info');
console.warn('Aviso: cuidado com valores inesperados');
console.error('Erro: algo deu errado (só exemplo)');

console.log("_______________________________");

// Arrays e objetos ficam legíveis com console.table
const alunos = [
	{ nome: 'João', idade: 20 },
	{ nome: 'Maria', idade: 22 },
	{ nome: 'Pedro', idade: 19 }
];
console.table(alunos);

console.log("_______________________________");

const lista = ['Item 1', 'Item 2', 'Item 3'];
console.table(lista);

console.log('--- Fim da seção de OUTPUT ---');

// ============================================================
// 2. INPUT (entrada de dados) — usando readline-sync
// ============================================================

// Requer o pacote readline-sync para entrada interativa.
// Sempre preciso instanciar/declarar ele para iniciar a captura de dados
let readlineSync = require('readline-sync');

// Captura interativa do usuário
const nomeUsuario = readlineSync.question('Digite seu nome: ');

// questionInt garante que o valor retornado é um número inteiro
const idadeUsuario = readlineSync.questionInt('Digite sua idade: ');

// keyInYN pergunta sim/não e retorna true/false
const gostaDeProgramar = readlineSync.keyInYN('Voce gosta de programar? (s/n) ');

// ============================================================
// 3. Usando os valores capturados — exemplos de saída compostos
// ============================================================

console.log("_______________________________");

console.log(`Olá, ${nomeUsuario}! Idade: ${idadeUsuario}`);
console.log(`${nomeUsuario} ${gostaDeProgramar ? 'gosta' : 'não gosta'} de programar.`);

// Combinar dados em um objeto e imprimir como tabela
const usuario = { nome: nomeUsuario, idade: idadeUsuario, gostaDeProgramar };
console.table([usuario]);

console.log("_______________________________");