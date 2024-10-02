let numeroMaca = parseFloat(prompt("Digite o número de maças compradas"))
let preco = 0
if(numeroMaca < 12){
    let preco = numeroMaca * 1.3
}else{
    let preco = numeroMaca * 1
}

alert (`O preço total é de ${preco}`)