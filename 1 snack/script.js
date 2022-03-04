/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */


/* creo un array vuoto dove ci inserirò gli input (i numeri inseriti) dell'utente */
let vuoto = [];


/* creo una variabile somma con valore zero che verrà addizionata ai numeri dell'utente finchè il risultato non arriverà a 200*/
let sum = 0;

/* creo un ciclo che dice: fino a che la somma è minore di 200 chiedi all'utente di inserire un numero */
while(sum < 200){
    /* creo una variabile input che chiede all'utente un numero ( un numero intero) */
    let utenteNumber = parseInt(prompt("inserisci numero"));


    /* se l'utente scrive qualcosa che è NAN allora... */
    /* !!!!!! NON RIUSCITO.... ESCE LO STESSO DAL CICLO !!!!!!*/
    if(isNaN(utenteNumber)){
        let utenteNumber = parseInt(prompt("hai scritto una lettera.. scrivi invece un numero... sciocchino"));
    }
    /* creo l'addizione sommando alla variabile somma il numero utente */
    sum = sum + utenteNumber;

    /* aggiungo alla variabile vuota i numeri inseriti dall'utente */
    vuoto.push(utenteNumber);
    
    console.log("la somma è :"+ sum)
}

console.log(vuoto);



