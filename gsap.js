let tl = gsap.timeline();

// rotate
gsap.to("svg", {
    duration: 10, 
    rotation: 360, 
    repeat: -1, 
    ease: Linear.easeNone
});

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