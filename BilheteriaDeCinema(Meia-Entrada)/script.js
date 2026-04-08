//O ingresso custa R$ 40,00. Peça a idade do usuário e se ele é estudante (sim/não).
//Se a idade for menor que 12 OU maior que 60 OU for estudante, o valor é R$ 20,00.
//Caso contrário, o valor é R$ 40,00.
//Exiba o valor final do ingresso.

alert ("O ingresso custa 40 reais em condições padrões.")
let ingresso = 40
let idade = Number(prompt("Me diga sua idade"))
let estudante = prompt("Você é estudande?\n (sim/não)")
    if (idade < 12){
        ingresso = ingresso - 20
        alert("Você vai pagar R$" + ingresso.toFixed(2))
    }
    else if (idade > 60){
        ingresso = ingresso - 20
        alert("Você vai pagar R$" + ingresso.toFixed(2))
    }else if (estudante === "sim"){
        ingresso = ingresso - 20
        alert("Você vai pagar R$" + ingresso.toFixed(2))
    }
    else {
        alert("Você não tem descontos, seu ingresso é R$40.00")
    }
let efetuar = prompt("Você vai comprar algum ingresso?\n (sim/não)")
    if (efetuar === "sim"){
        alert ("Pegue seus ingressos e aproveite o filme!")}
    else if(efetuar === "não") {
        alert ("Mete o pé vagabundo!")
    }