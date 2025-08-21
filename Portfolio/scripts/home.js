// INITIALISATION 

let noirEtBlancHomeImages = document.querySelectorAll("#js-black-and-white-image");
let couleurHomeImages = document.querySelectorAll("#js-image-home-transition");
let containerHomeImages = document.querySelectorAll("#js-container-image-home");
let boutonScripts = document.querySelectorAll(".bouton-script");

// Hover JS, CSS, HTML, C#
containerHomeImages.forEach((containerHomeImage, id) => {

    containerHomeImage.addEventListener("mouseover", () => {
        couleurHomeImages[id].style.left = "50%";
        noirEtBlancHomeImages[id].style.left = "150%";
    })

    containerHomeImage.addEventListener("mouseout", () => {
        couleurHomeImages[id].style.left = "-50%";
        noirEtBlancHomeImages[id].style.left = "50%";
    })
});

boutonScripts.forEach((boutonScript, id) => {
    boutonScript.addEventListener("click", () => {
        if (id == 0) {
            transitionToChangePage();
        }
    });
});
