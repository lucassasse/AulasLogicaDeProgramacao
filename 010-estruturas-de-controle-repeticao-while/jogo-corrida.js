// ============================================================
// JOGO: Corrida de Cavalos
// ============================================================
//
// Quatro cavalos correm em uma pista de 30 posições.
// A cada rodada, cada cavalo avança um número aleatório de posições (1 a 4). 
// O jogo continua com while até que algum cavalo cruze a linha de chegada (posição >= 30).
// O jogador aposta em um cavalo antes da corrida começar.
// Ao final, descobre se ganhou ou perdeu.
// Se mais de um chegar ao mesmo tempo, ambos são vencedores.
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CAVALOS e PISTA (não altere)
// ============================================================

const cavalos = [
  { numero: 1, nome: "Trovão",    posicao: 0 },
  { numero: 2, nome: "Relâmpago", posicao: 0 },
  { numero: 3, nome: "Furacão",   posicao: 0 },
  { numero: 4, nome: "Meteoro",   posicao: 0 }
];

const TAMANHO_PISTA = 30;

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║    CORRIDA DE CAVALOS    ║");
console.log("╚══════════════════════════╝");

// PASSO 1 – Apresente os cavalos com console.table(cavalos).
//           Peça em qual cavalo o usuário deseja apostar.
//           Exiba: "Apostou no cavalo <numero> – <nomeCavalo>!"

// → Seu código aqui:


console.log("_______________________________");


// ============================================================
// CORRIDA (while)
// ============================================================
//
// PASSO 2 – Use while para rodar a corrida e, a cada rodada:
//
//   a) Exiba: "════ Rodada n. <rodada> ════"
//
//   b) Realize um sorteio de 1 a 4 para cada cavalo e atribua a nova posição.
//
//   c) Verifique se algum cavalo passou da linha de chegada e se sim, indique o ou os vencedores.
//
//   d) Se não houve vendedor(es), exiba uma lista com a nova posição de cada cavalo.
//
//   e) Após cada rodada, solicite uma confirmação do jogador para continuar (keyInYN()).
//
//   Extra opcional: Ao invés de exibir uma lista com a posição do cavalo (letra d)
//      Exiba a pista em forma de barra de progresso para cada cavalo.
//   Exemplo de saída:
//
//      [1] Trovão     ████░░░░░░░░░░░░░░░░░░░░░░░░░░ 4/30
//      [2] Relâmpago  ███░░░░░░░░░░░░░░░░░░░░░░░░░░ 3/30
//
//   Dica: use "█".repeat(posicao) e "░".repeat(TAMANHO_PISTA - posicao)
//   para montar a barra, e template strings para formatar a linha.
//

// → Seu código aqui:
