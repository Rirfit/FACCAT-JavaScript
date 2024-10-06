let contadora = 1
let soma = 0
do{
    if(contadora%2 == 0){
        soma += contadora
        
    }
    contadora++
}while(contadora <= 500 )
    console.log(`A soma dos valores pares na faixa de 1 a 500 é ${soma}`)  