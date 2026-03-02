let primeiroNumero = parseInt(Math.random()*10);
let segundoNumero = parseInt(Math.random()*750);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);
//exibindo na pagina - para ISSO CRIAMOS UMA VARIAVEL QUE RECEBE O ELEMENTO HTML
document.getElementById('elPrimeiroNumero').textContent = `Primeiro numero sorteado = ${primeiroNumero}`;
document.getElementById('elSegundoNumero').textContent = `Segundo numero sorteado = ${segundoNumero}`;
document.getElementById('resultadoSoma').textContent = `${primeiroNumero}+${segundoNumero}=${resultado}`;


resultado = primeiroNumero - segundoNumero
document.getElementById('resultadosubtracao').textContent = `${primeiroNumero} - ${segundoNumero}=${resultado}`;

resultado = primeiroNumero * segundoNumero
document.getElementById('resultadomultiplicacao').textContent = `${primeiroNumero} * ${segundoNumero}=${resultado}`;

resultado = primeiroNumero / segundoNumero
document.getElementById('resultadodivisao').textContent = `${primeiroNumero} / ${segundoNumero}=${resultado.toFixed(1)}`;

resultado = primeiroNumero % segundoNumero
document.getElementById('resultadomodulo').textContent = `${primeiroNumero} % ${segundoNumero}=${resultado.toFixed(10)}`;

resultado = primeiroNumero === segundoNumero
document.getElementById('igualdade').textContent = `${primeiroNumero} === ${segundoNumero}=${resultado}`;

resultado = primeiroNumero !== segundoNumero
document.getElementById('desigualdade').textContent = `${primeiroNumero} !== ${segundoNumero}=${resultado}`;

resultado = primeiroNumero >= segundoNumero
document.getElementById('menorigual').textContent = `${primeiroNumero} >= ${segundoNumero}=${resultado}`;

resultado = primeiroNumero <= segundoNumero
document.getElementById('maiorigual').textContent = `${primeiroNumero} <= ${segundoNumero}=${resultado}`;

resultado = (primeiroNumero >= segundoNumero) && (segundoNumero > 3);
resultado = primeiroNumero <= segundoNumero
document.getElementById('operadorE').textContent = `${primeiroNumero} > ${segundoNumero} && ${segundoNumero } >= 3 = ${resultado}`;
resultado = (primeiroNumero >= segundoNumero) && (segundoNumero > 3);

resultado = (primeiroNumero >= segundoNumero) || (segundoNumero > 3);
resultado = primeiroNumero <= segundoNumero
document.getElementById('operadorOU').textContent = `${primeiroNumero} > ${segundoNumero} || ${segundoNumero } >= 3 = ${resultado}`;
resultado = (primeiroNumero >= segundoNumero) || (segundoNumero > 3);

resultado = (primeiroNumero >= segundoNumero) && (segundoNumero > 3);
document.getElementById('operadornao').textContent = `${primeiroNumero} >= ${segundoNumero} && ${segundoNumero } >= 3 = ${resultado}`;


resultado = primeiroNumero ** segundoNumero;
document.getElementById('potencia').textContent = `${primeiroNumero} ** ${segundoNumero} = ${resultado}`;
