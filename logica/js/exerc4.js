// Escreva um algoritmo que receba um percentual de desconto e calcule esse desconto sobre o preço do produto, apresentando o valor do desconto e o novo preço do produto.

const preco = Number(prompt("Informe o valor do produto:"));
const desconto = Number(prompt("Informe o tanto a ser descontado(%)"));

const desc = preco/100 * desconto;
const descTotal = preco - desc;

console.log(`O produto custava R$${preco}`)
console.log(`Foi aplicado o desconto de ${desconto}%`);
console.log(`O valor a ser descontado será de ${desc}`);
console.log(`O valor final do produto será de ${descTotal}`);