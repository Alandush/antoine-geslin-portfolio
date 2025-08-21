// Initialisation

const transitionBlack = document.querySelector("#js-black-transition");


let transition = false;

// Transition

setTimeout(() => { // Au lancemenent de la page on lance l'animation pour voir le contenu
    transitionBlack.classList.toggle("top-minus-50"); 
}, 250);



transitionBlack.addEventListener("transitionend", (e) => { // Quand l'animation se termine et qu'on a cliqué sur un lien qui change de page, on se dirige vers une nouvelle page
    if (transition && window.location.pathname.endsWith('index.html') && !logoBurgerBool) {
        window.location.href = 'choix.html';
        console.log(1);
    } else if (transition && window.location.pathname.endsWith('choix.html') && normal == true && !logoBurgerBool) {
        window.location.href = 'n-sections.html';
    } else if (transition && window.location.pathname.endsWith('choix.html') && !logoBurgerBool) {
        window.location.href = 'bubble.html';
    } else if (transition && window.location.pathname.endsWith('bubble.html') && !logoBurgerBool) {
        window.location.href = 'd-sections.html';
    } else if (transition && window.location.pathname.endsWith('mouse-game.html') && !logoBurgerBool) {
        window.location.href = 'design.html'; 
    } else if (transition && window.location.pathname.endsWith('memory-game.html') && !logoBurgerBool) {
        window.location.href = 'audiovisuel.html'; 
    }  else if (transition && idBurger == 0) {
        window.location.href = 'index.html';
    }  else if (transition && idBurger == 1) {
        window.location.href = 'n-sections.html';
    }  else if (transition && idBurger == 2) {
        window.location.href = 'd-sections.html';
    }  else if (transition && idBurger == 3) {
        window.location.href = 'index.html#contact'; 
    }
});

function transitionToChangePage() {
    transitionBlack.classList.remove("top-minus-50");
    transition = true; 
}

