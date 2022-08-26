const bt = document.querySelector('#bt');
function afficher(){ 

    let nbr = parseInt(prompt('Entree un nombr'));
    while(nbr <10  nbr >20){   
        if(nbr <10){
            console.log('Trop petit');
        }
        if(nbr > 20){
            console.log('Trop grand');
        }
        nbr = parseInt(prompt('Entree un nombr'));
    }
}
bt.addEventListener('click', afficher);