function createDivLoop(e,t,o,a,i,s,n,l){let r=document.createDocumentFragment();for(let e=0;e<20;e++)for(let e=0;e<=6;e++){let g=document.createElement("img");0===e?g.setAttribute("src",t):1===e?g.setAttribute("src",o):2===e?g.setAttribute("src",a):3===e?g.setAttribute("src",i):4===e?g.setAttribute("src",s):5===e?g.setAttribute("src",n):6===e&&g.setAttribute("src",l);let c=document.createElement("div");g.setAttribute("height","50"),g.setAttribute("width","50"),c.appendChild(g),c.className="Div-"+[e],r.appendChild(c)}document.getElementById(e).appendChild(r)}function play(){main.play()}function intro(){let e=new TimelineMax({});return e.from("#slot-main-wrapper",1,{scale:0,rotation:45,delay:.3,ease:Back.easeOut.config(1.7)}).staggerFrom("#header, #sling-logo",1,{scale:0,ease:Back.easeOut.config(2),transformOrigin:"50% 50%"},.2,"-=1").from("#background",1,{opacity:0,ease:Back.easeInOut.config(1.7)},"-=1.35"),e}function logoBlink(){let e=new TimelineMax({repeat:-1,repeatDelay:5,delay:1});return e.staggerTo(".icon",.3,{scale:0,transformOrigin:"50% 50%"},.1,"+=0.5").staggerTo(".icon",.3,{scale:1,ease:Back.easeOut.config(3.5),transformOrigin:"50% 50%"},.1,"-=0.5"),e}function lights(){let e=new TimelineMax({repeat:-1});return e.staggerTo(".lights",.1,{opacity:1,delay:.75},.1).to(".lights",.4,{opacity:0}).to(".lights, #header-blink",.2,{opacity:1},"+=.2").to(".lights, #header-blink",.2,{opacity:0},"+=.5").staggerTo(".lights",.1,{opacity:1},-.1).to(".lights, #header-blink",.4,{opacity:0}).to(".lights, #header-blink",.2,{opacity:1},"+=.2").to(".lights, #header-blink",.2,{opacity:0},"+=.5"),e}function animate(){let e,t;animationRunning=!0,new TimelineMax({}).to("#slot-wrapper, #light-container, #light-container-2, #spinner-container",1,{scale:1.2,ease:Back.easeOut.config(1.7)}).to("#header",.5,{scale:0},"-=0.5").to("#sling-logo",.5,{scale:0},"-=0.35"),function e(){let t;document.getElementById("play-btn").style.transform="scale(0)"}(),document.getElementById("light-container").style.display="none",function e(){t=Math.floor(3*Math.random()),console.log(t,"< animation seq.")}();let o=new TimelineMax({}),a,i;0===t?o.to("#scroller-1",2,{y:-800,delay:.2,ease:"power4.inOut"}).to("#scroller-2",2,{y:-1048,ease:"power4.inOut"},"-=1.7").to("#scroller-3",2,{y:-1049,ease:"power4.inOut"},"-=1.7").to("#header-winner",.5,{scale:1,ease:"elastic.out(1, 0.4)"},"-=.1"):1===t?o.to("#scroller-1",2,{y:-1e3,delay:.2,ease:"power4.inOut"}).to("#scroller-2",2,{y:-1248,ease:"power4.inOut"},"-=1.7").to("#scroller-3",2,{y:-1249,ease:"power4.inOut"},"-=1.7").to("#header-winner",.5,{scale:1,ease:"elastic.out(1, 0.4)"},"-=.1"):2===t&&o.to("#scroller-1",2,{y:-1300,delay:.2,ease:"power4.inOut"}).to("#scroller-2",2,{y:-1498,ease:"power4.inOut"},"-=1.7").to("#scroller-3",2,{y:-1347,ease:"power4.inOut"},"-=1.7").to("#header-winner",.5,{scale:1,ease:"elastic.out(1, 0.4)"},"-=.1"),o.to("#scroller-1, #scroller-2, #scroller-3",2,{y:1e3,ease:"power4.inOut"},"+=0.65"),new TimelineMax({repeat:-1}).to("#final-btn-shinny",2,{x:250,ease:Power2.easeInOut},"-=0.5").to("#final-btn-shinny",4,{}),new TimelineMax({}).staggerTo(".lights-2",.1,{opacity:1},.05).staggerTo(".lights-2",.1,{opacity:0},.05,"-=0.10").staggerTo(".lights-2",.1,{opacity:1},.05).staggerTo(".lights-2",.1,{opacity:0},.05,"-=0.10").to(".lights-2",.15,{opacity:1}).to(".lights-2",.15,{opacity:0}).to(".lights-2",.15,{opacity:1}).to(".lights-2",.15,{opacity:0}).to(".lights-2",.15,{opacity:1}).to(".lights-2",.15,{opacity:0}).to(".lights-2",.15,{opacity:1}).to(".lights-2",.15,{opacity:0}).to("#slot-main-wrapper",1,{scale:0,rotation:45,ease:"power4.inOut"}).to("#header-winner",1,{scale:0,ease:"power4.inOut"},"-=1").staggerTo(".bottom-elements",.7,{scale:1,y:20,ease:"power4.inOut"},.1,"-=.5").to("#final-btn-wrapper",1,{scale:1,ease:Back.easeOut.config(1.7)},"-=0.5").to("#sling-logo",1,{scale:1,ease:Back.easeOut.config(1.7)},"-=1").staggerTo(".bottom-elements",.5,{scale:1.1,ease:"power4.inOut"},.1,"+=1").staggerTo(".bottom-elements",.5,{scale:1,ease:"power4.inOut"},.1,"-=.5")}createDivLoop("scroller-1","./logos/MTV.jpg","./logos/NBC.jpg","./logos/VH1.jpg","./logos/ABC.jpg","./logos/Disney.jpg","./logos/ESPN.jpg","./logos/History.jpg"),createDivLoop("scroller-2","./logos/ABC.jpg","./logos/History.jpg","./logos/Disney.jpg","./logos/NBC.jpg","./logos/VH1.jpg","./logos/MTV.jpg","./logos/ESPN.jpg"),createDivLoop("scroller-3","./logos/ESPN.jpg","./logos/VH1.jpg","./logos/ABC.jpg","./logos/MTV.jpg","./logos/Disney.jpg","./logos/History.jpg","./logos/NBC.jpg");var main=new TimelineMax({});main.add(intro()).add(logoBlink()).add(lights());let animationRunning=!1;document.getElementById("container").addEventListener("click",(function(){animationRunning||animate()}));