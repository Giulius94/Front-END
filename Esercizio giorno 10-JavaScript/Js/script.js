/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       /*const changeTitle = function () {
        let titolo = document.querySelector("h1");
        titolo.innerText = "Titolo creato con JS"

        // alternativa
        document.querySelector("h1").innerText = "Titolo creato con JS"
       }

       changeTitle()

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector('div > h1').className ="myHeading"
        
       }
       addClassToTitle()
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let change = document.querySelectorAll('div > p')
        change.forEach(p => p.innerText = "testo cambiato con java");
       }
       changePcontent()

       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link 
        (tranne quello nel footer) con il valore https://www.google.com
       */
 
       /*const changeUrls = function () {
        let link = document.querySelector('a')
        link.href = "https://www.google.com"
       }*/ 
       //correzione

       const changeUrls = function () {
        let link = document.querySelectorAll('a:not(footer a)')
        link.forEach(l => l.href = "https://www.google.com")
       }

       changeUrls()

       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
        const addToTheSecond = function () {
            let li = document.createElement("li");
            li.innerText = "4th";
            document.querySelector("#secondList").appendChild(li);
          };

          addToTheSecond();

       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
        const addParagraph = function () {
        const div = document.querySelector('div')
        let p = document.createElement('p');
        p.innerText = "paragrafo nel primo div";
        div.appendChild(p)
       }
       
       addParagraph()

       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
        const hideFirstUl = function () {
        const ul = document.querySelector('#firstList');
        ul.style.display = "none";
        //ul.style.visibility = 'hidden'
        //ul.remove()
       }

       hideFirstUl() 

       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
        const paintItGreen = function () {
            let first = document.querySelectorAll('ul')
            first.forEach(ele => ele.style.backgroundColor = 'green')
          }
            paintItGreen();

       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

        const makeItClickable = function () {
        let h1 = document.querySelector('div > h1');
        h1.innerText = h1.innerText.slice(0, -1)
      }

      makeItClickable()

       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        const linkfooter = document.querySelector('footer h3 > a');
        const txt = linkfooter.getAttribute('href');
        alert(txt);
       }
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: 
        immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
        let divtable = document.querySelector('#tableArea') //selezionare la radice
        let table = document.createElement('table');
        table.style.border = '1px solid black'
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        th1.innerText = 'Immagine'
        let th2 = document.createElement('th');
        th2.innerText = 'Nome prodotto'
        let th3 = document.createElement('th');
        th3.innerText = 'Quantità'
        let th4 = document.createElement('th');
        th4.innerText = 'Prezzo'

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);

        table.appendChild(tr);
        divtable.appendChild(table);

         //let prodotti = ['iphone', 'samsung','motorola']

        for (let i = 0; i < 5; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHtml = "<img src = https://img.fruugo.com/product/6/90/535273906_max.jpg heigth = 100px />"
            tr.appendChild(td1)
            let td2 = document.createElement('td');
            td2.innerText = 'pallone'
            tr.appendChild(td2)
            let td3 = document.createElement('td');
            td3.innerText = '12'
            tr.appendChild(td3)
            let td4 = document.createElement('td');
            td4.innerText = '20$'
            tr.appendChild(td4)
            table.appendChild(tr)
        }

       }

       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function (img, nome, qty, prezzo) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = "<img src = https://img.fruugo.com/product/6/90/535273906_max.jpg height = 100px />"
        tr.appendChild(td1)
        let td2 = document.createElement('td');
        td2.innerText = nome
        tr.appendChild(td2)
        let td3 = document.createElement('td');
        td3.innerText = qty
        tr.appendChild(td3)
        let td4 = document.createElement('td');
        td4.innerText = prezzo
        tr.appendChild(td4)
        let table = document.querySelector('#tableArea table')
        table.appendChild(tr)
       }
 
       addRow('https://img.fruugo.com/product/6/90/535273906_max.jpg', 'iphone','5','350$')

       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini 
       della tabella quando eseguita
     */

       
 
       /*const hideAllImages = function () {
            const images = document.querySelectorAll('#tableArea table img')
            images.forEach(img => img.style.display = 'none')

       }
       hideAllImages()
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {
        let ele = document.querySelector('#changeMyColor')
        let red = Math.round(Math.random()*255)
        let green = Math.round(Math.random()*255)
        let blue = Math.round(Math.random()*255)
        ele.style.color = `rgb(${red},${green}, ${blue})`;

       }
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {
        let all = document.querySelectorAll("h1, h2, h3, p, a, li, th, td")
        all.forEach(node => {
            let txt = [...node.innerText].filter(char => {
                char = char.toLowerCase();
                return char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u" && char !== "y" 
            }).join("")
            console.log(txt)
        })
       }

       deleteVowels()