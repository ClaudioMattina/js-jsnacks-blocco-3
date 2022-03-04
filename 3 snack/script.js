/**
 *
 *
   Crea due tag div con due id diversi:
   un div avrà il testo colorato di rosso mentre l'altro di verde.
   Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
   Se sono pari li stampo nell'div "rosso",
   se sono dispari li stampo nell'div "verde".
 *
 */



const wrapper = document.querySelector("main");
const divRed = document.createElement("div");
const divGreen = document.createElement("div");

divRed.id="red";
divGreen.id="green";

wrapper.append(divRed, divGreen);


let array = ["22", "54", "33", "19", "37", "298"]

for(i=0; i<array.length; i++){
    if( isEven ( array [ i ] ) ){
        console.log(array[i] + " è un numero pari")
        divRed.innerHTML += array[i];
    }
    else{
        console.log(array [i] + "è un numero dispari")
        divGreen.innerHTML += array[i];
    }
}

function isEven(number){
    if(number % 2 ==0){
        return true
    }
    else{
        return false
    }
}
















/* COME HO FATTO IO */
/* let numeriDaVerificare = ["1", "2", "3","4","5","6"]

function isEven(numero){
        if(number % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

for(i=0; i< numeriDaVerificare.length; i++){

    if(isEven(numeriDaVerificare[i])){

        document.getElementById("red").innerHTML[i];
        
    }
    else{
        document.getElementById("green").innerHTML[i];
    }
}
 */