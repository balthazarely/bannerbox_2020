// EASE VARIABLES ------------------ //
const powerOut = Power4.out;
const powerIn = Power4.in;
const backEaseOutMedium = Back.easeOut.config(1.7);
const softEase = "power2.inOut";

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({ paused: false });
main
  .to("#background", 1, { y: 110, ease: softEase }, "=+1")
  .to("#logo", 1, { opacity: 0, y: 110, ease: softEase }, "=-1")
  .add(function () {
    const target = document.getElementById("rectangle-stroke");
    target.classList.add("draw");
  }, "-=0.5")

  .to(".upcoming-event", 1, {
    scrambleText: {
      text: "UPCOMING EVENTS",
      chars: "TEMPLENIGHT",
      revealDelay: 0.5,
      tweenLength: false,
    },
  })
  .from(".artist-container", 0.5, { x: 250, ease: softEase }, "-=0.5")
  .from("#logo-small", 0.5, { x: -115, ease: softEase })
  .from("#find-tickets-wrapper", 0.5, { x: 160, ease: softEase }, "-=0.5")
  .to("#artist-text", 1, {
    scrambleText: { text: "ELI & FUR", chars: "AUFJWQP", speed: 0.3 },
  })
  .to(
    "#artist-date",
    0.5,
    {
      scrambleText: {
        text: "MARCH 5",
        chars: "AUFJWQP",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.8"
  )
  .from(".artist-container", 1.5, {}) // Delay

  .from("#habby", 0.5, { x: 191, ease: softEase })
  .to(
    "#artist-text",
    1,
    {
      scrambleText: {
        text: "HABSTRACT",
        chars: "ELI & FUR",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.3"
  )
  .to(
    "#artist-date",
    0.5,
    {
      scrambleText: {
        text: "MARCH 9",
        chars: "MARCH 5",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.8"
  )
  .from(".artist-container", 1.5, {}) // Delay

  .from("#joyryde", 0.5, { x: 191, ease: softEase })
  .to(
    "#artist-text",
    1,
    {
      scrambleText: {
        text: "JOYRYDE",
        chars: "ELI & FUR",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.3"
  )
  .to(
    "#artist-date",
    0.5,
    {
      scrambleText: {
        text: "MARCH 11",
        chars: "MARCH 9",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.8"
  )
  .from(".artist-container", 1.5, {}) // Delay

  .from("#nora", 0.5, { x: 191, ease: softEase })
  .to(
    "#artist-text",
    1,
    {
      scrambleText: {
        text: "NORA EN PURE",
        chars: "JOYRYDE",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.3"
  )
  .to(
    "#artist-date",
    0.5,
    {
      scrambleText: {
        text: "MARCH 12",
        chars: "MARCH 11",
        revealDelay: 0.5,
        tweenLength: false,
      },
    },
    "-=0.8"
  )
  .from(".artist-container", 1.5, {}) // Delay

  .to(
    "#artist-text",
    1,
    {
      scrambleText: {
        text: "TEMPLENIGHT",
        chars: "NORA EN PURE",
        revealDelay: 0.5,
        tweenLength: false,
        newClass: "display-none",
      },
    },
    "end-text"
  )
  .to(
    ".upcoming-event",
    1,
    {
      scrambleText: {
        text: "UPCOMING EVENTS",
        chars: "TEMPLENIGHT",
        revealDelay: 0.5,
        tweenLength: false,
        newClass: "display-none",
      },
    },
    "end-text"
  )
  .to(
    "#artist-date",
    0.5,
    {
      scrambleText: {
        text: "MARCH 12",
        chars: "MARCH 12",
        revealDelay: 0.5,
        tweenLength: false,
        newClass: "display-none",
      },
    },
    "end-text"
  )
  .to(".artist-container", 0.5, { x: -250, ease: softEase }, "end-text")
  .to("#logo-small", 0.5, { x: -115, ease: softEase }, "end-text")
  .to("#find-tickets-wrapper", 0.5, { x: 160, ease: softEase }, "end-text")

  .to("#background", 1, { y: 0, ease: softEase })
  .to("#logo", 1, { opacity: 1, y: 0, ease: softEase }, "=-1")
  .staggerTo(".final-slogan", 0.6, { opacity: 1 }, 0.4);

GSDevTools.create({ animation: main });

// (function play() {
//     document.getElementById("container").style.opacity = 1;
//     main.play();
// })();

// const container = document.getElementById('container')
// container.addEventListener('mouseover', () => {
//     main.play()
// })

// container.addEventListener('mouseout', () => {
//     main.pause()
// })
