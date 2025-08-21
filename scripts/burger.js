// Initialisation

let logoBurger = document.querySelector("#js-burger-logo");
let burgerContainer = document.querySelector("#js-burger-container");
let burgerAnimations = document.querySelectorAll("#js-burger-animation");

let logoBurgerBool = false;
let burgerAnimationBool = false;
let idBurger; 

// Logo Burger 


logoBurger.addEventListener("click", () => {
    if (burgerAnimationBool) {
        return;
    }

    burgerAnimationBool = true;

    if (!logoBurgerBool) {
        logoBurgerBool = true;
        burgerContainer.style.display = "block";
        // Animation du menu burger
        setTimeout(() => {
            burgerAnimations[0].classList.add("left-0"); 
            setTimeout(() => {
                burgerAnimations[1].classList.add("left-0"); 
                setTimeout(() => {
                    burgerAnimations[2].classList.add("left-0"); 
                    setTimeout(() => {
                        burgerAnimations[3].classList.add("left-0"); 
                        setTimeout(() => {
                            burgerAnimationBool = false;
                        }, 1000);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);


    } else {
        logoBurgerBool = false;
        // Desanimation du menu burger
        setTimeout(() => {
            burgerAnimations[0].classList.remove("left-0"); 
            setTimeout(() => {
                burgerAnimations[1].classList.remove("left-0"); 
                setTimeout(() => {
                    burgerAnimations[2].classList.remove("left-0"); 
                    setTimeout(() => {
                        burgerAnimations[3].classList.remove("left-0"); 
                        setTimeout(() => {
                            burgerAnimationBool = false;
                            burgerContainer.style.display = "none";
                        }, 1000);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);


    }
});

burgerAnimations.forEach((burgerAnimation, id) => {
    burgerAnimation.addEventListener("click", () => {
        transitionBlack.style.display = "block";
        idBurger = id;
        setTimeout(() => {
            transitionToChangePage();
        }, 1);
        
        if (window.location.pathname.endsWith('index.html') && id == 3) {
            setTimeout(() => {

                transitionBlack.classList.add("top-minus-50");
    
                setTimeout(() => {
                    burgerAnimations[0].classList.remove("left-0"); 
                    setTimeout(() => {
                        burgerAnimations[1].classList.remove("left-0"); 
                        setTimeout(() => {
                            burgerAnimations[2].classList.remove("left-0"); 
                            setTimeout(() => {
                                burgerAnimations[3].classList.remove("left-0"); 
                                setTimeout(() => {
                                    burgerAnimationBool = false;
                                    burgerContainer.style.display = "none";
                                    logoBurgerBool = false;
                                }, 1000);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 1000);
        }
    }); 
});