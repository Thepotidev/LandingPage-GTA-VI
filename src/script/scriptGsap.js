import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const timeLine = gsap.timeline({
    ease: "power1.inOut",
    scrollTrigger: {
        scrub: 1
    }
})

timeLine
    .to('#hero-key', {start: "top top", end: "bottom top", scale: 1, duration: 1})
    .to('#hero-key-logo', { opacity: 0}, "<")
    .to('.hero-footer', { opacity: 0}, "<")
    .to('.hero-play-button', { opacity: 0}, "<")
    .to('.logo-mask', {
        maskSize: "clamp(20vh, 25%, 30vh)"
    }, 
    0.15
)
.to('#hero-key', {
        opacity: 0, 
        duration: 0.2,
    }, 
    0.4
)