// console.log("ok");
// boucler sur un objet

// const perso = ["francois", "poullot", "61", "vieux😒"];

// console.log(perso[3]);

// const person = {
//   nom: "poullot",
//   prenom: "françois",
//   age: 61,
//   profession: "rien 😒",
// };

// // affichage simple par point
// console.log(person.profession, person.age);
// // console.log(person[age]); ne fonctionne pas erreur
// console.log(person["age"]); //là ok cela fonctionne

// for(let key in person){
//     console.log(person[key]);
// }
// for(let key in person){
//     if(key == "age") break;
//     console.log(person[key]);
// }
// for(let key in person){
//     if(key == age) continue;
//     console.log(person[key]);
// }

// console.log(typeof(person));

// PRATIQUE
// const salaries = {
//     francois: 1600,
//     miguel: 800,
//     franck: 1500,
//     paul: 6800,
//     valerian: 2800,
//     henry: 4500
// }

// let max = 0;
// let nameS;

// for(let salarie in salaries){
//     // je fait le tour de toutes les valeurs de l'objet pour comparer la valeur avec la valeur suivante, si la valeur suivante est plus grande, je l'attribus à "max"
//     if(salaries[salarie] > max){
//         //max prend toujours la valeur la plus grande ">"
//         max = salaries[salarie];
//         //j'attribut à ma variable "nameS" la valeur (nom) du plus grand salaire de "salarie"
//         nameS = salarie;
//     }
// }
// console.log(nameS, max);
// console.log(`Le plus gros salaire de l'équipe est à ${nameS}, il touche ${max} par mois en brut.`);

// const notes = {
//     math: [10,12,13],
//     chimie: [14,10,18],
//     physique: [11,19]
// }

// let moyenne = 0;
// let nbNotes = 0;
// let somme = 0;

// let tableauNotesTotal = [];

// for(let matiere in notes){
//     // tableauNotesTotal = tableauNotesTotal.concat(notes[matiere])
//     // avec spread operator
//     tableauNotesTotal = [...tableauNotesTotal, ...notes[matiere]]
// }
// console.log(tableauNotesTotal);

// for(let note of tableauNotesTotal){
//     somme += note;
//     nbNotes++;
//     moyenne = somme/nbNotes;
// }
// console.log(somme);
// console.log(nbNotes);
// console.log(moyenne.toFixed(2));
// // ou
// console.log(somme/tableauNotesTotal.length);

const classes = {
  eleves: [
    {
      nom: "Poullot",
      prenom: "François",
      matieres: [
        {
          math: {
            moyenne: 12,
            avis: "Bien dans l'ensemble",
          },
          physique: {
            moyenne: 10,
            avis: "Travail moyen ce trimestre",
          },
        },
      ],
    },
    {
      nom: "Sa Lima",
      prenom: "Miguel",
      matieres: [
        {
          math: {
            moyenne: 18,
            avis: "Très bien dans l'ensemble",
          },
          physique: {
            moyenne: 17,
            avis: "Très bon trimestre",
          },
        },
      ],
    },
    {
      nom: "Corrin",
      prenom: "Julie",
      matieres: [
        {
          math: {
            moyenne: 16,
            avis: "Très bien dans l'ensemble",
          },
          physique: {
            moyenne: 13,
            avis: "Bon trimestre",
          },
        },
      ],
    },
  ],
};

//récupérer l'avis physique de miguel

console.log(classes.eleves[1].matieres[0].physique.avis);
