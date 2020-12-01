function pause() {
    main.pause();
}

function restart() {
    document.getElementById("container").style.opacity = 1;
    main.restart();
}


// EASE VARIABLES ------------------ //
const powerOut = Power4.out;
const powerIn = Power4.in;
const backEaseOutMedium = Back.easeOut.config(1.7);
const backEaseInOutMedium = Back.easeInOut.config(1.7);
const softEase = "power2.inOut";

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({ delay: 0.5, onComplete: loopHover });
main.staggerFrom(".text", 0.3, { scale: 0, ease: backEaseOutMedium }, 0.1)
    .to(".text", 1, {}) //PAUSE
    .to("#text-wrapper", 0.5, { height: 120, ease: "back.out(2.7)" })
    .staggerFrom('.text-2', 0.3, { scale: 0, ease: backEaseOutMedium }, 0.1, "-=0.25")
    .from("#middle-divider-1", 0.35, { scaleX: 0, transformOrigin: "right", ease: backEaseOutMedium }, "-=0.3")
    .from("#middle-divider-2", 0.35, { scaleX: 0, transformOrigin: "left", ease: backEaseOutMedium }, "-=0.35")
    .to(".text", 1, {}) //PAUSE
    .staggerTo('.all-class', 1, { y: 200, ease: "back.inOut(2.7)" }, -0.025)
    .staggerFrom(".beer", .75, { x: 330, scale: 2, ease: "power3.out" }, 0.1, "-=0.5")
    .from('#hover-title', 0.3, { opacity: 0 }, "-=0.25")
    .to(".text", 10, {}) //PAUSE
    .to('#hover-title, #logo', 0.5, { opacity: 0 }, "-=1")
    .to('#beer-info-wrapper', 0.3, { opacity: 0 })
    .add(function () {
        let divToKill = document.getElementById('beer-info-wrapper');
        divToKill.parentNode.removeChild(divToKill);

    })
    .staggerTo(".beer", .75, { x: -330, ease: backEaseInOutMedium }, 0.1)
    .staggerFrom(".text2", 0.3, { scale: 0, ease: backEaseOutMedium }, 0.1)
    .to(".text", 1, {}) //PAUSE
    .staggerTo('.all-class2', 1, { y: 200, ease: "back.inOut(2.7)" }, -0.025)
    .from('#logo-2', 0.75, { y: -200, ease: backEaseInOutMedium }, "-=0.75")
    .to(".text", 2, {}); //PAUSE
// Variables
let beerName = document.getElementById('beer-name');
let avb = document.getElementById('avb');
let flavor = document.getElementById('flavor');

function loopHover() {
    let hoverTitle = new TimelineMax({ repeat: 2 });
    hoverTitle.to("#hover-title", 1, { scale: 1.1 })
        .to("#hover-title", 1, { scale: 1 })
        .to("#hover-title", 1, {});
}

const beers = document.querySelectorAll('.beer');
beers.forEach(beer => {
    beer.addEventListener("mouseenter", function (e) {
        document.getElementById('hover-title').setAttribute('style', 'display: none');
        document.getElementById('beer-info-wrapper').setAttribute('style', 'opacity: 1');
        beerName.innerHTML = e.target.dataset.beername;
        avb.innerHTML = e.target.dataset.avb;
        flavor.innerHTML = e.target.dataset.flavor;
        let beerHover = document.getElementById(e.target.id);
        gsap.fromTo(`#${beerHover.id}`, 0.25, { scale: 1 }, { scale: 1.2 });

    });
    beer.addEventListener('mouseleave', function (e) {
        let beerHover = document.getElementById(e.target.id);
        beerHover.setAttribute('style', 'transform: scale(1)');
        gsap.fromTo(`#${beerHover.id}`, 0.25, { scale: 1.2 }, { scale: 1 });
    });
});



GSDevTools.create();

(function play() {
    document.getElementById("container").style.opacity = 1;
    main.play();
})();