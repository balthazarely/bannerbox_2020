
// Variables
const bannerWidth = document.getElementById('container').clientWidth;
const subtleBounceIn = Back.easeOut.config(0.65);
const subtleBounceOut = Back.easeIn.config(0.65);
document.getElementById("container").style.opacity = 1;


// Helper Logo Blink Function
function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}

// Master Timeline
const master = gsap.timeline({});
master.set(".logos", { rotationY: -90 })
    .from('#header-1', 0.75, {}) // delay
    .from("#sling-logo", 0.5, { y: 2, opacity: 0, }, "start")
    .from("#header-1", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "start")
    .to("#pac12-logo", 0.5, { rotationY: 0, ease: Back.easeOut.config(3) }, "logo-in")
    .from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "logo-in")
    .from('#header-1', 1, {}) // delay
    .to("#pac12-logo", 0.5, { rotationY: -90, ease: Power4.easeIn })
    // Frame 2
    .to("#all-logos", 0.5, { rotationY: 0, ease: Back.easeOut.config(3) })
    .from('#header-1', 1.5, {}) // delay
    .to("#all-logos", 0.5, { rotationY: -90, ease: Power4.easeIn }, 'frame-2-out')
    .to("#header-1", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "frame-2-out")
    // Frame 3
    .from("#header-2", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "frame-3-in")
    .staggerTo(".logos-frame-3", 0.5, { rotationY: 0, ease: Back.easeOut.config(3) }, 0.1, "frame-3-in")
    .from('#header-1', 1.5, {}) // delay
    .to("#header-2", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "frame-3-out")
    .staggerTo(".logos-frame-3", 0.5, { rotationY: -90, ease: Power4.easeIn }, 0.1, "frame-3-out")
    // Frame 4
    .from("#header-3", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "frame-4-in")
    .to("#pac12-logo-medium", 0.5, { rotationY: 0, ease: Back.easeOut.config(3) }, "frame-4-in")
    .from('.price-container-top', 0.5, { opacity: 0, y: 2 }, "frame-4-in")
    .from('#line', 0.5, { scaleY: 0 }, "frame-4-in+=0.1")
    .from('.price-container-bottom', 0.5, { opacity: 0, y: 2 }, "frame-4-in+=0.2")
    .to("#old-price", 0.5, { x: -22, ease: Power3.easeInOut }, "frame-4-in+=0.2")
    .from("#cross-line", 0.35, { scaleX: 0, opacity: 0, ease: Power3.easeInOut, transformOrigin: "0 50%" }, "cross")
    .from('#price', 0.3, { scale: 10, opacity: 0, transformOrigin: "50% 50%" }, "cross+=0.3")
    .add(logoBlink(), "cross+=0.5");

    // master.seek('frame-4-in');



