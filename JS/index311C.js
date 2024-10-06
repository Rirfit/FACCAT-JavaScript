let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos"))
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos"))
let votosA = parseInt(prompt("Digite a quantidade de votos para A"))
let votosB = parseInt(prompt("Digite a quantidade de votos para B"))
let votosC = parseInt(prompt("Digite a quantidade de votos para C"))

let votosTotais = votosA+votosB+votosC+votosBrancos+votosNulos

let porctNulos = (votosTotais * votosNulos)/100
let porctBrancos = votosTotais * (votosBrancos/100)
let porctA = votosTotais * (votosA/100)
let porctB = votosTotais * (votosB/100)
let porctC = votosTotais * (votosC/100)

console.log(`A porcentagem de votos brancos foram ${porctBrancos}`)
console.log(`A porcentagem de votos nulos foram:${porctNulos}`)
console.log(`A porcentagem de votos para o candidato A foram:${porctA}`)
console.log(`A porcentagem de votos para o candidato B foram:${porctB}`)
console.log(`A porcentagem de votos para o candidato C foram:${porctC}`)