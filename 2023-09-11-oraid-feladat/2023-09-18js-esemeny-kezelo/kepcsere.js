//-- globális kontansok és véltozók megadása
const kep = document.querySelector('#kep');
const gomb = document.querySelector('#szinesGomb');
var allapot = "feketefeher";

//-- eseménykezelő hozzárendelés
gomb.addEventListener('click', kepcsere);
kep.addEventListener('mouseenter', szinesbe);

//-- eseménykezelő függvények
function kepcsere(){
    if(allapot ==  "feketefeher"){
        kep.src = "kepek/szines.png";
        gomb.innerHTML = "feketefeher";
        allapot = "szines";
    }
    else{
        kep.src = "kepek/feketefeher.png";
        gomb.innerHTML = "szines";
        allapot = "feketefeher";
    }
}

function szinesbe(){
    if(allapot ==  "feketefeher"){
        kep.src = "kepek/szines.png";
        gomb.innerHTML = "feketefeher";
        allapot = "szines";
    }
    else{
        kep.src = "kepek/feketefeher.png";
        gomb.innerHTML = "szines";
        allapot = "feketefeher";
    }
}

