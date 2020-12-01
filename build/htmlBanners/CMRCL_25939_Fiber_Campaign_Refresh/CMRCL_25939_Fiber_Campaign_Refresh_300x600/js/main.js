// Variables
let logoOffsetLeft = document.getElementById('logo').offsetLeft;
let logoWidth = document.getElementById('logo').clientWidth;
let logoDistanceLeft = logoWidth + logoOffsetLeft;

// EASE VARIABLES ------------------ //
let easeOut = Back.easeOut.config(0.9);
let easeInOut = Back.easeInOut.config(1.5);
let easeIn = Back.easeIn.config(0.65);

// Main Timeline
const main = new TimelineMax({});
main.from("#container", 0.5, { opacity: 0 })
	.from("#red-stripe", 1, { y: 388, ease: easeOut }, "stripe-start")
	.from("#black-stripe", 1, { y: 368, ease: easeOut }, "stripe-start+=0.2")
	.from("#logo", 0.60, { x: -logoDistanceLeft, ease: easeOut }, "stripe-start+=0.50")
	.from("#header-1", 0.5, { y: 3, opacity: 0, ease: easeOut }, "stripe-start+=1")
	.from("#background", 0.9, { scale: 1.72, x: -105, transformOrigin: "50% 0%", ease: Power3.easeInOut }, "stripe-start")
	.from("#container", 0.5, {}, "delay") // Delay
	.from("#header-2", 0.5, { y: 3, opacity: 0, ease: easeOut })
	.from("#container", 2, {}, "delay") // Delay
	.to("#header-1, #header-2", 0.5, { y: 3, opacity: 0, ease: easeOut }, "end-frame")
	.to("#red-stripe", 1, { y: -325, ease: easeInOut }, "end-frame")
	.to("#black-stripe", 1, { y: -355, ease: easeInOut }, "end-frame+=0.1")
	.to("#logo", 1, { y: -82, width: 187, ease: easeInOut }, "end-frame+=0.2")
	.from("#header-3", 0.5, { y: 3, opacity: 0, ease: easeOut }, "end-frame+=1")
	.from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(2) }, "-=0.20")
	.to("#cta-button-inset", 0.5, { y: 3, ease: Back.easeOut.config(6) }, "-=0.20");


// const resizeImage = new TimelineMax({ delay: 0.5 });
// resizeImage.from("#background", 5, { scale: 1.6 });
