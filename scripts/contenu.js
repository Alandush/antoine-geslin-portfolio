// --------------------------------- INIT --------------------------------- //

let contenuPresentationImages = document.querySelectorAll("#js-contenu-presentation-image");
let contenuPresentationTextes = document.querySelectorAll("#js-contenu-presentation-texte");
let contenuPresentationContainers = document.querySelectorAll("#js-contenu-presentation-container");
let contenuTransition = document.querySelector("#js-contenu-transition");

let titreContenu = document.querySelector("#js-titre-contenu");
let texteContenu = document.querySelector("#js-texte-contenu");
let lienContenu = document.querySelector("#js-lien-contenu");
let imageContenu = document.querySelector("#js-image-contenu");
let compatibilitesContenus = document.querySelectorAll("#js-compatibilite");
let croixContenu = document.querySelector("#js-croix-contenu");

let titresDeveloppement = [
    "BENJAMIN LABRIE",
    "JOHN'S BEAT",
    "SKI - LA DESCENTE",
    "VOLLEYBALL",
    "MILK & BONE",
];

let textesDeveloppement = [
    "Benjamin Labrie est un site web ludique et interactif fait en groupe de trois en Octobre 2024. Ce dernier avait un thème et une restriction, le thème lui était “Complot” et la restriction était le temps. Nous n'avons eu qu'une semaine pour effectuer ce projet. Pour ma part, dans ce projet de groupe, j’ai effectué tout le développement et toutes les intégrations.",
    "John’s Beat est un projet ambitieux qu’on s’est lancé avec un groupe de quatre personnes lors du début de l’année 2024. Nous avions pour objectif de créer un jeu de rythme en “pixel art”. Le but du jeu est de découvrir les niveaux, affronter des monstres et tuer les boss. Tout ça dans le rythme de la musique.",
    "La Descente est un projet de groupe qu’on a dû effectuer à trois en Septembre 2024. Nous avions pour consigne de créer une borne interactive d’une station de ski pour vendre des cours et des heures de ski. Ce projet est donc SEULEMENT compatible sur téléphone et non sur ordinateur. Pour ma part, je me suis occupé de toute l’intégration et de tout le développement de ce projet.",
    "Le site de volleyball est un projet que j’ai effectué seul, en 2022. On avait pour objectif de représenter une activité au travers d’un site web et en plus de ça, de programmer un petit jeu en phaser. ",
    "Pour ce projet, à deux, nous devions faire un site pour une comic-con fictive où Milk & Bone, des chanteuses québécoises célèbres, vont y présenter leur concert. Nous n’avions qu’une semaine pour effectuer ce projet et je me suis occupé de toutes les intégrations et le développement de ce site web.",
];

let liensDeveloppement = [
    "https://projet4.timmatane.ca/2024/tp3/eq4/",
    "https://projet3.timmatane.ca/2024/efc/eq3/",
    "https://projet4.timmatane.ca/2024/tp2/eq1/",
    "https://dev.timmatane.ca/etudiants/2022/geslina/iw_efc/index.html",
    "https://dev.timmatane.ca/etudiants/2022/geslina/prj4-tp1/",
];

let imagesDeveloppement = [
    "images/contenu/developpement/benjamin-labrie.jpg",
    "images/contenu/developpement/john-beat.jpg",
    "images/contenu/developpement/ski.jpg",
    "images/contenu/developpement/volley-ball.jpg",
    "images/contenu/developpement/milk-and-bone.jpg",
];

let compatibiliteDeveloppementPC = [
    "block",
    "block",
    "none",
    "block",
    "block",
];

let compatibiliteDeveloppementPhone = [
    "none",
    "none",
    "block",
    "block",
    "block",
];

