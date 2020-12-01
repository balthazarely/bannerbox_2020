// Since the text width is 20px less than the banner, 280px is good to use.
let textDistanceY = 90;
let pause = 2;

let easeOut = Back.easeOut.config(0.65);
let easeIn = Back.easeIn.config(0.65);

// Calc Logo Y Animation Distance
let distance;
(function calcLogoMovement() {
	let logo = document.getElementById('logo');
	distance = logo.offsetWidth + logo.offsetLeft + 3;
	console.log(distance);
})();

// Timeline
const tl = new TimelineMax({ delay: 0.5 });
tl.from("#logo", 0.5, { x: -distance, ease: Back.easeOut.config(.65) }, "frame-1-out")
	.from("#header-1", 0.5, { y: -50, ease: easeOut })
	.to("#header-1", 2, {}) // Delay
	.to("#header-1", 0.5, { y: 50, ease: easeIn })

	.from("#header-2", 0.5, { y: -50, ease: easeOut })
	.to("#header-2", 2, {}) // Delay
	.to("#header-2", 0.5, { y: 50, ease: easeIn })

	.from("#header-3", 0.5, { y: -50, ease: easeOut })
	.to("#header-3", 2, {}) // Delay
	.to("#header-3", 0.5, { y: 50, ease: easeIn })

	.from("#header-4", 0.5, { y: -50, ease: easeOut })
	.from("#cta_btn, #cta_btn_incet, #restrictions", 0.5, { y: -50, ease: easeOut }, "-=0.4");


