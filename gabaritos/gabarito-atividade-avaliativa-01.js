// ============================================================
//   ATIVIDADE AVALIATIVA N4
//   Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
//  Instruções Gerais:
//  • Copie todo este exercício para um novo arquivo em sua pasta de atividades
//  • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
//  • Resolva cada exercício no espaço indicado.
//  • Utilize template literals sempre que precisar montar frases.
//  • NÃO apague os separadores (console.log("_________")).
//  • Leia com atenção cada enunciado antes de começar.
//  • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
//    • nome (string)
//    • profissao (string)
//    • cidade (string)
//    • email (string)
//    • telefone (string)
//    • anoExperiencia (number)
//    • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
//    um cartão de visitas formatado, parecido com o modelo abaixo:
//
//  ============================================
//  |  CARTÃO DE VISITAS                       |
//  ============================================
//  |  Nome        : <nome>                    |
//  |  Profissão   : <profissao>               |
//  |  Cidade      : <cidade>                  |
//  |  E-mail      : <email>                   |
//  |  Telefone    : <telefone>                |
//  |  Experiência : <anosExperiencia> anos    |
//  |  Freelance   : <disponivelParaFreelance> |
//  ============================================

// → Seu código aqui:

const nome = question("Digite seu nome: ");
const profissao = question("Digite sua profissão: ");
const cidade = question("Digite sua cidade: ");
const email = question("Digite seu e-mail: ");
const telefone = question("Digite seu telefone: ");
const anosExperiencia = questionInt("Digite quantos anos de experiência você tem: ");
const disponivelParaFreelance = keyInYN("Você está disponível para trabalho freelance? ");

console.log(`
  ============================================
  |  CARTÃO DE VISITAS                       |
  ============================================
  |  Nome        : ${nome}                    |
  |  Profissão   : ${profissao}               |
  |  Cidade      : ${cidade}                  |
  |  E-mail      : ${email}                   |
  |  Telefone    : ${telefone}                |
  |  Experiência : ${anosExperiencia} anos    |
  |  Freelance   : ${disponivelParaFreelance} |
  ============================================
`);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
//    "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

const materias = ["Matemática", "Português", "História", "Geografia", "Ciências"];
console.log(`Primeira matéria: ${materias[0]}`);
console.log(`Última matéria: ${materias[materias.length - 1]}`);
console.log(`Total de matérias: ${materias.length}`);
console.log(`A 3ª matéria da lista é ${materias[2]} e a lista tem ${materias.length} matérias no total.`);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:

notas[2] = 6.0;
notas[3] = 8.5;
console.log(notas);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

materias.push("Educação Física");
console.log(materias);
materias.pop();
console.log(materias);
materias.unshift("Filosofia");
console.log(materias);
materias.shift();
console.log(materias);
console.log(`Total de matérias restantes: ${materias.length}`);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
//    O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
//    Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
//    do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

console.log(`Índice de Curitiba: ${cidadesBrasil.indexOf("Curitiba")}`);
console.log(`Índice de Recife: ${cidadesBrasil.indexOf("Recife")}`); // O retorno -1 significa que "Recife" não está presente na lista.
console.log(`Salvador está na lista? ${cidadesBrasil.includes("Salvador")}`);
console.log(`Belém está na lista? ${cidadesBrasil.includes("Belém")}`);
const todasAsCidades = cidadesBrasil.concat(cidadesPortugal);
console.log(todasAsCidades);
const cidadesDoMeio = todasAsCidades.slice(3, 7);
console.log(cidadesDoMeio);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
//      [
//        ["Ana", "Bruno", "Carlos"],
//        ["Diana", "Eduardo"],
//        ["Fernanda", "Gabriel", "Helena", "Igor"]
//      ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

const grupos = [
  ["Ana", "Bruno", "Carlos"],
  ["Diana", "Eduardo"],
  ["Fernanda", "Gabriel", "Helena", "Igor"]
];

console.log(grupos);
console.log(grupos[2][1]);
const todosOsAlunos = grupos.flat();
console.log(todosOsAlunos);
console.log(`Total de alunos nos grupos: ${grupos.length}`);
console.log(`Total de alunos: ${todosOsAlunos.length}`);
// A diferença nos valores se dá pelo fato de que "grupos" conta a quantidade de sub-arrays (grupos de alunos),
// enquanto "todosOsAlunos" conta a quantidade total de alunos, que é maior.

