let valor = parseInt(prompt("Digite um valor positivo para iniciar"))
let soma = 0
let media = 0
let total = 0


do{
    soma += valor
    total++
    valor = parseInt(prompt("Digite outro valor positivo para continuar ou negativo para finalizar"))
}while(valor > 0)
    media = soma / total
    alert(`A média dos valores é ${media}`) 
    alert(`O total dos valores é ${soma}`)
    alert(`O total de valores lidos é ${total}`)