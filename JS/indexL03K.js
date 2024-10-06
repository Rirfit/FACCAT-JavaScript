let continuar = "sim";
let comodo = ""
let largura = 0
let comprimento = 0
let area = 0
let somaArea = 0
while (continuar !== "nao") {
    comodo = prompt("Digite o nome do comodo")
    largura = parseFloat(prompt(`Digite a largura do ${comodo}`))
    comprimento = parseFloat(prompt(`Digite o comprimento do ${comodo}`))
    area = comprimento * largura
    console.log(`A area do comodo lido é de: ${area}`)
    somaArea += area
    continuar = prompt("Deseja continuar? (sim/nao)").toLowerCase()
}
console.log(`A soma das áreas dos comodos é ${somaArea}`)