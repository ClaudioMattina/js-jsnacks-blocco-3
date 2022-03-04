/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */



 /* faccio inserire un numero chiamato N all'utente */
let N = parseInt(prompt("inserisci numero"));



/* genero N array */
for( i = 0; i < N; i++ ){

    /* creo la variabile vuota dove verranno inserite i numeri randomici */
    let arrayGeneration= [];

    /* creo un'altro ciclo per far stampare 10 volte i numeri randomici */
    for(k = 0; k < 10; k++){

        /* creo una variabile che stampa numeri randomici ad ogni ciclo */
        let randomNumber = Math.floor(Math.random()*4532) + 4;

        /* inserisco nell'array vuoto i numeri randomici creati */
        arrayGeneration.push(randomNumber);
        console.log("sono stati aggiunti dieci array casuali")
    }
    
    console.log(arrayGeneration)
}


    
