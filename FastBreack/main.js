// import getComidas from '/products';
// import getBebidas from '/products';


var title = "FAST BREACK TRUCK !";
var explanation = "prepare Breackfast";
var explanation2 = "HERE are your BEACKFAST!";
var linechange = document.createElement("br");

var eyeholes = {
    id: 1,
    name: "eyeholes",
    description: "Sabrosos y nutritivamente biscosos",
    price: 4
};

var smiggles = {
    id: 2,
    name: "smiggles",
    description: "Tan sabrosos que te los quitaran de donde sea",
    price: 2
};

var fleebjuice = {
    id: 3,
    name: "fleebjuice",
    description: "Extraido gota a gota",
    price: 3
};

var turbulencejuice = {
    id: 4,
    name: "turbulencejuice",
    description: "Atraeras a humanos y nebulosarurianos por igual",
    price: 2
};

var comidaDesayuno = [eyeholes, smiggles];
var bebidaDesayuno = [fleebjuice, turbulencejuice];


function createSelects(lista, margen, id) {
    var divSelect = createDiv();
    divSelect.setAttribute("style", "margin-left: " + margen);
    divSelect.setAttribute("id", id);
    var input = document.createElement("select");
    input.setAttribute("style", "margin-left: " + margen);
    for (let option of lista) {
        var food = document.createElement("option");
        food.text = option.name;
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
    let divCentral = document.getElementById("divCentral");
    divCentral.parentNode.removeChild(divCentral);
    let indexComida = retrieveValuesSelects("comida");
    let indexBebida = retrieveValuesSelects("bebida");
    createPagSecondary(indexBebida, indexBebida);
}

function retrieveValuesSelects(id){

    let select = document.getElementById(id);
    return this.options[select.selectedIndex];
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
    divCentral.appendChild(createButton("preparar desayuno", "onclick", "showBuy()"))


    divPrincipal.appendChild(divCentral);
}

function createPagSecondary(indexComida, indexBebida) {
    let divPrincipal = document.getElementById("form");
    let divCentral = createDiv();

    divCentral.appendChild(createTitle("h2", title + "  AWESOME!"));
    divCentral.appendChild(createTitle("h6", explanation2));
    linechange;
    linechange;
    divCentral.appendChild(createTitle("h4", "Your chooses are :"));
    linechange



    divPrincipal.appendChild(divCentral);
}




createPagInitial();