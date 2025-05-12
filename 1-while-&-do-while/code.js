// console.log("ok");


// incrémenter les chiffres
// let chiffre = 1
// const container = document.querySelector(".container");
// while (chiffre < 10) {
//     const p = document.createElement("p")
//     p.textContent = `Chiffre : ${chiffre}`;
//     container.appendChild(p);
//     console.log(chiffre);
    
//     chiffre++;
// }


// compter les lettres

const chaine = "Je m'appelle françois et j'ai 61 ans, je vie en Bretagne."
const container = document.querySelector(".container");
let i = 0;
let count = 0;
let tours = 40; //le nombresde tours avantle break si créé
while (chaine[i] != ".") {
    const p = document.createElement("p")
    // p.textContent = `${chaine[i]} => ${i}`;
    container.appendChild(p);
    console.log(count);
    
    count++;
    p.textContent=`${count}`
    i++;
    if(i==tours){break}
}