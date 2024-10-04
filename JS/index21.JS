let horaInicio = parseInt(prompt(("Digite a hora de inicio com valores de 0 a 23")))
let horaFim = parseFloat(prompt(("Digite a hora de finalização com valores de 0 a 23")))
let duracao = 0
if (horaFim > horaInicio){
duracao = Math.abs(horaFim - horaInicio)
}else if(horaFim = horaInicio){
    duracao = 24
}
else{
duracao = (24 - horaInicio)+horaFim
}
alert (`A duração do jogo foi de ${duracao} horas`)