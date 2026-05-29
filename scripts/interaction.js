// Initialisation

const transitionBlack = document.querySelector("#js-black-transition");

let transition   = false;
let retourAll    = false;
let destinationUrl = null;

// Révèle la page au chargement
setTimeout(() => {
    transitionBlack.classList.toggle("top-minus-50");
}, 250);

window.addEventListener("pageshow", () => {
    if (retourAll) {
        transitionBlack.classList.toggle("top-minus-50");
        retourAll  = false;
        transition = false;
    }
});

// Navigue vers la destination après la fin de la transition
transitionBlack.addEventListener("transitionend", () => {
    if (!transition) return;

    if (destinationUrl && !logoBurgerBool) {
        retourAll = true;
        const url  = destinationUrl;
        destinationUrl = null;
        window.location.href = url;
    } else if (idBurger === 0) {
        retourAll = true;
        window.location.href = 'index.html';
    } else if (idBurger === 1) {
        retourAll = true;
        window.location.href = 'developpement.html';
    } else if (idBurger === 2) {
        retourAll = true;
        window.location.href = 'audiovisuel.html';
    } else if (idBurger === 3) {
        retourAll = true;
        window.location.href = 'design.html';
    }
});

function transitionToChangePage() {
    transitionBlack.classList.remove("top-minus-50");
    transition = true;
}
