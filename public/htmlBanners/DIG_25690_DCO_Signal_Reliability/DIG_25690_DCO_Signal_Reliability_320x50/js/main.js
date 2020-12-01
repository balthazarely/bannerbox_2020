// Variables
const bannerHeight = document.getElementById('container').clientHeight;
const textPause = 2.5;
const backOut = Back.easeOut.config(1);
const backIn = Back.easeIn.config(1);

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from('#logo', 0.5, { opacity: 0 })
	.from('#header-1', 0.5, { y: bannerHeight, ease: backOut })
	.from('#cta-wrapper', 0.5, { opacity: 0 })
	.to('#header-1', (textPause - .75), {})
	.to('#header-1', 0.5, { y: -bannerHeight, ease: backIn })

	.from('#header-2', 0.5, { y: bannerHeight, ease: backOut })
	.to('#header-2', textPause, {})
	.to('#header-2', 0.5, { y: -bannerHeight, ease: backIn })

	// .from('#header-3', 0.5, { y: bannerHeight, ease: backOut })
	// .to('#header-3', textPause, {})
	// .to('#header-3', 0.5, { y: -bannerHeight, ease: backIn })

	.from('#header-4', 0.5, { y: bannerHeight, ease: backOut });

