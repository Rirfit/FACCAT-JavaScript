let morangoKg = parseInt(prompt(("Digite aqui a Quantidade em quilos compradas de morangos")))
let macaKg = parseInt(prompt(("Digite aqui a Quantidade em quilos compradas de maça")))
let precoMorango = 0
let precoMaca = 0

if (morangoKg <= 5){
precoMorango = morangoKg * 2.50
} else {
precoMorango = morangoKg * 2.20
}

if (macaKg <= 5 ){
precomaca = macaKg * 1.80
}else {
precoMaca = macaKg * 1.50
}

let preco = precoMaca + precoMorango
let kgTotal = morangoKg + macaKg

if (preco > 25 || kgTotal > 8) {
precoFinal =  preco - (preco * 0.10)
} else{
precoFinal = preco
}
alert(`O total a se pagar será de: R$${precoFinal}`)
