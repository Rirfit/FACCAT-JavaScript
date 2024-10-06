let celsius = 0
let fahreinheit = 0
let contador = 0

while (contador<= 100){
    celsius = contador
    fahreinheit = (9*celsius + 160)/5
    console.log(`A temperatura de ${celsius} graus celsius é igual a ${fahreinheit}`)
    
    contador += 10
}