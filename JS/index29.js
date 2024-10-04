let valor1 = parseFloat(prompt("Digite o valor do primeiro número"))
let valor2 = parseFloat(prompt("Digite o valor do segundo número"))
let valor3 = parseFloat(prompt("Digite o valor do terceiro número"))
let soma = 0
if (valor1 > valor2 && valor2 > valor3) {
    soma = valor1 + valor2
} else if (valor2 > valor1 && valor1 > valor3) {
    soma = valor2 + valor1
} else if(valor3 > valor1 && valor1 > valor2){
    soma = valor3 + valor1
} 
else if(valor3 > valor1 && valor2 > valor1) {
    soma = valor3 + valor2
}
alert(`A soma dos maiores número é de ${soma}`)