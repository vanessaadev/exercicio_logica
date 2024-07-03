// Considerando que, para um consórcio, sabe-se o número total de parcelas, a quantidade de parcelas pagas e o valor da parcela (fixa), escreva um algoritmo que mostre o saldo devedor do cliente.

const QTDParcelas = 48
const parcelasPagas = 12;
const valorParcela = 582;

const valorConsorcio = QTDParcelas * valorParcela;
const valorPago = valorParcela * parcelasPagas;
const valorRestante = valorConsorcio - valorPago;

console.log(`Seu consórcio foi acordado no valor de R$${valorConsorcio}, em ${QTDParcelas}x.`);
console.log(`Já foi pago ${parcelasPagas} parcelas com o valor fixo de R$${valorParcela} sendo um total de R$${valorPago}`);
console.log(`Nesse caso falta quitar R$${valorRestante}`)