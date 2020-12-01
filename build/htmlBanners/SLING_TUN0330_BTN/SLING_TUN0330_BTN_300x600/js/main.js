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
master.set(".logos", { rotationY: -450 })
    //     .set(".price", { rotationX: -90 })
    .from('#header-1', 0.5, {}) // delay
    .from("#sling-logo", 0.5, { x: -88, ease: subtleBounceIn }, "start")
    .from("#header-1", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "start")
    .from("#football-player", 0.5, { x: 356, ease: subtleBounceIn }, "start")
    .from("#blue-oval", 0.5, { x: 280, ease: subtleBounceIn }, "start+=0.1")
    .from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "start+=0.5")
    .to("#bigten-logo", 0.5, { rotationY: 0, ease: Power4.out }, "start+=0.5")
    .from('#header-1', 1.25, {}) // delay
    .to("#header-1", 0.5, { x: bannerWidth, ease: subtleBounceOut })
    .from("#header-2", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "text-2")
    .from('.price-container', 0.3, { scale: 10, opacity: 0, transformOrigin: "50% 50%" }, "text-2+=0.20")
    .from('.last-month, #line', 0.3, { opacity: 0, y: 3 }, "text-2+=0.3")
    .from('#header-1', 1.75, {}) // delay
    .to("#header-2", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "text-2-out")
    .to('.last-month, #line, .price-container', 0.3, { opacity: 0, y: 3 }, "text-2-out+=0.2")
    .to("#bigten-logo", 0.75, { y: 6, width: 52, height: 26.26, ease: Back.easeInOut.config(2) }, "text-2-out+=0.2")
    .from("#header-3", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "text-2-out+=0.7")
    .to("#pac12-logo", 0.5, { rotationY: 0, ease: Power4.out }, "text-2-out+=0.7")
    .to("#fs1-logo", 0.5, { rotationY: 0, ease: Power4.out }, "text-2-out+=0.8")

    .add(logoBlink(), "text-3+=0.5");

    // master.seek('text-2-out');

