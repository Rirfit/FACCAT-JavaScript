let tempoLevado = parseFloat(prompt("Digite o tempo levado para concluir a viagem em hora"))
let velocidadeMedia = parseFloat(prompt("Digite a velocidade media durante a viagem"))
let distancia = velocidadeMedia * tempoLevado
let litroUsado = distancia/12

alert(`Na viagem se teve uma velocidade media de ${velocidadeMedia} Km/h`)
alert(`Com o tempo total gasto de ${tempoLevado} horas`)
alert(`E um total de ${litroUsado}L usados no percurso`)