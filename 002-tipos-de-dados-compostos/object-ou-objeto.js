// ============================================================
//   AULA: Objeto em JavaScript
// ============================================================

// Objetos são coleções de pares chave:valor.
// Muito úteis para representar entidades do mundo real com várias propriedades.
// Simplificando: Objeto é como um dicionário.

const cadastroFilho = {
  nome: "Junior da Silva",

  idade: 18,

  email: "juninsilva@email.com"
}

console.log(cadastroFilho);
console.log(`Cadastro: ${cadastroFilho}`); // erro: pois não é possível converter um objeto diretamente para string

console.log("_______________________________");

// Também podemos armazenar Listas, Objetos e até outras variáveis dentro de um Objeto

const pessoa = {
	nome: "Mariana",

	idade: 40,

  habilidades: ["HTML", "CSS", "JavaScript"],

  trabalhando: true,

	endereco: {
		cidade: "São Paulo",
		cep: "01000-000"
	},

  filho: cadastroFilho
};

console.log(pessoa);

console.log("_______________________________");

// Acessando as propriedades/informações

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.trabalhando);
console.log(pessoa.habilidades);
console.log(pessoa.endereco);
console.log(pessoa.endereco.cidade);
console.log(pessoa.filho);

console.log("_______________________________");

// Acessando as propriedades/informações

console.log(`Nome da pessoa: ${pessoa.nome}`);
console.log(`Idade da pessoa: ${pessoa.idade}`);
console.log(`Trabalhando: ${pessoa.trabalhando}`);
console.log(`Habilidades: ${pessoa.habilidades}`);
console.log(`Endereço completo: ${pessoa.endereco.cidade}, ${pessoa.endereco.cep}`);
console.log(`Filho: ${pessoa.filho.nome}`);

console.log("_______________________________");

// Alterando e Adicionando propriedades

pessoa.email = "marianacompleto@email.com.br";
pessoa.idade = 50;
pessoa.filho.nome = "Pedro Machado";  // cuidado ao alterar dados de objetos, arrays e variáveis dentro de um objeto, pois ele altera o dado original também
pessoa.habilidades.push("Cozinhar Batatas"); // adicionando um novo item na lista de habilidades
pessoa.informacaoExtra = "Informação adicional sobre a pessoa";
console.log(pessoa);
console.log(cadastroFilho);

console.log("_______________________________");

// É possível adicionar um Objeto dentro de um Array

const listaDePessoas = ["informação qualquer", true, 34, cadastroFilho];

listaDePessoas.push(pessoa);

console.log(listaDePessoas);