let titresAudiovisuel = [
    "BE LOST",
    "MATCH DE VOLLEYBALL",
    "MDGTL",
];
let textesAudiovisuel = [
    "Lors de ce projet individuel, je devais effectuer la promotion d’une marque à travers une vidéo publicitaire en 2023. Le but était de créer une vidéo dynamique avec l’aide de diverses vidéos de la marque et d’autres que j’ai moi-même tournées.",
    "Ce montage de volleyball a été entièrement conçu de mes mains. Il s’agit d’un projet personnel que je me suis lancé en 2023, avec comme objectif de représenter différentes actions, de différents matchs pour raconter le déroulement d’un point. Il a été conçu lors d’un tournoi de volleyball situé à Rimouski au Canada.",
    "Lors de ce projet individuel, je devais effectuer la promotion d'un évènement de musique électronique et arts numériques en 2023. Le but était de créer une vidéo dynamique.",
];

let liensAudiovisuel = [
    "https://www.youtube.com/watch?v=InMMieb5Qnc",
    "https://youtu.be/CHR5Vib9bgc",
    "https://youtu.be/8k37JHs5gtU",
];

let imagesAudiovisuel = [
    "images/contenu/audiovisuel/belost.PNG",
    "images/contenu/audiovisuel/volley.PNG",
    "images/contenu/audiovisuel/mdgtl.PNG",
];


let titresDesign = [
    "BE LOST",
    "ENZO CADENCE",
];
let textesDesign = [
    "Ce projet de Design est un projet individuel créé en 2022. Il avait pour but de représenter une marque et de reconstruire des affiches publicitaires qui sont présentées sur les contenus publicitaires des sites web.",
    "Ce projet de Design est un projet individuel créé en 2024. On avait pour but de reconstruire entièrement un site d’un artiste fictif et d’avoir une direction artistique alignée aux valeurs de l’artiste. Nous devions créer une maquette du site web sur Figma.",
];

let liensDesign = [
    "belost.html",
    "https://www.figma.com/design/VHR6S9yOBiRck1gFmhPGSn/TP2---Design-d'Interface?node-id=0-1&node-type=canvas&t=pP8d7avBdVmPSBFM-0",
];

let imagesDesign = [
    "images/contenu/design/belost/6.png",
    "images/contenu/design/enzo.PNG",
];


transitionVersContenu = false;


contenuPresentationContainers.forEach((contenuPresentationContainer, id) => {
    contenuPresentationContainer.addEventListener("mouseover", () => {
        contenuPresentationImages[id].style.filter = "brightness(0.3)";
        contenuPresentationTextes[id].style.opacity = 1;
    });

    contenuPresentationContainer.addEventListener("mouseout", () => {
        contenuPresentationImages[id].style.filter = "brightness(1)";
        contenuPresentationTextes[id].style.opacity = 0;
    });

    contenuPresentationContainer.addEventListener("click", () => {
        contenuTransition.style.top = "0%";
        transitionVersContenu = true;
        if (window.location.pathname.endsWith('developpement.html')) {
            titreContenu.textContent = titresDeveloppement[id];
            texteContenu.textContent = textesDeveloppement[id];
            lienContenu.href = liensDeveloppement[id];
            imageContenu.src = imagesDeveloppement[id];
            lienContenu.textContent = "Lien vers le site";
            compatibilitesContenus[0].style.display = compatibiliteDeveloppementPC[id];
            compatibilitesContenus[1].style.display = compatibiliteDeveloppementPhone[id];
        } else if (window.location.pathname.endsWith('audiovisuel.html')) {
            titreContenu.textContent = titresAudiovisuel[id];
            texteContenu.textContent = textesAudiovisuel[id];
            lienContenu.href = liensAudiovisuel[id];
            imageContenu.src = imagesAudiovisuel[id];
            lienContenu.textContent = "Lien vers la vidéo";
        } else if (window.location.pathname.endsWith('design.html')) {
            titreContenu.textContent = titresDesign[id];
            texteContenu.textContent = textesDesign[id];
            lienContenu.href = liensDesign[id];
            imageContenu.src = imagesDesign[id];
            lienContenu.textContent = "Lien vers les designs";
        }
    });
});

contenuTransition.addEventListener("transitionend", () => {
    if (transitionVersContenu) {
        contenuTransition.style.top = "100%";
    } else {
        contenuTransition.style.top = "-100%";
    }
})

croixContenu.addEventListener("click", () => {
    transitionVersContenu = false;
    contenuTransition.style.top = "0%";
});