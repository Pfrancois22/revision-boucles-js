// console.log("ok");

const container = document.querySelector(".container");
// const phrase = "je suis dieu !";

// let i = -1;
// let taille = phrase.length-1;
// while (i < taille) {
//     const p = document.createElement("p");
//     container.appendChild(p);
//     // console.log(phrase[i]);
//     i++;
//     p.textContent=`${phrase[i]}`
// }

// for (let i = 0; i < phrase.length; i++) {
//     const p = document.createElement("p");
//     container.appendChild(p);
//     p.textContent = `${phrase[i]}`
//     console.log(phrase[i]);

// }

// afficher des nombres paire
// for (let i = 0; i <= 20; i++) {
//     const p = document.createElement("p");
//     container.appendChild(p);

//     if (i%2 === 0) {
//         p.textContent = `${i}`
//         console.log(i);
//     }
// }

// calculer des puissances
// const nb = 2;
// const puissance = 15
// let result = 1;

// for (let i = 0; i < puissance; i++)
// {
//     const p = document.createElement("p");
//     container.appendChild(p);
//     p.textContent = `${result = result * nb} -  `;
//     console.log(i);

// }

// trouver la valeur la plus grande dans un tableau
// const tab = [2, -6, 19, 35, 41, 28, -25, -7, 9, 24, 18, 89, -56];
// let max = tab[0];
// for (let i = 1; i < tab.length; i++) {
//   if (tab[i] > max) max = tab[i];
// }
// const p = document.createElement("p");
// container.appendChild(p);
// p.textContent = `${max}`;

// calcul moyen d'un éleve
const notes = [[8,9,14], [15,14,13], [10,17]];
let result = 0;
let nbNotes = 0;
let moyenne;
for(let i = 0; i < notes.length; i++){
    for(let y = 0; y < notes[i].length; y++){
        // console.log(notes[i][y]);
        result += notes[i][y];
        nbNotes++;
        // console.log(result);
        // console.log(nbNotes);
        moyenne = result/nbNotes;
        console.log(moyenne);
    }
}

const p = document.createElement("p");
container.appendChild(p);
// p.textContent = `${Math.round(moyenne)}`;
p.textContent = `${moyenne.toFixed(2)}`;