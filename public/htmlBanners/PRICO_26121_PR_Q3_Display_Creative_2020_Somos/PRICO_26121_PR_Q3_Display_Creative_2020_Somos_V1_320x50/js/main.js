// Variables
const bannerWidth = document.getElementById('container').clientWidth;
const bannerHeight = document.getElementById('container').clientHeight;
const logo = document.getElementById('logo');
const logoDistanceX = logo.offsetWidth + logo.offsetLeft;
const logoDistanceY = logo.offsetHeight + logo.offsetTop;

let powerOut = Power4.easeOut;
let powerIn = Power3.easeIn;
let easeOut = Back.easeOut.config(0.65);
let easeOutStrong = Back.easeOut.config(1.1);
let easeInStrong = Back.easeIn.config(1.1);
let easeIn = Back.easeIn.config(0.65);

// Timeline Sections

const frameOne = new TimelineMax({ delay: 0.5 });
frameOne.from("#logo", 0.75, { x: -logoDistanceX, ease: Power3.easeOut }, "logo-in")
	.from("#header", 0.5, { opacity: 0, y: 3, }, "logo-in")
	.from("#hopper", 0.75, { x: 125, ease: easeOut }, "logo-in")
	.from("#header", 1.5, {}) // Delay
	.to("#header", 0.5, { opacity: 0, y: 3 }, "subhead-out")
	.to("#hopper", 0.5, { x: 350, ease: easeIn }, "subhead-out")
	.from("#header-2", 0.5, { opacity: 0, y: 3, }, "subhead-out+=0.5")
	.from("#google-logo", 0.5, { opacity: 0, y: 3, ease: powerOut }, "subhead-out+=0.5")
	.from(".white-bg", 0.75, { x: 90, ease: easeOut }, "subhead-out")
	.from("#header", 1.5, {}) // Delay
	.to("#header-2, #google-logo", 0.5, { opacity: 0, y: 3 }, "header-2-out")


	.to(".white-bg", 0.75, { x: -30, ease: Back.easeInOut.config(0.65) }, "header-2-out")
	.from("#remote", 0.50, { y: 50, ease: easeOutStrong }, "header-2-out+=0.5")
	.from("#header-3", 0.5, { opacity: 0, y: 3 }, "header-2-out+=0.5")
	.from("#cta-wrapper, #restrictions", 0.5, { opacity: 0, y: 3 }, "header-2-out+=0.5");


