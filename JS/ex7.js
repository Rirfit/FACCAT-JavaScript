let anos = parseInt(prompt("Informe  a quantidade de anos que você tem: "));
let meses = parseInt(prompt("Informe quantos meses fazem desde deu ultimo aniversario"));
let dias = parseInt(prompt("Informe quantos dias fazem desde deu ultimo aniversario"));
let aniversarioDias = (anos * 365)+(meses * 30)+ dias;

alert(`Sua idade  em dias é ${aniversarioDias}`); 