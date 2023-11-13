// classe con metodo calcolo area quadrato
// funzione asincrona -> fetch + nuova istanza classe
// passare i dati alla nuova classe
// nella funzione creare dinamicamente <div></div> -> risultato metodo + attributo stile
// stile: altezza e larghezza dinamico
// addEventListener -> bottone = richiama la funzione

class squareArea {
    constructor(side) {
        this.side = side;
    }  // chiave-valore

    calculateArea() {
        return this.side ** 2; //metodo calcolo area
    }

    /* set(side) { // fará in modo di restituirmi sempre il dato
        this.side = 'side';
    } */
}

async function fetchArea() {
    try {
        const resp = await fetch('https://my-json-server.typicode.com/ndrx02/fakeRestAPI/figure');
        const data = await resp.json(); // richiamo la responce e la passo a json

        const container = document.getElementById('container') // richiamare il contenitore nel HTML

        const latoSquare = data.map((elem) => elem.lato);
        console.log(latoSquare);

        data.forEach(elem => {
            const newArea = new squareArea(elem.lato); // creata una nuova istanza classe
            const area = newArea.calculateArea(); // salvo il risultato in calculateArea()
            const div = document.createElement('div'); // creo elemento div
            div.textContent = `Area del quadrato: ${area}`; //creo il testo
            div.style.width = `${elem.lato}px`; // cambia in modo dinamico lo stile css dato
            div.style.height = `${elem.lato}px`; // cambia in modo dinamico lo stile css dato
            div.style.border = "1px solid red";
            container.appendChild(div)
            console.log(elem)
        });
    } catch (error) {
        console.log('Error!', error);
    }
}

const button = document.getElementById('button').addEventListener('click', () => fetchArea());
