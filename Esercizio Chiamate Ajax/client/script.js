const url = 'http://localhost:3000/users/'
const urlLogin = 'http://localhost:3000/login'



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
    
            getData(email, password , firstName , lastName , age)
        })
    }

    if (document.querySelector('#loginButton')) {
        let loginButton = document.querySelector('#loginButton')
    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        let email = document.querySelector('#exampleInputEmail2').value
        let password = document.querySelector('#exampleInputPassword2').value
        login(email, password)
        console.log(email, password)
        
    })
    }

})

function getData(email, password , firstName , lastName , age) {

    let obj = {
    'email': email ,
    'password': password,
    'nome': firstName ,
    'lastName': lastName ,
    'age': age 
    }

    fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj) 
    }).then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err + 'Errore'));

}

function login(email, password) {
    let obj2 = {
        'email': email ,
        'password': password,
        }

        console.log(JSON.stringify(obj2))
    
        fetch(urlLogin, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj2) 
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err + 'Errore'));    
}