console.log("_______________________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
//      nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
//    "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

const produto = {
  nome: "Produto Exemplo",
  preco: 10.99,
  disponivel: true,
  categoria: "Categoria Exemplo"
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.disponivel);
console.log(produto.categoria);

console.log(`O produto '${produto.nome}' custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`);
console.table(produto);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

produto.preco = 12.99;
produto.disponivel = false;
produto.estoque = 20;

console.table(produto);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
//    Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

const listaFuncionarios = [
  { nome: "João", cargo: "Gerente", salario: 5000, ativo: true },
  { nome: "Maria", cargo: "Analista", salario: 4000, ativo: true },
  { nome: "Pedro", cargo: "Estagiário", salario: 2000, ativo: false }
];

console.log(listaFuncionarios[0].nome);
console.log(listaFuncionarios[2].cargo);
console.log(listaFuncionarios[1].salario);

listaFuncionarios[0].cargo = "Diretor";

const novoFuncionario = { nome: "Julia", cargo: "Recepcionista", salario: 3500, ativo: true };
listaFuncionarios.push(novoFuncionario);

console.table(listaFuncionarios);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
//      • nomeLoja (string)
//      • cnpj (string)
//      • endereco → objeto contendo: rua, numero, cidade, estado
//      • categoriasProdutos → array com pelo menos 3 categorias
//      • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
//    "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
//    "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

const loja = {
  nomeLoja: "Loja Exemplo",
  cnpj: "12.345.678/0001-90",
  endereco: {
    rua: "Rua Exemplo",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP"
  },
  categoriasProdutos: ["Eletrônicos", "Roupas", "Alimentos"],
  aberta: true
};

console.log(loja.nomeLoja);
console.log(loja.endereco.cidade);
console.log(loja.categoriasProdutos[0]);
console.log(`A loja '${loja.nomeLoja}' fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e está aberta: ${loja.aberta}.`);

loja.categoriasProdutos.push("Brinquedos");
console.log(`Algumas categorias da loja '${loja.nomeLoja}' são: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[loja.categoriasProdutos.length - 1]}`);

console.table(loja);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
//      • nomeEscola (string)
//      • cidade (string)
//      • diretor → objeto com: nome (string), tempoDeServico (number)
//      • turmas → array contendo 2 objetos, cada um com:
//           - período (string) - ex: "Manhã", "Tarde"
//           - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

const escola = {
  nomeEscola: "Escola Exemplo",
  cidade: "São Paulo",
  diretor: {
    nome: "Carlos Silva",
    tempoDeServico: 10
  },
  turmas: [
    {
      periodo: "Manhã",
      alunos: ["Ana", "Bruno", "Carlos"]
    },
    {
      periodo: "Tarde",
      alunos: ["Daniela", "Eduardo", "Fernanda"]
    }
  ]
};

console.log(escola.nomeEscola);
console.log(escola.diretor.nome);
console.log(escola.turmas[1].periodo);
console.log(escola.turmas[0].alunos[2]);
escola.turmas[1].alunos.push("Gabriel");
escola.turmas[0].periodo = "Noite";
console.table(escola);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
//   • Colete os dados para as seguintes variáveis/constantes:
//       - "nomeBiblioteca"   (string) → nome da biblioteca
//       - "anoDeFundacao"    (number) → ano de fundação
//       - "capacidadeLivros" (number) → quantidade máxima de livros
//       - "bibliotecaAberta" (boolean)→ true ou false
//   • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
//   • Crie um array chamado "acervo" com 3 objetos de livros.
//     Cada livro deve ter:
//       - titulo     (string)
//       - autor      (string)
//       - ano        (number)
//       - paginas    (number)
//       - disponivel (boolean)
//
// PASSO C: Acessando o acervo
//   • Exiba o título do 1º livro.
//   • Exiba o autor do 2º livro.
//   • Exiba o número de páginas do 3º livro.
//   • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
//   • Marque o 1º livro como indisponível (disponivel = false).
//   • Altere o título do 3º livro para um título diferente.
//   • Adicione um 4º livro ao array "acervo" usando push(),
//     criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
//   • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
//   • Exiba a primeira e a última seção.
//   • Adicione "Tecnologia" ao final de "secoes".
//   • Remova a primeira seção de "secoes".
//   • Exiba o array "secoes".
//
// PASSO F: Relatório final
//   • Usando template literals, exiba um relatório/frase com:
//       - Nome e ano de fundação da biblioteca
//       - Quantidade de livros no acervo
//       - Quantidade de seções disponíveis
//       - Título e autor de CADA livro do acervo (um livro por linha)
//

// → Seu código aqui:

// PASSO A: Variáveis da biblioteca
const nomeBiblioteca = readline.question("Nome da biblioteca: ");
const anoDeFundacao = readline.questionInt("Ano de fundacao: ");
const capacidadeLivros = readline.questionInt("Capacidade maxima de livros: ");
const bibliotecaAberta = readline.keyInYN("Biblioteca aberta?: ")
console.log(`A biblioteca ${nomeBiblioteca}, fundada em ${anoDeFundacao}, possui capacidade para ${capacidadeLivros} livros. Situação: ${bibliotecaAberta}.`);

// PASSO B: Acervo de livros
const livro1 = {
  titulo: readline.question("Titulo do livro 1: "),
  autor: readline.question("Autor do livro 1: "),
  ano: readline.questionInt("Ano do livro 1: "),
  paginas: readline.questionInt("Paginas do livro 1: "),
  disponivel: readline.keyInYN("Disponivel?: ")
};

const livro2 = {
  titulo: readline.question("Titulo do livro 2: "),
  autor: readline.question("Autor do livro 2: "),
  ano: readline.questionInt("Ano do livro 2: "),
  paginas: readline.questionInt("Paginas do livro 2: "),
  disponivel: readline.keyInYN("Disponivel?: ")
};

const livro3 = {
  titulo: readline.question("Titulo do livro 3: "),
  autor: readline.question("Autor do livro 3: "),
  ano: readline.questionInt("Ano do livro 3: "),
  paginas: readline.questionInt("Paginas do livro 3: "),
  disponivel: readline.keyInYN("Disponivel?: ")
};

const acervo = [livro1, livro2, livro3];

// PASSO C: Acessando o acervo
console.log("Título do 1º livro:", acervo[0].titulo);
console.log("Autor do 2º livro:", acervo[1].autor);
console.log("Número de páginas do 3º livro:", acervo[2].paginas);
console.log("Quantidade total de livros:", acervo.length);

// PASSO D: Alterando o acervo
acervo[0].disponivel = false;
acervo[2].titulo = "Novo Titulo do Terceiro Livro";

acervo.push({
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899,
  paginas: 256,
  disponivel: true
});

// PASSO E: Seções da biblioteca
let secoes = ["Ficção", "Ciências", "História", "Infantil"];

console.log("Primeira seção:", secoes[0]);
console.log("Última seção:", secoes[secoes.length - 1]);

secoes.push("Tecnologia");
secoes.shift();

console.log("Seções atuais:", secoes);

// PASSO F: Relatório final
console.log(`
  Relatório da Biblioteca
  Nome: ${nomeBiblioteca}
  Ano de fundação: ${anoDeFundacao}
  Quantidade de livros no acervo: ${acervo.length}
  Quantidade de seções: ${secoes.length}

  Livros do acervo:
  1. ${acervo[0].titulo} - ${acervo[0].autor}
  2. ${acervo[1].titulo} - ${acervo[1].autor}
  3. ${acervo[2].titulo} - ${acervo[2].autor}
  4. ${acervo[3].titulo} - ${acervo[3].autor}
`);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
//   • Crie um objeto "restaurante" com:
//       - nome (string)
//       - tipoCozinha (string)   ex: "Italiana", "Japonesa"
//       - nota (number)          ex: 8.7
//       - aberto (boolean)
//       - endereco → objeto com: rua, numero, bairro, cidade
//       - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
//           • nomePrato (string)
//           • preco     (number)
//           • vegano    (boolean)
//
// PASSO B: Acessos e exibições
//   • Exiba o nome do restaurante e sua nota.
//   • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
//   • Exiba o nome e o preço do 1º prato do cardápio.
//   • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
//   • Altere o preço do 2º prato para um valor diferente.
//   • Adicione um novo prato ao cardápio usando push().
//   • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
//   • Usando console.log() e template literals, exiba:
//       - Nome do restaurante, tipo de cozinha e nota
//       - Status: aberto ou fechado
//       - Quantos pratos há no cardápio (.length)
//       - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

// PASSO A: Estrutura do restaurante - PRIMEIRA FORMA
/*
const nomeA = readline.question("Nome do restaurante: ");
const tipoCozinha = readline.question("Tipo de cozinha: ");
const nota = readline.questionInt("Nota do restaurante: ");
const aberto = readline.keyInYN("Está aberto? (true/false): ");

const rua = readline.question("Rua: ");
const numero = readline.questionInt("Número: ");
const bairro = readline.question("Bairro: ");
const cidadeA = readline.question("Cidade: ");

// Prato 1
const prato1 = {
  nomePrato: readline.question("Nome do prato 1: "),
  preco: readline.questionInt("Preço do prato 1: "),
  vegano: readline.keyInYN("É vegano? (true/false): ")
};

// Prato 2
const prato2 = {
  nomePrato: readline.question("Nome do prato 2: "),
  preco: readline.questionInt("Preço do prato 2: "),
  vegano: readline.keyInYN("É vegano? (true/false): ")
};

// Prato 3
const prato3 = {
  nomePrato: readline.question("Nome do prato 3: "),
  preco: readline.questionInt("Preço do prato 3: "),
  vegano: readline.keyInYN("É vegano? (true/false): ")
};

// Prato 4
const prato4 = {
  nomePrato: readline.question("Nome do prato 4: "),
  preco: readline.questionInt("Preço do prato 4: "),
  vegano: readline.keyInYN("É vegano? (true/false): ")
};

const restaurante = {
  nome: nomeA,
  tipoCozinha: tipoCozinha,
  nota: nota,
  aberto: aberto,
  endereco: {
    rua: rua,
    numero: numero,
    bairro: bairro,
    cidade: cidadeA
  },
  cardapio: [prato1, prato2, prato3, prato4]
};
*/

// PASSO A: Estrutura do restaurante - SEGUNDA FORMA
const restaurante = {
  nome: readline.question("Nome do restaurante: "),
  tipoCozinha: readline.question("Tipo de cozinha: "),
  nota: readline.questionInt("Nota do restaurante: "),
  aberto: readline.keyInYN("Está aberto? (true/false): "),
  endereco: {
    rua: readline.question("Rua: "),
    numero: readline.questionInt("Número: "),
    bairro: readline.question("Bairro: "),
    cidade: readline.question("Cidade: ")
  },
  cardapio: [
    {
      nomePrato: readline.question("Nome do prato 1: "),
      preco: readline.questionInt("Preço do prato 1: "),
      vegano: readline.keyInYN("É vegano? (true/false): ")
    },
    {
      nomePrato: readline.question("Nome do prato 2: "),
      preco: readline.questionInt("Preço do prato 2: "),
      vegano: readline.keyInYN("É vegano? (true/false): ")
    },
    {
      nomePrato: readline.question("Nome do prato 3: "),
      preco: readline.questionInt("Preço do prato 3: "),
      vegano: readline.keyInYN("É vegano? (true/false): ")
    },
    {
      nomePrato: readline.question("Nome do prato 4: "),
      preco: readline.questionInt("Preço do prato 4: "),
      vegano: readline.keyInYN("É vegano? (true/false): ")
    }
  ]
};

// PASSO B: Acessos e exibições
console.log(`Restaurante: ${restaurante.nome} | Nota: ${restaurante.nota}`);
console.log(`O restaurante ${restaurante.nome} está localizado na ${restaurante.endereco.rua}, ${restaurante.endereco.numero}, ${restaurante.endereco.bairro}, ${restaurante.endereco.cidade}`);
console.log(`Primeiro prato: ${restaurante.cardapio[0].nomePrato} - R$ ${restaurante.cardapio[0].preco}`);
console.log(`O prato ${restaurante.cardapio[2].nomePrato} é vegano: ${restaurante.cardapio[2].vegano}`);

// PASSO C: Alterações
restaurante.cardapio[1].preco = 99.9;

restaurante.cardapio.push({
  nomePrato: "Salada Especial",
  preco: 35,
  vegano: true
});

restaurante.aberto = false;

// PASSO D: Relatório do cardápio
console.log(`
  Relatório do Restaurante

  Nome: ${restaurante.nome}
  Tipo de cozinha: ${restaurante.tipoCozinha}
  Nota: ${restaurante.nota}
  Status: ${restaurante.aberto ? "Aberto" : "Fechado"}

  Quantidade de pratos: ${restaurante.cardapio.length}

  1. ${restaurante.cardapio[0].nomePrato} - R$ ${restaurante.cardapio[0].preco} - Vegano: ${restaurante.cardapio[0].vegano ? 'Sim' : 'Não'}
  2. ${restaurante.cardapio[1].nomePrato} - R$ ${restaurante.cardapio[1].preco} - Vegano: ${restaurante.cardapio[1].vegano ? 'Sim' : 'Não'}
  3. ${restaurante.cardapio[2].nomePrato} - R$ ${restaurante.cardapio[2].preco} - Vegano: ${restaurante.cardapio[2].vegano ? 'Sim' : 'Não'}
  4. ${restaurante.cardapio[3].nomePrato} - R$ ${restaurante.cardapio[3].preco} - Vegano: ${restaurante.cardapio[3].vegano ? 'Sim' : 'Não'}
  5. ${restaurante.cardapio[4].nomePrato} - R$ ${restaurante.cardapio[4].preco} - Vegano: ${restaurante.cardapio[4].vegano ? 'Sim' : 'Não'}
`);

console.log("_______________________________");
