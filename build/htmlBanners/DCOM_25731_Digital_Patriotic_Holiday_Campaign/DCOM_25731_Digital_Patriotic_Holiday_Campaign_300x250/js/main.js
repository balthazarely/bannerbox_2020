// Ease Variables
let backOut = Back.easeOut.config(1.5);
let power = Power3.out;
let powerIn = Power3.In;
// Calc Logo Y Animation Distance
let distance;
(function calcLogoMovement() {
    let logo = document.getElementById('logo');
    distance = logo.offsetHeight + logo.offsetTop + 3;
    console.log(distance);
})();

// Timeline
const tl = new TimelineMax({ delay: 0.75 });
tl.to("#jets", 1.75, { x: 600, y: -400 })
    .from("#bg", 0.75, { opacity: 0 }, "bg", "-=0.50")
    .from("#logo", 0.5, { y: -distance }, "bg")
    .from('#header', 0.5, { opacity: 0 }, "-=0.4")
    .from('#header', 2.5, {}) // delay
    .to('#header', 0.5, { opacity: 0 })
    .from('#gift-wrapper', 0.5, { x: 330, ease: Power4.out }, "-=0.25")
    .from('#header-2', 0.5, { opacity: 0 })
    .from('#cta-wrapper', 0.5, { opacity: 0 });


