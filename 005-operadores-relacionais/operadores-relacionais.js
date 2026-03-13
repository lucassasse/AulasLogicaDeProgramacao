// ============================================================
//   AULA: Operadores Relacionais em JavaScript
// ============================================================

// Operadores relacionais comparam dois valores e sempre retornam
// um resultado booleano: true (verdadeiro) ou false (falso).

// ============================================================
// 1. IGUALDADE: == e ===
// ============================================================

// == (igual com coerção de tipo) [verifica o valor mas ignora o tipo do dado (string, number, boolean, etc)]
//    Compara os VALORES, convertendo os tipos se necessário.
//    Pode gerar resultados inesperados!

console.log(5 == 5);     // true  → mesmo valor, mesmo tipo
console.log(5 == "5");   // true  → JS converte "5" para 5 antes de comparar
console.log(0 == false); // true  → JS converte false para 0
console.log(1 == true);  // true  → JS converte true para 1
console.log("_______________________________");

// === (estritamente igual)
//    Compara VALOR e TIPO. Sem conversão automática.
//    Preferível para evitar surpresas!

console.log(5 === 5);     // true  → valor E tipo iguais
console.log(5 === "5");   // false → mesmo valor, tipos diferentes (number vs string)
console.log(0 === false); // false → tipos diferentes (number vs boolean)
console.log(1 === true);  // false → tipos diferentes (number vs boolean)
console.log("_______________________________");


// ============================================================
// 2. DESIGUALDADE: != e !==
// ============================================================

// != (diferente com coerção de tipo) [verifica o valor mas ignora o tipo do dado (string, number, boolean, etc)]
console.log(5 != 3);     // true  → são diferentes
console.log(5 != 5);     // false → são iguais
console.log(5 != "5");   // false → após conversão, são iguais
console.log(1 != true);  // false → após conversão, são iguais
console.log(1 != false); // true  → após conversão, são diferentes
console.log("_______________________________");

// !== (estritamente diferente)
//    Retorna true se valor OU tipo forem diferentes.
console.log(5 !== 3);     // true  → valores diferentes
console.log(5 !== "5");   // true  → mesmo valor, tipos diferentes
console.log(5 !== 5);     // false → valor e tipo iguais
console.log(1 !== true);  // true  → tipos diferentes (number vs boolean)
console.log(1 !== false); // true  → tipos diferentes (number vs boolean)
console.log("_______________________________");


// ============================================================
// 3. COMPARAÇÃO DE GRANDEZA: >, <, >= e <=
// ============================================================

let preco1 = 50;
let preco2 = 80;

console.log(preco1 > preco2);  // false → 50 NÃO é maior que 80
console.log(preco1 < preco2);  // true  → 50 é menor que 80
console.log(preco1 >= preco2); // false → não é maior nem igual a 80
console.log(preco1 <= preco2); // true  → é menor ou igual a 80
console.log("_______________________________");

// Atenção à diferença entre >= e >:
let idade = 18;
console.log(idade >  18); // false → não é maior que 18
console.log(idade >= 18); // true  → é maior OU IGUAL a 18
console.log(idade <  18); // false → não é menor que 18
console.log(idade <= 18); // true  → é menor OU IGUAL a 18
console.log("_______________________________");


// ============================================================
// 4. COMPARANDO STRINGS
// ============================================================

// Strings são comparadas alfabeticamente (ordem do código Unicode).
// Letras maiúsculas têm código menor que minúsculas no Unicode.
// Lista de caracteres UTF-8 para Unicode: https://www.utf8-chartable.de/

console.log("batata" == "batata");    // true
console.log("Batata"    == "batata"); // false → maiúsculas e minúsculas são diferentes
console.log("b" > "a");               // true  → "b" vem depois de "a"
console.log("Z" < "a");               // true  → maiúsculas têm código menor
console.log("_______________________________");


// ============================================================
// 5. O RESULTADO É SEMPRE UM BOOLEANO
// ============================================================

// O resultado de qualquer comparação pode ser armazenado em variáveis

let notaAluno  = 7.5;
let notaMinima = 6.0;
let aprovado   = notaAluno >= notaMinima; // true ou false

console.log("Nota do aluno:", notaAluno);
console.log("Nota mínima: ", notaMinima);
console.log("Aprovado:    ", aprovado);    // true
console.log(typeof aprovado);              // "boolean"
console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO — comparando dados do usuário
// ============================================================

let lerTeclado = require('readline-sync');

const idadeUsuario = lerTeclado.questionInt('Digite sua idade: ');
const idadeMinima = 18;

const ehMaiorDeIdade = idadeUsuario >= idadeMinima;
const ehMenorDeIdade = idadeUsuario < idadeMinima;

console.log(`Idade informada:    ${idadeUsuario}`);
console.log(`É maior de idade:   ${ehMaiorDeIdade}`);
console.log(`É menor de idade:   ${ehMenorDeIdade}`);
console.log("_______________________________");

const precoA       = lerTeclado.questionFloat('Preço do produto A: R$ ');
const precoB       = lerTeclado.questionFloat('Preço do produto B: R$ ');

const aEMaisCaro   = precoA > precoB;
const aEMaisBarato = precoA < precoB;
const mesmoPrecoo  = precoA === precoB;

console.log(`Produto A mais caro que B:   ${aEMaisCaro ? "Sim" : "Não"}`);
console.log(`Produto A mais barato que B: ${aEMaisBarato ? "Sim" : "Não"}`);
console.log(`Mesmo preço:                 ${mesmoPrecoo ? "Sim" : "Não"}`);
console.log("_______________________________");
