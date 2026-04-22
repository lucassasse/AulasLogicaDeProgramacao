// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//
// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
  nome: "", // Deve ser preenchido pelo jogador
  hpAtual: 100,
  hpMax: 100,
  danoMin: 15,
  danoMax: 25
};

// ============================================================
// INIMIGOS (não altere a estrutura — altere os valores se quiser)
// Remova o inimigo da lista se ele for derrotado
// ============================================================

const inimigos = [
  { 
    nome: "Goblin",
    hp: 30,
    danoMin: 6,
    danoMax: 12
  },
  { 
    nome: "Orc Guerreiro",
    hp: 50,
    danoMin: 10,
    danoMax: 18
  },
  { 
    nome: "Dragão Negro",
    hp: 80,
    danoMin: 15,
    danoMax: 25
  }
];

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║   BEM VINDO(A) AO ....   ║");
console.log("╚══════════════════════════╝");

// Peça o nome do herói e exiba as regras do jogo resumidamente.
// → Seu código aqui:


console.log("_______________________________");

// ============================================================
// LOOP DE BATALHAS
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║    VAMOS AS BATATALHAS!    ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:


console.log("_______________________________");

// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 5 – Após o for de batalhas:
//
//   a) Se heroi.hp > 0 (venceu todas as batalhas):
//        Exiba:
//        "══════════════════════════════"
//        "VOCÊ VENCEU O JOGO!"
//        "<heroi.nome> sobreviveu a todas as batalhas!"
//        "HP final: <heroi.hp>/<heroi.hpMax>"
//        "══════════════════════════════"
//
//   b) Se heroi.hp <= 0 (foi derrotado):
//        Exiba:
//        "══════════════════════════════"
//        "GAME OVER"
//        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
//        "══════════════════════════════"

// → Seu código aqui:
