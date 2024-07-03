// 2. Escreva um algoritmo que receba 4 valores. Calcule o produto* dos dois primeiros e some com o produto dos dois últimos. Mostre na tela.

const valor1 = Number(prompt("Informe o primeiro valor"));
const valor2 = Number(prompt("Informe o segundo valor"));
const valor3 = Number(prompt("Informe o terceiro valor"));
const valor4 = Number(prompt("Informe o quarto valor"));

const somaValores = (valor1 * valor2) + valor3 + valor4;

console.log(`O cálculo total entre os valores ${valor1}, ${valor2}, ${valor3} e ${valor4} é ${somaValores}.`)
