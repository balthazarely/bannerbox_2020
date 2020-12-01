
// SHOW CONTAINER ------------------ //
document.getElementById("container").style.opacity = 1;

// EASE VARIABLES ------------------ //
let easeOut = Back.easeOut.config(0.65);
let easeInOut = Back.easeOut.config(1);
let easeInBig = Back.easeIn.config(2);
let easeOutBig = Back.easeOut.config(2);
let easeIn = Back.easeIn.config(0.65);

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({ delay: 0.5 });
main.set(".logos", { rotationY: -450 })
    .from("#sling-logo", 0.25, { scale: 0, ease: easeOutBig, transformOrigin: "50% 50%" })
    .to("#header-1", 1.25, {})// DELAY 
    .to("#photo", 0.5, { opacity: 0 }, "photo-out")
    .from("#header-1", 0.35, { x: -320, ease: easeOut }, "header-in")
    .from("#basketball", 1.1, { y: -386, ease: "bounce.out", }, "header-in")
    .from("#basketball", 1.25, { x: 280, rotation: 180, ease: "power1.out" }, "header-in")
    .to("#header-1", 1.25, {})// DELAY 
    .to("#basketball", 0.5, { x: -160, rotation: -90, ease: easeInBig }, "basketball-out")
    .staggerTo(".logos", 0.65, { rotationY: 0, ease: Power4.out }, 0.05)
    .set("#basketball", { x: 399, y: 80 })
    .to("#header-1", 1.25, {})// DELAY 
    .staggerTo(".logos", 0.40, { x: 300, ease: easeIn }, 0.05)
    .from("#subhead-1", 0.5, { x: -300, ease: easeOut }, "subhead-in")
    .to("#basketball", 0.5, { x: 269, y: 103, rotation: -180, ease: easeInOut }, "subhead-in+=0.15")
    .add(logoBlink(), "subhead-in-=0.25");

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}
