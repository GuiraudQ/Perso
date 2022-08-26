//Declaration de mes variables
let width = 1200;
let height = 800;
let column = 10;
let rows = 16;
let blockSize = 50;

let grille = [];
let saveGrille = [];

let a = 3;
let b = 0;

document.addEventListener('keypress', touche);

//Creation du canvas
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//Creation des matrices et initialisation a false
for (let i = 0; i < column; i++){
    let newGrille = [];
    grille.push(i);
    for (let j = 0; j < rows; j++){
        newGrille.push(false);
        ctx.fillStyle = 'teal';
        ctx.stroke();
        ctx.rect(i*blockSize, j*blockSize, blockSize, blockSize);
        ctx.fillRect(i*blockSize, j*blockSize, blockSize, blockSize);
    }
    grille[i]= newGrille;
}
for (let i = 0; i < column; i++){
    let newGrille2 = [];
    saveGrille.push(i);
    for (let j = 0; j < rows; j++){
        newGrille2.push(false);
    }
    saveGrille[i]= newGrille2;
}

//Affichage des block
function afficher(){
    for (let i = 0; i < column; i++){
        for (let j = 0; j < rows; j++){
            if (grille[i][j] == true || saveGrille[i][j] == true){
                ctx.fillStyle = 'crimson';
                ctx.fillRect(i*blockSize, j*blockSize, blockSize, blockSize);
            }else {
                ctx.fillStyle = 'teal';
                ctx.fillRect(i*blockSize, j*blockSize, blockSize, blockSize);
                ctx.stroke();
            }
        }
    }
}

//Creation des block
function bloc0(tab){  
    tab[a][b] = true;
    tab[a+1][b] = true;
    tab[a+1][b+1] = true;
    tab[a+2][b] = true;
}
function bloc1(tab){
    tab[a][b] = true;
    tab[a+1][b] = true;
    tab[a+2][b] = true;
    tab[a+3][b] = true;
}
function bloc2(tab){
    tab[a][b] = true;
    tab[a][b+1] = true;
    tab[a+1][b] = true;
    tab[a+1][b+1] = true;
}
function bloc3(tab){
    tab[a][b] = true;
    tab[a+1][b] = true;
    tab[a+1][b+1] = true;
    tab[a+2][b+1] = true;
}
function bloc4(tab){
    tab[a][b+1] = true;
    tab[a+1][b+1] = true;
    tab[a+1][b] = true;
    tab[a+2][b] = true;
}
function bloc5(tab){
    tab[a][b+1] = true;
    tab[a][b] = true;
    tab[a+1][b] = true;
    tab[a+2][b] = true;
}
function bloc6(tab){
    tab[a][b] = true;
    tab[a+1][b] = true;
    tab[a+2][b] = true;
    tab[a+2][b+1] = true;
}

//Detection de mes touches
function touche(e) {
    console.log(e.key)
    switch (e.key) {
        case 'd':
            a++
          break;
        case 'q':
            a--
          break;
        case 'x':
        animation()
        break;
      }
}

//Creation et animation de mes blocks
function animation(){
    let rdmBlock = Math.floor(Math.random()*6);
    
    var timer = setInterval(function(){
//Reinitialiser la grille a chaque tour
        for (let i = 0; i < column; i++){
            for (let j = 0; j < rows; j++){
                grille[i][j]=saveGrille[i][j];
            }
        }

//Creation d'un block random
        if (rdmBlock == 0 && b<15){
            bloc0(grille)
            b++;
            if (b>=15){
                b--
                bloc0(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 1 && b<16){
            bloc1(grille)
            b++;
            if (b>=16){
                b--
                bloc1(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 2 && b<15){
            bloc2(grille)
            b++;
            if (b>=15){
                b--
                bloc2(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 3 && b<15){
            bloc3(grille)
            b++;
            if (b>=15){
                b--
                bloc3(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 4 && b<15){
            bloc4(grille)
            b++;
            if (b>=15){
                b--
                bloc4(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 5 && b<15){
            bloc5(grille)
            b++;
            if (b>=15){
                b--
                bloc5(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        if (rdmBlock == 6 && b<15){
            bloc6(grille)
            b++;
            if (b>=15){
                b--
                bloc6(saveGrille);
                b = 0;
                clearTimeout(timer);
            }
        }
        afficher()        
    },500)
}

animation()