let contador = 1
let soma = 0
let valor = 0
while(contador != 11){
    valor = parseInt(prompt(`Digite o ${contador} º valor`))
    soma += valor
    contador++
}
let media =soma/10
alert(`A media dos valores é de: ${media}`)