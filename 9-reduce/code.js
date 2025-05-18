// // // console.log("ok");
// // const nbs = [1,2,3,4,5,6,7,8,9,10,11];
// const datas = [
//     {
//         titre: "Ideologue",
//         age: 61,
//         nom: "François",
//         salaire: 1600
//     },
//     {
//         titre: "Chef de projet",
//         age: 28,
//         nom: "Miguel",
//         salaire: 2800
//     },
//     {
//         titre: "Infographiste",
//         age: 36,
//         nom: "Lise",
//         salaire: 1450
//     },
//     {
//         titre: "DevData",
//         age: 26,
//         nom: "Etienne",
//         salaire: 1800
//     }
// ]

// // // savoir le totaldes valeur du tableau nbs
// // // let total = 0;
// // // for(nb of nbs){
// // //     total += nb;
// // // }
// // // console.log(total);

// // // acc = accumulateur des valeurs du tableau
// // // ou
// // // prev = preview à la place de acc
// // // et
// // // current = pour la valeur actuel a la place de nb
// // const total = nbs.reduce((acc, nb)=> acc+nb);
// // // console.log(total);

// // const nbs1 = [1,-5,45,-89,78,-12,248,354,178,99,36,-365,33];
// // const moyenne = nbs1.reduce((prev, current) => prev+current)/nbs1.length;
// // // console.log(moyenne);

// // // on peu modifier la valeur de sortie en rajoutant un point de départ
// // // ex on veux rajouter "100"
// // const total1 = nbs1.reduce((prev, current) => prev+current,100);
// // console.log(total1);

// // // cela correspond à
// // const add = (a,b) => a+b;
// // // console.log(add(nbs1));

// // const total2 = nbs1.reduce(add,100);
// // console.log(total2);

// //avec chaine de caractères
// const phrase = "Je ne suis pas un bon codeur, mais j'apprends";
// const mots = phrase.split(" ");
// const letter = phrase.split("");
// console.log(mots);
// console.log(letter);
// // pour recoller
// const mots1 = mots.join("-")
// const letter1 = letter.join("/");
// console.log(mots1);
// console.log(letter1);

// // réécrire une phrase ayant subit un split avec reduce (vois pas l'intèrré)
// console.log(mots.reduce((prev,mot)=> prev + " " + mot));

// console.log(phrase.length);
// const motLetter = [...phrase];
// console.log(motLetter);

// // si on veux utiliser un reduce sur une phrase, attention, ilfaut transformer la phrase en tableau et commencer à 0
// const phrase = "je suis un codeur débutant, mais je me soigne ! ou pas";
// const phraseLength = [...phrase].reduce((prev,current)=>prev+1,0);
// console.log(phraseLength);


// // obtenir la valeur max
// // console.log(Math.max(5,48,3,78,7));
// //si je veux obtenir la valeur max de mon tableau

// const nbs2 = [5,14,36,12,48,98,4,12,58,73,18,236];
// console.log(Math.max(...nbs2));
// console.log(Math.min(...nbs2));

// function plusGrandQue(a,b){
//     if(a>b){
//         return a;
//     } return b;
// }
// console.log(plusGrandQue(28,36));
// console.log(nbs2.reduce(plusGrandQue));
// // ou alors
// console.log(nbs2.reduce((prev,current) => {
// if(prev>current){
//     return prev;
// } else {
//     return current;
// }
// }));

// //avec une ternaire
// const nbs3 = [5,14,36,12,48,98,4,12,58,73,18,236,48,751,25,39,77,125,365];

// console.log(nbs3.reduce((prev, current)=> prev>current? prev:current));
// console.log(nbs3.reduce((prev, current)=> prev<current? prev:current));

const notes = [
    {
        matiere: "Français",
        age: 18,
        note: 15,
    },
    {
        matiere: "Math",
        age: 22,
        note: 14,
    },
    {
        matiere: "Histoire",
        age: 14,
        note: 18,
    },
    {
        matiere: "Geo",
        age: 15,
        note: 16,
    },
];

const moyenne = notes.reduce((acc, current)=> acc+current.note,0)/notes.length

console.log(moyenne);







