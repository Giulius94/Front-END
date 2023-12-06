class User {
    constructor(firstName, lastName, age, location) {
        this.lastName = lastName;
        this.age = age;
        this.location = location;
        this.firstName = firstName;
    }

    confronto(persona) {
        if (this.age > persona.age) {
            return this.firstName + ' è più vecchio di ' + persona.firstName;
        } else if (this.age < persona.age) {
        return persona.firstName + ' è più vecchio di ' + this.firstName;
        } else {
        return persona.firstName +' ha la stessa età di '+ this.firstName;
        }
    }
}


let m = new User('Mario', 'Rossi', 28, 'Roma');
let g = new User('Giovanni', 'Verdi', 31, 'Milano');
let f = new User('Francesca', 'Neri', 29, 'Napoli');

console.log(m.confronto(g));
console.log(m.confronto(f));
console.log(g.confronto(m));



class Pet {
    static count = 0
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        Pet.count++;
    }

    ownerNameTest(pet) {
        if (pet.ownerName === this.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

/* let p1 = new Pet('Bobby', 'Mario Rossi', 'cane', 'labrador'); */
/* let p2 = new Pet('Billy', 'Giuseppe Verdi', 'gatto', 'soriano'); */

/* console.log(p1);
console.log(p2);
console.log(p1.ownerNameTest(p2)); */

let formBtn = document.querySelector('#petForm button');
formBtn.addEventListener('click', () => {
    let f = document.querySelector('#petForm form');
    let petName = f[0].value;
    console.log(petName);
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;

    let p = new Pet(petName, ownerName, species, breed);
    addList(p)
    f[0].value = '';
    f[1].value = '';
    f[2].value = '';
    f[3].value = '';
})

function addList(p) {
    let ul = document.querySelector('#listPet ul');
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
    <strong>petName:</strong> ${p.petName}
    <strong>ownerName:</strong> ${p.ownerName}
    <strong>species:</strong> ${p.species}
    <strong>breed:</strong> ${p.breed}
    `;
    ul.appendChild(li);
    document.querySelector('#listPet h3 span').innerText = Pet.count;
}
