const bannerWidth = document.getElementById('container').clientWidth;
const bannerHeight = document.getElementById('container').clientHeight;
const subtleBounceIn = Back.easeOut.config(0.65);
const subtleBounceOut = Back.easeIn.config(0.65);
const blockWidth = 110;
document.getElementById("container").style.opacity = 1;

// Helper Star Function
function starGrow() {
    const stars = gsap.timeline({});
    stars.staggerFrom(".star", 0.5, { opacity: 0, scale: 0, ease: Back.easeOut.config(4) }, 0.1, "block-in")
        .staggerFromTo(".shadow-star", 0.5, { opacity: 0.5, scale: 0 }, { opacity: 0, scale: 3.2 }, 0.1, "block-in");
    return stars;
}

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
    .set(".price", { rotationX: -90 })
    .from('#header-1', 0.5, {}) // delay
    .from("#sling-logo", 0.5, { x: 55, ease: subtleBounceIn }, "start")
    .from("#header-1", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "start+=0.25")
    .add(starGrow(), "start+=0.25")
    .staggerTo(".logos", 0.75, { rotationY: 0, ease: Power4.out }, 0.05, "start+=0.45")
    .from('#header-1', 1.3, {}) // delay
    .to("#header-1", 0.5, { y: bannerHeight, ease: subtleBounceOut })

    .from("#header-2", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "header-2-in")
    .from('#header-1', 2, {}) // delay
    .staggerTo(".frame-2", 0.5, { y: bannerHeight, ease: subtleBounceOut }, -0.1, "header-2-out")
    .staggerTo(".logo-group", 0.5, { y: bannerHeight, ease: subtleBounceOut }, -0.07, "header-2-out+=0.1")

    .from("#header-3", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "header-3-in")
    .from("#cta-wrapper", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "header-3-in+=0.25")
    .from('#header-1', 1.5, {}) // delay
    .to("#header-3", 0.5, { y: bannerHeight, ease: subtleBounceOut })

    .from("#header-4", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "header-4-in")
    .add(logoBlink(), "header-4-in+=0.5");



