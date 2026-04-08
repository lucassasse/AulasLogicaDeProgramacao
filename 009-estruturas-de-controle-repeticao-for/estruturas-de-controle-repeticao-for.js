// ============================================================
//   AULA: Estruturas de Controle - Repetição (for)
// ============================================================

// Repetição (ou laço / loop) permite executar um bloco de código
// várias vezes sem precisar reescrever o mesmo código.
// O for é o laço mais usado quando sabemos quantas vezes repetir.


// ============================================================
// 1. SINTAXE BÁSICA DO FOR
// ============================================================

// for (inicialização; condição; incremento) {
//   // código repetido enquanto a condição for true
// }
//
// inicialização → executada UMA vez antes do laço começar
// condição      → verificada ANTES de cada repetição
//                 se for false, o laço termina e não executa mais
// incremento    → executado DEPOIS de cada repetição

for (let i = 1; i <= 5; i++) {
  console.log(`Repetição número ${i}`);
}
// i começa em 1, repete enquanto i <= 5, incrementa +1 a cada volta

console.log("_______________________________");


// ============================================================
// 2. CONTAGEM CRESCENTE E DECRESCENTE
// ============================================================

// Crescente: i++ (i = i + 1) — de 1 até 5
console.log("Contagem crescente:");
for (let i = 1; i <= 5; i++) {
  console.log("valor de i: ", i);
}

console.log("_______________________________");

// Decrescente: i-- (i = i - 1) — de 5 até 1
console.log("Contagem decrescente:");
for (let i = 5; i >= 1; i--) {
  console.log("valor de i: ", i);
}

console.log("_______________________________");


// ============================================================
// 3. PASSO DIFERENTE DE 1
// ============================================================

// O incremento pode ser qualquer expressão: i += 2, i *= 2, etc.

// Números pares de 0 a 20
console.log("Pares de 0 a 20:");
for (let i = 0; i <= 20; i += 2) {
  console.log("valor de i: ", i);
}

console.log("_______________________________");

// Potências de 2 até 1024
console.log("Potências de 2:");
for (let i = 1; i <= 1024; i *= 2) {
  console.log("valor de i: ", i);
}

console.log("_______________________________");


// ============================================================
// 4. ESCOPO
// ============================================================

// Se a variável estiver sendo declarada dentro do bloco do for,
// ela não estará acessível fora dele.

let x = 10;

for (let i = 0; i < 5; i++) {
  let y = 20;
  console.log(`Dentro do loop: x = ${x}, y = ${y}`);
}

// console.log(`Fora do loop: x = ${x}, y = ${y}`); // y não está definido aqui - causa erro

console.log("_______________________________");

// Toda vez que o loop for executado, uma nova variável 'y' será criada
// e o valor reatribuído a ela.

for (let i = 0; i < 5; i++) {
  let z = 20;
  console.log(`Valor de z é: ${z}`);
  z = 50;
}

console.log("_______________________________");

// ============================================================
// 5. ACUMULADORES E CONTADORES DENTRO DO FOR
// ============================================================

// Acumulador: variável que acumula um resultado ao longo das repetições.
// Contador:   variável que conta quantas vezes algo aconteceu.

// Soma de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i; // acumula a soma
}
console.log(`Soma de 1 a 100: ${soma}`); // 5050

console.log("_______________________________");

// Conta quantos números de 1 a 50 são divisíveis por 3
let contador = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    contador++;
  }
}
console.log(`Divisíveis por 3 entre 1 e 50: ${contador}`);

console.log("_______________________________");


// ============================================================
// 6. FOR COM ARRAYS
// ============================================================

// Uma forma comum de usar o for é percorrendo arrays.
// array.length retorna o número de elementos do array.

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`[${i}] ${frutas[i]}`);
}
// i vai de 0 até frutas.length - 1 (índice do último elemento)

console.log("_______________________________");

// Soma de valores em um array numérico
let precos = [12.5, 8.0, 34.9, 5.75, 21.0];
let totalPrecos = 0;

for (let i = 0; i < precos.length; i++) {
  totalPrecos += precos[i];
}
console.log(`Total dos preços: R$ ${totalPrecos.toFixed(2)}`);

console.log("_______________________________");

// Encontrar o maior valor de um array
let notas = [7.5, 9.2, 6.0, 8.8, 5.5];
let maior = notas[0]; // assume que o primeiro é o maior

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maior) {
    maior = notas[i]; // atualiza se encontrar um maior
  }
}
console.log(`Maior nota: ${maior}`);

console.log("_______________________________");

// Listar histórico de depósitos de uma conta bancária

let contaBancaria = {
  titular: "João Silva",
  saldo: 1737.87,
  historicoDepositos: [100, 150.12, 15.75, 1472]
};

for (let i = 0; i < contaBancaria.historicoDepositos.length; i++) {
  console.log(`Depósito [${i + 1}]: R$ ${contaBancaria.historicoDepositos[i].toFixed(2)}`); 
}

// ============================================================
// 7. EXEMPLO PRÁTICO - trabalhando com dados e input
// ============================================================

let lerTeclado = require('readline-sync');

// Coleta notas de N alunos e calcula a média da turma
const qtdAlunos = lerTeclado.questionInt("\nQuantos alunos há na turma? ");
let alunos = [];
let somaNotas = 0;

for (let i = 0; i < qtdAlunos; i++) {
  const nomeAluno  = lerTeclado.question(`Nome do aluno ${i + 1}: `);
  const notaAluno  = lerTeclado.questionFloat(`Nota de ${nomeAluno}: `);
  somaNotas  += notaAluno;
  alunos.push(
    { 
      nome: nomeAluno, 
      nota: notaAluno
    }
  );
}

const mediaTurma = somaNotas / qtdAlunos;
console.log(`\nMédia da turma: ${mediaTurma.toFixed(2)}`);
console.log("\nResultado individual:");

for (let i = 0; i < alunos.length; i++) {
  let situacao;
  if (alunos[i].nota >= 7) {
    situacao = "Aprovado";
  } else if (alunos[i].nota >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }
  console.log(`${alunos[i].nome}: ${alunos[i].nota} - ${situacao}`);
}

console.log("\nTabela da turma:");
console.table(alunos);

console.log("_______________________________");