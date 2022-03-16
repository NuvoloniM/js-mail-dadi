/*Esercizio Bonus:
la coda dell' array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
Attenzione #1: quanti elementi minimo dovrà contenere l'array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
Extra Bonus
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.*/

//creo un array custom
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,27,32,45];
let stamp1 = document.getElementById('stamp1');
//creo ciclo for al contrario da max a max -5
for (let i = array.length - 1; i >= (array.length - 5); i--) {
    stamp1.innerHTML += ` ${array[i]} `;
}


//creo array vuoto
let array2 = [];
//creo domanda per sapere quanti elementi deve avere l'array
let array2Tot = Number(prompt('Quanti elementi deve avere la tua lista? (inserisci il numero)'));

//targettizzo il div in html
let stamp2 = document.getElementById('stamp2');
let stamp3 = document.getElementById('stamp3');
// chiedo quanti elementi devo estrarre dall'array a partire dal fondo 
let array2Remove = Number(prompt('Quanti elementi della tua lista devo selezionare, a partire dal fondo? Inserisci numero'));


//creo ciclo, per ogni ciclo aggiungo un elemento fino alla lunghezza massima data dal prompt (aggiunta condizione se informazioni non valide)
if (isNaN(array2Tot) == true || array2Tot == '') {
    alert('Attenzione, informazioni non valide')
}else {
    for (let i = 1; i <= array2Tot; i++) {
    stamp2.innerHTML += ` ${i} `;
    }
}

//creo ciclo, per ogni ciclo aggiungo un elemento fino alla lunghezza massima dta dal promt, poi chiedo quanti elementi selezionare dal fondo (aggiungo alert se dati sbagliati)
if (isNaN(array2Remove) == true || array2Remove == '' || isNaN(array2Tot) == true || array2Tot == '') {
    alert ('attenzione, informazioni non valide');
} else {
    for (let i = array2Tot; i > (array2Tot - array2Remove); i--) {
    stamp3.innerHTML += ` ${i} `;
    }
}
