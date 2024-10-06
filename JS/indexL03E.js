let base = 3
let expoente = 2
let potencia
console.log(`${base}^${expoente - 2} = 1`)
console.log(`${base}^${expoente - 1} = ${base}`)

while(expoente <= 15){
    potencia = 1
    let contador = 1

    while (contador <= expoente){
        potencia *= base
        contador++
    }
    console.log(`${base}^${expoente} = ${potencia}`)
    expoente++
}


