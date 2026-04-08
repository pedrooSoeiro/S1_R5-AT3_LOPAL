//Crie um algoritmo que peça o valor da compra e a região de entrega (1-Sul, 2-Sudeste, 3-Outras).
//Sudeste: Frete fixo de R$ 10,00.
//Sul: Frete fixo de R$ 20,00.
//Outras: Frete fixo de R$ 30,00.
//Regra Especial: Se o valor da compra for acima de R$ 250,00, o frete é grátis (R$ 0,00). Exiba o total (Compra + Frete).

// 1. Entradas
let valorCompra = Number(prompt("Qual é o valor da sua compra?"));
let regiao = Number(prompt("Qual é a região?\n1-Sul\n2-Sudeste\n3-Outra"));

let frete = 0;

// 2. Lógica do Frete
if (valorCompra > 250) {
    frete = 0;
    alert("Parabéns! Você ganhou Frete Grátis.");
} else {
    if (regiao === 1) {
        frete = 20;
    } else if (regiao === 2) {
        frete = 10;
    } else if (regiao === 3) {
        frete = 30;
    } else {
        alert("Região inválida!");
    }
}

let valorTotal = valorCompra + frete;

alert("Resumo do Pedido:" + "\nCompra: R$ " + valorCompra.toFixed(2) + "\nFrete: R$ " + frete.toFixed(2) +"\nTotal: R$ " + valorTotal.toFixed(2));