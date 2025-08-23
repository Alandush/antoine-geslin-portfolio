// Initialisation

let memoires = document.querySelectorAll("#js-memory");
let resultatUn;
let resultatDeux;
let resultatTrois;
let resultatQuatre;

let gameOn = false;
let etapeUn = false;
let etapeDeux = false;
let etapeTrois = false;
let etapeQuatre = false;

let timeout = 500;


window.addEventListener("pageshow", (e) => { 
    etapeUn = false;
    etapeDeux = false;
    etapeTrois = false;
    calculerAleatoirement();
    animerMemoire();
    gameOn = false;
});

// Memory

memoires.forEach((memoire, id) => {
    memoire.addEventListener("click", (e) => {
        if (gameOn) {
            memoire.style.backgroundColor = "var(--blanc-nuance)";
            setTimeout(() => {
                memoire.style.backgroundColor = "var(--noir-nuance)";
            }, timeout);
            if (id == resultatUn && etapeUn == false) {
                etapeUn = true;
            } else if (id == resultatDeux && etapeUn == true) {
                etapeUn = false;
                etapeDeux = true;
            } else if (id == resultatTrois && etapeDeux == true) {
                etapeDeux = false;
                etapeTrois = true;
            } else if (id == resultatQuatre && etapeTrois == true) {
                transitionToChangePage();
            } else {
                etapeUn = false;
                etapeDeux = false;
                etapeTrois = false;
                calculerAleatoirement();
                animerMemoire();
                gameOn = false;
            }
        }
    });
});

calculerAleatoirement();

animerMemoire();


// Function

function animerMemoire() {
    setTimeout(() => {
        memoires[resultatUn].style.backgroundColor = "var(--blanc-nuance)";
        setTimeout(() => {
            memoires[resultatUn].style.backgroundColor = "var(--noir-nuance)";
            setTimeout(() => {
                memoires[resultatDeux].style.backgroundColor = "var(--blanc-nuance)";
            }, timeout/10);
            setTimeout(() => {
                memoires[resultatDeux].style.backgroundColor = "var(--noir-nuance)";
                setTimeout(() => {
                    memoires[resultatTrois].style.backgroundColor = "var(--blanc-nuance)";
                }, timeout/10);
                setTimeout(() => {
                    memoires[resultatTrois].style.backgroundColor = "var(--noir-nuance)";
                    setTimeout(() => {
                        memoires[resultatQuatre].style.backgroundColor = "var(--blanc-nuance)";
                    }, timeout/10);
                    setTimeout(() => {
                        memoires[resultatQuatre].style.backgroundColor = "var(--noir-nuance)";
                        gameOn = true;
                    }, timeout);
                }, timeout);
            }, timeout);
        }, timeout);
    }, timeout*2);
}



function calculerAleatoirement() {
    resultatUn = Math.floor(Math.random() * 9);
    resultatDeux = Math.floor(Math.random() * 9);
    resultatTrois = Math.floor(Math.random() * 9);
    resultatQuatre = Math.floor(Math.random() * 9);

}
