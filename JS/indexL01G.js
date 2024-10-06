let A = parseFloat(prompt("Digite o primeiro valor(A)"))
let B = parseFloat(prompt("Digite o segundo valor(B)"))
let C = parseFloat(prompt("Digite o terceiro valor(C)"))
let D = parseFloat(prompt("Digite o quarto valor(D)"))

let soma = new Array(6);
let mult = new Array(6);

soma[0] = A+B 
soma[1] = A+C
soma[2] = A+D
soma[3] = B+C
soma[4] = B+D
soma[5] = C+D

mult[0] = A*B 
mult[1] = A*C
mult[2] = A*D
mult[3] = B*C
mult[4] = B*D
mult[5] = C*D

for  (let i = 0; i < 6; i++) {
    console.log(`A soma do número ${i + 1} é igual a: ${soma[i]} `)
}

for  (let j = 0; j < 6; j++) {
    console.log(`A multiplicação do número ${j + 1} é igual a: ${mult[j]} `)
}
