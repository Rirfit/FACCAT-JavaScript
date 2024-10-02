let nota1 = parseFloat(prompt("Digite o valor da primeira nota"))
let nota2 = parseFloat(prompt("Digite o valor da segunda nota"))
let media = (nota1+nota2)/2
if (media < 6){
    alert(`Aluno reprovado`)
}else{
    alert(`Aluno aprovado`)
}