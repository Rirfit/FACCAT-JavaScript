let valor = parseFloat(prompt("Digite o primeiro valor para iniciar"))
let maior = 0
let menor = 9999999
do{
    if(valor > maior){
        maior = valor
    }
    if (valor < menor){
        menor = valor
    }
    valor = parseFloat(prompt("Digite um valor positivo para continuar"))
}while(valor >= 0)