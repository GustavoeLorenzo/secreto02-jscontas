let primeiroNumero = parseInt(Math.random()*10);
let segundoNumero = parseInt(Math.random()*750);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);
//exibindo na pagina - para ISSO CRIAMOS UMA VARIAVEL QUE RECEBE O ELEMENTO HTML
document.getElementById('elPrimeiroNumero').textContent = `Primeiro numero sorteado = ${primeiroNumero}`;
document.getElementById('elSegundoNumero').textContent = `Segundo numero sorteado = ${segundoNumero}`;
document.getElementById('resultadoSoma').textContent = `${primeiroNumero}+${segundoNumero}=${resultado}`;


