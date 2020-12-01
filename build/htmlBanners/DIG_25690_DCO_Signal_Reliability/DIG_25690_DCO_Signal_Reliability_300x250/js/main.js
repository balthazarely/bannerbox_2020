// Main function that generates rain. 
function rain(selector, weight, opacity, amount, speed) {
    var canvas = $(`#${selector}`)[0];
    canvas.width = 300;
    canvas.height = 250;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = `rgba(190,194,190, ${opacity})`;
        ctx.lineWidth = weight;
        ctx.lineCap = 'round';
        var init = [];
        var maxParts = amount;
        for (var a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: Math.random(4),
                ys: Math.random() * 10 + speed
            });
        }

        var particles = [];
        for (var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }
        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
        }
        function move() {
            for (var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if (p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }
        setInterval(draw, 30);
    }
};

// Create bouncing effect on umbrella. Really just a fountain of random x values that is spawing from the umbrella. 
function rainBounce() {
    window.requestAnimationFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (f) { window.setTimeout(f, 1e3 / 60); }; }();

    var canvas = document.getElementById('canvas-bounce');
    var ctx = canvas.getContext('2d');
    var W = canvas.width = window.innerWidth;
    var H = canvas.height = window.innerHeight;
    var gravity = 0.72;
    var particle_count = 200;
    var particles = [];
    var random_color = `rgba(190,194,190, 0.6)`;
    function Particle() {
        this.radius = 1;
        this.x = W / 2;
        this.y = H - this.radius;

        this.color = random_color;
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * -14 - 7;
        this.draw = function () {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
        };
    }
    for (var i = 0; i < particle_count; i++) {
        var particle = new Particle();
        particles.push(particle);
    }
    (function renderFrame() {
        requestAnimationFrame(renderFrame);
        ctx.clearRect(0, 0, W, H);
        particles.forEach(function (particle) {
            particle.vy += gravity;
            particle.x += particle.vx;
            particle.y += particle.vy;
            if (
                particle.x + particle.radius > W ||
                particle.x - particle.radius < 0 ||
                particle.y + particle.radius > H
            ) {
                particle.x = W / 2;
                particle.y = H - particle.radius;
                particle.vx = Math.random() * 4 - 2;
                particle.vy = Math.random() * -14 - 7;
            }
            particle.draw();

        });
    }());
}


// Calling All Rain Functions. Call 3 times to get various size and distances of rain. 
rain('canvas-bg', .7, 0.3, 500, 3);
rain('canvas-fg', 1.1, 0.25, 500, 6);
rain('canvas-close', 1.5, 0.25, 100, 8);
rainBounce();


// Lighting Timeline - Randomly fires throughout timeline
const lighting = new TimelineMax({ delay: 1.5 });
lighting.to('#lightning', 0.1, { opacity: .7 })
    .to('#lightning', 0.1, { opacity: 0 }, "-=0.05")
    .to('#lightning', 0.1, { opacity: .7 }, "+=0.3")
    .to('#lightning', 0.1, { opacity: 0 }, "-=0.05")
    .to('#lightning', 7, {})
    .to('#lightning', 0.1, { opacity: .7 })
    .to('#lightning', 0.1, { opacity: 0 }, "-=0.05")
    .to('#lightning', 4, {})
    .to('#lightning', 0.1, { opacity: .7 })
    .to('#lightning', 0.1, { opacity: 0 }, "-=0.09")
    .to('#lightning', 0.1, { opacity: .7 }, "+=0.3")
    .to('#lightning', 0.1, { opacity: 0 }, "-=0.05");

// Variables
const bannerWidth = document.getElementById('container').clientWidth;
const textPause = 2.5;
const backOut = Back.easeOut.config(1.3);
const backIn = Back.easeIn.config(1.3);

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
    .from('#header-1', 0.5, { x: bannerWidth, ease: backOut })
    .from('#cta-wrapper', 0.5, { opacity: 0 })
    .from('#logo', 0.5, { opacity: 0 }, "-=0.25")
    .to('#header-1', (textPause - .75), {})
    .to('#header-1', 0.5, { x: -bannerWidth, ease: backIn })

    .from('#header-2', 0.5, { x: bannerWidth, ease: backOut })
    .to('#header-2', textPause, {})
    .to('#header-2', 0.5, { x: -bannerWidth, ease: backIn })

    .from('#header-3', 0.5, { x: bannerWidth, ease: backOut })
    .to('#header-3', textPause, {})
    .to('#header-3', 0.5, { x: -bannerWidth, ease: backIn })

    .from('#header-4', 0.5, { x: bannerWidth, ease: backOut });

