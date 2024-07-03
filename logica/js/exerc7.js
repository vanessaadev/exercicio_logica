// Escreva um algoritmo que receba 3 notas de um estudante. Calcule a média das notas e mostre na tela.

const nota1 = Number(prompt("Informe sua primeira nota"))
const nota2 = Number(prompt("Informe sua segunda nota"))
const nota3 = Number(prompt("Informe sua terceira nota"))

const media = (nota1 + nota2 + nota3) /3;
const mediaNova = media.toFixed(2);

console.log(`Suas notas foram: ${nota1}, ${nota2}, ${nota3}. Dessa forma, sua média é: ${mediaNova}`)
