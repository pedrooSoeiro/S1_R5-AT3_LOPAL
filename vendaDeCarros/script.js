let numero = Number(prompt("Digite o valor do carro desejado:"));

alert("Formas de pagamento:\n• PIX à vista (15% OFF)\n• Cartão de Crédito (até 24x - 5% juros)\n• Financiamento (até 48x - 20% juros)");

// Adicionamos .toLowerCase() para aceitar tanto "PIX" quanto "pix"
let formaDePagamento = prompt("Escolha a forma de pagamento (PIX / Cartão / Financiamento):").toLowerCase();

let valorFinal = 0;

if (formaDePagamento === "pix") {
    valorFinal = numero * 0.85; 
    alert("Valor final à vista no PIX: R$ " + valorFinal.toFixed(2));

} else if (formaDePagamento === "cartão" || formaDePagamento === "cartao" || formaDePagamento === "cartão de crédito") {
    valorFinal = numero * 1.05; 
    let parcelas = Number(prompt("Em quantas parcelas? (Máximo 24x)"));

    if (parcelas > 0 && parcelas <= 24) {
        let valorParcela = valorFinal / parcelas;
        // Removido o ponto extra e adicionado o toFixed
        alert("Valor final no Cartão: R$ " + valorFinal.toFixed(2) + "\nParcelado em " + parcelas + "x de R$ " + valorParcela.toFixed(2));
    } else {
        alert("Quantidade de parcelas inválida para Cartão (Máx 24x).");
    }

} else if (formaDePagamento === "financiamento") {
    valorFinal = numero * 1.20;
    let parcelas = Number(prompt("Em quantas parcelas? (Máximo 48x)"));

    if (parcelas > 0 && parcelas <= 48) {
        let valorParcela = valorFinal / parcelas;
        alert("Valor final no Financiamento: R$ " + valorFinal.toFixed(2) + "\nParcelado em " + parcelas + "x de R$ " + valorParcela.toFixed(2));
    } else {
        alert("Quantidade de parcelas inválida para Financiamento (Máx 48x).");
    }

} else {
    alert("Opção inválida! Por favor, reinicie e digite PIX, Cartão ou Financiamento.");
}