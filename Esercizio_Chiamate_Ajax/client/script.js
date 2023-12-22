const url = 'http://localhost:3000/users/'
const urlLogin = 'http://localhost:3000/login'
const urlProducts = 'http://localhost:3000/products/'



document.addEventListener('DOMContentLoaded', () => {

    if (document.querySelector('#sumbitRegister')) {
        let submitButton = document.querySelector('#sumbitRegister')
        submitButton.addEventListener('click', (e) => {
            e.preventDefault()
            let email = document.querySelector('#exampleInputEmail1').value
            let password = document.querySelector('#exampleInputPassword1').value
            let firstName = document.querySelector('#firstName').value
            let lastName = document.querySelector('#lastName').value
            let age = document.querySelector('#age').value

            getData(email, password, firstName, lastName, age)
        })
    } else if (document.querySelector('#loginButton')) {
        let loginButton = document.querySelector('#loginButton')
        loginButton.addEventListener('click', (e) => {
            e.preventDefault()
            let email = document.querySelector('#exampleInputEmail2').value
            let password = document.querySelector('#exampleInputPassword2').value
            login(email, password)
            console.log(email, password)

        })
    } else if (document.querySelector('#addBtn')) {
        let addBtn = document.querySelector('#addBtn')
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            let marca = document.querySelector('#marca').value
            let modello = document.querySelector('#modello').value
            let categoria = document.querySelector('#categoria').value
            let prezzo = document.querySelector('#prezzo').value
            let quantita = document.querySelector('#quantita').value
            let immagine = document.querySelector('#immagine').value

            getDataAdmin(marca, modello, categoria, prezzo, quantita, immagine)

        })
    }

    getUserLog()
    creaProdotti()
    deleteBtn()

    let tbody = document.querySelector('.tbody');
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.value === 'btn btn-sm btn-outline-warning') {
            let id = e.target.parentNode.parentNode.childNodes[13].innerText;
            editBtn(id)
        } else if (e.target.classList.value === "bi bi-pencil-square") {
            let idIcon = e.target.parentNode.parentNode.parentNode.childNodes[13].innerText;
            editBtn(idIcon)
        }
    });
})

function getData(email, password, firstName, lastName, age) {

    let obj = {
        'email': email,
        'password': password,
        'nome': firstName,
        'lastName': lastName,
        'age': age
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err + 'Errore'));

}

async function login(email, password) {
    let obj2 = {
        'email': email,
        'password': password,
    }

    console.log(JSON.stringify(obj2))



    await fetch(urlLogin, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj2)
    }).then(response => response.json())
        .then(json => {
            creaBanner(json)
        })
        .catch(err => errorLogin = err)
}

function creaBanner(token) {

    if (token.accessToken) {
        let correct = document.querySelector('#spanLogin')
        correct.innerHTML = `
        <div class="alert alert-success mt-5" role="alert">
            Login successful!
        </div>`

        document.querySelector('#exampleInputEmail2').value = ''
        document.querySelector('#exampleInputPassword2').value = ''

        localStorage.setItem('UserLog', JSON.stringify(token))

        getUserLog()

    } else {
        let uncorrect = document.querySelector('#spanLogin')
        uncorrect.innerHTML = `
        <div class="alert alert-danger mt-5" role="alert">
            Login unsuccessful!
        </div>`
    }
}

function getUserLog() {
    let loggedIn = localStorage.getItem('UserLog')

    if (loggedIn) {
        let userLog = JSON.parse(loggedIn);
        let logUl = document.querySelector('div .navbar-nav.mb-2.mb-lg-0');
        logUl.innerHTML = '';
        logUl.innerText = 'Ciao ' + userLog.user.nome + ' ' + userLog.user.lastName

        let logOutBtn = document.createElement('button');
        logOutBtn.setAttribute('type', "button")
        logOutBtn.className = 'btn btn-sm btn-outline-danger ms-3 me-2'
        logOutBtn.innerHTML = 'Logout';
        logOutBtn.addEventListener('click', () => {
            localStorage.removeItem('UserLog');
        })

        logUl.appendChild(logOutBtn);

        let li = document.createElement('li');
        li.className = "nav-item"
        let a = document.createElement('a');
        a.className = "nav-link";
        a.href = "admin.html";
        a.setAttribute('aria-current', "page");
        a.innerText = 'Admin';
        li.appendChild(a);
        document.querySelector('#navbarSupportedContent ul').appendChild(li);
    }
}

