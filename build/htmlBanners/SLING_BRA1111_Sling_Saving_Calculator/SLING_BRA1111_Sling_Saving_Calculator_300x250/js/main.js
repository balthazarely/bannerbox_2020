// Variables
const text_input = $("#text_input"),
    cta_btn_wrapper = $("#calc-wrapper"),
    speed = 0.5,
    pause = 2.5,
    dishSavingsAmount = 30,
    bannerWidth = 300,
    timeout = 9000; // 9 Seconds

let currentBill = '',
    isBannerPlaying = false;

// Blinking Cursor Event Listener
const billInput = document.getElementById("text_input");
const cursor = document.getElementById("cursor");
billInput.addEventListener("click", () => {
    cursor.classList.add("hidden");
});

// This sets the value of the Bill, and starts the animation timeline
cta_btn_wrapper.on('click', function () {
    !isBannerPlaying ? mainAnimation() : null;
});

// Starts animation after timeout
setTimeout(() => {
    !isBannerPlaying ? secondaryAnimation() : null;
}, timeout);


document.getElementById("container").style.opacity = 1;
const start = gsap.timeline({ delay: 0.5 });
start.from("#sling-logo", speed, { x: 70, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .from("#circle", speed, { x: 130, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .to("#opening-header", speed, { x: bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-in")
    .from("#form-holder-top, #form_holder, #form-holder-bottom", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-in+=0.05")
    .from("#calc-wrapper", speed, { x: -bannerWidth, ease: Back.easeOut.config(.65) }, "frame-1-in+=0.1");


// Main Animation sequence if-checks
function mainAnimation() {
    currentBill = Math.round(text_input[0].value);
    if (isNaN(currentBill) || currentBill == "") {
        const showError = gsap.timeline({ yoyo: true });
        showError.to("#error-msg", 0.1, { opacity: 1 })
            .to("#error-msg", 2, {}) // Delay
            .to("#error-msg", 1, { opacity: 0 });
    } else {
        secondaryAnimation();
    }
};

// Animation after user enters input
function secondaryAnimation() {
    const main = gsap.timeline({});
    isBannerPlaying = true;
    // Frame 1 out
    main.set(".frame-3-icons", { rotationY: -450, opacity: 1 })
        .to("#opening-header", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out")
        .to("#error-msg", 0.1, { opacity: 0 }, "frame-1-out")
        .to("#form-holder-top, #form_holder, #form-holder-bottom", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.1")
        .to("#calc-wrapper", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, "frame-1-out+=0.2")
        .add(function chooseText() {
            if (currentBill <= dishSavingsAmount || currentBill == "") {
                document.getElementById('header-1').style.display = 'none';
            } else {
                document.getElementById('header-1-alternative').style.display = 'none';
            }
        })
        .add(function setUserText() {
            let target = document.getElementById("user-text-input");
            target.innerHTML = `$${currentBill - dishSavingsAmount}/mo`;
        })
        .add(function createClickTarget() {
            let blackborder = document.getElementById('blackborder');
            blackborder.style.zIndex = "500000";
        })
        // Frame 2 in
        .staggerTo(".frame-2-text", speed, { x: bannerWidth, ease: Back.easeOut.config(.65) }, 0.1)
        .to("#cta-wrapper", speed, { x: bannerWidth, ease: Back.easeOut.config(.65) }, "-=0.4")
        .to("#header-1", pause, {}) //Pause
        .staggerTo(".frame-2-text", speed, { x: -bannerWidth, ease: Back.easeIn.config(.65) }, 0.1)
        // Frame 3 in
        .staggerTo(".frame-3-text", speed, { x: bannerWidth, ease: Back.easeOut.config(.65) }, 0.1, "frame-3-in")
        .staggerTo(".frame-3-icons", 0.5, { rotationY: 0, ease: Power4.out }, 0.1, "-=0.2")
        .add(logoBlink(), "frame-3-in+=0.5");

}

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}