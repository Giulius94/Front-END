/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let sum = l1 * l2;
    return sum;
}

let tot = area(10, 8);
console.log(tot)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x , y) {
    if(x === y){
        return (x+y) * 3;
    } else {
        return (x+y);
    }
}

let crazy = crazySum(5, 15);
console.log(crazy)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(z) {
    if(z > 19) {
        return  Math.abs(z - 19) * 3;
    } else {
        return Math.abs(z - 19);
    }
}

let tot1 = crazyDiff(10);
console.log(tot1)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return (true);
    } else {
        return(false);
    }
}

let ntot = boundary(400);
console.log(ntot)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
        return stringa
    } else {
        return "EPICODE " + stringa
    }
}

let epicode = epify ("CIAO");
console.log(epicode)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(y) {
    if(y >= 0) {
        return("inserisci un numero positivo o superiore a 0")
    } else if (y%3 === 0 ) {
        return("divisibile per 3")
    } else if(y%7 === 0) {
        return("divisibile per 7")
    } else {
        return("non divisibile")
    }
}

let check = check3and7(30)
console.log(check)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    return (str.split("").reverse().join(""))
}

let rev = reverseString("Mongolfiera")
console.log(rev)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", 
 che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (upper) {
    let str1 = upper.split(" ");
    for(let i=0; i<str1.length; i++) {
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
    }
    return str1.join(" ");
}

console.log(upperFirst("i love food and travel"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", 
 che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa1){
    return stringa1.slice(1, -1);
}

console.log(cutString("Javascript"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta 
 come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(num1) {
    const arr = []
    for(i = 0; i < num1; i++) { 
        arr.push(Math.floor(Math.random() * 11))
    }
    return arr
}

console.log(giveMeRandom(10))
