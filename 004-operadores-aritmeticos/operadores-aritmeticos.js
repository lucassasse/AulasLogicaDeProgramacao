// ============================================================
//   AULA: Operadores Aritméticos em JavaScript
// ============================================================

// ============================================================
// 1. OPERADORES BÁSICOS
// ============================================================

// Os operadores aritméticos realizam cálculos matemáticos.
// São eles: 
//            + (adição)
//            - (subtração)
//            * (multiplicação)
//            / (divisão)
//            % (módulo)
//            ** (potência)

let a = 10;
let b = 3;

console.log("Adição:       ", a + b);   // 13
console.log("Subtração:    ", a - b);   // 7
console.log("Multiplicação:", a * b);   // 30
console.log("Divisão:      ", a / b);   // 3.333...
console.log("Módulo (%):   ", a % b);   // 1  → resto da divisão
console.log("Potência (**): ", a ** b); // 1000
console.log("_______________________________");


// ── 1.1 Módulo (%) — resto da divisão ───────────────────────
// O operador % retorna o RESTO da divisão inteira.
// É muito útil para saber se um número é par ou ímpar.

console.log("Cálculo: 10 % 2 = ", 10 % 2); // 0 → 10 é par   (divisível por 2, sem resto)
console.log("Cálculo: 11 % 2 = ", 11 % 2); // 1 → 11 é ímpar (sobra 1)
console.log("Cálculo: 15 % 4 = ", 15 % 4); // 3 → 15 ÷ 4 = 3, sobra 3
console.log("_______________________________");


// ── 1.2 Potência (**) ───────────────────────────────────────
console.log("Cálculo: 2 ** 8 = ", 2 ** 8);      // 256   → 2 elevado a 8
console.log("Cálculo: 3 ** 3 = ", 3 ** 3);      // 27    → 3 ao cubo
console.log("Cálculo: 9 ** 0.5 = ", 9 ** 0.5);  // 3     → raiz quadrada de 9 (expoente 0.5)
console.log("_______________________________");

// ── 1.3 Cálculos impossíveis ───────────────────────────────────────
// Cálculos com texto resultam em NaN (Not a Number)
// Cálculos com zero como divisor resultam em Infinity

console.log(5 * "batata"); // NaN → Not a Number
console.log(5 / 0);        // Infinity
console.log("_______________________________");


// ============================================================
// 2. CUIDADO: String + Número (concatenação vs adição)
// ============================================================

// O operador + tem dois comportamentos:
//   Número + Número → soma matemática
//   String + qualquer coisa → concatenação (junta os textos)

let numero = 5;
let texto  = "10";

console.log("Cálculo: numero + 10 = ", numero + 10);       // 15    → número + número = soma
console.log("Cálculo: numero + texto = ", numero + texto); // "510" → número + string = concatenação!
console.log("_______________________________");

// Para garantir que um valor de texto vire número, use:
//   parseInt()   → converte para número inteiro
//   parseFloat() → converte para número decimal
//   Number()     → converte para número (inteiro ou decimal)

let precoTexto  = "29.90";
let precoNumero = parseFloat(precoTexto);

console.log("Cálculo: precoNumero + 10 = ", precoNumero + 10);
console.log("Tipo de precoNumero: ", typeof precoNumero);
console.log("_______________________________");

// Em alguns casos, o JavaScript converte automaticamente tipos

console.log("Cálculo: '10' - 5 = ", "10" - 5);
console.log("Cálculo: '10' * 2 = ", "10" * 2);
console.log("_______________________________");


// ============================================================
// 3. OPERADORES DE ATRIBUIÇÃO COMPOSTA
// ============================================================

// Em vez de escrever: saldo = saldo + 100
// Posso escrever de forma reduzida: saldo += 100
// Funciona com todos os operadores aritméticos.

// Simplificando o que faz: Pega o valor atual e aplica a operação

let saldo = 1000;

saldo += 200;   // saldo = saldo + 200 → 1200
console.log("Após depósito:  ", saldo);

saldo -= 350;   // saldo = saldo - 350 → 850
console.log("Após saque:     ", saldo);

