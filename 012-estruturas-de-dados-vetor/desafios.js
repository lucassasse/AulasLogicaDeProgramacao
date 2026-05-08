// ============================================================
//   DESAFIOS – Vetor
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Histograma de notas
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const notas = [4.5, 7.0, 8.5, 6.0, 9.2, 3.5, 7.8, 5.1, 8.0, 6.5, 9.5, 2.0];
// b) Conte e exiba quantas notas há em cada faixa:
//    (0, 5)   → Insuficiente
//    (5, 7)   → Regular
//    (7, 9)   → Bom
//    (9, 10)  → Excelente

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Top 3 do ranking
// ------------------------------------------------------------
// a) Utilizando o vetor de jogadores:
const jogadores = [
  { nome: "Alice",   pontos: 1280 },
  { nome: "Bento",   pontos: 950  },
  { nome: "Cecília", pontos: 1750 },
  { nome: "Davi",    pontos: 1100 },
  { nome: "Elisa",   pontos: 2030 },
  { nome: "Felipe",  pontos: 870  },
  { nome: "Gabi",    pontos: 1620 },
];
// b) Sem usar .sort(), encontre os 3 jogadores com MAIS pontos.
// c) Exiba o pódio:
//    "1º lugar: <nome> – <pontos> pontos"
//    "2º lugar: <nome> – <pontos> pontos"
//    "3º lugar: <nome> – <pontos> pontos"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Sorteio sem repetição (bingo)
// ------------------------------------------------------------
// a) Utilizando for(), crie um vetor 'bolas', que deve ser preenchido com os números de 1 a 75.
// b) Crie um vetor vazio chamado 'sorteadas'.
// c) Usando while, sorteie um índice aleatório do vetor 'bola' e:
//    - Adicione o valor ao 'sorteadas'.
//    - Remova esse índice do 'bola' (use splice — pesquise!).
//    - Exiba: "Bola sorteada: <n> | Restantes: <bola.length>"
// d) Pare quando 'sorteadas.length' chegar a 15.
// e) Exiba o resultado final. Ordene 'sorteadas' em ordem crescente.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Carrinho de compras inteligente
// ------------------------------------------------------------
// a) Utilizando o vetor de produtos:
const produtos = [
  { codigo: 1, nome: "Caneta",  preco: 2.5  },
  { codigo: 2, nome: "Caderno", preco: 18.9 },
  { codigo: 3, nome: "Mochila", preco: 89.0 },
  { codigo: 4, nome: "Régua",   preco: 4.75 },
  { codigo: 5, nome: "Estojo",  preco: 12.3 },
];
// b) Crie um vetor 'carrinho' vazio.
// c) Usando do...while, exiba os produtos (console.table) e:
//    - Peça o código e a quantidade desejada.
//    - Se o produto JÁ ESTIVER no carrinho, apenas SOME a
//      quantidade ao item existente (não duplique a linha).
//    - Caso contrário, adicione { codigo, nome, preco, quantidade, subtotal }.
//    - Pergunte se quer continuar comprando (keyInYN()).
// d) Ao final:
//    - Exiba o carrinho com console.table().
//    - Exiba o total geral.
//    - Se total > R$ 100, aplique 10% de desconto e mostre o valor final.

// → Seu código aqui:


console.log("_______________________________");
