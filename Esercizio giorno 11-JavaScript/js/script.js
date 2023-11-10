const input = document.querySelector('#input')
const listcontainer = document.querySelector('#list-container')
const button = document.querySelector('button')
button.addEventListener('click', () => {
    if(input.value === '' || input.value.length < 2){
        alert('Devi inserire minimo di 2 caratteri!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = "";
})

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}), false;
