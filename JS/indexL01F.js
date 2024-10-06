let valor1 = parseFloat(prompt("Digite o primeiro valor"))
let valor2 = parseFloat(prompt("Digite o segundo valor"))

let armazenadora = valor1
valor1 = valor2
valor2 = armazenadora

alert(`O  primeiro valor agora é:${valor1}`)
alert(`O  segundo valor agora é:${valor2}`)  