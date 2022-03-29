//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// creazione array per numbers
let humanPlayer = [1,2,3,4,5,6]
let pcPlayer = [1,2,3,4,5,6]
console.log(humanPlayer,pcPlayer)

//creazione dei numeri random ( aggiunta di +1 alla fine per togliere il risultato 0 in quanto nei dati non esiste)
let player1 = Math.floor(Math.random()*humanPlayer.length) + 1
console.log(player1)
let player2 = Math.floor(Math.random()*pcPlayer.length) + 1
console.log(player2)


// creazione delle varie eventualita ( vincinta player 1)(vincinta player 2)(pareggio)
if(player1 > player2){
    console.log('PLAYER 1 WIN')
    document.getElementById('results').innerHTML = ('PLAYER 1 WIN')
}
if ( player1 < player2){
    console.log('PLAYER 2 WIN')
    document.getElementById('results').innerHTML = ('PLAYER 2 WIN')
}

if ( player1 == player2){
    console.log('DRAW')
    document.getElementById('results').innerHTML = ('DRAW')
}