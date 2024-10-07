let controlador = 10
let fahreinheit = 0
let celsius = 0

for(controlador; controlador <= 100;){
    celsius = controlador
    fahreinheit = (9*celsius + 160)/5
    if (controlador % 10 ==0){
        console.log(`Celsius: ${celsius} = Farenheit: ${fahreinheit}`)
    }
    controlador = controlador + 10
}
