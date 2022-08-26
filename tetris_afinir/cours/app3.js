function afficher() {
    let mot = document.querySelector('#mot').value;
    let resultat = document.querySelector('#resultat');

    for(let i =0; i <mot.length; i++){
        console.log(1); 
        resultat.innerHTML += '<p>1<p/>'; 
    }
}

