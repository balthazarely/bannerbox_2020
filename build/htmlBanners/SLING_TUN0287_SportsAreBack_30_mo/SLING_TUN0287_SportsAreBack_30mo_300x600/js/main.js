
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
    .to("#restrictions", 0.5, { color: "#001E60" }, "photo-out")
    .from("#header-1", 0.35, { x: 300, ease: easeOut }, "header-in")
    //.to("#header-1", 1.25, {})// DELAY 
    .from("#subhead-1", 0.5, { x: -300, ease: easeOut }, "subhead-in-1")
    .to("#subhead-1", 0.5, { delay: 1.25, x: 300, ease: easeIn }, "subhead-in-1")
    .staggerTo(".logos", 0.65, { rotationY: 0, ease: Power4.out }, 0.05)
    .to("#header-1", 1.25, {})// DELAY 
    .staggerTo(".logos", 0.5, { x: 300, ease: easeIn }, -0.05)
    .from("#subhead-2", 0.5, { x: -300, ease: easeOut }, "subhead-in-2")
    .add(logoBlink(), "subhead-in-2");

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}
