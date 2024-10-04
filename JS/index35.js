let tipoescolhido = prompt(("Qual o combustivél escolhido? Digite A - Álcool e G - Gasólina"))
let quantidadeLitros = parseFloat(prompt(("Agora digite a quantidade de litros comprados")))
let valorPago = 0
if (tipoescolhido = "A") {
   if (quantidadeLitros <= 20) {
   valorPago = quantidadeLitros * (2.90 - (2.90 * 0.03))
   }else{
   valorPago = quantidadeLitros * (2.90 - ( 2.90 * 0.05))
   }} else if (tipoescolhido = "G"){
   if (quantidadeLitros <= 20) {
   valorPago = quantidadeLitros * (3.30 - (3.30 * 0.04))
   senao
   valorPago = quantidadeLitros * (3.30 - ( 3.30 * 0.06))
   }}else {
    alert("Tipo não identificado")
   }
alert(`O total a ser pago em: ${quantidadeLitros}L é de R$${valorPago}`)
escreval("O total a ser pago em: ", quantidadeLitros, "L é de: R$", valorPago)