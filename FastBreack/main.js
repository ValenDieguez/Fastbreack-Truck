var title = "FAST BREACK TRUCK !";
var explanation = "prepare Breackfast";
var explanation2 = "HERE are your BEACKFAST!";
var linechange = document.createElement("br");

var eyeholes = {
    id: 1,
    name: "eyeholes",
    description: "Sabrosos y nutritivamente biscosos",
    price: 25,
    img: "./img/eyeholes.jpg"
};

var smiggles = {
    id: 2,
    name: "smiggles",
    description: "Tan sabrosos que te los quitaran de donde sea",
    price: 50,
    img: "./img/smiggles.jpg"
};

var fleebjuice = {
    id: 3,
    name: "fleebjuice",
    description: "Extraido gota a gota",
    price: 35,
    img: "./img/fleb.jpg"
};

var turbulencejuice = {
    id: 4,
    name: "turbulencejuice",
    description: "Atraeras a humanos y nebulosarurianos por igual",
    price: 30,
    img: "./img/turbulent.png"
};

var comidaDesayuno = [eyeholes, smiggles];
var bebidaDesayuno = [fleebjuice, turbulencejuice];


function createSelects(lista, margen, id) {
    var divSelect = createDiv();
    divSelect.setAttribute("style", "margin-left: " + margen);
    divSelect.setAttribute("id", id+"div");
    var input = document.createElement("select");
    input.setAttribute("style", "margin-left: " + margen);
    input.setAttribute("id", id);
    input.setAttribute("onchange", "changecolor()");
    for (let option in lista) {
        var food = document.createElement("option");
        food.setAttribute("value", option);
        food.text = lista[option].name;
        input.add(food);
    }
    divSelect.appendChild(input);

    return divSelect;

}

function createTitle(tag, phrase) {
    let titleEle = document.createElement(tag);
    titleEle.setAttribute("style", "margin-left: 40%");
    titleEle.innerHTML = phrase + "<br>";
    return titleEle;
}

function createDiv() {
    var div = document.createElement("div");
    return div;
}

function createButton(text, atribute, value) {
    let button = document.createElement("button")

    button.innerText = text;
    button.setAttribute(atribute, value);

    return button;
}

function showBuy() {
    let indexComida = retrieveValuesSelects("comida");
    let indexBebida = retrieveValuesSelects("bebida");
    let divCentral = document.getElementById("divCentral");
    divCentral.parentNode.removeChild(divCentral);

    createPagSecondary(indexComida, indexBebida);
}

function retrieveValuesSelects(id) {
    var option = document.getElementById(id).value;
    return option;
}

function createImagen(url) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", url);
    imagen.setAttribute("width", "300px");
    imagen.setAttribute("height", "200px");
    return imagen;
}

function changecolor(){
    let indexComida = retrieveValuesSelects("comida");
    let indexBebida = retrieveValuesSelects("bebida");
    let selectComida = document.getElementById("comidadiv");
    let selectBebida = document.getElementById("bebidadiv");
    if (indexComida == 0){
        selectComida.setAttribute("style", "background-color: blue;" +
            "padding: 4%; margin-left: 35%");
    }else{
        selectComida.setAttribute("style", "background-color: red;"+
            "padding: 4%; margin-left: 35%");
    }
    if (indexBebida == 0){
        selectBebida.setAttribute("style", "background-color: green;"+
            "padding: 4%; margin-left: 5%");
    }else{
        selectBebida.setAttribute("style", "background-color: yellow;"+
            "padding: 4%; margin-left: 5%");
    }

}

function createPagInitial() {
    let divPrincipal = document.getElementById("form");
    let divCentral = createDiv();
    divCentral.setAttribute("id", "divCentral");
    divCentral.appendChild(createTitle("h2", title));
    divCentral.appendChild(createTitle("h6", explanation));
    let divSelects = createDiv();
    divSelects.setAttribute("class", "row");
    divSelects.appendChild(createSelects(this.comidaDesayuno, "35%", "comida"));
    divSelects.appendChild(createSelects(this.bebidaDesayuno, "60%", "bebida"));
    divCentral.appendChild(divSelects);
    let divButton = createDiv();
    divButton.setAttribute("style", "margin-left: 45%")
    divButton.appendChild(createButton("preparar desayuno", "onclick", "showBuy()"))
    divCentral.appendChild(divButton)

    divPrincipal.appendChild(divCentral);
}

function calcularprecio(indexComida, indexBebida) {
    let precio = comidaDesayuno[indexComida].price + bebidaDesayuno[indexBebida].price;
    let divCentral = document.getElementById("divCentral");
    let precioHtml = createTitle("h3", precio)
    divCentral.appendChild(precioHtml);
    window.open("thx.html",encodeURIComponent(precioHtml),
        "_blank");
}

function createPagSecondary(indexComida, indexBebida) {
    let divPrincipal = document.getElementById("form");
    let divCentral = createDiv();
    divCentral.setAttribute("id", "divCentral");
    divCentral.appendChild(createTitle("h2", title + "  AWESOME!"));
    divCentral.appendChild(createTitle("h6", explanation2));
    linechange;
    linechange;
    divCentral.appendChild(createTitle("h4", "Your chooses are :"));
    linechange
    let divImagenes = createDiv();
    divImagenes.setAttribute("id", "divImagenes");
    divImagenes.setAttribute("class", "row");
    let divImagen1 = createDiv();
    divImagen1.appendChild(createTitle("h4", comidaDesayuno[indexComida].name))
    divImagen1.appendChild(createTitle("h6", comidaDesayuno[indexComida].description))
    divImagen1.setAttribute("style", "margin: auto")
    divImagen1.appendChild(createImagen(comidaDesayuno[indexComida].img));
    divImagenes.appendChild(divImagen1)
    let divImagen2 = createDiv();
    divImagen2.appendChild(createTitle("h4", bebidaDesayuno[indexBebida].name))
    divImagen2.appendChild(createTitle("h6", bebidaDesayuno[indexBebida].description))
    divImagen2.appendChild(createImagen(bebidaDesayuno[indexBebida].img));
    divImagen2.setAttribute("style", "margin: auto")
    divImagenes.appendChild(divImagen2)
    divCentral.appendChild(divImagenes);
    let divButton = createDiv();
    divButton.setAttribute("style", "margin-left: 45%")
    divButton.appendChild(createButton("calcular Precio", "onclick", "calcularprecio(" + indexComida + ","
        + indexBebida + ")"));

    divCentral.appendChild(divButton);

    divPrincipal.appendChild(divCentral);
}


createPagInitial();