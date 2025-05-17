// console.log("ok");
// const nbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const carres = [];

// //transformer les valeurs de nbs en carré et les mettre dans carres
// //ok tout seul 👌
// for(nb of nbs){
//     carres.push(nb*nb);
// }
// console.log(carres);

// avec map
// const carres = nbs.map(nb => nb*nb);
// ou si notre colback contient plusieurs commandes, il faut mettre des parenthèse accolade et un RETURN
// const carres = nbs.map((nb, index) => {
//   console.log(index);
//   return nb * nb;
// });
// console.log(carres);

//si paire, avoir 0 si impaire avoir carré
// const carres = nbs.map((nb) => {
//   if (nb % 2 === 0) {
//     return 0;
//   }
//   return nb * nb;
// });

// console.log(carres);

// MAP SERS AVANT TOUT A EXTRAIRE DES DONNEES D UNGRAND TABLEAU

const datas = [
    {
        titre: "Ideologue",
        age: 61,
        nom: "François",
        salaire: 1600
    },
    {
        titre: "Chef de projet",
        age: 28,
        nom: "Miguel",
        salaire: 2800
    },
    {
        titre: "Infographiste",
        age: 36,
        nom: "Lise",
        salaire: 1450
    },
    {
        titre: "DevData",
        age: 26,
        nom: "Etienne",
        salaire: 1800
    }
]

let nameList = datas.map(name => name.nom);
console.log(nameList);
