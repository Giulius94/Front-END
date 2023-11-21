let numeriestratti = [];

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
        let rand = (Math.ceil(Math.random()*76))
        let numeriselezionati = document.querySelectorAll('#tabellone div')
        numeriselezionati.forEach(cella => {
        numeriselezionati[rand-1].style.backgroundColor = "blue";
        })
        if (numeriestratti.length === rand) {
            console.log('Fine partita')
        }
        if (!numeriestratti.includes(rand)) {
            numeriestratti.push(rand)
        } else {
            console.log(rand + ' è già uscito')
        }
        numeriestratti.push(rand)
    })
}
estrainumero()

function generaTabelline() {
    let main = document.querySelector('#container')
    let divtab = document.createElement('div')
    divtab.className = 'tabellina'
    for (let i = 1; i < 24; i++) {
        let div = document.createElement('div')
        div.className('cell')
        div.innerText = i+1
        table.appendChild(cella)
        divtab.appendChild(divtab)
    }
    }

    generaTabelline()

