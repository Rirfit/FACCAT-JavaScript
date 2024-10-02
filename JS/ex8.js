let votoValidos = parseInt(prompt("Digite a quantidade de votos validos"))
let votoNulos = parseInt(prompt("Digite a quantidade de votos nulos"))
let votoBrancos = parseInt(prompt("Digite a quantidade de votos brancos"))
let votosTotais =  votoValidos + votoNulos + votoBrancos;
let porcentagemValidos = votosTotais - (votoValidos/100);
let porcentagemNulos = votosTotais-(votoNulos/100);
let porcentagemBrancos = votosTotais-(votoBrancos/100);

alert(`A quatidade total de votos  foi ${votosTotais}`);
alert(`A porcentagem de votos validos foi de ${votoValidos}%`)
alert(`A porcentagem de votos nulos foi de ${votoNulos}%`)
alert(`A porcentagem de votos em branco foi de ${votoBrancos}%`)