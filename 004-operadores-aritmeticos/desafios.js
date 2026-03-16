// ============================================================
//   DESAFIOS (para quem já terminou a atividade 04) – Operadores Aritméticos
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
// e) Exiba:
//
// "Jogador: X"
// "Participações em gol: X"
// "Média por partida: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
// c) Calcule:
//    - valor total da compra
//    - valor com desconto de 10%
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 9 – Compra no mercado
// ------------------------------------------------------------
// a) Peça ao usuário o nome, preço e quantidade de 3 produtos, armazenando-os em três objetos (cada produto um objeto).
//    Use question() para o nome, questionInt() para a quantidade e questionFloat() para o preço.
// b) Crie um array "carrinho" com os 3 objetos.
// c) Calcule o total da compra.
// d) Peça ao usuário o percentual de desconto.
// e) Calcule o valor do desconto e o total com desconto.
// f) Exiba o carrinho com console.table().
// g) Exiba no console:
//    "Total sem desconto: R$ <total>"
//    "Desconto:  R$ <desconto>"
//    "Total com desconto: R$ <totalComDesconto>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 10 – Calculadora de IMC
// ------------------------------------------------------------
// IMC = peso (kg) / (altura (m) ** 2)
// a) Peça ao usuário seu nome, peso em kg e altura em metros.
// b) Calcule o IMC usando a fórmula acima.
// c) Crie um objeto "resultado" com as propriedades:
//    nome, peso, altura e imc (use toFixed(2) no imc).
// d) Exiba o objeto com console.table().
// e) Exiba no console:
//    "Olá, <nome>! Seu IMC é: <imc>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 11 – Custo de viagem
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - A distância total da viagem em km.
//    - O consumo médio do carro em km/litro.
//    - O preço do combustível por litro.
//    - Quantas pessoas vão dividir o custo.
// b) Calcule a quantidade de litros necessários:
//    litros = distancia / consumo
// c) Calcule o custo total: custoTotal = litros * precoCombustivel
// d) Calcule o custo por pessoa: custoPorPessoa = custoTotal / numPessoas
// e) Exiba no console:
//    "Distância:          <distancia> km"
//    "Litros necessários: <litros> L"
//    "Custo total:        R$ <custoTotal>"
//    "Custo por pessoa:   R$ <custoPorPessoa>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 12 – Contracheque
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - O nome do funcionário.
//    - O salário bruto.
//    - O percentual de desconto do INSS.
//    - O percentual de desconto do IR.
// b) Calcule:
//    - Desconto do INSS: salarioBruto * (inss / 100)
//    - Desconto do IR:   salarioBruto * (ir / 100)
//    - Salário líquido:  salarioBruto - descontoINSS - descontoIR
// c) Crie um objeto "contracheque" com todas as informações.
// d) Exiba o objeto com console.table().
// e) Exiba no console uma mensagem com template literal resumindo o contracheque.

// → Seu código aqui:


console.log("_______________________________");
