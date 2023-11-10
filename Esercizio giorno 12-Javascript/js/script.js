function Tabellone() {
    let table = document.querySelector('#tabellone');
    let tableelement = document.createElement('table')
    for (let i = 1; i <= 76; i++) {
    const cella = document.createElement('div');
    cella.innerText = [i]
    table.appendChild(cella)
    cella.className = 'cellatable'
}
}
Tabellone()

function estrainumero() {
    let button = document.querySelector('#button')
    button.addEventListener('click', () => {
        let numeroestratto = (Math.ceil(Math.random()*76))
        let numeriselezionati = document.querySelectorAll('#tabellone div')
        numeriselezionati.forEach(cella => {
        numeriselezionati[numeroestratto-1].style.backgroundColor = "blue";
        })
    })
}
estrainumero()

let numeriestratti = [];
let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 76);
  } while (numeriestratti.includes(randomNumber));

  let numrepeat = numeriestratti.push(randomNumber)

  console.log(numrepeat)



