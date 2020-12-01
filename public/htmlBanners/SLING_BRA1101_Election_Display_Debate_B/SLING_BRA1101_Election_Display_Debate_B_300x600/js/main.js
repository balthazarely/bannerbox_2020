
let bannerWidth = document.getElementById('container').clientWidth;
const subtleBounceIn = Back.easeOut.config(0.65);
const subtleBounceOut = Back.easeIn.config(0.65);

document.getElementById("container").style.opacity = 1;

// Helper Star Function
function starCurve() {
    const duration = .60;
    const endArray = [0.9, 0.5, 0.1];
    const ease = Power4.easeOut;
    const stars = gsap.timeline({});
    stars.set("#star-1, #star-2, #star-3 ", { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
    for (let i = 1; i <= 3; i++) {
        stars.to("#star-" + [i], {
            opacity: 1, duration: duration, transformOrigin: "center", ease: ease, motionPath: {
                path: "#star-path", align: "#star-path", end: endArray[i - 1], autoRotate: false, alignOrigin: [0.5, 1.5]
            }
        }, "star-start");
    }
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
    .set("#subhead", { rotationX: 90 })
    .to("#header-1", 0.5, {}) //delay
    .from("#sling-logo", 0.5, { y: -90, ease: subtleBounceIn }, "start")
    .add(starCurve(), "start+=0.5")
    .from("#header-1", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "start+=0.5")
    .to("#subhead", 0.5, { rotationX: 0, transformOrigin: "top", ease: Back.easeOut.config(4) }, "start+=1")
    .staggerTo(".logos", 0.75, { rotationY: 0, ease: Power4.out }, 0.05, "start+=1")
    .from("#cta-wrapper, #more-text", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "start+=1.4")
    .to("#header-1", 1.5, {}) //delay
    .to("#header-1", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "out")
    .to("#subhead", 0.5, { y: 3, opacity: 0 }, "out")
    .from("#header-2", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "header-2-in")
    .add(logoBlink(), "header-2-in");
