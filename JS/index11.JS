let salarioFixo = parseFloat(prompt("Digite seu salario fixo mensal"))
let comissao = parseFloat(prompt("Digite a porcentagem da sua comissão fixa mensal"))
let carrosVendidos = parseInt(prompt("Digite a quantidade de carros vendidso"))
let totalVendas = parseFloat(prompt("Digite o total arrecadado com suas vendas"))

let comissaoFInal = (comissao/100)*carrosVendidos
let salarioFInal = salarioFixo + comissaoFInal + (totalVendas*0.05)

alert(`O seu salario final será de R$${salarioFInal}`)