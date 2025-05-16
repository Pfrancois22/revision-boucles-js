// console.log("ok");
// const paniers = ["Pomme", "Poire", "Banane", "Fraise", "Framboise", "Citron"];

// function isPresent(monFruit){
//     for(let fruit of paniers){
//         if(fruit === monFruit)
//             return true;
//     }
//     return false
// }

// console.log(isPresent("Poire"));


// console.log(paniers.includes("Orange"));
// console.log(paniers.includes("Poire"));

// const phrase1 = "Je suis un codeur à chier 😱";
// const phrase2 = "Mais j'essai de m'améliorer comme je peux 🙋‍♂️";
// // console.log(phrase.includes("codeur"));
// // console.log(phrase.includes("😱"));
// // console.log(phrase.indexOf("😱"));

// // YEP YEP REUSSI SEUL !
// function content(phrase, lettre){
//     if(phrase.includes(lettre)){
//         return `La phrase (${phrase}) contient bien la lettre "${lettre}"`
//     }
//     return `La lettre "${lettre}" n'est pas contenu dans la phrase (${phrase})`
// }

// console.log(content(phrase1, "u"));
// console.log(content(phrase2, "x"));

// trouver un élément avec une condition dans un tableau, cela utiliseune callback
// une callback est une fonction qui prend en paramétre une autre fonction
// const nb = [0,12,45,-89,1,-21,86,38,47];

// console.log(nb.find(nombre => nombre < 50)); // affiche le premier nb inférieur à 50
// console.log(nb.find(nombre => nombre > 50)); // affiche le premier nb suppérieur à 50
// console.log(nb.find(nombre => nombre%(2))); // affiche le premier nb impaire du tableau
// console.log(nb.find(nombre => nombre%2 == 1)); // affiche le premier nb impaire du tableau
// console.log(nb.find(nombre => nombre < 0)); // affiche le premier nb negatif

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
//ATTENTION RETOURNE QUE LE PREMIER ELEMENT TROUVER, POUR TROUVER LE MOIN IL FAUT UTILISER FILTER
console.log(salaries.find(salarier => salarier.salaire > 1780));




