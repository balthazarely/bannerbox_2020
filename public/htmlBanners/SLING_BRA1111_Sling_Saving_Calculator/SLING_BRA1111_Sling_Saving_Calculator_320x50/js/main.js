

const speed = 0.5;
const pause = 2;

// SHOW CONTAINER ------------------ //
document.getElementById("container").style.opacity = 1;

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({ delay: 0.5 });
main.from("#sling-logo", speed, { x: 70, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .from("#circle", speed, { x: 130, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .from("#header-1", speed, { y: -90, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .from("#header-1", pause, {}) // delay
    .to("#header-1", speed, { y: 90, ease: Back.easeIn.config(.65) }, "frame-1-out")
    .from("#header-2", speed, { y: -90, ease: Back.easeOut.config(.65) }, "-=0.25")
    .from("#header-2", pause, {}) // delay
    .to("#header-2", speed, { y: 90, ease: Back.easeIn.config(.65) }, "frame-2-out")
    .from("#subhead", speed, { y: -90, ease: Back.easeOut.config(.65) }, "frame-3-in")
    .from("#header-3", speed, { y: -90, ease: Back.easeOut.config(.65) }, "frame-3-in+=0.05")
    .from("#cta-wrapper", speed, { y: -90, ease: Back.easeOut.config(.65) }, "frame-3-in+=0.1");

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}

