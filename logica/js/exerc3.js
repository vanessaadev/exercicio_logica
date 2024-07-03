// Escreva um algoritmo para calcular o desconto de 10% sobre o preço de compra de um produto (um bem, um objeto). Apresente o novo preço na tela.

const preco = Number(prompt("Informe o valor do produto:"))

// aqui lê-se que desconto será preço dividido por 100(porcentagem) e multiplicado por 10 que será o total a ser descontado.
const calcDesc = preco - (preco/100 * 10); 
const descTotal = calcDesc.toFixed(2);

console.log(`O valor do produto é de ${preco}, com o desconto de 10% o valor passa a ser ${descTotal}.`);