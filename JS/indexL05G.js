let base = 3
let expoente = 2
let potencia = 0
for(expoente; expoente<=15; expoente++){
    potencia = 1
    for(let contador = 1; contador <= expoente; contador++){
    potencia *= base
    }
    console.log(`${base} elevado a ${expoente} é igual a ${potencia}`)
}
