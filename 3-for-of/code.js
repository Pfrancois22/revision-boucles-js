// console.log("ok");



// const phrase = "Je ne suis pas un dieu en code !";
// for(let i = 0; i<phrase.length; i++){
//     console.log(phrase[i]);
    
// }

// avec for of 
// for(let lettre of phrase){
//     console.log(lettre);
    
// }

// const languages = ["Java", "C#", "JS", "PHP"];
// for(let language of languages)
// {
//     console.log(language);
    
// }

// const temps = [8,6,14,26,41,18,32,17,23,25];
// let maxTmps = temps[0];
// let minTmps = temps[0];
// for(let temp of temps) {
//     if(temp > maxTmps){
//         maxTmps = temp;
//     }
// }
// console.log(maxTmps);
// for(let temp of temps) {
//     if(temp < minTmps){
//         minTmps = temp;
//     }
// }
// console.log(minTmps);


// const notes = [[8,9,14], [15,11,13], [10,17]];
// let result = 0;
// let nbNotes = 0;
// let moyenne;
// for(let tabNote of notes){
//     for(let value of tabNote){
//         result += value;
//         nbNotes++;
//         moyenne = result/nbNotes;

//     }
// }

// console.log(result);
// console.log(moyenne.toFixed(2));

const lis = document.querySelectorAll("li");
const ul = document.querySelector("ol");
// console.log(lis.length);
for(li of lis){
    li.style.color = "LightSeaGreen";
    li.style.backgroundColor = "DarkSlateGray";
    li.style.padding = "5px 10px";
}
ul.style.padding = "50px" ;
ul.style.margin = "50px" ;
ul.style.backgroundColor = "DarkOrange";

