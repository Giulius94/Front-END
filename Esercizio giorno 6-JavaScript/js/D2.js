/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*let num1 = prompt ('inserisci il primo numero');
let num2 = prompt ('inserisci il secondo numero');

if (num1 > num2) {
  console.log('il numero ' + num1 + ' è maggiore del numero ' + num2);
} 
else if (num1 < num2) {
  console.log('il numero ' + num1 + ' è minore del numero ' + num2);
} 
else{
  console.log('il numero ' + num1 + ' è uguale al numero ' + num2);
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let number = (prompt) ('inserire in numero');
let number2 = 5;

if (number != number2) {
  console.log ('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*let div = prompt ('inserisci un numero')

if(div % 5 == 0 ) {
  console.log('divisibile per 5')
}
else if (div % 5 != 0) {
  console.log('non divisibile per 5')
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let number1 = 10;
let number2 = 6;

if(number1 === 8 || number2 === 8 || (number1 + number2) === 8 || (number1 - number2) === 8 || (number2 - number1) === 8) {
  console.log('verificato')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart = prompt ('inserisci totale carrello')

if(totalShoppingCart > 50) {
  console.log('totale da pagare' + totalShoppingCart)
}
else if(totalShoppingCart <= 50) {
  console.log('totale da pagare' + (totalShoppingCart + 10))
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let ShoppingCart = 41;
let ship = 10;
let totalcart = ShoppingCart * 0.8;

if(totalcart < 50) {
  totalcart += ship
}

console.log('totale' + totalcart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*let x = 10;
let y = 15;
let z = 25;
let numArr = [x];

if(x > y) {
  // x > y
  if(z > x) {
    console.log(z, x, y)
  } else {
    if(z > y) {
      console.log(x, z, y)
    } else {
      console.log(x, y, z)
    }
  }
} else {
  // y > x
  if(z > y) {
    console.log(z, y, x)
  } else {
    if(z > x) {
      console.log(y, z, x)
    } else {
      console.log(y, x, z)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*let val = "ciao"; 
console.log(typeof val)
if(typeof val === 'number') {
  console.log(val + ' è un numero!')
} else {
  console.log(val + ' non è un numero!')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let valNum = 24;
if(valNum % 2 === 0) {
  console.log(valNum + ' è un numero pari!')
} else {
  console.log(valNum + ' è un numero dispari!')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let nval = 3
  if (nval < 5) {
      console.log("Meno di 5");
    } else if (nval < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
/*me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 /*let array = [];
 array[0] = 1;
 array[1] = 2;
 array[2] = 3;
 array[3] = 4;
 array[4] = 5;
 array[5] = 6;
 array[6] = 7;
 array[7] = 8;
 array[8] = 9;
 array[9] = 10;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*array[array.length - 1] = 100;
array[9] = 100;
array.splice(9, 1, 100);
array.splice(array.length - 1, 1, 100);
array.pop(); array.push(100);
console.log(array)*/