// Initialisation

let circleMouse = document.querySelector("#js-mouse-circle");
let circleGoal = document.querySelector("#js-mouse-circle-goal");
let circleGoalBlur = document.querySelector("#js-mouse-circle-blur");

// Variables pour définir la zone de l'objectif
let goalBounds = circleGoal.getBoundingClientRect();



let circleTaken = false;
let intervalActif;
let intervalPassif;

// Jeu de la souris

circleMouse.style.left = Math.floor(Math.random() *75) + "%";
circleMouse.style.top = Math.floor(Math.random() *75) + "%";
activerAnimation();

circleMouse.addEventListener("mousedown", (e) => {
    circleTaken = true;
    clearInterval(intervalPassif);
    circleMouse.style.transition = "none";
    circleMouse.style.transform = "translate(-50%, -50%)";
    intervalActif = setInterval(() => {
        circleMouse.style.left = coords.x + "px";
        circleMouse.style.top = coords.y + "px";
    }, 1);
});

document.addEventListener("mouseup", (e) => {
    circleTaken = false;
    circleMouse.style.transform = "none";
    circleMouse.style.transition = "all ease-in-out 1000ms";
    clearInterval(intervalPassif);
    clearInterval(intervalActif);
    activerAnimation();
});

circleGoal.addEventListener("mouseover", (e) =>{
    if (circleTaken) {
        circleGoalBlur.style.opacity = "1";
        setTimeout(() => {
            transitionToChangePage();
        }, 500);
    }
});

circleGoal.addEventListener("mouseout", (e) =>{
    circleGoalBlur.style.opacity = "0";

});

// Telephone

circleMouse.addEventListener("touchstart", (e) => {
    circleTaken = true;
    clearInterval(intervalPassif);
    circleMouse.style.transition = "none";
    circleMouse.style.transform = "translate(-50%, -50%)";
    intervalActif = setInterval(() => {
        circleMouse.style.left = coords.x + "px";
        circleMouse.style.top = coords.y + "px";
    }, 1);
});

document.addEventListener("touchmove", (e) => {
    coords.x = e.touches[0].clientX;
    coords.y = e.touches[0].clientY;
    if (coords.x >= goalBounds.left &&
        coords.x <= goalBounds.right &&
        coords.y >= goalBounds.top &&
        coords.y <= goalBounds.bottom && 
        circleTaken
    ) {
        circleGoalBlur.style.opacity = "1";
        setTimeout(() => {
            transitionToChangePage();
        }, 500);
    }

    

});

document.addEventListener("touchend", (e) => {
    circleTaken = false;
    circleMouse.style.transform = "none";
    circleMouse.style.transition = "all ease-in-out 1000ms";
    clearInterval(intervalPassif);
    clearInterval(intervalActif);
    activerAnimation();
});

circleGoal.addEventListener("touchstart", (e) =>{

});

circleGoal.addEventListener("touchcancel", (e) =>{
    circleGoalBlur.style.opacity = "0";

});

circleGoal.addEventListener("touchend", (e) =>{
    circleGoalBlur.style.opacity = "0";

});

function activerAnimation() {
    intervalPassif = setInterval(() => {
        circleMouse.style.left = Math.floor(Math.random() *75) + "%";
        circleMouse.style.top = Math.floor(Math.random() *75) + "%";
    }, 1000);
}

// Fonction de mise à jour des coordonnées de l'objectif (utile si la page est redimensionnée)
function updateGoalBounds() {
    goalBounds = circleGoal.getBoundingClientRect();
}