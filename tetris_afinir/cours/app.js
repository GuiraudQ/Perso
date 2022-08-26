function afficher(){
    let nbr1 = document.querySelector('#nbr1').value;
    let nbr2 = document.querySelector('#nbr2').value;
    
    let resultat = document.querySelector('#resultat');
    
    nbr1 = parseInt(nbr1);
    nbr2 = parseInt(nbr2);

//Verif de nbr1
    if (!isNaN(nbr1) && nbr1 < 24){
//Verif de nbr2
        if (!isNaN(nbr2) && nbr2 < 60) {
            if (nbr2 < 59 && nbr1 < 23){
                console.log('il est ' + nbr1 + 'h' + nbr2+1);
                resultat.innerHTML ='il est '+ nbr1 + 'h' + (nbr2+1);
            } else if(nbr1 < 23){
                nbr2 = 0;
                console.log('il est ' + nbr1+1 + 'h' + nbr2);
                resultat.innerHTML ='il est ' + (nbr1+1) + 'h' + nbr2;
            } else{
                nbr2 = 0;
                nbr1 = 0;
                console.log('il est ' + nbr1 + 'h' + nbr2);
                resultat.innerHTML ='il est ' + (nbr1) + 'h' + nbr2;
            }
//Si verif de nbr2 echoue
        }else {
            console.log('Le deuxieme chiffre n est pas bon');
            resultat.innerHTML ='Le deuxieme chiffre n est pas bon';
        }
//Si verif de nbr1 echoue
    }else {
        console.log('Le premier chiffre n est pas bon');
        resultat.innerHTML ='Le premier chiffre n est pas bon';
    }
}