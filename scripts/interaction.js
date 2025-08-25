// Initialisation

const transitionBlack = document.querySelector("#js-black-transition");


let transition = false;

let retourAll = false;

// Transition

setTimeout(() => { // Au lancemenent de la page on lance l'animation pour voir le contenu
    transitionBlack.classList.toggle("top-minus-50"); 
}, 250);

window.addEventListener("pageshow", (e) => { 
    if(retourAll) {
        console.log(1);
        transitionBlack.classList.toggle("top-minus-50");
        retourAll = false;
        transition = false;
    }
    
});

transitionBlack.addEventListener("transitionend", (e) => { // Quand l'animation se termine et qu'on a cliqué sur un lien qui change de page, on se dirige vers une nouvelle page
    if (transition && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'choix.html';
    } else if (transition && window.location.pathname.endsWith('choix.html') && normal == true && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'n-sections.html';
    } else if (transition && window.location.pathname.endsWith('choix.html') && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'bubble.html';
    } else if (transition && window.location.pathname.endsWith('bubble.html') && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'd-sections.html';
    } else if (transition && window.location.pathname.endsWith('mouse-game.html') && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'design.html'; 
    } else if (transition && window.location.pathname.endsWith('memory-game.html') && !logoBurgerBool) {
        retourAll = true;
        window.location.href = 'audiovisuel.html'; 
    }  else if (transition && idBurger == 0) {
        retourAll = true;
        window.location.href = 'index.html';
    }  else if (transition && idBurger == 1) {
        retourAll = true;
        window.location.href = 'n-sections.html';
    }  else if (transition && idBurger == 2) {
        retourAll = true;
        window.location.href = 'd-sections.html';
    }  else if (transition && idBurger == 3) {
        retourAll = true;
        window.location.href = 'index.html#contact'; 
    }
});

function transitionToChangePage() {
    transitionBlack.classList.remove("top-minus-50");
    transition = true; 
}









