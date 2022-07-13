let arrayItems;

function loadArray() {
    arrayItems = [
        { nombre: "bici", costo: 3000 },
        { nombre: "Tv", costo: 2500 },
        { nombre: "Libro", costo: 320 },
        { nombre: "Celular", costo: 10000 },
        { nombre: "Laptop", costo: 20000 },
        { nombre: "Teclado", costo: 500 },
        { nombre: "Audifonos", costo: 1700 }
    ];

    insertHTML(arrayItems, "articulos-lista");
}


function insertHTML(array, idSelector, method) {
    if (method === "map") {
        array.forEach(element => {
            let arrayItemsHTML = document.getElementById(idSelector);
            let li = document.createElement("li");

            li.innerHTML = element;

            arrayItemsHTML.appendChild(li);
        });

        switch (false) {
            case false: console.log("Soy falso :( ")
            case true: console.log("Soy verdadero!")
        }

    }
    else if (method === "find") {
        let element = array;
        let arrayItemsHTML = document.getElementById(idSelector);
        let li = document.createElement("li");
        let ul = document.createElement("ul");

        ul.innerHTML = element.nombre;
        li.innerHTML = "Precio = " + element.costo;

        ul.appendChild(li);
        arrayItemsHTML.appendChild(ul);
    }
    else {
        array.forEach(element => {
            let arrayItemsHTML = document.getElementById(idSelector);
            let li = document.createElement("li");
            let ul = document.createElement("ul");

            ul.innerHTML = element.nombre;
            li.innerHTML = "Precio = " + element.costo;

            ul.appendChild(li);
            arrayItemsHTML.appendChild(ul);
        });
    }

}

//Filtrar arrayItems usando el metodo Filter
function arrayFilter() {
    var arrayFilter = arrayItems.filter(function (item) {
        return item.costo <= 500;
    });

    insertHTML(arrayFilter, "articulos-filtrados");
}

//Filtrar arrayItems usando el metodo Map
function arrayMap() {
    let arrayMap = arrayItems.map(function (item) {
        return item.nombre;
    });
    insertHTML(arrayMap, "articulos-map", "map");
}

//Filtrar arrayItems usando el metodo Find
function arrayFind() {
    let arrayFind = arrayItems.find(function (item) {
        return item.nombre === "Laptop";
    });
    insertHTML(arrayFind, "articulos-find", "find");
}

//Filtrar arrayItems usando el metodo Some
function arraySome() {
    let arrayFind = arrayItems.Some(function (item) {
        return item.costo <= 700;
    }); //retorna true o false

}








