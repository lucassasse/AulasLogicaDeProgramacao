// ============================================================
//   AULA: Estruturas de Controle Condicionais – Switch / Case
// ============================================================

// O switch é uma alternativa ao if/else if/else quando
// precisamos comparar UMA variável com VÁRIOS valores fixos.
// Deixa o código mais legível nesses casos.


// ============================================================
// 1. SINTAXE BÁSICA DO SWITCH
// ============================================================

// switch (expressão) {
//   case valor1:
//     // código executado se expressão === valor1
//     break;
//   case valor2:
//     // código executado se expressão === valor2
//     break;
//   default:
//     // código executado se nenhum case corresponder
// }

// O switch usa comparação ESTRITA (===).
// O break encerra o switch após o case correspondente.
// O default é opcional e funciona como o "else" final.

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira"); // executado: diaSemana === 3
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido. Informe um número de 1 a 7.");
}

console.log("_______________________________");


// ============================================================
// 2. A IMPORTÂNCIA DO BREAK
// ============================================================

// Sem o break, o JavaScript continua executando os cases
// seguintes, mesmo que a condição não corresponda.
// Esse comportamento se chama "fall-through".
// Todos os cases abaixo do que corresponde também serão executados.
// Pode ser utilizado, mas é incomum.

let opcao = 2;

// SEM break (fall-through acidental):
switch (opcao) {
  case 1:
    console.log("Case 1");
  case 2:
    console.log("Case 2"); // executado (case corresponde)
  case 3:
    console.log("Case 3"); // também executado! (sem break no case 2)
  case 4:
    console.log("Case 4"); // também executado!
}
console.log("↑ Veja: sem break, todos os cases abaixo do 2 rodaram!");

console.log("_______________________________");


// ============================================================
// 3. FALL-THROUGH INTENCIONAL
// ============================================================

// Às vezes o fall-through é PROPOSITAL:
// quando vários cases devem executar o mesmo código.
// Basta empilhar os cases sem break.

let mes = 4; // Abril

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Verão");
    break;
  case 3:
  case 4:  // mês 4 cai aqui e executa "Outono"
  case 5:
    console.log("Outono"); // executado
    break;
  case 6:
  case 7:
  case 8:
    console.log("Inverno");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Primavera");
    break;
  default:
    console.log("Mês inválido.");
}

console.log("_______________________________");


// ============================================================
// 4. SWITCH COM STRINGS
// ============================================================

// O switch funciona com qualquer tipo de dado,
// inclusive strings. A comparação continua sendo ===.

let corSemaforo = "verde";

switch (corSemaforo) {
  case "verde":
    console.log("Siga em frente.");
    break;
  case "amarelo":
    console.log("Atenção: reduza a velocidade.");
    break;
  case "vermelho":
    console.log("Pare.");
    break;
  default:
    console.log("Cor desconhecida.");
}

console.log("_______________________________");

// Outro exemplo com strings — menu de idiomas:
let idioma = "pt";

switch (idioma) {
  case "pt":
    console.log("Olá! Bem-vindo(a).");
    break;
  case "en":
    console.log("Hello! Welcome.");
    break;
  case "es":
    console.log("¡Hola! Bienvenido(a).");
    break;
  case "fr":
    console.log("Bonjour! Bienvenue.");
    break;
  default:
    console.log("Idioma não suportado.");
}

console.log("_______________________________");


// ============================================================
// 5. SWITCH vs IF / ELSE IF — quando usar cada um?
// ============================================================

// Use SWITCH quando:
//   - Comparar uma única variável com valores fixos e exatos.
//   - Há muitos casos possíveis (fica mais legível que vários else if).
//   - Os valores são números ou strings bem definidos.
//
// Use IF / ELSE IF quando:
//   - A condição envolve intervalos (ex: nota >= 7 && nota < 9).
//   - As condições são complexas com && / || / !.
//   - Cada condição compara variáveis diferentes.

// Exemplo: faixas de nota são melhor com if/else if
let notaExemplo = 7.2;

if (notaExemplo >= 9) {
  console.log("Conceito A");
} else if (notaExemplo >= 7) {
  console.log("Conceito B"); // executado
} else if (notaExemplo >= 5) {
  console.log("Conceito C");
} else {
  console.log("Conceito D");
}
// Intervalos não funcionam bem com switch, pois o case
// compara por igualdade estrita (===), não por faixas.

console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO – menu interativo com input do usuário
// ============================================================

let lerTeclado = require('readline-sync');

console.log("\n=== MENU PRINCIPAL ===");
console.log("1 – Ver saldo");
console.log("2 – Depositar");
console.log("3 – Sacar");
console.log("4 – Sair");

let saldo = 1000;

const escolha = lerTeclado.questionInt("\nEscolha uma opção: ");

switch (escolha) {
  case 1:
    console.log(`\nSeu saldo atual: R$ ${saldo.toFixed(2)}`);
    break;
  case 2:
    const deposito = lerTeclado.questionFloat("Valor do depósito: R$ ");
    if (deposito > 0) {
      saldo += deposito;
      console.log(`Depósito de R$ ${deposito.toFixed(2)} realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
    } else {
      console.log("Valor inválido para depósito.");
    }
    break;
  case 3:
    const saque = lerTeclado.questionFloat("Valor do saque: R$ ");
    if (saque <= 0) {
      console.log("Valor inválido para saque.");
    } else if (saque > saldo) {
      console.log("Saldo insuficiente.");
    } else {
      saldo -= saque;
      console.log(`Saque de R$ ${saque.toFixed(2)} realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
    }
    break;
  case 4:
    console.log("Saindo... Até logo!");
    break;
  default:
    console.log("Opção inválida. Tente novamente.");
}

console.log("_______________________________");
