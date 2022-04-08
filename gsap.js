let tl = gsap.timeline();

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
    duration: 5, 
    ease: "back.out(1.7)"
});

// shrink back down + lower opacity
tl.to("svg", {
    width: "50%", 
    opacity: .5, 
    duration: 8, 
    ease: "back.out(1.7)"
}, "8");