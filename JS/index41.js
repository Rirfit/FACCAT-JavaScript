let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))
let mediaExercicios = parseFloat(prompt("Digite a media da nota dos exercicios"))
let mediaAproveitamento = (nota1 + (nota1 * 2) + (nota3* 3)* mediaExercicios)/7

if(mediaAproveitamento >= 9){
    alert("Conceito : A")
}else if (mediaAproveitamento >= 7.5){
    alert("Conceito : B")
}else if(mediaAproveitamento >= 6 && mediaAproveitamento <7.5){
    alert("Conceito : C")
}else{ 
    alert("Conceito : D")
}