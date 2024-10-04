let userCode = parseInt(prompt("Digite o código de usuário"))
let senha = 0 

if(userCode != 1234){
    alert("Código de usuário inválido")
}else {
    senha = parseInt(prompt("Digite a senha"))
    if(senha != 9999){
        alert("Senha inválida")
    }else {
        alert("Acesso permitido")
    }
}