const queryParams = new URLSearchParams(window.location.search);
const idFoto = queryParams.get('id');

document.addEventListener('DOMContentLoaded', () => {
    let divPrincipale = document.querySelector('#dettaglio');
    divPrincipale.innerHTML = `
    <div class="container d-flex text-center">
    <div class="card w-75">
        <img src="https://www.coop.it/sites/default/files/styles/scale/public/2020-09/Gatto%20Indoor_Big_0.jpeg" class="card-img-top" alt="Nome Artista">
        <div class="card-body">
            <h5 class="card-title">Nome Artista</h5>
            <a href="url-dell-artista" class="btn btn-primary">Vai all'artista</a>
        </div>
    </div>
    </div>
    `
})