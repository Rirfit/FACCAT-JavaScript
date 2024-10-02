let custoFabrica =  parseInt(prompt(" Qual o custo de fabrica do veiculo?"))
let imposto = 0.45
let percentualDistribuidor = 0.28

let valorFinal = custoFabrica + (custoFabrica*imposto)+(custoFabrica*percentualDistribuidor)

alert(`O valor final será de ${valorFinal} reais`)