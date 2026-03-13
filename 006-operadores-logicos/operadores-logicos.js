// ============================================================
//   AULA: Operadores Lógicos em JavaScript
// ============================================================

// Operadores lógicos combinam ou invertem expressões booleanas.
// São muito usados junto com operadores relacionais.
// São eles: && (E), || (OU), ! (NÃO)

// ============================================================
// 1. OPERADOR && (E — AND)
// ============================================================

// Retorna true SOMENTE se AMBAS as condições forem true.
// Se qualquer uma for false, o resultado é false.
// Simplificando: TUDO PRECISA SER VERDADE

// Tabela verdade do &&:
//   true  && true  → true
//   true  && false → false
//   false && true  → false
//   false && false → false

console.log(true  && true);  // true
console.log(true  && false); // false
console.log(false && true);  // false
console.log(false && false); // false
console.log("_______________________________");

// Exemplo prático:
let idade    = 20;
let temCNH   = true;

let podeConduzir = idade >= 18 && temCNH;
console.log("Pode dirigir:", podeConduzir); // true → tem 18+ E tem CNH
console.log("_______________________________");

let saldo      = 150;
let preco      = 200;
let temEstoque = true;

let podeComprar = saldo >= preco && temEstoque;
console.log("Pode comprar:", podeComprar); // false → saldo insuficiente(false) e tem em estoque(true)

// Vamos adicionar dinheiro ao saldo
saldo += 100;
podeComprar = saldo >= preco && temEstoque; // utilizando a mesma variável, sem declarar novamente, somente alterando o valor
console.log("Pode comprar:", podeComprar); // true → saldo suficiente(true) E tem em estoque(true)

// Vamos remover o item do estoque, pois foi vendido
temEstoque = false;
podeComprar = saldo >= preco && temEstoque;
console.log("Pode comprar:", podeComprar); // false → saldo suficiente(true) E sem estoque(false)

// Posso adicionar quantas variáveis quiser, mas o resultado final só será true se todas as condições forem verdadeiras.
// Se qualquer uma for false, o resultado é false.
let vendedoraAtendendo = true;
let lojaAberta = true;

podeComprar = saldo >= preco && temEstoque && vendedoraAtendendo && lojaAberta;
console.log("Pode comprar:", podeComprar);

console.log("_______________________________");


// ============================================================
// 2. OPERADOR || (OU — OR)
// ============================================================

// Retorna true se PELO MENOS UMA condição for true.
// Só retorna false quando AMBAS forem false.
// Simplificando: BASTA UMA VERDADE

// Tabela verdade do ||:
//   true  || true  → true
//   true  || false → true
//   false || true  → true
//   false || false → false

console.log(true  || true);  // true
console.log(true  || false); // true
console.log(false || true);  // true
console.log(false || false); // false
console.log("_______________________________");

// Exemplo prático:
let ehAluno      = true;
let ehProfessor  = false;

let temAcesso    = ehAluno || ehProfessor;
console.log("Tem acesso ao sistema:", temAcesso); // true → é aluno OU professor
console.log("_______________________________");

let pagouCartao  = false;
let pagouPix     = true;

let pagamentoConfirmado = pagouCartao || pagouPix;
console.log("Pagamento confirmado:", pagamentoConfirmado); // true
console.log("_______________________________");

// Assim como o &&, posso comparar várias condições ao mesmo tempo.

let temMoto = false;
let temCarro = false;
let temCaminhao = false;
let possuiMeioDeTransporte = temMoto || temCarro || temCaminhao;
console.log("Possui veículo:", possuiMeioDeTransporte); // false, pois todas as condições são falsas
console.log("_______________________________");


// ============================================================
// 3. OPERADOR ! (NÃO — NOT)
// ============================================================

// Inverte o valor booleano: true vira false e false vira true.

// Tabela verdade do !:
//   !true  → false
//   !false → true

console.log(!true);  // false
console.log(!false); // true
console.log("_______________________________");

// Exemplo prático:
let sistemaOnline  = false;
let sistemaOffline = !sistemaOnline; // inverte: false → true

console.log("Sistema online: ", sistemaOnline);  // false
console.log("Sistema offline:", sistemaOffline); // true
console.log("_______________________________");

// Usando ! diretamente em comparações:
let estoque = 0;
let semEstoque = !(estoque > 0); // estoque > 0 é false, ! inverte para true
console.log("Sem estoque:", semEstoque); // true
console.log("_______________________________");


