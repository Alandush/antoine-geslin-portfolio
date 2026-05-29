// Bouton CTA → défile vers la section travaux
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const workSection = document.querySelector('.work-section');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Cartes travaux → navigation vers les pages de contenu
const cardDev    = document.querySelector('#js-card-dev');
const cardAudio  = document.querySelector('#js-card-audio');
const cardDesign = document.querySelector('#js-card-design');

if (cardDev) {
    cardDev.addEventListener('click', () => {
        destinationUrl = 'developpement.html';
        transitionToChangePage();
    });
}

if (cardAudio) {
    cardAudio.addEventListener('click', () => {
        destinationUrl = 'audiovisuel.html';
        transitionToChangePage();
    });
}

if (cardDesign) {
    cardDesign.addEventListener('click', () => {
        destinationUrl = 'design.html';
        transitionToChangePage();
    });
}
