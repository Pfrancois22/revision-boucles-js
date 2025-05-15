// // console.log("ok");
// const langs = ["PHP", "JS", "Node", "CSS", "Html"];

// // avec for
// // accession à l'index
// for(let i = 0; i < langs.length; i++){
//     console.log(i, langs[i] + " => for");

// }

// // avec for of
// for(let lang of langs){
//     console.log(lang + " => for of");

// }

// langs.forEach(lang=> console.log(lang +" => forEach"));
// // avec index
// langs.forEach((lang, i)=> console.log(i, lang +" => forEach"));

// const nb = [0,1,2,3,4,5,6,7,8,9];
// nb.forEach(nba => console.log(nba*5));

// function multiple(nb, i, d){
//     d=8;
//     console.log(`${d} = `+i, nb*d);
// }

// nb.forEach(multiple);

// // avec le forEach onest obligé delui passer un vrais tableau, une phrase par exemeple n'est pas un vrais tableau
// // si par exemple on voudrait tranformer une phrase entableau onpeu utiliser le spread operator
// const phrase = "Je suis une bille en code et ca va pas mieux :-)";
// [...phrase].forEach(lettre=>console.log(lettre));

// // autre inconvenient on ne peu pas faire un "continue" ou un "break"
// // ex avec un for of
// const phrase1 = "C'est toujours pas très '1' facile de voir venir le bout du code";
// for(let lettre of phrase1){
//     if(lettre == "i") continue;
//     console.log(lettre);

// }

// for(let lettre of phrase1){
//     if(lettre == "1") break;
//     console.log(lettre);

// }

const temps = [
  2, 8, 12, -12, 6, 14, -8, 18, 9, 17, -6, 19, 20, 24, -4, 26, 30, 35,
];
let max = temps[0];
let min = 0;
temps.forEach((temps) => {
  if (temps > max) {
    max = temps;
  } else if (temps < min) {
    min = temps;
  }
});
console.log(max);
console.log(min);

// notes eleve
const notes = [
  [11, 15, 14],
  [8, 12, 16],
  [7, 11],
];
let result=0;
let nbNotes=0;

notes.forEach((tabNote) => {
  tabNote.forEach((note) => {
    result += note;
    nbNotes++;
  });
});
console.log(result);
console.log(nbNotes);
let moyenne = result/nbNotes;
console.log(moyenne.toFixed(2));

// manipulation du dom
// pas fait 
const lis = document.querySelectorAll("li");
lis.forEach((li, i) => li.textContent = i )


