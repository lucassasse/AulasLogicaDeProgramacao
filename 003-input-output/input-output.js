
// Formas de output (saída) de dados

console.log();

// Formas de input (entrada) de dados

// Necessário instalar o pacote readline-sync
// Dentro da pasta deste arquivo, execute: npm install readline-sync

// Exemplo simples de captura de dado do usuário e armazenamento em variável
const readline = require('readline-sync');

const nome = readline.question('Digite seu nome: ');

// Agora você pode usar a variável nome em qualquer parte do seu código
console.log('Olá, ' + nome + '!');