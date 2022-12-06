let buton = document.querySelector("button");
let color = ["black", "green", "grey", "blue" , "yellow" , "red", "pink" , "purple"];
let body = document.querySelector("body");

// Rastgele 
buton.addEventListener("click", backgroundColFonk);

function backgroundColFonk(){
let Sıradakirenk = Math.floor(Math.random()*color.length);
let renk = color[Sıradakirenk];
console.log(Sıradakirenk , renk);
body.style.backgroundColor = renk;
}

// Sırayla

// let sıra = 0;
// buton.addEventListener("click", sıraylaFonk);

// function sıraylaFonk(){
//     if(sıra > color.length){
//         sıra = 0;
//     }
//     body.style.backgroundColor = color[sıra];
//   sıra++;
// }
