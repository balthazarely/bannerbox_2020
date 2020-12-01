// Variables
let logoOffsetLeft = document.getElementById('logo').offsetLeft;
let logoWidth = document.getElementById('logo').clientWidth;
let logoDistanceLeft = logoWidth + logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#logo", 1, { x: -logoDistanceLeft, ease: Power4.easeInOut })
	// Frame 1
	.from('#header-1', 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-1-in")
	.from('#disclaimer-1', 1, { opacity: 0, ease: Power4.easeOut }, "header-1-in")
	.from("#price-1", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-1-in+=0.5")
	.to("#header-1", 0.25, {}) // delay
	.from("#line-1", .5, { width: 0, ease: Power2.easeInOut }, "header-1-in+=1.25")
	.to("#header-1", 0.25, {}) // delay
	.to('#header-1', 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-1-out")
	.to("#price-1", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-1-out")
	.to('#disclaimer-1', 0.5, { opacity: 0, ease: Power4.easeOut }, "header-1-out")
	// Frame 2
	.to("#line-1", 0.5, { width: 231, x: 18, ease: Back.easeInOut.config(3) }, "header-1-out+=0.15")
	.from("#price-2", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(4) }, "-=0.5")
	.to("#line-1", 0.5, { background: "#F01446" }, "-=0.5")
	.from("#header-2", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(4) }, "-=0.7")
	.to("#header-1", 1, {}) // delay
	.to("#header-2", 0.5, { y: 5, opacity: 0, ease: Back.easeIn.config(4) }, "disclaimer-out")
	.to("#price-2", 0.5, { y: 5, opacity: 0, ease: Back.easeIn.config(4) }, "disclaimer-out+=0.2")
	.to("#line-1", 0.6, { scaleX: 0, ease: Back.easeIn.config(2) }, "disclaimer-out+=0.2")
	.to("#header-2", 0.5, {}) // delay
	// Frame 3
	.from("#header-3", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-2", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.to("#header-3", 1, {}) // delay
	.to("#header-3", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-3-out")
	.to("#line-2", 0.65, { scaleX: 0, transformOrigin: "right", ease: Power3.easeInOut }, "header-3-out-=0.3")
	// Frame 4
	.from("#header-4", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-3", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.to("#header-4", 1, {}) // delay
	.to("#header-4", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-4-out")
	.to("#line-3", 0.65, { scaleX: 0, transformOrigin: "right", ease: Power3.easeInOut }, "header-4-out-=0.3")
	// Frame 5
	.from("#header-5", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-4", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.staggerFrom(".image", 0.65, { x: 255, ease: Back.easeOut.config(1.5) }, -.1, "-=1.2")
	.from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(2) })
	.to("#cta-button-inset", 0.5, { y: 3, ease: Back.easeOut.config(6) }, "-=0.20");

// main.seek("header-1-out");