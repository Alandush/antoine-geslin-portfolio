let normalBoutonActif = document.querySelector(".bouton-actif-choix");
let normal = false;

normalBoutonActif.addEventListener("click", () => {
    normal = true;
    transitionToChangePage();
});