// ============================================================
//   AULA: Estruturas de Controle – Repetição (while / do...while)
// ============================================================

// O while é o laço ideal quando NÃO sabemos quantas vezes o bloco deve se repetir
// A repetição depende de uma condição que pode mudar durante a execução
//    por exemplo, a resposta do usuário


// ============================================================
// 1. SINTAXE DO WHILE
// ============================================================

// while (condição) {
//   // código repetido enquanto a condição for true
// }
//
// ATENÇÃO: se a condição nunca se tornar false, o laço
// roda para sempre (loop infinito). Sempre garanta que
// algo dentro do bloco vai eventualmente tornar a condição false.

let contador = 1;

while (contador <= 5) {
  console.log(`entrou, valor do contador: ${contador}`);
  contador++; // sem isso, loop infinito
}

console.log("_______________________________");


// ============================================================
// 2. WHILE vs FOR — quando usar cada um?
// ============================================================

// Use FOR quando:
//   - Você sabe exatamente quantas vezes vai repetir.
//   - Há um contador bem definido com início, fim e valor do passo (o incremento/decremento do contador).
//
// Use WHILE quando:
//   - O número de repetições depende de algo que muda em tempo real
//     (resposta do usuário, leitura de dado, resultado de cálculo).
//   - A condição de parada não é um contador simples.

// Exemplo: continua pedindo um número até o usuário digitar 0
// (com for() seria difícil, pois não sabemos quantas tentativas serão - seria necessária alguma "gambiarra")

// Exemplo simulado (n tentativas para acertar algum numero)
let entrada = 5; // imagine que o usuário digitou valores diferentes
let tentativas = 0;
const numeroCorreto = 77;

while (entrada <= 0) {
  tentativas++;
  console.log(`Tentativa ${tentativas}: entrada = ${entrada}`);
  if (entrada === numeroCorreto) {
    console.log(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativa(s).`);
    entrada = 0; // força a saída do while - não é a melhor forma, mas por hora atende a necessidade
  }
  entrada--;
}
console.log(`Parou após ${tentativas} tentativa(s).`);

console.log("_______________________________");


// ============================================================
// 3. LOOP PARA VALIDAÇÃO DE ENTRADA
// ============================================================

// Um uso muito comum do while é validar o que o usuário digita:
// repetir até que o valor seja aceitável.

// Exemplo simulado: aceita apenas valores entre 1 e 10
// Usuário digita 12 (valor inválido)
let numero = 12;

while (numero < 1 || numero > 10) {
  numero = lerTeclado.questionInt("Valor inválido. Digite um número de 1 a 10: ");
}
console.log(`Agora sim! Você digitou: ${numero}`);

console.log("_______________________________");


// ============================================================
// 4. DO...WHILE
// ============================================================

// O do...while é uma variação do while.
// A diferença: o bloco é executado PELO MENOS UMA VEZ,
// mesmo que a condição já seja false na primeira verificação.
//
// do {
//   // código executado ao menos uma vez
// } while (condição);
//
// A condição é verificada DEPOIS do bloco, não antes.

// Com while (bloco pode não executar):
let x = 10;
while (x < 5) {
  console.log("while: nunca executa porque 10 < 5 é false");
}

// Com do...while (bloco executa ao menos uma vez):
let y = 10;
do {
  console.log(`do...while: executou com y = ${y}`); // executa mesmo que y > 5
} while (y < 5);

console.log("_______________________________");

// Uso típico do do...while: menu que exibe ao menos uma vez
// e repete enquanto o usuário não escolher sair.

let opcao;
do {
  console.log("1 – Opção A | 2 – Opção B | 0 – Sair");
  opcao = lerTeclado.questionInt("Escolha: ");
} while (opcao !== 0);

console.log("_______________________________");


// ============================================================
// 5. ACUMULADORES E CONTADORES COM WHILE
// ============================================================

// O while também pode acumular valores.
// Aqui, somamos todos os múltiplos de 3 menores que 50.

let i = 3;
let soma = 0;
let quant = 0;

while (i < 50) {
  soma += i;
  quant++;
  i += 3; // próximo múltiplo de 3
}

console.log(`Múltiplos de 3 menores que 50: ${quant}`);
console.log(`Soma desses múltiplos: ${soma}`);

console.log("_______________________________\n");


// ============================================================
// 6. EXEMPLO PRÁTICO – menu repetitivo com do...while
// ============================================================

let lerTeclado = require('readline-sync');

let saldo = 500;
let escolha;

do {
  console.log("=== BANCO DIGITAL ===");
  console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
  console.log("1 – Depositar");
  console.log("2 – Sacar");
  console.log("3 – Verificar Saldo");
  console.log("0 – Sair");

  escolha = lerTeclado.questionInt("Escolha: ");

  switch (escolha) {
    case 1:
      const deposito = lerTeclado.questionFloat("Valor do depósito: R$ ");
      if (deposito > 0) {
        saldo += deposito;
        console.log(`Depósito de R$ ${deposito.toFixed(2)} realizado.`);
      } else {
        console.log("Valor inválido.");
      }
      break;
    case 2:
      const saque = lerTeclado.questionFloat("Valor do saque: R$ ");
      if (saque <= 0) {
        console.log("Valor inválido.");
      } else if (saque > saldo) {
        console.log("Saldo insuficiente.");
      } else {
        saldo -= saque;
        console.log(`Saque de R$ ${saque.toFixed(2)} realizado.`);
      }
      break;
    case 3:
      console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
      break;
    case 0:
      console.log("Saindo... Até logo!");
      break;
    default:
      console.log("Opção inválida.");
  }

} while (escolha !== 0);

console.log("_______________________________");
