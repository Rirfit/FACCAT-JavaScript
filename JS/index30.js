let valor1 = parseFloat(prompt("Digite o valor do primeiro número"))
let valor2 = parseFloat(prompt("Digite o valor do segundo número"))
let valor3 = parseFloat(prompt("Digite o valor do terceiro número"))
let primeiro = 0
let segundo = 0
let terceiro = 0

if (valor1 < valor2 & valor2 < valor3) {
    primeiro = valor1
    segundo = valor2
    terceiro = valor3
} else if (valor1 < valor3 & valor3 < valor2) {
    primeiro = valor1
    segundo = valor3
    terceiro = valor2
} else if (valor2 < valor1 & valor1 < valor3) {
    primeiro = valor2
    segundo = valor1
    terceiro = valor3
} else if (valor2 < valor3 & valor3 < valor1) {
    primeiro = valor2
    segundo = valor3
    terceiro = valor1
} else if (valor3 < valor1 & valor1 < valor2) {
    primeiro = valor3
    segundo = valor1
    terceiro = valor2
}
else if (valor3 < valor1 & valor2 < valor1) {
    primeiro = valor3
    segundo = valor2
    terceiro = valor1
}
alert(`A ordem crescente é de:${primeiro},${segundo},${terceiro}`)