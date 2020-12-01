
const BounceIn = Back.easeOut.config(2);
const easeOut = Power3.easeOut;
const subtleBounceIn = Back.easeOut.config(0.65);

const start = gsap.timeline({});
start
    // Frame 1
    .to("#container", 0.10, { opacity: 1 })
    .to("#header-1", 0.5, {}) // Delay
    .from("#sling-logo", 0.5, { x: 83, ease: subtleBounceIn }, "logo-in")
    .from("#header-1", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "logo-in")
    .from("#cta-wrapper", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "logo-in")
    .to("#header-1", 1.5, {}) // Delay
    .to("#header-1", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-1-out")

    // Frame 2
    .from("#header-2", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-2-in")
    .to("#header-2", 1.5, {}) // Delay
    .to("#header-2", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-2-out")
    .to("#restrictions", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-2-out")

    // Frame 3
    .from("#header-3", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-3-in")
    .from("#disclaimer", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-3-in")
    .to("#header-3", 1.5, {}) // Delay
    .to("#header-3", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-3-out")
    .to("#disclaimer", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-3-out")


    // Frame 4
    .from("#header-4", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-4-in")
    .to("#header-4", 1.5, {}) // Delay
    .to("#header-4", 0.5, { opacity: 0, y: 3, ease: easeOut })

    // Frame 5
    .from("#header-5", 1.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-5-in")
    .to("#disclaimer", 0.5, { opacity: 1, y: 0, ease: BounceIn }, "frame-5-in")

    .add(logoBlink(), "frame-5-in");;


function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}