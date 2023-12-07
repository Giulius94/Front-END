
let xhr = new XMLHttpRequest(); // Ogg in grado di effettuare Richieste al Server - readyState = 0
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books'); // Definisco il Method e URL della chiamate - readyState = 1
xhr.send(); // Eseguo la chiamata - readyState = 2
// readyState = 3	LOADING	Downloading; responseText holds partial data.
// readyState = 4	DONE	The operation is complete.
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj);
        createList(obj);
    }
}

arrayStorageOnLoad()



function createList(params) {

    params.forEach((element, index) => {
        let divCard = document.createElement('div');
        divCard.classList = 'col';
        divCard.innerHTML = `
        <div class="card">
          <img src=${element.img} class="card-img-top" alt="book_picture">
          <div class="card-body">
              <div class="tuttoTitolo d-flex justify-content-between">
                  <h5 class="card-title">${element.title}</h5>
                  <span class="badge bg-primary rounded-pill my-2 d-flex align-items-center justify-content-center">${element.category}</span>
              </div>
              <span class = "asin" style = "display: none;">${element.asin}</span>
            <p class="card-text text-center">${element.price}\$</p>
            <div class="contBtn d-flex justify-content-around">
              <a href="#" class="btn btn-success">Add to Cart</a>
              <a href="#" class="btn btn-danger">Remove</a>
            </div>
          </div>
        </div>
        `
        let divContenitoreLocandine = document.querySelector ('#contenitoreLocandine');
        divContenitoreLocandine.appendChild(divCard);
})
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#contenitoreLocandine').addEventListener('click', (e) => {
        if(e.target.className === 'btn btn-danger') {
            let divContenitoreLocandine = document.querySelector ('#contenitoreLocandine');
            let parent = e.target.parentNode.parentNode.parentNode.parentNode;
            divContenitoreLocandine.removeChild(parent);
    } if(e.target.className === 'btn btn-success') {
        let bottoni = e.target.parentNode;
        let asinNumber = e.target.parentNode.parentNode.childNodes[3].innerHTML;
        bottoni.className = '';
        let card = e.target.parentNode.parentNode.parentNode;
        /* bottoni.style.display = 'none'; */
        bottoni.innerHTML = `<span class ="spancard">Added to Cart</span>`
        card.style.border = '3px solid green';

        let arrayJson = localStorage.getItem('carrello');
        let objArray = JSON.parse(arrayJson);
        objArray.push(asinNumber);
        arrayJson = JSON.stringify(objArray);
        localStorage.setItem('carrello', arrayJson);
    }
    })
})

function arrayStorageOnLoad() {
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrello') === null) {
            let arrayCarrello = [];
            arrayCarrello = JSON.stringify(arrayCarrello);
            localStorage.setItem('carrello', arrayCarrello);
        }

    })
}