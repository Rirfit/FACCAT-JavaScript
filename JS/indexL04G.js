let contador = 0
let contador2 = 0
let fatorial 
do{   
    if(contador % 2 == 1){
        fatorial = 1
        for(contador2 = 1; contador2<=contador; contador2++){
            fatorial *= contador2
        }
        console.log(`O fatorial de ${contador} é ${fatorial}`)
        
    }contador++
}while(contador < 10)