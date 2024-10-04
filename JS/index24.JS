let salarioFixo = parseFloat(prompt(("Digite o valor do seu salario: ")))
let valorVendas = parseFloat(prompt(("Digite o valor total em vendas: ")))
let vendas = 0
let vendasExtra = 0
let salarioFinal = 0
if (valorVendas <= 15000) {
salarioFinal = salarioFixo + (valorVendas* 0.03)
}else{
vendasExtra = (valorVendas - 15000) * 0.05
vendas = 15000 * 0.03
salarioFinal = salarioFixo + vendasExtra + vendas
}
alert(`Seu salario final será de: R$${salarioFinal}`)