// ============================================================
//   DESAFIOS (para quem já terminou a atividade 10) – While
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial
//    - Taxa de juros mensal em % — ex: 1.5
//    - Meta de saldo a atingir
// b) Usando while, calcule quantos meses são necessários para
//    atingir a meta. A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
//    Exiba cada mês: "Mês <mes>: R$ <saldo>"
// c) Ao atingir a meta, exiba:
//    "Meta atingida em <mes> meses! Saldo final: R$ <saldo>"
// d) Armazene cada mês como objeto { mes, saldo } em um array
//    e exiba com console.table().
// e) Desafio extra: ao invés de exibir mês 1, mês 2, mês 3, etc.
//    exiba Janeiro, Fevereiro, Março, etc.
//    Atenção para casos que ultrapassem 12 meses...

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Sequência de Fibonacci
// ------------------------------------------------------------
// A sequência de Fibonacci começa com 0 e 1.
// Cada número seguinte é a soma dos dois anteriores:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// a) Peça ao usuário um limite N.
// b) Usando while, gere e exiba todos os números da sequência
//    de Fibonacci menores ou iguais a N.
// c) Conte quantos números foram gerados.
// d) Exiba: "Total de números na sequência até <N>: <qtd>"
// e) Informe se o próprio N é um número de Fibonacci.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Caixa registradora
// ------------------------------------------------------------
// Simule o caixa de uma loja.
//
// a) Utilizando a lista de produtos:
let produtos = [
  { nome: "Caneta",  preco: 2.5,  estoque: 50 },
  { nome: "Caderno", preco: 18.9, estoque: 25 },
  { nome: "Mochila", preco: 89.0, estoque: 15 },
  { nome: "Régua",   preco: 4.75, estoque: 35 },
  { nome: "Estojo",  preco: 12.3, estoque: 10 }
]
// b) Usando do...while, repita o fluxo de compra:
//    - Exiba o menu de produtos com preços usando console.table().
//    - Pergunte qual produto deseja (número de 1 a 5).
//    - Pergunte a quantidade.
//    - Se possuir estoque necessário, adicione ao carrinho[] no seguinte formato: { produto, quantidade, subtotal } e atualize o estoque.
//    - Pergunte: "Continuar comprando?" (keyInYN()).
// c) Ao sair do loop, exiba o carrinho com console.table().
// d) Calcule e exiba o total da compra.
// e) Pergunte se vai pagar com desconto de funcionário (keyInYN()).
//    Se sim, aplique 15% de desconto.
// f) Exiba o valor final com e sem desconto.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Validador de senha
// ------------------------------------------------------------
// O usuário tem 3 tentativas para acertar a senha correta.
//
// a) Defina a senha correta como: "js2025"
// b) Usando while, peça a senha ao usuário e:
//    - Conte as tentativas.
//    - Se acertar: exiba "Acesso liberado!" e encerre.
//    - Se errar e ainda tiver tentativas: informe quantas restam.
//    - Se esgotar as 3 tentativas: exiba "Conta bloqueada!" e encerre.
// c) Ao final, exiba um objeto com console.table():
//    { tentativasUsadas, resultado: "Liberado" ou "Bloqueado" }

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Calculadora persistente
// ------------------------------------------------------------
// Uma calculadora que continua operando até o usuário sair.
//
// a) Inicialize 'resultado' com 0.
// b) Usando do...while, repita:
//    - Exiba o resultado atual.
//    - Exiba o menu de operações:
//      1 – Somar | 2 – Subtrair | 3 – Multiplicar | 4 – Dividir | 5 – Zerar | 0 – Sair
//    - Peça a operação.
//    - Para 1 a 4, peça um número e aplique ao resultado.
//      Na divisão, trate (não permita) divisão por zero.
//    - Para 5, zere o resultado.
//    - Para 0, encerre.
// c) Ao sair, exiba: "Resultado final: <resultado>"
// Observação: Realize os cálculos conforme solicitado, não se preocupando com a ordem/sequência lógica matemática

// → Seu código aqui:


console.log("_______________________________");
