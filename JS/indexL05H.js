let base = parseInt(prompt("Digite a base"))
let expoente = parseInt(prompt("Digite o expoente"))
let contador = 1
let potencia = 1
for(contador; contador<= expoente; contador++){
    potencia *= base
}
console.log(`${base}^${expoente} = ${potencia}`)