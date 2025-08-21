/* TO DO LIST 
-faire un menu présentant les 4 principaux domaines, programmation, audiovisuel, design 
-faire un toggle pour désactiver/activer la navigation divertissement
*/


// Initialisation

const progressingBar = document.querySelector("#js-progressing-bar");
const progressingBarContent = document.querySelector("#js-progressing-bar-content");
const progressingBarSFX = document.querySelector("#js-progressing-bar-sfx");

const explanationDivertissement = document.querySelector(".explanation-divertissement");
const directionChangeIndex = document.querySelector("#js-direction-change-index");



// Hover du progressing bar
progressingBar.addEventListener("mouseenter", function(e) {
  circles.forEach(function (circle, index) { // On change la couleur du curseur quand on met la souris sur le pBar
    circle.style.backgroundColor = "#111111";
  });
});

progressingBar.addEventListener("mouseleave", function(e) {
  circles.forEach(function (circle, index) { // On revient a la couleur initial du curseur quand on quitte le pBar
    circle.style.backgroundColor = "#E5CFBC";
  });
});

// Le progressing bar
progressingBar.addEventListener("mousedown", function(e) { // Lorsqu'on clique dessus, on active l'animation, le son et on compare la taille du contenant avec la taille de la bar
  progressingBarContent.classList.toggle("progressing-bar-full");
  progressingBar.classList.toggle("background-color-white-opacity-down");

  // Ici on compare la difference entre la taille du cont pBar et du pBar pour calculer en pourcentage (entre 0 et 1) l'avancé de l'animation, cela permet de mettre en place un calcul dans le temps pour savoir a quel pourcentage on lance le son
  const progressingBarWidthSize = parseFloat(window.getComputedStyle(progressingBarContent).width);
  const progressingBarWidthSizeTotal = parseFloat(window.getComputedStyle(progressingBar).width);
  progressingBarSFX.currentTime = progressingBarWidthSize/progressingBarWidthSizeTotal;

  progressingBarSFX.muted = false;
  progressingBarSFX.play();
});

progressingBar.addEventListener("mouseup", function(e) { // Lorsqu'on relache la souris on desactive l'animation et le son
  progressingBarContent.classList.toggle("progressing-bar-full");
  progressingBarSFX.muted = true;
  progressingBar.classList.toggle("background-color-white-opacity-down");
});

progressingBar.addEventListener("mouseleave", function(e) {
  if (progressingBarContent.classList.contains("progressing-bar-full")) { // Si on quitte le pBar et qu'on avait déja cliqué, on desactive l'anim et le son
    progressingBarContent.classList.toggle("progressing-bar-full");
    progressingBarSFX.muted = true;
    progressingBar.classList.toggle("background-color-white-opacity-down");
  }
});

// Le progressing bar
progressingBar.addEventListener("touchstart", function(e) { // Lorsqu'on clique dessus, on active l'animation, le son et on compare la taille du contenant avec la taille de la bar
  progressingBarContent.classList.toggle("progressing-bar-full");
  progressingBar.classList.toggle("background-color-white-opacity-down");

  // Ici on compare la difference entre la taille du cont pBar et du pBar pour calculer en pourcentage (entre 0 et 1) l'avancé de l'animation, cela permet de mettre en place un calcul dans le temps pour savoir a quel pourcentage on lance le son
  const progressingBarWidthSize = parseFloat(window.getComputedStyle(progressingBarContent).width);
  const progressingBarWidthSizeTotal = parseFloat(window.getComputedStyle(progressingBar).width);
  progressingBarSFX.currentTime = progressingBarWidthSize/progressingBarWidthSizeTotal;

  progressingBarSFX.muted = false;
  progressingBarSFX.play();
});

progressingBar.addEventListener("touchend", function(e) { // Lorsqu'on relache la souris on desactive l'animation et le son
  progressingBarContent.classList.toggle("progressing-bar-full");
  progressingBarSFX.muted = true;
  progressingBar.classList.toggle("background-color-white-opacity-down");
});

progressingBar.addEventListener("touchcancel", function(e) {
  if (progressingBarContent.classList.contains("progressing-bar-full")) { // Si on quitte le pBar et qu'on avait déja cliqué, on desactive l'anim et le son
    progressingBarContent.classList.toggle("progressing-bar-full");
    progressingBarSFX.muted = true;
    progressingBar.classList.toggle("background-color-white-opacity-down");
  }
});

// Explication 

progressingBar.addEventListener("click", function(e) {
  setTimeout(() => { // Apres le clic sur le pBar on active le txtExp pour qu'il puisse etre lisible
    explanationDivertissement.classList.add("opacity-up");
  }, 500);
});

directionChangeIndex.addEventListener("mouseenter", function(e) { // Si on met la souris dessus il se deplace a gauche ou a droite
  if (window.innerWidth > 1024) {
    if (explanationDivertissement.style.left == "25%") {
      explanationDivertissement.style.left = "75%";
    } else {
      explanationDivertissement.style.left = "25%";
    }
  }
    
});

directionChangeIndex.addEventListener("click", function(e) {
  explanationDivertissement.classList.remove("opacity-up");
});

// Créer un observer pour surveiller les changements de dimension de l'élément
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) { 
    const progressingBarContentWidth = entry.contentRect.width;
    const progressingBarWidth = progressingBar.clientWidth;

    if (progressingBarContentWidth >= progressingBarWidth-1) { // Lorsque l'animation est complété on active l'animation de transition et on change de page
      setTimeout(() => {
        transitionToChangePage();
      }, 350);
    }
  }
});

// Observer les changements de dimension de l'élément
resizeObserver.observe(progressingBarContent);
