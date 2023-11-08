/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. 
  Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function str1(x, y) {
  let slice1 = x.slice(0,2)
  let slice2 = y.slice(-3) 
  let conc = slice1 + " " + slice2
  let upper = conc.toUpperCase();
  console.log(upper)
}

str1("Mario","Rossi")

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; 
  ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function random(val) {
  let arr = [];
  for(let i=0; i<val; i++){
    let num = Math.floor(Math.random() * 101);
    arr.push(num);
  }
  return arr
}
let rand = random(10)
console.log(rand)

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
let arr1 = [10, 12 , 14, 15, 19, 20, 22, 23];

console.log(arr1)

let filter = arr1.filter(function(x) {
  return x % 2 === 0;
  })

console.log(filter)

//ARROW
//soluzione 1
const arrpari = (myarr) => {
  return myarr.filter(ele => ele % 2 === 0)
}
//soluzione 2
/*
const arrpari = (myarr) => myarr.filter(ele => ele % 2 === 0)*/


console.log(arrpari(arr1))

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let sum = 0
let tot = arr1.forEach(val =>{
  sum += val;
});

console.log(sum)
/*
const sommanumeri= function (arr) {
  let somma = 0
  arr1.forEach(ele => sum += ele)
  return somma;
}
console.log(sommanumeri(arr1))
*/ 
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const sommareduce = (arr) => {
return arr.reduce((save,value) => save + value,0)};

console.log(sommareduce(arr1))

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, 
  ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
/* soluzione1

let sum3 = arr1.map(val1 => val1 + 2);
console.log(sum3)*/

const arr4 = [1,2,3]
const n = 5

const add = (arr4,n) => {
  return arr4.map(ele => ele + n)
}
console.log(add(arr4,n))

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, 
  ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let arr2 = ["Gianni", "Francesco","Noemi", "Jack"]
console.log(arr2)

const lunghezza = (arrlength) => {
return arrlength.map(val2 => val2.length)}

console.log(lunghezza(arr2))

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

let arr3 = []
for (let i = 0; i < 100; i++) {
  arr3.push(i)
  
}

arr3.forEach(numero => {
    if (numero % 2 !==0) {
      console.log(`${numero} è dispari`)
    }
});

const getdispari = () => {
  let arr5 = [];
  for (let x = 0; x < 100; x++) {
    if(x % 2 !== 0){
      arr5.push(x)
    }
  }
  return arr5
}

console.log(getdispari())

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const filmvecchio = (arr6) => {
  let old = arr6[0]
  arr6.forEach(film => {
    if(film.Year < old.Year) {
      old = film;
    }
  })
  return old;
 } 

 console.log(filmvecchio(movies))
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

let count = (arr6) => arr6.length

console.log("il numero di film è " + count(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const filmtitle = (arr6) => {
 return arr6.map(film => film.Title)
}
console.log(filmtitle(movies))

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const filmmillennio = (arr6) => {
  return arr6.filter(film => film.Year >= 2000)
}

console.log(filmmillennio(movies))

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sumyear = (arr6) => {
  return arr6.reduce((acc, film) => acc + Number(film.Year), 0)
}
console.log(sumyear(movies))

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico 
  film (la funzione riceve un imdbID come parametro).
*/

const imdb = (arr6, id) => {
return arr6.find(film => film.imdbID === id)
}

console.log(imdb(movies,'tt4154756'))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del 
  primo film uscito nell'anno fornito come parametro.
*/

const indexfilm = (arr6, year) => {
  return arr6.findIndex(film => film.Year === year)
  }
  
  console.log(indexfilm(movies, '2012'))