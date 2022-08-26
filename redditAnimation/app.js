const letters = document.querySelectorAll('.txt1');
const letters2 = document.querySelectorAll('.txt2');

let cpt = 0;
let cpt2 = 0;

console.log(letters)
myTimeout = setInterval(slider, 1000);
myTimeout2 = setInterval(slider2, 1000);

function slider(){
    if (cpt == 3){
        letters[cpt].classList.toggle("gauche");
        letters[cpt+1].classList.toggle("centre");
        letters[cpt+1].classList.toggle("gauche");
        letters[cpt+2].classList.toggle("droite");
        letters[cpt+2].classList.toggle("centre");
        letters[0].classList.toggle("droite");
    }else if(cpt == 4){
        letters[cpt].classList.toggle("gauche");
        letters[cpt+1].classList.toggle("centre");
        letters[cpt+1].classList.toggle("gauche");
        letters[0].classList.toggle("droite");
        letters[0].classList.toggle("centre");
        letters[1].classList.toggle("droite");
    }else if (cpt == 5){
        letters[cpt].classList.toggle("gauche");
        letters[0].classList.toggle("centre");
        letters[0].classList.toggle("gauche");
        letters[1].classList.toggle("droite");
        letters[1].classList.toggle("centre");
        letters[2].classList.toggle("droite");
    }else {
        letters[cpt].classList.toggle("gauche");
        letters[cpt+1].classList.toggle("centre");
        letters[cpt+1].classList.toggle("gauche");
        letters[cpt+2].classList.toggle("droite");
        letters[cpt+2].classList.toggle("centre");
        letters[cpt+3].classList.toggle("droite");
    }
    
    cpt++
    if (cpt == 6){
        cpt = 0;
    }
    console.log(letters[cpt])
}

function slider2(){
    if (cpt2 == 3){
        letters2[cpt2].classList.toggle("gauche");
        letters2[cpt2+1].classList.toggle("centre");
        letters2[cpt2+1].classList.toggle("gauche");
        letters2[cpt2+2].classList.toggle("droite");
        letters2[cpt2+2].classList.toggle("centre");
        letters2[0].classList.toggle("droite");
    }else if(cpt2 == 4){
        letters2[cpt2].classList.toggle("gauche");
        letters2[cpt2+1].classList.toggle("centre");
        letters2[cpt2+1].classList.toggle("gauche");
        letters2[0].classList.toggle("droite");
        letters2[0].classList.toggle("centre");
        letters2[1].classList.toggle("droite");
    }else if (cpt2 == 5){
        letters2[cpt2].classList.toggle("gauche");
        letters2[0].classList.toggle("centre");
        letters2[0].classList.toggle("gauche");
        letters2[1].classList.toggle("droite");
        letters2[1].classList.toggle("centre");
        letters2[2].classList.toggle("droite");
    }else {
        letters2[cpt2].classList.toggle("gauche");
        letters2[cpt2+1].classList.toggle("centre");
        letters2[cpt2+1].classList.toggle("gauche");
        letters2[cpt2+2].classList.toggle("droite");
        letters2[cpt2+2].classList.toggle("centre");
        letters2[cpt2+3].classList.toggle("droite");
    }
    cpt2++
    if (cpt2 == 6){
        cpt2 = 0;
    }
}