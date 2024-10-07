let continuar = "sim";
let comodo = "";
let largura = 0;
let comprimento = 0;
let area = 0;
let somaArea = 0;

do {
    comodo = prompt("Digite o nome do cômodo");
    largura = parseFloat(prompt(`Digite a largura do ${comodo}`));
    comprimento = parseFloat(prompt(`Digite o comprimento do ${comodo}`));
    area = comprimento * largura;
    console.log(`A área do cômodo lido é de: ${area}`);
    somaArea += area;
    continuar = prompt("Deseja continuar? (sim/nao)").toLowerCase();
} while (continuar !== "nao");

console.log(`A soma das áreas dos cômodos é ${somaArea}`);
