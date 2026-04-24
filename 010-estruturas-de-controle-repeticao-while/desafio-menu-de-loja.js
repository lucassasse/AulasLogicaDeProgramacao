// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
  { id: 1, nome: "Espada de Ferro",   preco: 80, estoque: 2  },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5  },
  { id: 3, nome: "Poção de Cura",     preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo",        preco: 65, estoque: 3  },
  { id: 5, nome: "Botas Velozes",     preco: 45, estoque: 4  },
  { id: 6, nome: "Batata",            preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico",     preco: 95, estoque: 1  },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2  }
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const Cliente = {
  nome: "", // deve ser preenchido pelo usuário
  moedas: 200,
  inventario: []
};

// ============================================================
// INÍCIO
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui: