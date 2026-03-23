// ============================================================
//   DESAFIOS 02 – Operadores Aritméticos, Relacionais e Lógicos
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ⚠ Restrições obrigatórias:
//    - Use operadores ARITMÉTICOS, RELACIONAIS e LÓGICOS em conjunto.
//    - NÃO use if, else, switch, for, while ou funções.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cálculo de frete com desconto progressivo
// ------------------------------------------------------------
// Uma loja virtual aplica as seguintes regras:
//
//   Frete base por região:
//     - "sul" ou "sudeste"       → R$ 15,00
//     - "nordeste" ou "centro"   → R$ 25,00
//     - "norte"                  → R$ 40,00
//
//   Desconto no frete:
//     - Compra acima de R$ 150 E região "sul" ou "sudeste" → frete grátis
//     - Compra acima de R$ 200 (qualquer região)           → frete grátis
//     - Compra entre R$ 80 e R$ 150                        → 50% de desconto no frete
//     - Fora das condições acima                           → sem desconto
//
//   Taxa de embalagem presente: R$ 12,00 (cobrada somente se o usuário quiser)
//
// a) Pergunte ao usuário e armazene em um objeto "pedido":
//    - nome, regiao (sul/sudeste/nordeste/centro/norte),
//      valorProdutos, embalagemPresente (keyInYN())
// b) Usando APENAS ternários e operadores lógicos/relacionais/aritméticos,
//    calcule e armazene no objeto "pedido":
//    - freteBase      → use ternários aninhados com || para agrupar regiões
//    - freteGratis    → booleano usando && e || com valorProdutos e regiao
//    - desconto50     → booleano: entre 80 e 150 E frete não é grátis
//    - freteReal      → freteBase ajustado pelo desconto (use * 0.5 ou * 0)
//    - taxaEmbalagem  → use ternário com embalaggemPresente
//    - totalFinal     → valorProdutos + freteReal + taxaEmbalagem
// c) Exiba o objeto "pedido" com console.table().
// d) Exiba:
//    "Olá <nome>! Total do pedido: R$ <totalFinal>
//     (Frete: R$ <freteReal> | Embalagem: R$ <taxaEmbalagem>)"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Análise de desempenho de vendedor
// ------------------------------------------------------------
// Um vendedor recebe salário fixo + comissão sobre vendas.
// Regras de comissão:
//
//   Percentual de comissão:
//     - Bateu a meta E vendeu para 10 ou mais clientes → 8%
//     - Bateu a meta MAS vendeu para menos de 10 clientes → 5%
//     - NÃO bateu a meta MAS vendeu pelo menos 70% dela → 2%
//     - NÃO bateu nem 70% da meta → sem comissão
//
//   Bônus por tempo de casa:
//     - 5 anos ou mais → + R$ 500,00 sobre a comissão
//     - 2 a 4 anos → + R$ 200,00
//     - Menos de 2 anos → sem bônus
//
//   Desconto INSS: 11% sobre (salarioFixo + comissao + bonus)
//
// a) Pergunte e armazene em um objeto "vendedor":
//    - nome, salarioFixo, metaMensal, totalVendido,
//      totalClientes, anosNaEmpresa
// b) Usando APENAS ternários e operadores, calcule:
//    - batoMeta         → booleano: totalVendido >= metaMensal
//    - percentualMeta   → totalVendido / metaMensal * 100
//    - percentualComis  → ternário aninhado com as 4 faixas acima
//    - comissao         → totalVendido * (percentualComis / 100)
//    - bonus            → ternário aninhado com as 3 faixas de anos
//    - bruto            → salarioFixo + comissao + bonus
//    - inss             → bruto * 0.11
//    - liquido          → bruto - inss
// c) Exiba o objeto "vendedor" com console.table().
// d) Exiba com template literal:
//    "<nome> | Bruto: R$ <bruto> | INSS: R$ <inss> | Líquido: R$ <liquido>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Simulador de score de risco de investimento
// ------------------------------------------------------------
// Um banco classifica o perfil do investidor com base em pontuação:
//
//   Pontuação:
//     - Idade < 30                           → +20 pontos
//     - Idade entre 30 e 50 (inclusive)      → +10 pontos
//     - Renda mensal > 10000                 → +30 pontos
//     - Renda entre 3000 e 10000 (inclusive) → +15 pontos
//     - Patrimônio > 100000                  → +25 pontos
//     - Possui dívidas                       → -30 pontos
//     - Tem experiência prévia em investimentos → +20 pontos
//
//   Perfil pelo score total:
//     - score >= 70          → "Arrojado"
//     - score >= 40 e < 70   → "Moderado"
//     - score < 40           → "Conservador"
//
//   Produto recomendado:
//     - "Arrojado"     → "Ações e Fundos de Alto Risco"
//     - "Moderado"     → "Tesouro IPCA+ e Fundos Mistos"
//     - "Conservador"  → "Poupança e Tesouro Selic"
//
// a) Pergunte e armazene em um objeto "investidor":
//    - nome, idade, rendaMensal, patrimonio,
//      possuiDividas (keyInYN()), temExperiencia (keyInYN())
// b) Usando APENAS ternários e operadores, calcule e armazene:
//    - ptIdade       → ternário: idade < 30 ? 20 : (entre 30 e 50 ? 10 : 0)
//    - ptRenda       → ternário com faixas de renda
//    - ptPatrimonio  → ternário: patrimonio > 100000 ? 25 : 0
//    - ptDividas     → possuiDividas ? -30 : 0
//    - ptExperiencia → temExperiencia ? 20 : 0
//    - score         → soma de todos os pontos (pode ser negativo!)
//    - perfil        → ternário aninhado com os 3 perfis
//    - produto       → ternário aninhado com os 3 produtos
// c) Exiba o objeto "investidor" com console.table().
// d) Exiba:
//    "Perfil de <nome>: <perfil> (Score: <score>)
//     Produto recomendado: <produto>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Verificador de elegibilidade para aposentadoria
// ------------------------------------------------------------
// Regras do INSS simplificadas:
//
//   Aposentadoria por IDADE:
//     - Homem:  65 anos E mínimo de 20 anos contribuídos
//     - Mulher: 62 anos E mínimo de 15 anos contribuídos
//
//   Aposentadoria por TEMPO DE CONTRIBUIÇÃO:
//     - Homem:  qualquer idade E 35 anos contribuídos
//     - Mulher: qualquer idade E 30 anos contribuídos
//
//   Cálculo do benefício:
//     - Salário de benefício = média dos últimos salários (input do usuário)
//     - Se se aposenta por TEMPO: 100% do salário de benefício
//     - Se se aposenta por IDADE:
//         70% + (2% por cada ano contribuído acima do mínimo)
//         (use operadores aritméticos para calcular o percentual)
//     - Benefício mínimo: R$ 1.412,00 (salário mínimo)
//     - Benefício máximo: R$ 7.786,02 (teto do INSS)
//       → Use Math.max() e Math.min() para limitar o valor
//
// a) Pergunte e armazene em um objeto "segurado":
//    - nome, sexo ("M" ou "F"), idade, anosContribuidos,
//      mediaSalarial
// b) Calculando APENAS com ternários e operadores:
//    - idadeMinima       → sexo === "M" ? 65 : 62
//    - contribuicaoMinIdade → sexo === "M" ? 20 : 15
//    - contribuicaoPlena → sexo === "M" ? 35 : 30
//    - aposentaPorTempo  → booleano: anosContribuidos >= contribuicaoPlena
//    - aposentaPorIdade  → booleano: idade >= idadeMinima E anosContribuidos >= contribuicaoMinIdade
//    - podeAposentar     → aposentaPorTempo || aposentaPorIdade
//    - excedente         → anosContribuidos - contribuicaoMinIdade (para cálculo por idade)
//    - percentual        → aposentaPorTempo ? 100 : (70 + excedente * 2)
//    - beneficioBruto    → mediaSalarial * (percentual / 100)
//    - beneficioFinal    → limitado entre R$ 1.412,00 e R$ 7.786,02
// c) Exiba o objeto "segurado" com console.table().
// d) Use ternário para exibir:
//    - Se pode aposentar → "Parabéns, <nome>! Benefício: R$ <beneficioFinal> (<percentual>%)"
//    - Se não pode       → "Ainda não elegível. Faltam anos ou idade mínima."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de conta de energia elétrica
// ------------------------------------------------------------
// A concessionária cobra por faixas de consumo (kWh):
//
//   Faixas residencial:
//     - Até 100 kWh      → R$ 0,40 por kWh
//     - De 101 a 200 kWh → R$ 0,40 nos primeiros 100 + R$ 0,55 no excedente
//     - De 201 a 400 kWh → idem + R$ 0,72 no excedente acima de 200
//     - Acima de 400 kWh → idem + R$ 0,95 no excedente acima de 400
//
//   Taxas adicionais:
//     - Iluminação pública: 7% sobre o valor das faixas
//     - ICMS: 25% sobre (valor das faixas + iluminação pública)
//     - Taxa de disponibilidade (fixa): R$ 4,50
//     - Desconto baixa renda: 40% sobre o valor total
//       (apenas se renda per capita ≤ R$ 218,00 E consumo ≤ 220 kWh)
//
// a) Pergunte e armazene em um objeto "fatura":
//    - nome, consumoKwh, rendaPerCapita
// b) Usando APENAS ternários e operadores, calcule:
//    - faixa1  → parcela do consumo na 1ª faixa (até 100 kWh) * R$ 0,40
//    - faixa2  → parcela entre 101-200 kWh * R$ 0,55 (se consumo > 100)
//    - faixa3  → parcela entre 201-400 kWh * R$ 0,72 (se consumo > 200)
//    - faixa4  → excedente acima de 400 kWh * R$ 0,95 (se consumo > 400)
//    - subTotal → faixa1 + faixa2 + faixa3 + faixa4
//    - iluminacao → subTotal * 0.07
//    - icms       → (subTotal + iluminacao) * 0.25
//    - ehBaixaRenda → booleano: rendaPerCapita <= 218 E consumo <= 220
//    - totalSemDesconto → subTotal + iluminacao + icms + 4.50
//    - desconto → ehBaixaRenda ? totalSemDesconto * 0.40 : 0
//    - totalFinal → totalSemDesconto - desconto
//
//    Dica: para calcular as faixas, pense em quanto kWh foi consumido
//    dentro de cada faixa. Use Math.min() e Math.max() para delimitar.
//    Exemplo faixa2: Math.max(0, Math.min(consumo, 200) - 100) * 0.55
//
// c) Exiba o objeto "fatura" com console.table().
// d) Exiba:
//    "Fatura de <nome> | Consumo: <consumo> kWh | Total: R$ <totalFinal>"
//    (acrescente " – Desconto baixa renda aplicado!" se ehBaixaRenda for true)

// → Seu código aqui:


console.log("_______________________________");
