class squareArea {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    set(side) {
        this.side = side;
    }
}

async function areaFetch() {
    const resp = await fetch("https://my-json-server.typicode.com/ndrx02/fakeRestAPI/figure");
    const data = await resp.json();
    const area = new squareArea();
    data.map((el) => {
        area.set(el.lato)
        console.log(area.calculateArea())
    });
}
areaFetch()
