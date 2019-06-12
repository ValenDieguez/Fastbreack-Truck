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
var bebidaDesayuno = [fleebjuice,turbulencejuice];

// function getComidas(){
//     return comidaDesayuno;
// }
//
// function getBebidas(){
//     return bebidaDesayuno;
// }

export function getBebidas(){return bebidaDesayuno;}
export function getComidas(){return comidaDesayuno;}