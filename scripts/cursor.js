// Initialisation

const coords  = { x: 0, y: 0 };
const circles = document.querySelectorAll("#js-circle");
const hovers  = document.querySelectorAll("#js-hover");
const hoverBlue   = document.querySelector("#js-hover-blue");
const actifHovers = document.querySelectorAll("#js-hover-actif");

const COLOR_DARK  = "#333336"; // curseur sur fond clair
const COLOR_LIGHT = "#FEF9F5"; // curseur sur fond sombre (défaut)

let hoverBlueBool = false;
let scrollYValeur = 0;

// Position initiale des cercles
circles.forEach(circle => {
    circle.x = 0;
    circle.y = 0;
});

// Suivi de la souris
window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.pageY;
    circles.forEach(c => { c.style.opacity = "1"; });
});

// Compensation du scroll
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    coords.y += scrollY - scrollYValeur;
    scrollYValeur = scrollY;
});

// Animation fluide du curseur
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
        circle.style.left  = x - 12 + "px";
        circle.style.top   = y - 12 + "px";
        circle.style.scale = String((circles.length - index) / circles.length);

        circle.x = x;
        circle.y = y;

        const next = circles[index + 1] || circles[0];
        x += (next.x - x) * 0.25;
        y += (next.y - y) * 0.25;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// Impulsion au clic
window.addEventListener("click", () => {
    circles.forEach(circle => {
        circle.style.transform = "scale(3)";
        setTimeout(() => { circle.style.transform = "scale(1)"; }, 80);
    });
});

// ---------- Hover standard ----------

hovers.forEach(hover => {
    hover.addEventListener("mouseenter", () => {
        circles.forEach((circle, index) => {
            circle.style.transform = "scale(5)";
            if (index > 0) circle.style.display = "none";
        });
        circles[0].classList.add("circle-blend");
    });

    hover.addEventListener("mouseleave", () => {
        circles.forEach((circle, index) => {
            circle.style.transform = "scale(1)";
            if (index > 0 && window.innerWidth > 768) circle.style.display = "block";
        });
        circles[0].classList.remove("circle-blend");
    });
});

// ---------- Hover actif (cliquable) ----------

actifHovers.forEach(actifHover => {
    actifHover.addEventListener("mouseenter", () => {
        circles.forEach((circle, index) => {
            circle.style.transform = "scale(5)";
            if (index > 0) circle.style.display = "none";
        });
        circles[0].classList.add("circle-blend");
        setTimeout(() => { circles[0].classList.add("animation-hover"); }, 100);
    });

    actifHover.addEventListener("mouseleave", () => {
        circles.forEach((circle, index) => {
            circle.style.transform = "scale(1)";
            if (index > 0 && window.innerWidth > 768) circle.style.display = "block";
        });
        circles[0].classList.remove("circle-blend");
        setTimeout(() => { circles[0].classList.remove("animation-hover"); }, 100);
    });
});

// ---------- Section sombre : curseur passe en clair ----------

// Sur la section travaux (fond clair) le curseur passe au sombre
if (hoverBlue) {
    hoverBlue.addEventListener("mouseenter", () => {
        hoverBlueBool = true;
        circles.forEach(c => { c.style.backgroundColor = COLOR_DARK; });
    });

    hoverBlue.addEventListener("mouseleave", () => {
        hoverBlueBool = false;
        circles.forEach(c => { c.style.backgroundColor = COLOR_LIGHT; });
    });
}
