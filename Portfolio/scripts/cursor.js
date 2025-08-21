// Initialisation

const coords = {x:0, y:0}
const circles = document.querySelectorAll("#js-circle");
const hovers = document.querySelectorAll("#js-hover");
const hoverBlue = document.querySelector("#js-hover-blue");
const actifHovers = document.querySelectorAll("#js-hover-actif");

let hoverBlueBool = false;

let scrollValeur = 0;
let scrollYValeur = 0;

// Initialisation de la position des cercles
circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
});

// Lors du déplacement du curseur on récupère la valeur de position de la souris
window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.pageY;
    
    circles.forEach(function (circle, index) {
        circle.style.opacity = "1";
    });
});

window.addEventListener("scroll", function(e){
    // Obtenez la valeur de défilement
    let scrollY = window.scrollY; // Valeur de défilement
    scrollY -= scrollYValeur;
    scrollYValeur = window.scrollY;

    coords.y += scrollY;
});

// Animation de déplacement du curseur
function animateCircles() {

let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
    
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.25;
    y += (nextCircle.y - y) * 0.25;
});

requestAnimationFrame(animateCircles);
}

animateCircles();


window.addEventListener("click", function(e){ // Lorsqu'on clique une legere animation de scale se lance
    circles.forEach(function (circle, index) {
        if (circle.style.transform < "scale(5)") {
            circle.style.transform = "scale(3)";
            setTimeout(() => {circle.style.transform = "scale(1)";}, 80);
        }
    });
});

// Hover

hovers.forEach(hover => { // Lorsqu'on met la souris sur les objets contenant l'id hover, on pourra voir dans ses couleurs opposés ce contenu
    hover.addEventListener("mouseenter", function(e) {
        if (hoverBlueBool) {
            circles[0].style.backgroundColor = "#E5CFBC"
        }
        circles.forEach(function (circle, index) {
            circle.style.transform = "scale(5)";
            for (let index = 0; index < circles.length-1; index++) {
                circles[index + 1].style.display = "none";
            }
        });
        circles[0].classList.toggle("circle-blend");

    });
});

hovers.forEach(hover => { // On revient a l'etat d'origine quand on quitte le hover
    hover.addEventListener("mouseleave", function(e) {
        circles.forEach(function (circle, index) {
            circle.style.transform = "scale(1)";
            for (let index = 0; index < circles.length-1; index++) {
                if (window.innerWidth > 768) {
                    circles[index + 1].style.display = "block";
                }
            }
        });
        circles[0].classList.toggle("circle-blend");

    });
});

// Hover actif (quand l'élément est cliquable)

actifHovers.forEach(actifHover => { // Lorsqu'on met la souris sur les objets contenant l'id hover, on pourra voir dans ses couleurs opposés ce contenu
    actifHover.addEventListener("mouseenter", function(e) {
        if (hoverBlueBool) {
            circles[0].style.backgroundColor = "#E5CFBC"
        }
        circles.forEach(function (circle, index) {
            circle.style.transform = "scale(5)";

            for (let index = 0; index < circles.length-1; index++) {
                circles[index + 1].style.display = "none";
            }
        });
        circles[0].classList.toggle("circle-blend");
        setTimeout(() => {
            circles[0].classList.add("animation-hover");
        }, 100);

    });
});

actifHovers.forEach(actifHover => { // On revient a l'etat d'origine quand on quitte le hover
    actifHover.addEventListener("mouseleave", function(e) {
        circles.forEach(function (circle, index) {
            circle.style.transform = "scale(1)";

            for (let index = 0; index < circles.length-1; index++) {
                if (window.innerWidth > 768) {
                    circles[index + 1].style.display = "block";
                }
            }
        });
        circles[0].classList.toggle("circle-blend");
        setTimeout(() => {
            circles[0].classList.remove("animation-hover");
        }, 100);

    });
});

// Hover Blue pour section (lorsque la couleur de fond est beige)

hoverBlue.addEventListener("mouseenter", function(e) {
    hoverBlueBool = true;
    circles.forEach(function (circle, index) {
        circle.style.backgroundColor = "#0d1822"
    });
});

hoverBlue.addEventListener("mouseleave", function(e) {
    hoverBlueBool = false;

    circles.forEach(function (circle, index) {
        circle.style.backgroundColor = "#E5CFBC"
    });
});