function getDataAdmin(marca, modello, categoria, prezzo, quantita, immagine) {

    let userLog = JSON.parse(localStorage.getItem("UserLog"))
    let userId = userLog.user.id
    let obj3 = {
        "marca": marca,
        "modello": modello,
        "categoria": categoria,
        "prezzo": prezzo,
        "quantita": quantita,
        "immagine": immagine,
        "userId": userId
    }

    fetch(urlProducts, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj3)
    }).then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err + 'Errore'));
}

async function creaProdotti() {
    let object = null

    await fetch(urlProducts)
        .then(response => response.json())
        .then(json => object = json)
        .catch(err => console.log(err + 'Errore'));

    for (let i = 0; i < object.length; i++) {
        let num = 1 + i
        let tbody = document.querySelector('.tbody')
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${num}</th>
        <td><img src="${object[i].immagine}" alt=""></td>
        <td>${object[i].modello}</td>
        <td>${object[i].marca}</td>
        <td>${object[i].quantita}</td>
        <td>${object[i].prezzo}$</td>
        <td class = "d-none">${object[i].id}</td>
        <td>
          <button type="button" class="btn btn-sm btn-outline-danger me-3">
              <i class="bi bi-trash"></i>
          </button>
          <button type="button" class="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="bi bi-pencil-square"></i>
          </button>
        </td>`

        tbody.appendChild(tr)
    }
}

function deleteBtn() {
    let tbody = document.querySelector('.tbody');
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.value === 'btn btn-sm btn-outline-danger me-3') {
            let id = e.target.parentNode.parentNode.childNodes[13].innerText

            fetch(urlProducts + id, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => json)
        }
    })
}

//EDIT 



async function editBtn(x) {
    let urlSpecifico = `http://localhost:3000/products/${x}`
    object = null
    let modalBody = document.querySelector('.modal-body')
                let form = document.createElement('form')
                modalBody.innerHTML = ''
    await fetch(urlSpecifico)
                .then(response => response.json())
                .then(json => object = json)
                .catch(err => console.log(err + 'Errore'));
            form.innerHTML = `
            <div class="mb-3">
                <p class="d-none">${x}</p>
                <label for="editImmagine" class="form-label">Immagine</label>
                <input type="text" class="form-control" id="editImmagine" value="${object.immagine}">
            </div>
          <div class="mb-3">
            <label for="editModello" class="form-label">Modello</label>
            <input type="text" class="form-control" id="editModello" value="${object.modello}" >
          </div>
          <div class="mb-3">
            <label for="editMarca" class="form-label">Marca</label>
            <input type="text" class="form-control" id="editMarca" value="${object.marca}" >
          </div>
          <div class="mb-3">
            <label for="editQuantita" class="form-label">Quantità</label>
            <input type="text" class="form-control" id="editQuantita" value="${object.quantita}">
          </div>
          <div class="mb-3">
            <label for="editPrezzo" class="form-label">Prezzo</label>
            <input type="text" class="form-control" id="editPrezzo" value="${object.prezzo}" >
          </div>`

            modalBody.appendChild(form)
            updateProductsListner(x)

}

function updateProductsListner(idCall) {
    let id = idCall
    let modalFooter = document.querySelector('body')
    modalFooter.addEventListener('click', (e) => {
        if (e.target.classList.value === "btn btn-primary updateModal") {
            putCall(id)
            async function putCall(idCall) {

                let immagine = document.querySelector('#editImmagine').value
                let modello = document.querySelector('#editModello').value
                let marca= document.querySelector('#editMarca').value
                let quantita = document.querySelector('#editQuantita').value
                let prezzo = document.querySelector('#editPrezzo').value

                let objPut = {
                    'immagine' : immagine,
                    'modello' : modello,
                    'marca' : marca,
                    'quantita' : quantita,
                    'prezzo' : prezzo
                }
                await fetch(urlProducts + idCall, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(objPut)
                }).then(response => response.json())
                    .then(json => json)
                    .catch(err => console.log(err + 'Errore'))
            }
        } else if (e.target.classList.value === "btn btn-secondary closeModal" || e.target.classList.value === "btn-close") {
            return
        }
    })
}

