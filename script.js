// LENIS SMOOTH SCROLL

const lenis = new Lenis({
smooth: true,
lerp: 0.08
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// GSAP ANIMATIONS

gsap.from(".hero-left h1",{
y:60,
opacity:0,
duration:1
})

gsap.from(".hero-left h4",{
y:40,
opacity:0,
delay:.3
})

gsap.from(".profile",{
x:100,
opacity:0,
duration:1
})

gsap.from(".skill-card",{
scrollTrigger:{
trigger:".skills",
start:"top 80%"
},
opacity:0,
y:40,
stagger:.2
})