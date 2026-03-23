// ============================================================
//   DESAFIOS 02 – If / Else com Objetos Aninhados e Operadores Lógicos
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Validação de cadastro de usuário
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - DadosPessoais: Nome completo, CPF (apenas números, mas salvos como string), idade
//    - Endereço: cidade e estado (sigla com 2 letras)
//    - Acesso: nome de usuário, senha e confirmação de senha
// b) Armazene os dados em um objeto "cadastro" com três
//    objetos: "DadosPessoais", "endereco" e "acesso".
//    Exemplo de estrutura:
//    {
//      DadosPessoais: { nomeCompleto, cpf, idade },
//      endereco: { cidade, estado },
//      acesso: { usuario, senha, confirmarSenha }
//    }
// c) Valide cada campo usando if/else if/else e operadores lógicos:
//    1. nomeCompleto não pode estar vazio E deve ter ao menos 2 palavras e ao menos 2 caracteres por palavra
//       (use && e verifique se inclui um espaço[utilize split() para isso])
//    2. CPF deve ter exatamente 11 dígitos[utilize length]
//    3. Idade deve ser >= 18
//    4. Estado deve ter exatamente 2 letras
//    5. Senha deve ter ao menos 8 caracteres
//    6. Senha e confirmação devem ser iguais
// d) Se alguma validação falhar, exiba qual campo é inválido e pare.
//    Se tudo estiver correto → "Cadastro de <usuario> realizado com sucesso!"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Sistema de reserva de hotel
// ------------------------------------------------------------
// a) Defina um objeto "reserva" com dois objetos aninhados:
//    - "hospede": { nome, ehSocio: false, temPet: false }
//    - "quarto": { numero: 101, tipo: "standard", petFriendly: false,
//                  disponivel: true, precoPorNoite: 250 }
// b) Pergunte ao usuário:
//    - Seu nome
//    - É sócio do clube de fidelidade? (sim/não)
//    - Tem animal de estimação? (sim/não)
//    - Quantas noites deseja ficar?
// c) Atualize os campos do objeto com as respostas.
// d) Usando if/else if/else e operadores lógicos, verifique:
//    1. Se o quarto NÃO está disponível → "Quarto indisponível."
//    2. Se o hóspede tem pet E o quarto NÃO é pet-friendly →
//       "Quarto não aceita animais. Reserva cancelada."
//    3. Se passou nas verificações, calcule o total:
//       - Preço base: precoPorNoite * noites
//       - Se for sócio E ficar 3 noites ou mais → 15% de desconto
//       - Se for sócio mas ficar menos de 3 noites → 5% de desconto
//       - Se NÃO for sócio → sem desconto
// e) Exiba o objeto "reserva" com console.table().
// f) Exiba: "Reserva confirmada para <nome>! Total: R$ <total>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Aprovação escolar com frequência
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno
//    - Três notas (de 0 a 10)
//    - Percentual de frequência (de 0 a 100)
// b) Armazene em um objeto "aluno" com dois objetos aninhados:
//    - "dados": { nome, frequencia }
//    - "notas": { nota1, nota2, nota3, media }  ← calcule a média aqui
// c) Regras de aprovação (use && e || nas condições):
//    - Frequência mínima exigida: 75%
//    - Média para aprovação direta: >= 7.0
//    - Média para recuperação: >= 5.0 e < 7.0
//    - Média para reprovação: < 5.0
//
//    Verificações com if/else if/else:
//    1. Se frequência < 75 → reprovado por falta,
//       independente da média. Exiba:
//       "Reprovado por falta. Frequência: <freq>%"
//    2. Se frequência >= 75 E média >= 7 → aprovado:
//       "Aprovado! Média: <media> | Frequência: <freq>%"
//    3. Se frequência >= 75 E média >= 5 E média < 7 → recuperação:
//       "Recuperação. Média: <media> | Frequência: <freq>%"
//    4. Se frequência >= 75 E média < 5 → reprovado por nota:
//       "Reprovado por nota. Média: <media>"
// d) Exiba o objeto "aluno" com console.table() ao final.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de análise de crédito
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome, renda mensal (R$), score de crédito (0 a 1000)
//    - Possui dívidas em aberto? (sim/não)
//    - Valor do empréstimo desejado (R$)
// b) Armazene em um objeto "solicitacao" com dois objetos aninhados:
//    - "cliente":    { nome, renda, score, possuiDividas }
//    - "emprestimo": { valorSolicitado, aprovado: false,
//                      limite: 0, parcelas: 0, taxaJuros: 0 }
// c) Regras de análise (use && e || nas condições):
//
//    REPROVADO se:
//    - possuiDividas for true  OU  score < 300
//    → "Crédito negado. Regularize suas pendências."
//
//    APROVADO PARCIAL se:
//    - NÃO possui dívidas  E  score >= 300  E  score < 600
//    → limite = renda * 2, parcelas = 12, taxaJuros = 5%
//    → Se valorSolicitado > limite → aprova somente até o limite
//
//    APROVADO PLENO se:
//    - NÃO possui dívidas  E  score >= 600  E  renda >= 2000
//    → limite = renda * 5, parcelas = 36, taxaJuros = 1.5%
//    → Se valorSolicitado > limite → aprova somente até o limite
//
//    APROVADO PREMIUM se:
//    - NÃO possui dívidas  E  score >= 800  E  renda >= 5000
//    → limite = renda * 10, parcelas = 60, taxaJuros = 0.8%
//    → Se valorSolicitado > limite → aprova somente até o limite
//
// d) Atualize os campos de "emprestimo" com os resultados.
// e) Exiba o objeto "solicitacao" com console.table().
// f) Se aprovado, exiba:
//    "Empréstimo de R$ <valor> aprovado para <nome>.
//     <parcelas>x de R$ <parcelaMensal> com juros de <taxa>% ao mês."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Controle de embarque aéreo
// ------------------------------------------------------------
// a) Pergunte ao usuário os dados do passageiro:
//    - Nome, idade, número do documento (apenas números)
// b) Pergunte os dados da bagagem:
//    - Peso da bagagem de porão em kg (0 se não tiver)
//    - Possui bagagem de mão? (sim/não)
//    - Peso da bagagem de mão em kg (0 se não tiver)
// c) Pergunte os dados do voo:
//    - Classe: "economica", "executiva" ou "primeira"
//    - Fez check-in online? (sim/não)
// d) Armazene tudo em um objeto "embarque" com três objetos aninhados:
//    - "passageiro": { nome, idade, documento }
//    - "bagagem":    { pesoPoraoKg, temMao, pesoMaoKg }
//    - "voo":        { classe, checkInOnline }
// e) Limites de bagagem por classe (use && e || nas condições):
//    - "economica":  porão até 23 kg  |  mão até 10 kg
//    - "executiva":  porão até 32 kg  |  mão até 15 kg
//    - "primeira":   porão até 50 kg  |  mão até 18 kg
//
// f) Verifique as condições de embarque com if/else if/else:
//    1. Documento deve ter entre 7 e 11 dígitos numéricos
//       → se inválido: "Documento inválido. Embarque negado."
//    2. Se a bagagem de porão exceder o limite da classe
//       E não for primeira classe →
//       "Excesso de bagagem de porão. Pague a taxa de R$ 80,00."
//       (apenas exibe aviso, não impede embarque)
//    3. Se a bagagem de mão exceder o limite da classe →
//       "Bagagem de mão acima do permitido. Despache no balcão."
//    4. Se idade < 18 E NÃO fez check-in online →
//       "Menor de idade sem check-in online. Dirija-se ao balcão."
//    5. Se passou em todas as verificações críticas →
//       "Embarque liberado! Boa viagem, <nome>!"
// g) Exiba o objeto "embarque" com console.table() ao final.

// → Seu código aqui:


console.log("_______________________________");
