// ============================================================
//   AULA: Estruturas de Controle – Interrompendo Laços
//         (break / continue / return)
// ============================================================

// Às vezes precisamos interromper ou pular uma repetição
// antes que a condição do laço naturalmente se torne false.
// Para isso, usamos: break, continue e return.


// OBSERVAÇÃO: A PARTIR DESTE MOMENTO, NÃO UTILIZAR MAIS a função "process.exit()".
// Em vez disso, vamos usar break, continue e return para controlar o fluxo.

// O process.exit() é uma função especial do Node.js que atrapalha o funcionamento lógico do código,
// pois interrompe a execução de forma abrupta, sem permitir que outras partes do código sejam
// executadas ou finalizadas corretamente.


// ============================================================
// 1. BREAK — sair do laço imediatamente
// ============================================================

// O break encerra o laço (também do for, while ou do...while)
// no momento em que é executado. O código após o laço continua normalmente.

console.log("Procurando o número 7:");
for (let i = 1; i <= 20; i++) {
  if (i === 7) {
    console.log(`Encontrei o 7! Saindo do laço.`);
    break; // encerra o for aqui — i = 8..20 nunca serão processados
  }
  console.log(i); // não será mais executado após o 6, pois o break encerra o laço/loop ( o for() )
}
console.log("Código após o for continua normalmente.");

console.log("_______________________________");

// Break com while — sair de um laço "infinito"
let senha = 0;
const senhaCorreta = 1234;

while (true) { // laço sem condição de parada no cabeçalho
  senha++;
  if (senha === senhaCorreta) {
    console.log(`Senha encontrada: ${senha}`);
    break; // única saída possível deste while
  }
}

console.log("_______________________________");


// ============================================================
// 2. CONTINUE — pular para a próxima iteração
// ============================================================

// O continue NÃO encerra o laço.
// Ele apenas PULA o restante do bloco naquela volta
// e vai direto PARA O PRÓXIMO INCREMENTO / VERIFICAÇÃO.

console.log("Números de 1 a 10, pulando os pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // pula o restante do código até o fim da "passada" do for()
  }
  console.log(i);
}

console.log("_______________________________");

// Continue com while — mesma lógica
console.log("Múltiplos de 3 de 1 a 20 (continue no while):");
let j = 0;
while (j < 20) {
  j++;
  if (j % 3 !== 0) {
    continue; // pula o restante do código até o fim da "passada" do while()
  }
  console.log(j);
}

console.log("_______________________________");


// ============================================================
// 3. BREAK vs CONTINUE
// ============================================================

// break:    para tudo e sai do laço.
// continue: pula aquela volta e continua no próximo número.

console.log("--- com break em i === 5 ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Exibe: 1 2 3 4 - (para caso 5)

console.log("--- com continue em i === 5 ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
// Exibe: 1 2 3 4 6 7 8 9 10 - (pula o 5)

console.log("_______________________________");


// ============================================================
// 4. BREAK EM LAÇOS ANINHADOS
// ============================================================

// O break só encerra o laço mais interno em que está.
// Para sair de um laço externo, precisamos de uma flag (variável booleana).

// Problema: encontrar o primeiro par de (i, j) onde i * j === 24
console.log("Encontrando par com produto 24:");

let achou = false;

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (i * j === 24) {
      console.log(`Encontrado: ${i} x ${j} = 24`);
      achou = true;
      break; // sai apenas do for interno
    }
  }
  if (achou) {
    break;
  }
}

console.log("_______________________________");


// ============================================================
// 5. CONTINUE EM LAÇOS ANINHADOS
// ============================================================

// Continue também afeta apenas o laço mais interno.
// Exemplo: imprimir pares (i, j) pulando quando i === j

console.log("Pares (i, j) de 1 a 3 onde i !== j:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === j) continue; // pula quando os dois são iguais
    console.log(`(${i}, ${j})`);
  }
}
// Não imprime (1,1), (2,2), (3,3)

console.log("_______________________________");


// ============================================================
// 6. EXEMPLO PRÁTICO – filtrando e processando dados
// ============================================================

// Contexto: lista de vendas com valores.
// Queremos somar apenas as vendas válidas (> 0),
// parar se a soma ultrapassar R$ 1000,
// e ignorar vendas canceladas (valor -1).

const vendas = [150, 200, -1, 80, 500, -1, 400, 120];
let totalVendas = 0;
let qtdVendas   = 0;

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] === -1) {
    console.log(`Venda [${i}] cancelada — ignorando.`);
    continue; // pula vendas canceladas
  }

  if (totalVendas + vendas[i] > 1000) {
    console.log(`Limite de R$ 1000 atingido na venda [${i}]. Parando.`);
    break; // para de processar ao atingir o limite
  }

  totalVendas += vendas[i];
  qtdVendas++;
  console.log(`Venda [${i}]: R$ ${vendas[i]} | Acumulado: R$ ${totalVendas}`);
}

console.log(`\nTotal processado: R$ ${totalVendas} em ${qtdVendas} venda(s).`);

console.log("_______________________________");