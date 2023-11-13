/* async function fetchApi() {
    try {
        const resp = await fetch('https://api.example.com/dati');
        const data = await resp.json();
        console.log(data);
    } catch (error) {
        console.log('Error')
    }
}
fetchApi() */

const container = document.getElementById('container');

async function fetchDoggy() {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await resp.json();
        /* console.log(data); */
        const terrier = data.message.terrier;
        /* for (let dog of terrier) {
            console.log(dog);
        }; */ // IN stampa le chiavi o gli indici | OF stampa il valore
        /* for(let i = 0; i < terrier.length; i++) {
            console.log(terrier[i]);
        }; */

        const divRetriever = document.createElement('div');
        const divTerrier = document.createElement('div');
        const typeAustralian = document.createElement('div');
        container.appendChild(divRetriever);
        container.appendChild(divTerrier);
        container.appendChild(typeAustralian);

        terrier.forEach((par) => {
            console.log(par);
            const div = document.createElement('div');
            div.style.height = `50px`;
            div.style.width = `100px`;
            div.style.paddingTop = `2px`;
            div.style.paddingBottom = `2px`;
            div.style.marginTop = `2px`;
            div.style.marginBottom = `2px`;
            div.style.border = `1.5px solid green`;
            div.style.textAlign = `center`;
            div.innerHTML = `<p>${par}</p>`
            divTerrier.appendChild(div);
        });

        const retriever = data.message.retriever;
        retriever.forEach((par1) => {
            const div1 = document.createElement('div');
            div1.style.height = `50px`;
            div1.style.width = `100px`;
            div1.style.paddingTop = `2px`;
            div1.style.paddingBottom = `2px`;
            div1.style.marginTop = `2px`;
            div1.style.marginBottom = `2px`;
            div1.style.border = `2px dotted orange`;
            div1.style.textAlign = `center`;
            div1.innerHTML = `<p>${par1}</p>`
            divRetriever.appendChild(div1);
        });
        
        const australian = data.message.australian;
        typeAustralian.textContent = `${typeof australian}`;

        container.style.display = `flex`;
        container.style.flexDirection = `row-reverse`
        container.style.justifyContent = `space-evenly`
    } catch (error) {
        console.log('Error', error);
    }
}
fetchDoggy()