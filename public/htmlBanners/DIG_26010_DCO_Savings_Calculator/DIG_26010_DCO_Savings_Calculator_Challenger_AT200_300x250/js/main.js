// Variables
let haveDVR = "yes",
	currentBill = "",
	dynamic_base_url,
	adSubmissionURL,
	text_input = $("#text_input"),
	cta_btn = $("#cta_btn"),
	cta_btn_wrapper = $("#calc-wrapper"),
	calc_btn = $("#calc-btn"),
	blackborder = $("#blackborder"),
	speed = 0.5,
	pause = 2.5,
	dishSavingsAmount = 85,
	bannerWidth = 300,
	isBannerPlaying = false;

// Blinking Cursor - hides it once the user has clicked into the input
let billInput = document.getElementById("text_input");
let cursor = document.getElementById("cursor");
billInput.addEventListener("click", () => {
	cursor.classList.add("hidden");
});

// Start Timeline
const start = gsap.timeline({ delay: 0.5 });
start.from("#logo", speed, { x: -105, ease: Back.easeOut.config(.65) }, "frame-1-out")
	.from("#subhead-1", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-out+=0.1")
	.from("#form-holder-top, #form_holder, #form-holder-bottom", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-out+=0.2")
	.from("#calc-wrapper", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-out+=0.3");


// This sets the value of the Bill, and starts the animation timeline
cta_btn_wrapper.on('click', function () {
	mainAnimation();
});

text_input.on('keyup', function (e) {
	if (e.key === 'Enter' || e.keyCode === 13) {
		mainAnimation();
	}
});

function mainAnimation() {
	currentBill = Math.round(text_input[0].value);
	if (isNaN(currentBill) || currentBill == "") {
		const showError = gsap.timeline({ yoyo: true });
		showError.to("#error-msg", 0.1, { opacity: 1 })
			.to("#error-msg", 2, {}) // Delay
			.to("#error-msg", 1, { opacity: 0 });
	} else if (currentBill <= dishSavingsAmount) {
		const main = gsap.timeline({});
		main.to("#subhead-1", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out")
			.to("#error-msg", 0.1, { opacity: 0 }, "frame-1-out")
			.to("#form-holder-top, #form_holder, #form-holder-bottom", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.1")
			.to("#calc-wrapper", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.2")
			.add(function createClickTarget() {
				/** This is so that the blackboarder, which is the main click target and starts at a negative z-index, comes to the top. If this isnt in place, the user cannot add data in the input cause the target is in the way. Also, this ensures to that the click target is the entire ad and not just the cta. **/
				let blackborder = document.getElementById('blackborder');
				blackborder.style.zIndex = "500000";
			})
			.to("#alternative-text", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "alt-in")
			.to("#alternative-text-sub", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "alt-in+=0.1")
			.to("#alternative-text", pause, {}) //Pause
			.to("#alternative-text", speed, { x: (-bannerWidth * 2), ease: Back.easeIn.config(.65) }, "alt-out")
			.to("#alternative-text-sub", speed, { x: (-bannerWidth * 2), ease: Back.easeIn.config(.65) }, "alt-out+=0.1")

			.to("#header-2", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-2-in")
			.to("#subhead-2", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-2-in+=0.1")
			.to("#header-2", pause, {}) //Pause
			.to("#subhead-2", speed, { x: (-bannerWidth * 2), ease: Back.easeIn.config(.65) }, "header-2-out")
			.to("#cta_btn, #cta_btn_incet", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-3-in+=0.1")
			.to("#restrictions", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-3-in+=0.2");
	} else {
		const main = gsap.timeline({});
		main.to("#subhead-1", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out")
			.to("#error-msg", 0.1, { opacity: 0 }, "frame-1-out")
			.to("#form-holder-top, #form_holder, #form-holder-bottom", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.1")
			.to("#calc-wrapper", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.2")
			.add(function setUserText() {
				let target = document.getElementById("user-text-input");
				target.innerHTML = currentBill - dishSavingsAmount;
			})
			.add(function createClickTarget() {
				let blackborder = document.getElementById('blackborder');
				blackborder.style.zIndex = "500000";
			})
			.to("#header-1", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) })
			.to("#header-1", pause, {}) //Pause
			.to("#header-1", speed, { x: (-bannerWidth * 2), ease: Back.easeIn.config(.65) })
			.to("#header-2", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-2-in")

			.to("#subhead-2", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-2-in+=0.1")
			.to("#header-2", pause, {}) //Pause
			.to("#subhead-2", speed, { x: (-bannerWidth * 2), ease: Back.easeIn.config(.65) }, "header-2-out")
			.to("#cta_btn, #cta_btn_incet", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-3-in+=0.1")
			.to("#restrictions", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "header-3-in+=0.2");

	}
}

