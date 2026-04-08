// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses (questionInt())
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Verificador de números primos
// ------------------------------------------------------------
// Um número primo é divisível apenas por 1 e por ele mesmo.
//
// a) Peça ao usuário um número inteiro N >= 2 (questionInt()).
// b) Usando um for, verifique se N é primo:
//    - Percorra os divisores de 2 até N-1.
//    - Se encontrar algum que divida N exatamente, não é primo. Use break.
// c) Exiba: "<N> é primo." ou "<N> não é primo."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados (questionInt()).
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, nota1, nota2, nota3, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem
// no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório:
//    const secreto = Math.floor(Math.random() * 100) + 1;
// b) Usando um for de 1 a 7 (máximo de tentativas):
//    - Peça ao usuário um palpite (questionInt()).
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!" e use break.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
// c) Se o usuário esgotar as 7 tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:


console.log("_______________________________");
