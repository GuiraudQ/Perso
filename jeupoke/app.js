let match = document.getElementById('match')
let header = document.getElementById('header')
let fight = document.getElementById('fight')
let poke1 = document.getElementById('poke1')
let poke2 = document.getElementById('poke2')
let attak = document.getElementById('attak')

let dauphino, papillo, salamandro, requino, scarabo, oursoenfeu, meduso, arbro, toufeutouflam;
let pokeList = [dauphino, papillo, salamandro, requino, scarabo, oursoenfeu, meduso, arbro, toufeutouflam];
let pokeName = ['Dauphino', 'Papillo', 'Salamandro', 'Requino', 'Scarabo', 'Oursoenfeu', 'Meduso', 'Arbro', 'Toufeutouflam'];
let typeList = ['feu', 'eau', 'plante', 'normal'];
let sort = ['fireball', 'waterball', 'grassball', 'fireblast', 'waterblast', 'grassblast'];
let combattant = []
let tour = 0;

function poke(name,type, atk1, atk2, atk3,baseAtk, hp, currentHp){
    this.name = name;
    this.type = type;
    this.atk1 = atk1;
    this.atk2 = atk2;
    this.atk3 = atk3;
    this.baseAtk = baseAtk;
    this.hp = hp;
    this.currentHp = currentHp;

    this.attaque = function(cible){
        cible.currentHp -= this.baseAtk;
        console.log(`${cible.name} perd ${this.baseAtk} point de vie`)
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.fireball = function(cible){
        if (this.type == 'feu' && cible.type == 'plante'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else if (this.type == 'feu' || cible.type == 'plante'){
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk;
            console.log(`${cible.name} perd ${this.baseAtk} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.waterball = function(cible){
        if (this.type == 'eau' && cible.type == 'feu'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else if (this.type == 'eau' || cible.type == 'feu'){
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk;
            console.log(`${cible.name} perd ${this.baseAtk} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.grassball = function(cible){
        if (this.type == 'plante' && cible.type == 'eau'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else if (this.type == 'plante' || cible.type == 'eau'){
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk;
            console.log(`${cible.name} perd ${this.baseAtk} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.fireblast = function(cible){
        if (this.type == 'feu' && cible.type == 'plante'){
            cible.currentHp -= this.baseAtk*8;
            console.log(`${cible.name} perd ${this.baseAtk*8} point de vie`)
        }else if (this.type == 'feu' || cible.type == 'plante'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.waterblast = function(cible){
        if (this.type == 'eau' && cible.type == 'feu'){
            cible.currentHp -= this.baseAtk*8;
            console.log(`${cible.name} perd ${this.baseAtk*8} point de vie`)
        }else if (this.type == 'eau' || cible.type == 'feu'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.grassblast = function(cible){
        if (this.type == 'plante' && cible.type == 'eau'){
            cible.currentHp -= this.baseAtk*8;
            console.log(`${cible.name} perd ${this.baseAtk*8} point de vie`)
        }else if (this.type == 'plante' || cible.type == 'eau'){
            cible.currentHp -= this.baseAtk*4;
            console.log(`${cible.name} perd ${this.baseAtk*4} point de vie`)
        }else {
            cible.currentHp -= this.baseAtk*2;
            console.log(`${cible.name} perd ${this.baseAtk*2} point de vie`)
        }
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.potion = function(){
        this.currentHp += 50;
        console.log(`${this.name} gagne 50 hp`)
        tour++;
        if (tour > 1){
            tour = 0;
        }
        test()
    }
    this.presente = function(){
        console.log(`Bonjour je suis ${this.name}, je suis de type ${this.type}, j'ai ${this.hp} point de vie et ${this.baseAtk} point de degat`);
    }
}

function newPoke(){
    rdm = Math.floor(Math.random()*pokeList.length);

    pokeList[rdm] = new poke();
    pokeList[rdm].name = pokeName[Math.floor(Math.random()*pokeName.length)];
    pokeList[rdm].type = typeList[Math.floor(Math.random()*typeList.length)];
    pokeList[rdm].atk1 = sort[Math.floor(Math.random()*sort.length)];
    pokeList[rdm].atk2 = sort[Math.floor(Math.random()*sort.length)];
    while (pokeList[rdm].atk2 == pokeList[rdm].atk1){
        pokeList[rdm].atk2 = sort[Math.floor(Math.random()*sort.length)];
    }
    pokeList[rdm].atk3 = sort[Math.floor(Math.random()*sort.length)];
    while (pokeList[rdm].atk3 == pokeList[rdm].atk1 || pokeList[rdm].atk3 == pokeList[rdm].atk2){
        pokeList[rdm].atk3 = sort[Math.floor(Math.random()*sort.length)];
    }
    pokeList[rdm].baseAtk = Math.floor(Math.random()*15)+5;
    pokeList[rdm].hp = Math.floor(Math.random()*10)*10+100;
    pokeList[rdm].currentHp = pokeList[rdm].hp;

    combattant.push(pokeList[rdm])
    pokeList[rdm].presente()
}
newPoke()
newPoke()

poke1.innerHTML = ` <h3>${combattant[0].name}</h3>
                    <img src="./744878.png" alt="">
                    <p>${combattant[0].currentHp} / ${combattant[0].hp}</p>
                    <p>${combattant[0].type}</p>
                    <p>${combattant[0].baseAtk}</p>`;
poke2.innerHTML = ` <h3>${combattant[1].name}</h3>
                    <img src="./744878.png" alt="">
                    <p>${combattant[1].currentHp} / ${combattant[1].hp}</p>
                    <p>${combattant[1].type}</p>
                    <p>${combattant[1].baseAtk}</p>`;

function maDiv (poke, element, cible){
    let divElement;
    if (element == 'fireball'){
        divElement =  `<div class="option" onclick="(${poke}.fireball(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    if (element == 'waterball'){
        divElement =  `<div class="option" onclick="(${poke}.waterball(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    if (element == 'grassball'){
        divElement =  `<div class="option" onclick="(${poke}.grassball(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    if (element == 'fireblast'){
        divElement =  `<div class="option" onclick="(${poke}.fireblast(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    if (element == 'waterblast'){
        divElement =  `<div class="option" onclick="(${poke}.waterblast(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    if (element == 'grassblast'){
        divElement =  `<div class="option" onclick="(${poke}.grassblast(${cible}))" >
                        <p>${element}</p>
                    </div>`
    }
    return divElement
}

function test(){
    let divAtk1;
    if (tour == 0){
        header.innerHTML = `<h1>C'est le tour de ${combattant[0].name}</h1>`;
        poke2.style.background = 'rgb(210,210,230)';
        poke2.style.opacity = '0.5';
        poke1.style.background = 'lavender';
        poke1.style.opacity = '1';

        attak.innerHTML = 
        `
        <div class="option" onclick="(combattant[0].attaque(combattant[1]))">
            <p>Attaquer</p>
        </div>
        ${maDiv("combattant[0]", combattant[0].atk1,"combattant[1]")}
        <div class="option" onclick="(combattant[0].potion())">
            <p>Potion</p>
        </div>
        ${maDiv("combattant[0]", combattant[0].atk2,"combattant[1]")}
        ${maDiv("combattant[0]", combattant[0].atk3,"combattant[1]")}
        `;
        poke1.innerHTML = ` <h3>${combattant[0].name}</h3>
                            <img src="./744878.png" alt="">
                            <p>${combattant[0].currentHp} / ${combattant[0].hp}</p>
                            <p>${combattant[0].type}</p>
                            <p>${combattant[0].baseAtk}</p>`;
        poke2.innerHTML = ` <h3>${combattant[1].name}</h3>
                            <img src="./744878.png" alt="">
                            <p>${combattant[1].currentHp} / ${combattant[1].hp}</p>
                            <p>${combattant[1].type}</p>
                            <p>${combattant[1].baseAtk}</p>`;

    }else if (tour == 1){
        header.innerHTML = `<h1>C'est le tour de ${combattant[tour].name}</h1>`;
        poke1.style.background = 'rgb(210,210,230)';
        poke1.style.opacity = '0.5';
        poke2.style.background = 'lavender';
        poke2.style.opacity = '1';

        attak.innerHTML = 
        `
        <div class="option" onclick="(combattant[1].attaque(combattant[0]))">
            <p>Attaquer</p>
        </div>
        ${maDiv("combattant[1]", combattant[1].atk1,"combattant[0]")}
        <div class="option" onclick="(combattant[1].potion())">
            <p>Potion</p>
        </div>
        ${maDiv("combattant[1]", combattant[1].atk2,"combattant[0]")}
        ${maDiv("combattant[1]", combattant[1].atk3,"combattant[0]")}
        `;
        poke1.innerHTML = ` <h3>${combattant[0].name}</h3>
                            <img src="./744878.png" alt="">
                            <p>${combattant[0].currentHp} / ${combattant[0].hp}</p>
                            <p>${combattant[0].type}</p>
                            <p>${combattant[0].baseAtk}</p>`;
        poke2.innerHTML = ` <h3>${combattant[1].name}</h3>
                            <img src="./744878.png" alt="">
                            <p>${combattant[1].currentHp} / ${combattant[1].hp}</p>
                            <p>${combattant[1].type}</p>
                            <p>${combattant[1].baseAtk}</p>`;
    }
}
test()