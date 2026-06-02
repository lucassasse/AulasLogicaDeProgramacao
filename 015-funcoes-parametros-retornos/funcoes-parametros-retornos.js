// ============================================================
// AULA: Funções com Parâmetros e Retornos
// ============================================================

// Na aula anterior, vimos que uma função é um bloco de código
// reutilizável. Agora vamos torná-las MUITO mais poderosas:
//
//   • PARÂMETROS  → dados que a função RECEBE para trabalhar.
//   • RETORNO     → valor que a função DEVOLVE como resposta.
//

// ============================================================
// 1. PARÂMETROS – a função recebe valores
// ============================================================

// Sintaxe:  function nome(parametro1, parametro2, ...) { 
//    . . . 
// }

function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Ana");
saudar("Bruno");
saudar("Carla");

// "nome" é o PARÂMETRO (declarado entre parênteses).
// "Ana", "Bruno", "Carla" são os ARGUMENTOS (passados na chamada).

console.log("_______________________________");


// ============================================================
// 2. MÚLTIPLOS PARÂMETROS
// ============================================================

function apresentar(nome, idade, cidade) {
  console.log(`${nome}, ${idade} anos, mora em ${cidade}.`);
}

apresentar("Diego", 25, "São Paulo");
apresentar("Eva", 30, "Recife");

// A ORDEM dos argumentos importa! O 1º vai para 'nome',
// o 2º para 'idade', o 3º para 'cidade'.

// A ordem ou quantidade de vezes utilizada já dentro da função, não importa

function apresentar(nome, idade, cidade) {
  console.log(`${nome}, ${idade} anos, mora em ${cidade}.`);
  console.log(`Na cidade de ${cidade}, ${nome} mora há ${idade} anos.`);
}

console.log("_______________________________");


// ============================================================
// 3. RETORNO – a função devolve um valor
// ============================================================

// A palavra-chave 'return' faz a função DEVOLVER um valor
// e ENCERRA a execução naquele ponto.

function dobrar(numero) {
  console.log(`Calculando o dobro de ${numero}...`);
  return numero * 2;
}

const resultado = dobrar(10);
console.log(`Dobro de 10: ${resultado}`); // 20

// O valor retornado pode ser usado em qualquer lugar:
console.log(`Dobro de 7: ${dobrar(7)}`);
console.log(`Soma dos dobros: ${dobrar(3) + dobrar(4)}`);

console.log("_______________________________");


// ============================================================
// 4. DIFERENÇA: console.log vs. return
// ============================================================

// Função que IMPRIME (mas não retorna nada):
function somaImprime(a, b) {
  console.log(a + b);
}

// Função que RETORNA o resultado (e quem chamou decide o que fazer):
function somaRetorna(a, b) {
  return a + b;
}

somaImprime(2, 3);                      // exibe 5 e pronto
const x = somaRetorna(2, 3);            // x agora vale 5
console.log(`Posso usar o retorno: ${x * 10}`); // 50

// Regra prática:
// • Use return quando a função PRODUZ um valor.
// • Use console.log quando a função apenas EXIBE algo.

console.log("_______________________________");


// ============================================================
// 5. RETURN ENCERRA A FUNÇÃO IMEDIATAMENTE
// ============================================================

function ehMaiorDeIdade(idade) {
  if (idade >= 18) {
    return true;   // sai da função aqui
  }
  return false;    // só executa se a primeira condição for falsa
}

console.log(ehMaiorDeIdade(20)); // true
console.log(ehMaiorDeIdade(15)); // false

// Útil para "sair cedo" (early return) e simplificar a lógica.
function classificarIdade(idade) {
  if (idade < 0)  return "Idade inválida";
  if (idade < 12) return "Criança";
  if (idade < 18) return "Adolescente";
  if (idade < 60) return "Adulto";
  return "Idoso";
}

console.log(classificarIdade(8));   // Criança
console.log(classificarIdade(25));  // Adulto
console.log(classificarIdade(70));  // Idoso

console.log("_______________________________");


