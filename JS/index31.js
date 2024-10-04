let valor1 = parseFloat(prompt("Digite o valor do primeiro lado do triangulo"))
let valor2 = parseFloat(prompt("Digite o valor do segundo lado do triangulo"))
let valor3 = parseFloat(prompt("Digite o valor do terceiro lado do triangulo"))

if(valor1 < (valor2+valor3) && valor2 < (valor1+valor3) && valor3 < (valor1+ valor2)){
    alert("Forma um triangulo")
}else {
    alert("Não forma um trinagulo")
}