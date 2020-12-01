
const bannerWidth = document.getElementById('container').clientWidth;
const bannerHeight = document.getElementById('container').clientHeight;
const subtleBounceIn = Back.easeOut.config(0.65);
const subtleBounceOut = Back.easeIn.config(0.65);

// Helper Logo Blink Function
function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}

// Master Timeline
const master = gsap.timeline({});
master.to("#container", 0.10, { opacity: 1 })
    // .to("#container", 0.5, {}) // Delay
    .from("#sling-logo", 0.5, { x: 57, ease: subtleBounceIn })
    .from("#header-1", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, 'start')
    .from("#cta-wrapper", 0.5, { y: -75, ease: subtleBounceIn }, 'start+=0.1')
    .to("#header-1", 1.4, {}) //delay
    .to("#header-1", 0.5, { y: bannerHeight, ease: subtleBounceOut }, "header-1-out")

    .from("#header-2", 0.5, { y: -bannerHeight, ease: subtleBounceIn })
    .to("#header-2", 1.5, {}) //delay
    .to("#header-2", 0.5, { y: bannerHeight, ease: subtleBounceOut })

    .from("#header-3", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "header-3-in")
    .add(logoBlink(), "header-3-in");

