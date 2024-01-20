//Desafio calculadora de Rankeadas


//Criação da função Calcular Ranking
function calculaRanking(vitorias, derrotas){
   return vitorias - derrotas;
}

let saldoVitorias = calculaRanking(22, 5);

//Obter a classificação do heroi
let nivelHeroi

if (saldoVitorias <= 10){
nivelHeroi = "Ferro"
} 

else if (saldoVitorias >=11 && saldoVitorias <=20){
    nivelHeroi = "Bronze"
} 

else if (saldoVitorias >=21 && saldoVitorias <=50){
    nivelHeroi = "Prata"
} 

else if (saldoVitorias >=51 && saldoVitorias <=80){
    nivelHeroi = "Ouro"
} 

else if (saldoVitorias >=81 && saldoVitorias <=90){
    nivelHeroi = "Diamante"
} 

else if (saldoVitorias >=91 && saldoVitorias <=100){
    nivelHeroi = "Lendário"
} 

else if (saldoVitorias >=101){
    nivelHeroi = "Imortal"
}

console.log("O Herói tem saldo de vitórias de " + saldoVitorias + " e está no nível " + nivelHeroi);