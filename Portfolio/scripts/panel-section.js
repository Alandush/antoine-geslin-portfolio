let sectionPanelDomaines = document.querySelectorAll("#js-section-panel-domaine");
let transitionBlackSections = document.querySelectorAll("#js-black-transition-section");
let transitionBlackSectionContainer = document.querySelector("#js-black-transition-section-container");

let programmation = false;
let audiovisuel = false;
let design = false;
let transitionPanel = false;

transitionBlack.style.display = "none";

animationTransitionPanelSection();

sectionPanelDomaines.forEach((sectionPanelDomaine, id) => {
    sectionPanelDomaine.addEventListener("click", () =>{
        if (id == 0) {
            programmation = true;
        } else if (id == 1) {
            audiovisuel = true;
        } else {
            design = true;
        }

        if (window.innerWidth <= 768) {
            transitionBlack.classList.toggle("top-minus-50"); 
            setTimeout(() => {
                if (window.location.pathname.endsWith('d-sections.html')) {
                    if (programmation) {
                        window.location.href = 'clicker.html';
                    } else if (audiovisuel) {
                        window.location.href = 'memory-game.html';
                    } else if (design) {
                        window.location.href = 'mouse-game.html';
                    }
                } else {
                    if (programmation) {
                        window.location.href = 'developpement.html';
                    } else if (audiovisuel) {
                        window.location.href = 'audiovisuel.html';
                    } else if (design) {
                        window.location.href = 'design.html'; 
                    }
                }
            }, 1000);

            
            return;
        }

        animationTransitionPanelSection();

    });
});

transitionBlackSections.forEach(transitionBlackSection => {
    transitionBlackSection.addEventListener("transitionend", (e) => { // Quand l'animation se termine et qu'on a cliqué sur un lien qui change de page, on se dirige vers une nouvelle page

    });
});


function animationTransitionPanelSection() {
    transitionBlackSectionContainer.style.display = "flex";

    if (window.innerWidth <= 768) {
        transitionBlackSectionContainer.style.display = "none";
        transitionBlack.style.display = "block";

        return;
    }
    circles.forEach(circle => {
        circle.style.display = "none";
    });

    setTimeout(() => {
        transitionBlackSections[0].classList.toggle("top-0"); 
        setTimeout(() => {
            transitionBlackSections[1].classList.toggle("top-0"); 
            setTimeout(() => {
                transitionBlackSections[2].classList.toggle("top-0"); 
                setTimeout(() => {
                    if (!programmation && !audiovisuel && !design) {
                        transitionBlackSectionContainer.style.display = "none";
                    }

                    if (window.location.pathname.endsWith('d-sections.html')) {
                        if (programmation) {
                            window.location.href = 'clicker.html';
                        } else if (audiovisuel) {
                            window.location.href = 'memory-game.html';
                        } else if (design) {
                            window.location.href = 'mouse-game.html';
                        }
                    } else {
                        if (programmation) {
                            window.location.href = 'developpement.html';
                        } else if (audiovisuel) {
                            window.location.href = 'audiovisuel.html';
                        } else if (design) {
                            window.location.href = 'design.html'; 
                        }
                    }

                    circles.forEach(circle => {
                        circle.style.display = "block";
                    });
                }, 1000);
            }, 250);
        }, 250);
    }, 250);
}