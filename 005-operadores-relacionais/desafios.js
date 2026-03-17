// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
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
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:


console.log("_______________________________");
