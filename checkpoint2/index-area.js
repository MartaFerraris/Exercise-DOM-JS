class cubeVolume {
    constructor(side) {
        this.side = side;
    }

    calcVolume() {
        return this.side ** 3;
    }
}

const container = document.getElementById('container');

async function calcCubeVolume() {
    try {
        const resp = await fetch('https://my-json-server.typicode.com/ndrx02/fakeRestAPI/figure');
        const data = await resp.json();
        //console.log(data);
    
        data.forEach(element => {
            const cube = new cubeVolume(element.lato);
            const newVolume = cube.calcVolume();            
            const div = document.createElement('div');
            div.innerHTML = `<div>Cube volume: ${newVolume}</div>`;
            div.style.width = `${element.lato}px`;
            div.style.height = `${element.lato}px`;
            div.style.border = `2px dotted blue`;
            container.appendChild(div);
        });
    } catch (error) {
        console.log('Error!', error);
    }
}

const btn = document.getElementById('btn').addEventListener('click', calcCubeVolume)