// let a1 = document.getElementById('a1');
// let a2 = document.getElementById('a2');
// let a3 = document.getElementById('a3');

// let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');
// let b3 = document.getElementById('b3');

// let c1 = document.getElementById('c1');
// let c2 = document.getElementById('c2');
// let c3 = document.getElementById('c3');

// let tour = 0;
// function jouer(){
//     if (tour%2 == 0){
//         a1.style.background = 'blue';
//     }else {
//         a1.style.background = 'red';
//     }
//     tour++
// }


let morpion = document.getElementById('morpion');
let nbHorCase = 8,
    nbVerCase = 8,
    tour = 0;

for (let i = 0; i < nbHorCase; i++) {
    for (let j = 0; j < nbVerCase; j++) {
        morpion.innerHTML += `<div class="case" id="${i}_${j}" onclick="jouer(${i},${j})"></div>`;
    }
}
let cases = document.querySelectorAll(div);
console.log(cases);
function jouer(a,b){
    console.log(a,b);
    tour++;
    if (tour%2 == 0){
        console.log('croix')
    }else {
        console.log('rond')
        
    }
}