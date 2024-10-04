let valorHora =parseFloat(prompt(("Digite o valor que lhe é pago por hora trabalhada: ")))
let horasTrabalhadas =parseFloat(prompt(("Digite a quantidade de horas trabalhadas desse mês: ")))
let valorTotal = 0
if (horasTrabalhadas > 160) {
horaExtra = horasTrabalhadas - 160
valorTotal = (160 * valorHora) + horaExtra * (valorHora + (valorHora * 0.5))
}else{
valorTotal = horasTrabalhadas * valorHora
}
alert(valorTotal)