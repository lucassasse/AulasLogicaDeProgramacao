
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
// Preciso instanciar/declarar ele para iniciar a captura de dados
// Dicas: 
//    Deixe ele no início do código, para melhor organização.
// 		Necessário somente uma vez por arquivo.
let lerTeclado = require('readline-sync');

// Captura interativa do usuário
const nomeUsuario = lerTeclado.question('Digite seu nome: ');

// questionInt garante que o valor retornado é um número inteiro
const idadeUsuario = lerTeclado.questionInt('Digite sua idade: ');

console.log(`Olá, ${nomeUsuario}! Idade: ${idadeUsuario}`);

// keyInYN pergunta sim/não e retorna true/false
const gostaDeProgramar = lerTeclado.keyInYN('Voce gosta de programar? (s/n) ');

// Saída de dados condicial - Se sim, exibe 1ª opção, se não, exibe a 2ª opção
console.log(`${gostaDeProgramar ? 'Gosta' : 'Não gosta'} de programar.`);

// ============================================================
// 3. Usando os valores capturados — exemplos de saída compostos
// ============================================================

console.log("_______________________________");

// Combinar dados em um objeto e imprimir como tabela
const usuario = { nome: nomeUsuario, idade: idadeUsuario, gostaDeProgramar };
console.table([usuario]);

console.log("_______________________________");