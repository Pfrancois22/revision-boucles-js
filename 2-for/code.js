// console.log("ok");

const container = document.querySelector(".container");
const phrase = "je suis dieu !";

let i = -1;
let taille = phrase.length-1;
while (i < taille) {
    const p = document.createElement("p");
    container.appendChild(p);
    // console.log(phrase[i]);
    i++;
    p.textContent=`${phrase[i]}`
}
