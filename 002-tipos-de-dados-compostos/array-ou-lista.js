// ============================================================
//   AULA: Array (Lista) em JavaScript
// ============================================================

// Arrays são coleções ordenadas de valores. Podem conter qualquer tipo,
// inclusive outros arrays e objetos.
// Simplificando: Array é uma lista de valores.


// Declaração
let frutas = ["maçã", "banana", "laranja"];
const numeros = [1, 2, 3, 4.5];
const misto = ["texto", 10, true];

console.log(frutas);


console.log("_______________________________");


// Acessando elementos (índice começa em 0)
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"

console.log(frutas.length); // .length = retorna a quantidade de itens armazenados no array
console.log(`Quantidade de itens na lista frutas: ${frutas.length}`);

// Se temos 3 elementos, mas a contagem começa em 0, o último elemento está no índice 2
console.log(frutas[2]); // último elemento


console.log("_______________________________");


// Principais métodos/funções de arrays
frutas.push("uva");     // adiciona ao fim
console.log("push ->", frutas);

frutas.pop();            // remove do fim
console.log("pop  ->", frutas);

frutas.unshift("morango"); // adiciona ao início
console.log("unshift ->", frutas);

frutas.shift();            // remove do início
console.log("shift ->", frutas);


console.log("_______________________________");