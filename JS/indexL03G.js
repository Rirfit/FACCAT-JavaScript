let proximo = 0
let numero1 = 1
let numero2 = 1
let contador = 3
console.log(numero1)
console.log(numero2)
while (contador <= 15) {
    proximo = numero1 + numero2
    console.log(proximo)
    numero1 = numero2
    numero2 = proximo
    contador++
}