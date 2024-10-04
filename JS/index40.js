let produtoNome = prompt("Digite o nome do produto")
let precoUnitario = parseFloat(prompt("Digite o valor unitário do produto"))
let quantidade = parseInt(prompt("Digite a quantidade comprada do produto"))
let precoFinal = 0
let preco = precoUnitario * quantidade
if (quantidade <= 5) {
    precoFinal = preco - (preco * 0.02)
} else if (quantidade > 5 && quantidade <= 10) {
    precoFinal = preco - (preco * 0.03)
} else {
    precoFinal = preco - (preco * 0.05)
}
alert(`O preco a pagar por ${quantidade} de ${produtoNome} é de R$${precoFinal}`)