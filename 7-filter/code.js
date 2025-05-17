// console.log("ok");

// const nbs = [1,-5,45,-89,78,-12];

// const negatif = [];

// for(nb of nbs){
//     if(nb <0){
//         negatif.push(nb)
//     }
// }
// console.log(negatif);
const nbs = [1,-5,45,-89,78,-12,248,354,178,99,36,-365,33];

const negatif = nbs.filter(nb=>nb<0)
const positif = nbs.filter(nb=>nb>0)
let mult3 = nbs.filter(nb=>nb%3 == 0)
let mult8 = nbs.filter(nb=>nb%8 == 0)

// console.log(negatif);
// console.log(positif);
// console.log(mult3);
// console.log(mult8);

// pas de filter sur une phrase car il faut que se soit un VRAIS tableau
// const phrase = "je suis un très gros débutant en programmation";
// // transformer la phrase en tableau avec split
// const lettres = phrase.split("");
// console.log(lettres);

// let letter = lettres.filter(i => i === "u");
// console.log(letter);

const salaries = [
    {
        nom: "François",
        salaire: 1600
    },
    {
        nom: "Miguel",
        salaire: 2800
    },
    {
        nom: "Lise",
        salaire: 1450
    },
    {
        nom: "Etienne",
        salaire: 1800
    }
]

let minSalarie = salaries.filter(salarie => salarie.salaire >= 1600);
console.log(minSalarie);

