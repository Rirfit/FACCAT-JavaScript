let valor1 = parseFloat(prompt("Digite o valor do primeiro número"))
let valor2 = parseFloat(prompt("Digite o valor do segundo número"))
let valor3 = parseFloat(prompt("Digite o valor do terceiro número"))
let maior = 0
if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2
} else {
    maior = valor3
}
alert(`O maior valor é: ${maior}`)
