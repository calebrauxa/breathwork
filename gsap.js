let tl = gsap.timeline({
    repeat: -1
});
let holdTime = 3.3;
let holdItDiv = document.querySelector('#holdit');

// rotate (elena if you are looking at this.. if you use gsap.to, its outside of the 'timeline', so here the rotation will just happen forever since I have repeat set to -1 (infinity))
gsap.to("svg", {
    duration: 10, 
    rotation: 360, 
    repeat: -1, 
    ease: Linear.easeNone
});

// then you can use the timeline (tl.to) to do things in sequence with one another
// grow in size + opacity to full
// 1 - BREATH IN
tl.to("svg", {
    width: "40%", 
    opacity: 1, 
    duration: holdTime, 
    ease: Linear.easeNone,
    onStart: () => {console.log('1 - BREATH IN started')}
});

// 2 - HOLD
tl.to("svg", {
    duration: holdTime,
    onStart: () => {
        console.log('2 - HOLD started')
    }
});

    tl.to(holdItDiv, {
        opacity: 1,
        duration: .1,
    }, "<")
    tl.to(holdItDiv, {
        opacity: 0,
        duration: .1,
    },"+=.5")

// shrink back down + lower opacity
// 3 - BREATH OUT
tl.to("svg", {
    width: "20%", 
    opacity: .3, 
    duration: holdTime, 
    ease: Linear.easeNone,
    onStart: () => {console.log('3 - BREATH OUT started')}
});

// 4 - HOLD
tl.to("svg", {
    duration: holdTime,
    onStart: () => {console.log('4 - HOLD started')}
});

    tl.to(holdItDiv, {
        opacity: 1,
        duration: .1,
    }, "<")
    tl.to(holdItDiv, {
        opacity: 0,
        duration: .1,
    },"+=.5")
