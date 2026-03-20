// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Classificador de IMC
// ------------------------------------------------------------
// a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// b) Armazene os dados em um objeto "pessoa".
// c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// d) Classifique o IMC usando if/else if/else e adicione
//    a classificação ao objeto:
//    - IMC < 18.5          → "Abaixo do peso"
//    - IMC >= 18.5 e < 25  → "Peso normal"
//    - IMC >= 25 e < 30    → "Sobrepeso"
//    - IMC >= 30 e < 35    → "Obesidade grau I"
//    - IMC >= 35 e < 40    → "Obesidade grau II"
//    - IMC >= 40           → "Obesidade grau III"
// e) Exiba o objeto com console.table().
// f) Exiba uma mensagem final:
//    "<nome>, seu IMC é <imc> – <classificação>."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
// b) Peça ao usuário:
//    - Senha de 4 dígitos (question()). Defina a senha correta como "1234" no objeto.
//    - Valor a sacar (questionFloat()).
// c) Usando if/else if/else aninhado, verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se a senha estiver errada → "Senha incorreta. Operação cancelada."
//    3. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    4. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    5. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador (question()).
//    - Idade do espectador (questionInt()).
//    - Classificação do filme escolhido (questionInt()):
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".
// c) Usando if/else if/else, verifique se o espectador
//    pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode      → "<nome> não pode assistir. Classificação: <classificação> anos."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer    R$ 22,00
//   2 – X-Frango     R$ 20,00
//   3 – X-Veggie     R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00
//
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Número do lanche desejado (questionInt()).
//    - Se o lanche não for o Combo:
//        - Quer batata frita? (keyInYN())
//        - Quer refrigerante? (keyInYN())
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
//    Se o número do lanche for inválido (fora de 1–4), exiba:
//    "Opção inválida. Pedido cancelado."
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário:
//    - Cor atual do semáforo (question()): "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h (questionInt()).
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade <= 60  → "Tudo certo. Pode seguir."
//    - "verde" e velocidade > 60   → "Atenção: acima do limite no sinal verde."
//    - "amarelo"                   → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade > 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade = 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor          → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:


console.log("_______________________________");
