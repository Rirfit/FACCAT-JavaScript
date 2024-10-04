let time1 = prompt("Digite o nome do primeiro time")
let time2 = prompt("Digite o nome do segundo time")
let golTime1 = parseInt(prompt(`Digite a quantidade de gols do time ${time1}`))
let golTime2 = parseInt(prompt(`Digite a quantidade de gols do time ${time2}`))

if( golTime1 > golTime2){
    alert(`O time ${time1} ganhou com um total de ${golTime1} gols `)
}else if (golTime2 > golTime1){
    alert(`O time ${time2} ganhou com um total de ${golTime2} gols `)
}else {
    alert("Deu empate!")
}
