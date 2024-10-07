let contador = 1
let fatorial = 0
for(contador; contador <10; contador++){
    if(contador % 2 ==1){
        fatorial = 1
        for(let contador2 = 1; contador2 < contador; contador2++){
            fatorial *= contador2
        }
        console.log(`O fatorial de ${contador} é ${fatorial}`)
    }
}