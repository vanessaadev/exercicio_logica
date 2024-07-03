// Escreva um algoritmo que receba 2 números inteiros. Inverta os números informados e mostre na tela. Ex: valorA passa a ter o conteúdo de valorB e valorB passa a ter o conteúdo de valorA.

const valorA = Number(prompt("Informe o valor que será A:"));
const valorB = Number(prompt("Informe o valor que será B:"));

const novoValorA = valorB;
const novoValorB = valorA;

console.log(`O valor de A era ${valorA}, mas agora passou a ser ${novoValorA}`);
console.log(`O valor de B era ${valorB}, mas agora passou a ser ${novoValorB}`)