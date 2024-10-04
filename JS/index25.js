
let conta = prompt("Digite o número da sua conta:")
let saldo = parseFloat(prompt(("Digite o seu saldo: ")))
let debito = parseFloat(prompt(("Digite seu débito: ")))
let credito = parseFloat(prompt(("Digite seu credito: ")))
let saldoAtual = saldo - (debito + credito)
if( saldoAtual > 0) {
alert(`Seu saldo é positivo, sendo no total de R$${saldoAtual}`)
} else {
    alert(`Seu saldo é negativo, sendo no total de R$${saldoAtual}`)}
