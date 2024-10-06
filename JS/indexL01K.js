let cotacao = parseFloat(prompt("Digite a cotação atual do dolar(quantos reais é um dolar)"))
let realBr = parseFloat(prompt(("Digite a quantidade de reais que possui no momento")))

let dolar = realBr * cotacao
 alert(`Na contação fornacida, você tem um total de: $${dolar}`)