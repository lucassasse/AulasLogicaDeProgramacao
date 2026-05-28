// ============================================================
// DESAFIOS (para quem já terminou a atividade 14) – Funções Simples
// ============================================================
// Continue SEM usar parâmetros e SEM return.
// O foco é pensar em funções pequenas e bem nomeadas.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Relógio digital
// ------------------------------------------------------------
// a) Crie uma função 'mostrarHora' que:
//    - Pega a hora atual - busque por uma função pronta do Javascript para isso.
//    - Formata como "HH:MM:SS".
//    - Exibe: "Hora atual: <HH:MM:SS>"
// b) Crie uma função 'mostrarData' que exibe:
//    "Data atual: <DD/MM/AAAA>"
// c) Crie uma função 'agora' que chama mostrarData() e mostrarHora() em sequência.
// d) Chame agora() três vezes (com um intervalo de 5 segundos entre as chamadas).

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Gerador de cartões
// ------------------------------------------------------------
// Vamos imprimir vários "cartões" estilizados no console.
//
// a) Utilizando os arrays:
const nomes  = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
const cargos = ["Dev Junior", "Dev Pleno", "Tech Lead", "QA", "Designer"];
//
// b) Crie a função 'imprimirCartao' que:
//    - Sorteia um índice para cada array.
//    - Exibe um "cartão" com os valores sorteados, no formato:
//      ═══════════════════════════════
//      |   <NOME>                     
//      |   <cargo>                    
//      ═══════════════════════════════
//      (não precisa alinhar caracteres com perfeição — apenas estilo)
// c) Chame imprimirCartao() 5 vezes.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Sistema de notícias
// ------------------------------------------------------------
// a) Utilizando o array:
const noticias = [
  { titulo: "Tecnologia X é lançada",  texto: "Empresa Y revoluciona o mercado..." },
  { titulo: "Economia em alta",        texto: "Bolsa fecha o dia em alta de 2%..." },
  { titulo: "Esporte: time campeão",   texto: "O time A conquistou o título..." },
  { titulo: "Cultura: novo filme",     texto: "Estreia no cinema o longa Z..." },
];
// b) Crie 1 função 'manchete', que exibe:
//        |── MANCHETE ─────────────────
//        | <título>
//        |----------------------------
//        | <texto>
// c) Crie a função 'exibirJornal' que chama todas as manchetes em sequência,
//    com uma linha em branco entre cada uma.
// d) Chame exibirJornal().
// Observação: A função 'exibirJornal' deve sempre exibir todas as manchetes,
//    mesmo que mais manchetes forem adicionadas posteriormente

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Mini caixa eletrônico
// ------------------------------------------------------------
// Crie um caixa eletrônico
// O saldo deve ficar em uma variável global.
//
// a) Declare saldo = 1000;
// b) Crie as funções:
//    - 'verSaldo'     → exibe o saldo atual formatado como "R$ x,xx".
//    - 'depositar'    → pergunta o valor e SOMA ao saldo.
//                        Exibe o novo saldo.
//    - 'sacar'        → pergunta o valor; se houver saldo, SUBTRAI;
//                        senão, exibe "Saldo insuficiente!".
//    - 'extrato'      → exibe um cabeçalho estilizado com a data atual e chama verSaldo().
//    - 'exibirMenu'   → exibe as opções:
//                        1 – Ver saldo
//                        2 – Depositar
//                        3 – Sacar
//                        4 – Extrato
//                        0 – Sair
// c) Usando do...while e switch/case, ligue cada opção à sua função.
// d) Encerre quando o usuário escolher 0.
// e) Ao sair, exiba "Finalizando e Saindo... Obrigado por acessar!".

// → Seu código aqui:


console.log("_______________________________");