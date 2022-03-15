/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare INCLUDES)*/

// Crea l'array con le email del mio "database"

let dataEmail = ["claranocilla12@gmail.com","simonebest56@gmail.com ", "noemipintaldi@gmail.com ", "nuvoloni.m@gmail.com" ];
let userEmail = prompt("Inserisci qui la tua email");

let prompResult = document.getElementById('prompt_result')

let x= 0;

for (let i = 0; i < dataEmail.length; i++) {
    if (userEmail == dataEmail[i]) {
        x+=1;
    } else {
        x
    }
}

if (x==0) {
    console.log("La tua Email non è nel database")
    prompResult.innerHTML = 'La tua Email non è nel database'
} else {
    console.log("la tua email è presente nel database")
    prompResult.innerHTML = 'la tua email è presente nel database'
}