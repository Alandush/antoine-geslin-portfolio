// --------------------------------- INIT --------------------------------- //

let clickerCercles = document.querySelectorAll("#js-clicker-cercle");

let scaleMax = 1.1;

let resetScaleOne;
let resetScaleTwo;

let victoireClicker = false;

clickerCercles.forEach(clickerCercle => {
    clickerCercle.addEventListener("pointerdown", () => {

        clearTimeout(resetScaleOne);
        clearTimeout(resetScaleTwo);

        if(victoireClicker){
            return;
        }

        scaleMax += 0.1;


        clickerCercles[0].style.transform = `translate(-50%, -50%) scale(${scaleMax})`;

        clickerCercles[1].style.transform = `translate(-50%, -50%) scale(${scaleMax+0.1})`;
        clickerCercles[1].style.opacity = `0.5`;

        resetScaleOne = setTimeout(() => {
            clickerCercles[0].style.transform = "translate(-50%, -50%) scale(1)";
            scaleMax = 1.1;
        }, 1000);

        resetScaleTwo = setTimeout(() => {
            clickerCercles[1].style.transform = "translate(-50%, -50%) scale(1)";
            scaleMax = 1.1;
        }, 1000);

        if (clickerCercles[0].style.transform == `translate(-50%, -50%) scale(1.6)`) {
            victoireClicker = true;  

            clickerCercles[0].style.transition = "all ease-in 1000ms"
            clickerCercles[1].style.transition = "all ease-in 1000ms"

            clickerCercles[0].style.transform = `translate(-50%, -50%) scale(8)`;
            clickerCercles[1].style.transform = `translate(-50%, -50%) scale(8.1)`;          
        }
    })
});


clickerCercles[0].addEventListener("transitionend", () => { // Quand l'animation se termine et qu'on a cliqué sur un lien qui change de page, on se dirige vers une nouvelle page
    if (victoireClicker && window.location.pathname.endsWith('clicker.html')) {
        window.location.href = 'developpement.html';
    }

});


