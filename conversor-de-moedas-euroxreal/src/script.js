const nome = prompt("Qual é o seu nome?");
const cont = Number(prompt("Quantos euros para conversão em real?"));
const valorDoEuroEmReal = 5.28;
const valorEmReal = cont * valorDoEuroEmReal;

alert("Olá " + nome + "! Seu valor em reais é: " + valorEmReal.toFixed(2));
