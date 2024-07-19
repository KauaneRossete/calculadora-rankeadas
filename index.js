let resultado = jogador(18, 5) // Varíavel reservada para armazenarmos os valores dos parâmetros de 'jogador'

console.log("A quantidade de vitórias e derrotas é de: " + resultado)

// Deixei como padrão o valor 1 para 'vitorias' e para 'derrotas' caso não haja nenhum valor atribuído à ambos parâmetros.
function jogador(vitorias = 1, derrotas = 1) {
  let calculo = vitorias - derrotas
  return calculo // nos retornará conforme resultado da subtração dentro da variável 'calculo'.
}

let saldoVitorias = 91
let nivel = "" // Deixei a variável sem atribuição de valor

while (true) {
  if (saldoVitorias < 10) { 
    //Se vitórias for menor do que 10 = Ferro
    nivel = "Ferro"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    //Se vitórias for entre 11 e 20 = Bronze
    nivel = "Bronze"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) { 
    //Se vitórias for entre 21 e 50 = Prata
    nivel = "Prata"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    //Se vitórias for entre 51 e 80 = Ouro
    nivel = "Ouro"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    //Se vitórias for entre 81 e 90 = Diamante
    nivel = "Diamante"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else if (saldoVitorias >= 91 && saldoVitorias === 100) {
    //Se vitórias for entre 91 e 100 = Lendário
    nivel = "Lendário"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break  
  } else if (saldoVitorias >= 101) {
    //Se vitórias for maior ou igual a 101 = Imortal
    nivel = "Imortal"
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
    break
  } else {
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias. Saldo insuficiente para o desbloqueio do próximo nível!`)
    break
  }
}
