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
let easeIn = Back.easeIn.config(0.65);

// Timeline Sections

const frameOne = new TimelineMax({ delay: 0.5 });
frameOne.from("#logo", 0.75, { x: -logoDistanceX, ease: powerOut }, "logo-in")
	.from("#header", 0.5, { opacity: 0, y: 3, }, "logo-in")
	.from("#hopper", 0.75, { x: 350, ease: easeOut }, "logo-in")
	.from("#subhead-1", 0.5, { opacity: 0, y: 3, }, "logo-in+=0.65")
	.from("#cta-wrapper, #restrictions", 0.5, { opacity: 0, y: 3, }, "logo-in+=0.80")
	.from("#header", 2, {}) // Delay
	.to("#subhead-1", 0.5, { opacity: 0, y: 3, }, "subhead-out")
	.to("#hopper", 0.5, { x: 350, ease: easeIn }, "subhead-out")
	.from("#remote", 0.50, { y: 220, ease: easeOutStrong }, "remote-in", "-=0.10")
	.from("#subhead-2", 0.5, { opacity: 0, y: 3, }, "remote-in")
	.from("#google-logo", 0.5, { opacity: 0, y: 3, ease: powerOut }, "remote-in");

