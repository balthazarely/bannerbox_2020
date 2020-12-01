// Variables
const bannerHeight = document.getElementById('container').clientHeight;
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
master
    .from('#header-1', 0.5, {}) // delay
    .from("#sling-logo", 0.5, { x: 180, ease: subtleBounceIn }, "start")
    .from("#header-1", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "start")
    .from("#football", 0.5, { x: -247, ease: subtleBounceIn }, "start")
    .from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "start+=0.5")
    .from('#header-1', 1, {}) // delay
    .to("#header-1", 0.5, { y: bannerHeight, ease: subtleBounceOut }, 'header-1-out')

    .from("#bigten-logo", 0.5, { y: -bannerHeight, ease: subtleBounceIn })
    .from('#header-1', 1.5, {}) // delay
    .to("#bigten-logo", 0.5, { y: bannerHeight, ease: subtleBounceOut })

    .from("#header-2", 0.5, { y: -bannerHeight, ease: subtleBounceIn })
    .from('#header-1', 1.5, {}) // delay
    .to("#header-2", 0.5, { y: bannerHeight, ease: subtleBounceOut }, "here")

    .from("#bigten-logo-2", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, 'logo-in')
    .from(".price-container, #line, .last-month", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, 'logo-in+=0.1')
    .from('#header-1', 1.5, {}) // delay
    .to("#line, .price-container, .last-month", 0.5, { y: bannerHeight, ease: subtleBounceOut }, "logo-out")
    .to("#bigten-logo-2", 0.5, { y: 11, width: 31, height: 18, ease: subtleBounceOut }, "logo-out")
    .from("#pac12-logo, #fs1-logo", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "logo-out+=0.25")
    .from("#header-3", 0.5, { y: -bannerHeight, ease: subtleBounceIn }, "logo-out+=0.35")

    .add(logoBlink(), "text-3+=0.5");



