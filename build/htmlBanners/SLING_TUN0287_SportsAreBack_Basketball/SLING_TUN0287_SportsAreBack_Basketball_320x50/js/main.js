
// SHOW CONTAINER ------------------ //
document.getElementById("container").style.opacity = 1;

// EASE VARIABLES ------------------ //
let easeOut = Back.easeOut.config(0.65);
let easeInOut = Back.easeOut.config(1);
let easeInBig = Back.easeIn.config(2);
let easeOutBig = Back.easeOut.config(2);
let easeIn = Back.easeIn.config(0.65);

// Init logo rotaiton
gsap.set(".logos", { rotationY: -450 });

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({ delay: 0.5 });
main.from("#sling-logo", 0.25, { scale: 0, ease: easeOutBig, transformOrigin: "50% 50%" })
    .from("#header-1", 0.35, { x: -150, ease: easeOut }, "header-in")
    .from("#basketball", 1.1, { y: -100, ease: "bounce.out", }, "header-in")
    .from("#basketball", 1.25, { x: -240, rotation: -270, ease: "power1.out" }, "header-in")
    .to("#header-1", 1.25, {})// DELAY 
    .to("#basketball", 0.5, { y: 75, rotation: 90, ease: easeInBig }, "basketball-out")
    .to("#header-1", 0.5, { x: -150, ease: easeIn }, "basketball-out")
    .staggerTo(".logos", 0.65, { rotationY: 0, ease: Power4.out }, 0.05)
    .to("#header-1", 1.25, {})// DELAY 
    .staggerTo(".logos", 0.40, { y: 50, ease: easeIn }, 0.05)
    .set("#header-1", { y: -10 })
    .to("#header-1", 0.35, { x: 0, ease: easeOut }, "subhead-in")
    .from("#subhead-1", 0.5, { x: -210, ease: easeOut }, "subhead-in+=0.15")
    .to("#basketball", 0.85, { x: 380, y: 100, rotation: -180, ease: easeOut }, "subhead-in-=0.15")
    .from("#cta-button, #cta-button-under, #restrictions", 0.25, { scale: 0, ease: easeOutBig, transformOrigin: "50% 50%" }, "-=0.10")
    .add(logoBlink(), "subhead-in+=0.25");

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}

