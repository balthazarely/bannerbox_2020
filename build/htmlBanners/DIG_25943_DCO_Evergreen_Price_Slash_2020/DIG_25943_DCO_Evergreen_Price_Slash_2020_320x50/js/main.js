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
	.to("#header-1", 0.75, {}) // delay
	.to("#header-1", 1, { y: 5, opacity: 0, ease: Power4.easeOut })

	// Frame 2
	.from("#price-1", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-1", 0.75, { width: 0, ease: Power2.easeInOut }, "-=0.5")
	.from('#disclaimer-1', 1, { opacity: 0, ease: Power4.easeOut }, "-=1")
	.to("#header-1", 0.75, {}) // delay
	.to("#price-1", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "price-out")
	.to("#line-1", 0.5, { y: 5, opacity: 0, ease: Power4.easeOut }, "price-out")
	.to('#disclaimer-1', 0.5, { opacity: 0, ease: Power4.easeOut }, "price-out")

	// Frame 3
	.from("#header-2", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.to("#header-2", 0.75, {}) // delay
	.to("#header-2", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-2-out")

	// Frame 4
	.set("#line-2", { background: "#F01446" })
	.from("#price-2", 0.5, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-2", 0.65, { width: 0, ease: Power3.easeInOut })
	// .from('#disclaimer-2', 1, { opacity: 0, ease: Power4.easeOut }, "-=1")
	.to("#header-1", 0.75, {}) // delay 
	.to("#price-2", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "disclaimer-out")
	.to("#line-2", 0.65, { y: 5, opacity: 0, ease: Power4.easeOut }, "disclaimer-out")
	// .to('#disclaimer-2', 0.5, { opacity: 0, ease: Power4.easeOut }, "disclaimer-out+=0.5")

	// Frame 5
	.from("#header-3", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-3", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.to("#header-3", 0.75, {}) // delay
	.to("#header-3", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-3-out")
	.to("#line-3", 0.65, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-3-out")

	// Frame 6
	.from("#header-4", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-4", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.to("#header-4", 0.75, {}) // delay
	.to("#header-4", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-4-out")
	.to("#line-4", 0.65, { y: 5, opacity: 0, ease: Power4.easeOut }, "header-4-out")

	// Frame 7
	.from("#header-5", 1, { y: 5, opacity: 0, ease: Power4.easeOut }, "-=0.25")
	.from("#line-5", 0.65, { width: 0, ease: Power3.easeInOut }, "-=0.5")
	.staggerFrom(".image", 0.65, { x: 160, ease: Back.easeOut.config(1.5) }, -.1, "-=1.2")
	.from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: Back.easeOut.config(2) })
	.to("#cta-button-inset", 0.5, { y: 2, ease: Back.easeOut.config(6) }, "-=0.20");
