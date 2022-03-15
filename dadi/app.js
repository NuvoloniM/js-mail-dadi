/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


//genero variabile del lancio del giocatore 
let userDice = Number(Math.floor((Math.random() * 6) + 1));
let userResult = document.getElementById('player_result');

//stampo risultato su HTML
userResult.innerHTML = `il tuo lancio è risultato ${userDice}`;

//genero variabile del lancio del computer
let compDice = Number(Math.floor((Math.random() * 6) + 1));
let compResult = document.getElementById('computer_result');

//stampo risultato su HTML
compResult.innerHTML = `il lancio del computer è risultato ${compDice}`;

//chi vince?
let result = document.getElementById('result');
if( userDice > compDice) {
    result.innerHTML = "Hai vinto!!!";
} else {
    result.innerHTML = "Il banco vince. Hai perso!";
}