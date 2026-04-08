//Se a parcela for maior que 30% do salário, exiba: "Empréstimo Negado: Parcela muito alta".
//Caso contrário, exiba: "Empréstimo Pré-aprovado".

let salário = Number(prompt("Qual é o seu salário?"))
let parcela = Number(prompt("Qual é o valor da parcela que você quer pagar?"))
let limiteParcela = salário * 0.30
    if (parcela > limiteParcela){
        alert ("Empréstimo Negado: Parcela muito alta")
    }
else {
    alert("Empréstimo Pré-aprovado")
};