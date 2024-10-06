let valor = new Array(15);
let soma = 0;
let i = 0;

do {
  valor[i] = parseInt(prompt(`Digite o valor de número ${i + 1}`));
  let fatorial = 1;
  let j = 1;
  do {
    fatorial *= j;
    j++;
  } while (j <= valor[i]);
  soma += fatorial;
  i++;
} while (i < 15);

console.log(`O total do somatório da fatorial de cada valor lido é: ${soma}`);