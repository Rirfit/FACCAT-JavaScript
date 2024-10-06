let salarioMensal = parseFloat(prompt("Digite o valor do seu sálario mensal"))

let reajuste = parseFloat(prompt("Digite o percentual de reajuste do seu salario"))


let novoSalario = salarioMensal *(reajuste/100)

alert(`Seu novo salario será de R$${novoSalario}`)