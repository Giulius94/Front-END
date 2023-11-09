const input = document.querySelector('#input')
const listcontainer = document.querySelector('#list-container')
const button = document.querySelector('button')
button.onclick = function addtask() {
    if(input.value === ''){
        alert('devi scrivere qualcosa!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let rule = document.createElement('span');
        rule.innerHTML = '\u00d7';
        li.appendChild(rule)
    }
    input.value = "";
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}), false;
