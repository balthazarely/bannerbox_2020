// Variables
let logoOffsetLeft = document.getElementById('logo').offsetLeft;
let logoWidth = document.getElementById('logo').clientWidth;
let logoDistanceLeft = logoWidth + logoOffsetLeft;

// EASE VARIABLES ------------------ //
let easeOutLogo = Back.easeOut.config(0.65);
let easeOut = Back.easeOut.config(5);
let easeInOut = Back.easeInOut.config(1.5);
let easeIn = Back.easeIn.config(5);

// Main Timeline
const main = new TimelineMax({});
main.from("#container", 0.5, { opacity: 0 })
	.from("#logo", 0.60, { x: -logoDistanceLeft, ease: easeOutLogo })
	.from("#header-1", 0.5, { y: 2, opacity: 0, ease: Power3.easeOut })
	.from("#container", 1.5, {}) // Delay
	.to("#header-1", 0.5, { y: 2, opacity: 0 })
	.to('#header-1', 0.2, {}) // MICRO DELAY

	.from("#header-2", 0.5, { y: 2, opacity: 0, ease: Power3.easeOut })
	.from("#container", 1.5, {}) // Delay
	.to("#header-2", 0.5, { y: 2, opacity: 0 })
	.to('#header-1', 0.2, {}) // MICRO DELAY

	.from("#header-3", 0.5, { y: 2, opacity: 0, ease: Power3.easeOut })
	.from("#container", 1.5, {}) // Delay
	.to("#header-3", 0.5, { y: 2, opacity: 0 })

	.to('#header-1', 0.2, {}) // MICRO DELAY
	.from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(2) }, "-=0.20")
	.to("#cta-button-inset", 0.5, { y: 2, ease: Back.easeOut.config(6) }, "-=0.20");
