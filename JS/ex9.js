let salarioAtual = parseInt(prompt("Digite aqui seu salario atual"))
let porcentagemDeReajuste = parseInt(prompt("Digite aqui a porcentagem de reajuste"))
let salarioReajustado = salarioAtual + (salarioAtual * (porcentagemDeReajuste/100))
alert(`Seu salario reajustado ficará ${salarioReajustado}`)