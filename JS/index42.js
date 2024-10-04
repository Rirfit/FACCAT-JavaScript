let numeroEmpregado =parseInt(prompt(("Digite seu numero de empregado")))
let anoNascimento = parseInt(prompt(("Digite o seu ano de nascimento")))
let anoIngresso = parseInt(prompt(("Digite o ano em que ingressou na empresa")))
let tempoTrabalhado = 2024 - anoIngresso
let idade = 2024 - anoNascimento
if (idade >= 65) {
alert(`Requerer Aposentadoria, com:${idade} anos e ${tempoTrabalhado} anos trabalhados na empresa`)
}else if (tempoTrabalhado >= 30) {
alert(`Requerer Aposentadoria com: ${idade} anos e ${tempoTrabalhado} anos trabalhados na empresa`)
}if(idade >= 60 && tempoTrabalhado >=25) {
alert(`Requerer Aposentadoria, com:${idade}anos e ${tempoTrabalhado} anos trabalhados na empresa`)
}
alert("Não requerer")
