let valor = parseFloat(prompt("Digite o primeiro valor para iniciar"))
let maior = 0
let menor = 9999999
while(valor >= 0){
    if(valor > maior){
        maior =  valor
    }
    if(valor < menor){
        menor = valor
    }
    valor = parseFloat(prompt("Digite um valor positivo para continuar"))
}
console.log(`O menor valor informado foi: ${menor}`)
console.log(`O maior valor informado foi: ${maior}`)