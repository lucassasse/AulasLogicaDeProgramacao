// ============================================================
//   AULA: Estruturas de Dados – Matriz (Array de Arrays)
// ============================================================

// Uma MATRIZ é um vetor de vetores — uma estrutura de dados bidimensional,
// organizada em LINHAS e COLUNAS.
//
// Visualmente (matriz 3x3):
//
//                col 0   col 1   col 2
//   linha 0  [    1   ,    2   ,    3   ]
//   linha 1  [    4   ,    5   ,    6   ]
//   linha 2  [    7   ,    8   ,    9   ]
//
// Em JavaScript, não existe um tipo "matriz" nativo:
// usamos arrays dentro de arrays.

// Pode ser de qualquer tamanho, desde que todas as linhas tenham o mesmo número de colunas.
// Caso contrário, é uma "matriz irregular" (ex: [ [1, 2], [3, 4, 5] ]) ou somente um array unidimensional.

// ============================================================
// 1. DECLARAÇÃO E ACESSO
// ============================================================

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matriz2 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

// Acesso: matriz[linha][coluna]
console.log(matriz[0][0]); // 1 (canto superior esquerdo)
console.log(matriz[1][2]); // 6 (linha 1, coluna 2)
console.log(matriz[1][1]); // 5 (linha 1, coluna 1) - centro
console.log(matriz[2][1]); // 8 (linha 2, coluna 1)
console.log(matriz[2][2]); // 9 (linha 2, coluna 2) - canto inferior direito

// Quantidade de linhas
console.log(`Linhas: ${matriz.length}`); // 3

// Quantidade de colunas (assumindo matriz "retangular")
console.log(`Colunas: ${matriz[0].length}`); // 3

console.log("_______________________________");


// ============================================================
// 2. ALTERANDO VALORES
// ============================================================

matriz[1][1] = 50; // troca o 5 por 50
console.log(matriz);

console.log("_______________________________");


// ============================================================
// 3. PERCORRENDO UMA MATRIZ – FOR ANINHADO
// ============================================================

// Para percorrer todos os elementos, usamos DOIS for aninhados:
// - O externo controla as LINHAS (i).
// - O interno controla as COLUNAS (j).

const tabuleiro = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

console.log("Percorrendo o tabuleiro:");
for (let i = 0; i < tabuleiro.length; i++) {
  for (let j = 0; j < tabuleiro[i].length; j++) {
    console.log(`tabuleiro[${i}][${j}] = ${tabuleiro[i][j]}`);
  }
}

console.log("_______________________________");


// ============================================================
// 4. EXIBINDO A MATRIZ COMO TABELA
// ============================================================

// console.table() mostra de forma visual em LINHAS e COLUNAS.
console.log("Exibindo o tabuleiro como tabela:");
console.table(tabuleiro);

console.log("_______________________________");


// ============================================================
// 5. CRIANDO UMA MATRIZ DINAMICAMENTE
// ============================================================

// Vamos criar uma matriz 3x4 preenchida com 0:
const qtdLinhas = 3;
const qtdColunas = 4;
const matriz3 = [];

for (let i = 0; i < qtdLinhas; i++) {
  const linha = [];               // cria uma nova linha vazia
  for (let j = 0; j < qtdColunas; j++) {
    linha.push(0);                // adiciona uma coluna
  }
  matriz3.push(linha);            // adiciona a linha à matriz
}

console.table(matriz3);

console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO – tabuada em matriz
// ============================================================

// Vamos gerar uma matriz 5x5 com a tabuada:
// tabuada[i][j] = (i+1) * (j+1)

const tabuada = [];

for (let i = 0; i < 5; i++) {
  const linha = [];
  for (let j = 0; j < 5; j++) {
    linha.push((i + 1) * (j + 1));
  }
  tabuada.push(linha);
}

console.log("Tabuada 5x5:");
console.table(tabuada); // ignore os indices da "table"

console.log("_______________________________");


// ============================================================
// 7. SOMA DE TODOS OS ELEMENTOS
// ============================================================

const numeros = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros[i].length; j++) {
    soma += numeros[i][j];
  }
}
console.log(`Soma de todos os elementos: ${soma}`);

console.log("_______________________________");


// ============================================================
// 8. SOMA POR LINHA E POR COLUNA
// ============================================================

console.log("Soma por LINHA:");
for (let i = 0; i < numeros.length; i++) {
  let somaLinha = 0;
  for (let j = 0; j < numeros[i].length; j++) {
    somaLinha += numeros[i][j];
  }
  console.log(`Linha ${i}: ${somaLinha}`);
}

console.log("Soma por COLUNA:");
for (let j = 0; j < numeros[0].length; j++) {
  let somaColuna = 0;
  for (let i = 0; i < numeros.length; i++) {
    somaColuna += numeros[i][j]; // note a inversão dos índices
  }
  console.log(`Coluna ${j}: ${somaColuna}`);
}

console.log("_______________________________");


// ============================================================
// 9. MATRIZ DE OBJETOS – aplicação real
// ============================================================

// Cada célula é um objeto. Útil para grades, calendários, jogos, etc.

const sala = [
  [
    { aluno: "Ana",   presente: true  },
    { aluno: "Bianca", presente: false },
  ],
  [
    { aluno: "Carla", presente: true  },
    { aluno: "Diego", presente: true  },
  ],
];

for (let i = 0; i < sala.length; i++) {
  for (let j = 0; j < sala[i].length; j++) {
    const c = sala[i][j];
    const status = c.presente ? "presente" : "ausente";
    console.log(`Carteira [${i}][${j}]: ${c.aluno} (${status})`);
  }
}

console.table(sala);

console.log("_______________________________");


// ============================================================
// 10. RESUMO RÁPIDO
// ============================================================

// • Matriz = vetor de vetores (linhas × colunas).
// • Acesso por DOIS índices: matriz[linha][coluna].
// • Para percorrer, use DOIS for() aninhados.
// • console.table() ajuda a visualizar.