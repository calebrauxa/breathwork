let tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2.5,
});

// rotate (elena if you are looking at this.. if you use gsap.to, its outside of the 'timeline', so here the rotation will just happen forever since I have repeat set to -1 (infinity))
gsap.to("svg", {
    duration: 10, 
    rotation: 360, 
    repeat: -1, 
    ease: Linear.easeNone
});

// then you can use the timeline (tl.to) to do things in sequence with one another
// grow in size + opacity to full
tl.to("svg", {
    width: "75%", 
    opacity: 1, 
    duration: 2.5, 
    ease: Linear.easeNone
});

// shrink back down + lower opacity
tl.to("svg", {
    delay: 2.5,
    width: "50%", 
    opacity: .3, 
    duration: 2.5, 
    ease: Linear.easeNone
});