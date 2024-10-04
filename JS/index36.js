let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher"))
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher"))
let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem"))
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem"))
let soma = 0
let idadeMaiorHomem = 0
let idadeMaiorMulher = 0
if(idadeHomem1 > idadeHomem2) {
    idadeMaiorHomem = idadeHomem1
}else {
    idadeMaiorHomem = idadeHomem2
}

if(idadeMulher1 > idadeMulher2){
    idadeMaiorMulher = idadeMulher1
}else{
    idadeMaiorMulher = idadeMulher2
}

soma = idadeMaiorHomem + idadeMaiorMulher

alert(`A soma das maiores idade é de: ${soma}`)