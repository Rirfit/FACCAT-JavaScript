let valor = parseFloat(prompt("Qual o valor original da prestação"))
let tempoAtrasdo = parseFloat(prompt("Está atrasado a quanto tempo"))
let taxa = parseFloat(prompt("A taxa era de quantos porcento?"))

taxa = taxa/100
let prestacao = valor + ((valor * (taxa/100)) * tempoAtrasdo)
alert(`O valor atual da sua pestração é de: R$${prestacao}`)