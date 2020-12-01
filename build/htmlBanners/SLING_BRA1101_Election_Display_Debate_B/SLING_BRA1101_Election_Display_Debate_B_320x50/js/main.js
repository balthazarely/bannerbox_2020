

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
master.set(".logos", { rotationY: -450 })
    .set("#subhead", { rotationX: 90 })
    .to("#header-1", 0.5, {}) //delay
    .from("#sling-logo", 0.5, { x: 55, ease: subtleBounceIn }, "start")
    .from("#header-1", 0.5, { y: -50, ease: subtleBounceIn }, "start+=0.25")
    .to("#subhead", 0.5, { rotationX: 0, transformOrigin: "top", ease: Back.easeOut.config(4) }, "start+=0.75")
    .from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "start+=1")
    .to("#header-1", 1.5, {}) //delay
    .to("#header-1", 0.5, { y: 50, ease: subtleBounceOut }, "out")
    .to("#subhead", 0.5, { y: 3, opacity: 0 }, "out")
    .staggerTo(".logos", 0.75, { rotationY: 0, ease: Power4.out }, 0.05, "stars")
    .from("#more-text", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "stars+=0.25")
    .to("#header-1", 1.5, {}) //delay
    .staggerTo(".logos, .star, #more-text", 0.5, { y: 70, ease: Back.easeIn.config(1.2) }, 0.05, "logos-out")


    .from("#header-2", 0.5, { y: -50, ease: subtleBounceIn }, "header-2-in")
    .add(logoBlink(), "header-2-in");
