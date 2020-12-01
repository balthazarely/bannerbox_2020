const BounceIn = Back.easeOut.config(2);
const easeOut = Power3.easeOut;
const subtleBounceIn = Back.easeOut.config(0.65);
const subtleBounceOut = Back.easeIn.config(0.65);
const pause = 1;

const start = gsap.timeline({});
start
    // Frame 1
    .to("#container", 0.10, { opacity: 1 })
    .to("#header-1", 0.5, {}) // Delay
    .from("#sling-logo", 0.5, { y: -100, ease: subtleBounceIn }, "logo-in")
    .from("#header-1", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "logo-in")
    .from("#cta-wrapper", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "logo-in")
    .to("#header-1", 1.2, {}) // Delay
    .to("#header-1", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-1-out")
    .to("#women", 0.5, { x: -425, ease: subtleBounceOut }, "frame-1-out")

    // Reset woman back to right
    .set("#women", { x: 370 })

    // Frame 2
    .from("#header-2", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-2-in")
    .from("#tv", 0.5, { x: 305, ease: subtleBounceIn }, "frame-2-in")
    .staggerTo(".logos", 0.5, { rotationY: 0, ease: Back.easeOut.config(5) }, 0.05, "frame-2-in+=0.15")
    .to("#header-2", 1.05, {}) // Delay
    .to("#header-2", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-2-out")
    .to("#restrictions", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-2-out")


    // Frame 3
    .from("#header-3", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-3-in")
    .from("#disclaimer", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-3-in")
    .staggerTo(".logo-top", 0.5, { y: -6, ease: Back.easeInOut.config(3) }, 0.05, "frame-3-in")
    .staggerTo(".logo-bottom", 0.5, { y: -15, ease: Back.easeInOut.config(3) }, 0.05, "frame-3-in")
    .staggerTo(".text-logos", 0.5, { rotationY: 0, ease: Back.easeOut.config(5) }, 0.05, "frame-3-in+=0.20")
    .to("#and-more-logo", 0.5, { y: 3, ease: Back.easeInOut.config(3) }, "frame-3-in+=0.20")
    .to("#header-3", pause, {}) // Delay
    .to("#header-3", 0.5, { opacity: 0, y: 3, ease: easeOut }, "frame-3-out")
    .to(".tv-and-logos", 0.5, { x: -355, ease: subtleBounceOut }, "frame-3-out")

    // Frame 4
    .from("#header-4", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-4-in")
    .to("#women", 0.5, { x: 0, ease: subtleBounceIn }, "frame-4-in")
    .to("#header-4", 1.5, {}) // Delay
    .to("#header-4", 0.5, { opacity: 0, y: 3, ease: easeOut })

    // Frame 5
    .from("#header-5", 0.5, { opacity: 0, y: 3, ease: BounceIn }, "frame-5-in")
    .add(logoBlink(), "frame-5-in");

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}