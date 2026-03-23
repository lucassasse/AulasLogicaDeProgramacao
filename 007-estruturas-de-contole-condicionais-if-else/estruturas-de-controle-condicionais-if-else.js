// ============================================================
//   AULA: Estruturas de Controle Condicionais – If / Else
// ============================================================

// Estruturas condicionais permitem que o programa tome decisões:
// execute um bloco de código SE uma condição for verdadeira,
// e outro bloco SE for falsa.
// São o primeiro passo para criar programas que "pensam" / que "possuem lógica" de fato.

// ============================================================
// 1. IF SIMPLES
// ============================================================

// Sintaxe:
//   if (condição) {
//     // código executado SE a condição for true
//   }

// O bloco só é executado quando a condição é verdadeira.
// Se for falsa, o programa simplesmente ignora o bloco e continua.

let temperatura = 35;

if (temperatura < 10) {
  console.log("Está muito frio!"); // NÃO executado, pois 35 < 10 é false
}

if (temperatura > 30) {
  console.log("Está calor hoje!"); // executado, pois 35 > 30 é true
}

// ------------------------------------------

let estaCalor = temperatura > 30;

if (estaCalor) { // posso usar diretamente uma variável booleana(que contém 'true' ou 'false') na condição
  console.log("Está calor mesmo!"); // executado, pois 35 > 30 é true
}

console.log("_______________________________");


// ============================================================
// 2. IF / ELSE
// ============================================================

// Sintaxe:
//   if (condição) {
//     // código executado SE a condição for true
//   } else {
//     // código executado SE a condição for false
//   }

// O else é o "caso contrário": garante que sempre um dos dois
// blocos será executado.

let idade = 16;

if (idade >= 18) {
  console.log("Maior de idade."); // condição false → não executado
} else {
  console.log("Menor de idade."); // executado
}

console.log("_______________________________");

let saldo    = 250;
let preco    = 180;

if (saldo >= preco) {
  console.log("Compra aprovada!"); // executado: 250 >= 180 é true
} else {
  console.log("Saldo insuficiente.");
}

console.log("_______________________________");

// 2.1. OPERADOR TERNÁRIO

// Já vimos o ternário na aulas passadas.
// Ele funciona como uma decisão em linha usando operadores lógicos.
//
// Sintaxe:
//   condição ? "valor se true" : "valor se false"
//
// Ou seja, é a mesma coisa que um if / else:
// if (condição) {
//   "valor se true"
// } else {
//   "valor se false"
// }
 
console.log(saldo >= preco ? "Compra aprovada!" : "Saldo insuficiente.");

console.log("_______________________________");


// ============================================================
// 3. IF / ELSE IF / ELSE
// ============================================================

// Quando há mais de duas possibilidades, usamos else if
// para testar condições adicionais em sequência.
// Apenas o PRIMEIRO bloco que a condição for true é executado.
// O else no final é opcional e captura tudo que não se encaixou (pode servir como uma "rede de segurança").

// Sintaxe:
//   if (condição1) {
//     // executado se condição1 for true
//   } else if (condição2) {
//     // executado se condição1 for false E condição2 for true
//   } else if (condição3) {
//     // executado se condição1 e condição2 forem false E condição3 for true
//   } else {
//     // executado se NENHUMA condição anterior for true
//   }

let nota = 7.5;

if (nota >= 9) {
  console.log("Conceito: A");
} else if (nota >= 7) {
  console.log("Conceito: B"); // executado: nota >= 7 é true (e nota >= 9 era false)
} else if (nota >= 5) {
  console.log("Conceito: C"); // também é verdade: nota >= 5 é true, mas já foi executado o bloco do B, então o programa não chega aqui
} else {
  console.log("Conceito: D – Reprovado"); // como alguma condição acima já foi atendida, o else não é executado
}

console.log("_______________________________");

// Atenção: a ordem importa!
// O JavaScript testa de cima para baixo e para no primeiro true.

let velocidade = 95;

if (velocidade > 120) {
  console.log("Multa grave: +120 km/h");
} else if (velocidade > 100) {
  console.log("Multa média: 101–120 km/h");
} else if (velocidade > 80) {
  console.log("Multa leve: 81–100 km/h"); // executado: 95 > 80 é true
} else {
  console.log("Velocidade regular.");
}

// Se eu colocasse (velocidade > 80) por primeiro, o bloco dele seria executado, mas os mais específicos nem seriam testados

console.log("_______________________________");


// ============================================================
// 4. IF ANINHADO
// ============================================================

// É possível colocar um if dentro de outro if.
// Use com moderação para não dificultar a leitura.

let temIngresso  = true;
let idadeCliente = 15;
let possuiAcompanhante = false;

if (temIngresso) {
  if (idadeCliente >= 18) {
    console.log("Entrada liberada.");
  } else {
    console.log("Entrada liberada com acompanhante adulto.");
    if (possuiAcompanhante) {
      console.log("Entrada com acompanhante liberada.");
    } else {
      console.log("Entrada negada.");
    }
  }
} else {
  console.log("Sem ingresso. Entrada negada.");
}

console.log("_______________________________");


// ============================================================
// 5. COMBINANDO COM OPERADORES LÓGICOS
// ============================================================

// Podemos usar &&, ||, ! dentro da condição do if
// para criar verificações mais completas.

let usuario = {
  nome:          "Ana",
  idade:         22,
  temCadastro:   true,
  saldoCarteira: 80
};

let produto = {
  nome:  "Fone de Ouvido",
  preco: 75,
  estoque: 5
};

// Pode comprar? Tem cadastro E saldo suficiente E produto em estoque
if (usuario.temCadastro && usuario.saldoCarteira >= produto.preco && produto.estoque > 0) {
  console.log(`${usuario.nome} pode comprar ${produto.nome}!`);
  produto.estoque--;
  usuario.saldoCarteira -= produto.preco;
  console.log("Compra realizada com sucesso!");
  console.log(`Saldo restante: R$ ${usuario.saldoCarteira}`);
} else {
  console.log("Compra não autorizada.");
}

console.log("_______________________________");

// Acesso VIP: maior de 18 OU tem cadastro e saldo > 100000
let ehVip = (usuario.idade >= 18 || usuario.temCadastro) && usuario.saldoCarteira > 100000;
if (ehVip) {
  console.log("Bem-vindo(a) à área VIP!");
} else {
  console.log("Acesso restrito.");
}

console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO – combinando tudo com input do usuário
// ============================================================

let lerTeclado = require('readline-sync');

const nomeUsuario  = lerTeclado.question('Qual é o seu nome? ');
const idadeUsuario = lerTeclado.questionInt('Qual é a sua idade? ');
const temTicket    = lerTeclado.keyInYN('Você possui ingresso? ');

console.log(`\nOlá, ${nomeUsuario}!`);

if (!temTicket) {
  console.log("Você não possui ingresso. Dirija-se à bilheteria.");
} else if (idadeUsuario < 12) {
  console.log("Entrada gratuita para crianças até 11 anos com ingresso.");
} else if (idadeUsuario < 18 || idadeUsuario >= 60) {
  console.log("Meia-entrada: você tem entre 12 e 17 anos OU você tem 60 anos ou mais.");
} else {
  console.log("Entrada inteira!");
}

console.log("_______________________________");
