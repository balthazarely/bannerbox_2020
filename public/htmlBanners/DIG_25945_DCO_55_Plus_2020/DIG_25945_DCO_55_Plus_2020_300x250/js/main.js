// Variables
const bannerWidth = document.getElementById('container').clientWidth;
let logoHeight = document.getElementById('logo').clientHeight;
let logoWidth = document.getElementById('logo').clientWidth;
let logoOffsetTop = document.getElementById('logo').offsetTop;
let logoOffsetLeft = document.getElementById('logo').offsetLeft;
let logoDistanceTop = logoHeight + logoOffsetTop;
let logoDistanceLeft = logoWidth + logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
    .from('#logo', 0.75, { y: -logoDistanceTop, ease: Power3.easeOut }, "logo-in")
    .from('#hopper', 0.75, { x: 237, ease: Back.easeOut.config(1.5) }, "logo-in-=0.2")

    .from('#header-1', 0.5, { opacity: 0, y: 3, ease: Power1.easeOut, delay: -0.25 }, "text-1-in")
    .from('#underline-1', 0.75, { scaleX: 0, transformOrigin: "left", ease: Power3.easeOut, delay: -0.25 }, "text-1-in")
    .from('#header-1', 2, {}) // Delay
    .to('#header-1', 0.5, { opacity: 0, y: 3, ease: Power1.easeOut }, "text-1-out")
    .to('#underline-1', 0.75, { scaleX: 0, transformOrigin: "right", ease: Power3.easeIn }, "text-1-out-=0.5")

    .from('#header-2', 0.5, { opacity: 0, y: 3, ease: Power1.easeOut }, "text-2-in")
    .from('#underline-2', 0.75, { scaleX: 0, transformOrigin: "left", ease: Power3.easeOut }, "text-2-in")
    .from('#header-2', 2, {}) // Delay
    .to('#header-2', 0.5, { opacity: 0, y: 3, ease: Power1.easeOut }, "text-2-out")
    .to('#underline-2', 0.75, { scaleX: 0, transformOrigin: "right", ease: Power3.easeIn }, "text-2-out-=0.5")

    .from('#header-3', 0.5, { opacity: 0, y: 3, ease: Power1.easeOut }, "text-3-in")
    .from('#underline-3', 0.75, { scaleX: 0, transformOrigin: "left", ease: Power3.easeOut }, "text-3-in")
    .to('#hopper', 1, { x: 86, ease: Back.easeInOut.config(1.5) }, "text-3-in-=0.25")
    .from('#cta-wrapper', 1, { opacity: 0, y: 3, ease: Power1.easeOut }, "text-3-in+=0.3");


// main.seek("text-2-out");