// ============================================================
// 6. PARÂMETROS PADRÃO (default)
// ============================================================

// Você pode definir um valor padrão caso o argumento não seja passado.

function cumprimentar(nome = "visitante", saudacao = "Olá") {
  console.log(`${saudacao}, ${nome}!`);
}

cumprimentar();                   // Olá, visitante!
cumprimentar("Ana");              // Olá, Ana!
cumprimentar("Bruno", "Bom dia"); // Bom dia, Bruno!

console.log("_______________________________");


// ============================================================
// 7. ESCOPO – variáveis vivem só dentro da função
// ============================================================

function calcularDesconto(valor, percentual) {
  const desconto = valor * (percentual / 100); // local
  const final = valor - desconto;              // local
  return final;
}

console.log(`Final: ${calcularDesconto(100, 10)}`); // 90
// console.log(desconto); // ERRO! desconto não existe aqui fora.

// Mesma lógica de escopo dos loops for() e while()

console.log("_______________________________");


// ============================================================
// 8. FUNÇÕES TRABALHANDO COM VETORES
// ============================================================

// Função que RECEBE um vetor e RETORNA a soma dos elementos.
function somarVetor(vet) {
  let s = 0;
  for (let i = 0; i < vet.length; i++) {
    s += vet[i];
  }
  return s;
}

console.log(somarVetor([10, 20, 30]));   // 60
console.log(somarVetor([5, 5, 5, 5, 5])); // 25

// Função que RECEBE um vetor e RETORNA o maior valor.
function maiorDoVetor(vet) {
  let maior = vet[0];
  for (let i = 1; i < vet.length; i++) {
    if (vet[i] > maior) maior = vet[i];
  }
  return maior;
}

console.log(maiorDoVetor([3, 9, 1, 7, 5])); // 9

// Reutilizando funções para construir uma média:
function mediaDoVetor(vet) {
  return somarVetor(vet) / vet.length;
}

console.log(mediaDoVetor([6, 7, 8, 9, 10])); // 8

console.log("_______________________________");


// ============================================================
// 9. RETORNANDO OBJETOS E VETORES
// ============================================================

// Uma função pode retornar QUALQUER tipo, inclusive objetos.

function criarUsuario(nome, email, idade) {
  return {
    nome,
    email,
    idade,
    criadoEm: new Date(),
  };
}

const u1 = criarUsuario("Ana", "ana@email.com", 28);
console.log(u1);

// Função que retorna um vetor:
function gerarSequencia(inicio, fim) {
  const lista = [];
  for (let i = inicio; i <= fim; i++) {
    lista.push(i);
  }
  return lista;
}

console.log(gerarSequencia(1, 5));   // [1, 2, 3, 4, 5]
console.log(gerarSequencia(10, 15)); // [10, 11, 12, 13, 14, 15]

console.log("_______________________________");


// ============================================================
// 10. EXEMPLO PRÁTICO – calculadora modular
// ============================================================

function somar(a, b)       { return a + b; }
function subtrair(a, b)    { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b)     {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
}

console.log(somar(10, 5));        // 15
console.log(subtrair(10, 5));     // 5
console.log(multiplicar(10, 5));  // 50
console.log(dividir(10, 5));      // 2
console.log(dividir(10, 0));      // Erro: divisão por zero

console.log("_______________________________");


// ============================================================
// 11. RESUMO RÁPIDO
// ============================================================

// • PARÂMETROS  são os "espaços" que a função tem para receber dados.
// • ARGUMENTOS  são os valores reais passados na chamada.
// • RETURN      devolve um valor e ENCERRA a função.
// • Sem return (ou return vazio), a função devolve undefined.
// • A ORDEM dos argumentos importa.
// • Pode haver valores PADRÃO (default) para os parâmetros.
// • Funções podem chamar outras funções e devolver qualquer tipo.
//
// Funções com parâmetros e retorno são a base da PROGRAMAÇÃO MODULAR:
// pequenos blocos reutilizáveis que se conectam para resolver problemas.