saldo *= 1.05;  // saldo = saldo * 1.05 → rende 5%
console.log("Após rendimento:", saldo);

saldo /= 2;     // saldo = saldo / 2
console.log("Após divisão:   ", saldo);

saldo %= 100;   // saldo = saldo % 100 → resto de dividir por 100
console.log("Após módulo:    ", saldo);
console.log("_______________________________");


// ============================================================
// 4. INCREMENTO E DECREMENTO
// ============================================================

// ++ aumenta o valor em 1
// -- diminui o valor em 1
// São atalhos para    "valor = valor + 1"    e    "valor = valor - 1"
// São atalhos para          += 1              e         -= 1

let contador = 0;

contador++;   // equivale a: contador = contador + 1 OU contador += 1
console.log("Contador:", contador); // 1

contador++;   // equivale a: contador = contador + 1 OU contador += 1
console.log("Contador:", contador); // 2

contador--;   // equivale a: contador = contador - 1 OU contador -= 1
console.log("Contador:", contador); // 1
console.log("_______________________________");

// Prefixo (++x) vs sufixo (x++):
//   x++ → usa o valor atual e depois incrementa
//   ++x → incrementa primeiro e depois usa o valor

let x = 5;
console.log(x++); // exibe 5 → depois x vira 6
console.log(x);   // 6
console.log(++x); // x vira 7 → exibe 7
console.log("_______________________________");


// ============================================================
// 5. FUNÇÕES MATEMÁTICAS ÚTEIS (objeto Math)
// ============================================================

// Dentre diversos outros, os principais são:

// Math.round()  → arredonda para o inteiro mais próximo (.5 → para cima)
// Math.floor()  → arredonda para baixo (piso)
// Math.ceil()   → arredonda para cima (teto)

let valor = 7.6;

console.log("7.6 -> Math.round()", Math.round(valor)); // 8  → mais próximo de 7.6 é 8
console.log("7.6 -> Math.floor()", Math.floor(valor)); // 7  → para baixo
console.log("7.6 -> Math.ceil()", Math.ceil(valor));   // 8  → para cima
console.log("_______________________________");

// Math.abs()    → valor absoluto (remove o sinal negativo)
// Math.max()    → retorna o maior entre os valores
// Math.min()    → retorna o menor entre os valores

console.log("Math.abs()", Math.abs(-42));              // 42 → remove o sinal negativo
console.log("Math.max()", Math.max(3, 8, 1));          // 8  → maior dos três
console.log("Math.min()", Math.min(3, 8, 1));          // 1  → menor dos três
console.log("_______________________________");


// ── 5.1 toFixed() — casas decimais fixas ────────────────────
// toFixed(n) formata um número com n casas decimais.
// Retorna uma STRING, não um número!

let resultado = 10 / 3;
console.log("Sem toFixed() = ", resultado);              // 3.3333333333333335
console.log("Com toFixed(2) = ", resultado.toFixed(2));  // "3.33"
console.log("Com toFixed(4) = ", resultado.toFixed(4));  // "3.3333"

// Dica, para converter, utiliza-se:  Number() ou parseFloat()
console.log("Com Number(toFixed(2)) = ", Number(resultado.toFixed(2)));  // 3.33
console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO — calculando com input do usuário
// ============================================================

// Para capturar números decimais do terminal, usamos questionFloat().
// É similar ao questionInt(), mas aceita casas decimais.

let lerTeclado = require('readline-sync');

const preco    = lerTeclado.questionFloat('Digite o preço do produto: R$ ');
const desconto = lerTeclado.questionFloat('Digite o percentual de desconto (%): ');

const valorDesconto = preco * (desconto / 100);
const precoFinal    = preco - valorDesconto;

console.log(`Preço original:  R$ ${preco.toFixed(2)}`);
console.log(`Desconto (${desconto}%): R$ ${valorDesconto.toFixed(2)}`);
console.log(`Preço final:     R$ ${precoFinal.toFixed(2)}`); // Lembrete: toFixed() retorna uma string

console.log("Cálculo sem converter: ", precoFinal.toFixed(2) + 100)
console.log("Cálculo após converter: ", Number(precoFinal.toFixed(2)) + 100)

console.log("_______________________________");