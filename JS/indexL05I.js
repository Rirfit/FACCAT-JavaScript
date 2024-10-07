let proximo = 0
let numero1 = 1
let numero2 = 1
console.log(1)
console.log(1)

for(let contador = 0; contador <= 15; contador++){
    proximo = numero1 + numero2
    console.log(proximo)
    numero1 = numero2
    numero2 = proximo
    
}