// ============================================================
// 4. COMBINANDO OPERADORES LÓGICOS
// ============================================================

// Podemos combinar && e || em uma mesma expressão.
// Use parênteses para deixar a ordem clara e evitar confusão!

let alunoEhMaiorDeIdade = true;
let alunoTemMatricula   = true;
let alunoAssistiuAulas  = true;
let alunoTemDebito      = false;
let alunoTemBolsa       = true;

// Pode fazer prova? Precisa ser maior de idade E ter matrícula E ter assistido aulas E NÃO ter débito
let podeRealizarProva = alunoEhMaiorDeIdade && alunoTemMatricula && alunoAssistiuAulas && alunoTemDebito;
console.log("Pode realizar prova:", podeRealizarProva);
console.log("_______________________________");

// Pode fazer prova? Precisa ser maior de idade E ter matrícula E ter assistido aulas E (NÃO ter débito OU ter bolsa)
let podeRealizarProva2 = alunoEhMaiorDeIdade && alunoTemMatricula && alunoAssistiuAulas && (alunoTemDebito || alunoTemBolsa);
console.log("Pode realizar prova:", podeRealizarProva2);
console.log("_______________________________");

let temperaturaBaixa  = true;
let estaChovendo      = false;
let ventandoForte     = true;

// Tempo ruim: está frio OU (chovendo E ventando)
let tempoRuim = temperaturaBaixa || (estaChovendo && ventandoForte);
console.log("Tempo ruim:", tempoRuim); // true

// Mas eu gosto de frio ou chuva e vento, então:
tempoRuim = !temperaturaBaixa || !(estaChovendo && ventandoForte);
console.log("Tempo ruim:", tempoRuim);
console.log("_______________________________");


// ============================================================
// 5. OPERADOR TERNÁRIO — revisão e aprofundamento
// ============================================================

// Já vimos o ternário na aula de Input/Output.
// Ele funciona como uma decisão em linha usando operadores lógicos.
//
// Sintaxe:
//   condição ? "valor se true" : "valor se false"

let pontuacao  = 850; 
let creditoAprovado = pontuacao >= 700 ? "Credito Aprovado" : "Credito Reprovado";
console.log(creditoAprovado); // "Credito Aprovado"
console.log("_______________________________");

// Pode ser usado diretamente dentro de template literals:
let notaFinal  = 5.5;
let notaMinima = 6.0;
let situacao   = notaFinal >= notaMinima ? "Aprovado" : "Reprovado";

console.log(`Nota: ${notaFinal} → Situação: ${situacao}`);
// Ou
console.log("Nota: " + notaFinal + " → Situação: " + (notaFinal >= notaMinima ? "Aprovado" : "Reprovado"));
console.log("Nota:", notaFinal, "→ Situação:", (notaFinal >= notaMinima ? "Aprovado" : "Reprovado")); // " , " adiciona um espaço entre os valores
// Ou
console.log(`Nota: ${notaFinal} → Situação: ${notaFinal >= notaMinima ? "Aprovado" : "Reprovado"}`);
console.log("_______________________________");

// Combinando ternário com operadores lógicos:
let temCarteira  = true;
let temDinheiro  = false;
let podeSairHoje = temCarteira && temDinheiro ? "Pode sair" : "Não pode sair";
console.log(podeSairHoje); // "Não pode sair"
console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO — combinando tudo com input do usuário
// ============================================================

let lerTeclado = require('readline-sync');

const idadeUsuario  = lerTeclado.questionInt('Qual é a sua idade? ');
const possuiCNH     = lerTeclado.keyInYN('Você possui CNH? ');
const possuiVeiculo = lerTeclado.keyInYN('Você possui veículo? ');

const habilitado   = idadeUsuario >= 18 && possuiCNH;
const podeViajarSozinho = habilitado && possuiVeiculo;
const precisaCarona = possuiVeiculo !== true || possuiCNH === false;

console.log(`\nIdade: ${idadeUsuario}`);
console.log(`Habilitado para dirigir: ${habilitado}`);
console.log(`Pode viajar sozinho de carro: ${podeViajarSozinho}`);
console.log(`Precisaria de carona: ${precisaCarona}`);
console.log(`Situação: ${podeViajarSozinho ? "Viagem liberada!" : "Precisará de carona ou transporte."}`);
console.log("_______________________________");
