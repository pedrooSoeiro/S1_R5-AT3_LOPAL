//Elabore um programa que peça o valor do pedido. Se o valor for maior que R$ 50,00, o sistema pergunta se o cliente tem o "Cartão Fidelidade":
//Se Sim: Desconto de 10% no total.
//Se Não: Ganha apenas um "Cookie de brinde".
//Exiba a mensagem final com o valor a pagar e se houve brinde.

let valorPedido = Number(prompt("Qual é o valor do seu pedido"))
if (valorPedido >= 50){
    let fidelidade = (prompt("Você tem o cartão fidelidade?"))
        if (fidelidade === "sim" || fidelidade === "Sim"){
        valorPedido = valorPedido * 0.900}
        alert("O seu pedido com o cartão fidelidade ficou "+ valorPedido.toFixed(2))
}
else {
    alert ("Pegue seu Cookie de brinde");}

