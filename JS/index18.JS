let anoNascimento = parseInt(prompt("Digite seu ano de nascimento"))

let idade = 2024 - anoNascimento

if(idade > 18 &&  idade < 65){
    alert(`Voto obrigatorio`)
}else if(idade < 18 && idade >= 16 || idade > 65){
    alert(`Voto opcional`)
}else (`Não pode votar`)