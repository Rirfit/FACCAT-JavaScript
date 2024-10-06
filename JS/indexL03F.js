let base = parseInt(prompt("Digite a base"))
let expoente = parseInt(prompt("Digite o expoente"))
let potencia = 1
let contador = 1

    while (contador <= expoente){
        potencia *= base
        contador++
    }
    console.log(`${base}^${expoente} = ${potencia}`)
    expoente++




