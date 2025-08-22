// Initialisation

const bubbleAudio = document.querySelector("#js-bubble-audio");
const bubbleCountdown = document.querySelector("#js-bubble-countdown");

let countdown = 5;
// Création de bulles

setInterval(createBubble, 50);

// Fonction

function createBubble(){
    // Tout les 50ms on crée une bulle d'une taille différente dans la section approprié qui se dirigera toujours vers le haut
    const bubble = document.querySelector("#js-bubble");
    const createElement = document.createElement("span");
    let size = Math.random() * 60;

    createElement.classList.add("bubble-animation");
    createElement.style.width = 20 + size + "px";
    createElement.style.height = 20 + size + "px";
    createElement.style.left = Math.random() * innerWidth + "px";

    // Lorsqu'on clique dessus on applique une animation d'éclatement et on supprime la bulle touché
    createElement.addEventListener('pointerdown', (e) => {
        createElement.style.filter = "blur(100px)";
        bubbleAudio.currentTime = 0;
        bubbleAudio.play();

        countdown--;
        bubbleCountdown.textContent = countdown;

        if (countdown <= 0) {
            transitionToChangePage();
        }

        setTimeout(() => {
            createElement.remove();
        }, 500);
    });

    bubble.appendChild(createElement);

    // Au bout de 4s la bulle est supprimé
    setTimeout(() => {
        createElement.remove();
    }, 4000);

}
