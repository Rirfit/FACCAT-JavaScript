let quantidadeAtual = parseFloat(prompt("Digite a quantitade atual em estoque:"))
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade maxima suportada em estoque"))
let quantidadeMinima = parseFloat(prompt("Digite a quantidade minima do estoque"))
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2

if (quantidadeAtual < quantidadeMedia) {
    alert("Efetuar compra")
} else {
    alert("Não efetuar compra")
}

