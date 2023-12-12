// Example https://www.pexels.com/

function loadImmagini(query, numeroPagina) {

let campoRicerca = query;
let pagNumber = 1
if(numeroPagina === undefined) {
  let pagNumber = 1;
}else {
  let pagNumber = +numeroPagina;
};

let UrlPexel = `https://api.pexels.com/v1/search?query=${campoRicerca}&per_page=9&page=${pagNumber}`;
/* console.log(UrlPexel); */
fetch(UrlPexel, {
        method: 'GET', 
        headers: {
            Authorization: 'HRs3PGPbe2l9yTuPdRaS9jmZhP8uGcspBC2fPWVfT5awlh4TZX4Ccl4m'
        }
    })
    .then(response => response.json())
    .then (json => {
      let divPadre = document.querySelector('#padreCard')
      divPadre.innerHTML = '';
      json.photos.forEach(element => {
        let divCol = document.createElement('div');
        divCol.className = 'cardsingola col-md-4 d-flex align-items-stretch';
        divCol.innerHTML = `<div class="card mb-4 shadow-sm">
        <img src="${element.src.portrait}" alt="${element.alt}">
        <div class="card-body">
          <p class="card-text">
            ${element.alt}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-success text-white btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-danger text-white btn-outline-secondary">
                Hide
              </button>
            </div>
            <small class="text-muted">${element.id}</small>
          </div>
        </div>
      </div>`

      divPadre.appendChild(divCol)

      });
    })
    .catch(error => console.log(error + 'errore'))

    localStorage.setItem('queryAttuale', query)
  }



  document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem('queryAttuale') !=null) {
      let ultimaRicerca = localStorage.getItem('queryAttuale');
      loadImmagini(ultimaRicerca);
    }

    document.querySelector('#divBottoni').addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.className == 'btn btn-primary my-2') {
            loadImmagini("cat")
        }
        if(e.target.className == 'btn btn-secondary my-2') {
          loadImmagini("dogs")
      }
    
    
    })

    document.querySelector('#padreCard').addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.className == 'btn btn-sm btn-danger text-white btn-outline-secondary') {
        let parent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        let figlio = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        parent.removeChild(figlio)
      }
      if (e.target.className == 'btn btn-sm btn-success text-white btn-outline-secondary') {
        let idFoto = e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[0].nodeValue;
        console.log(idFoto)
        apriNuovaTabConQS(idFoto)
      }
    })

    document.querySelector('#bottoneRicerca').addEventListener('click', (e) => {
      e.preventDefault();
      let input = document.querySelector('#barraRicerca').value;
      loadImmagini(input); 

    })
    
})


function apriNuovaTabConQS(idFoto) {
  window.open("dettaglio.html" + "?id" + idFoto + '_blanck');
}
