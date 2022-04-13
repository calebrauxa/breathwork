let tl = gsap.timeline({
    repeat: -1
});
let holdTime = 3.3;
let holdItDiv = document.querySelector('#holdit');
let squirc3path = document.querySelector('#squirc3path');

// rotate (elena if you are looking at this.. if you use gsap.to, its outside of the 'timeline', so here the rotation will just happen forever since I have repeat set to -1 (infinity))
gsap.to("svg", {
    duration: 12, 
    rotation: 360, 
    repeat: -1, 
    ease: Linear.easeNone
});

// 1 - BREATH IN
tl.to("svg", {
    width: "40%", 
    opacity: 1, 
    duration: holdTime, 
    ease: "power1.out",
    onStart: () => {
        console.log('1 - BREATH IN started')
        holdItDiv.innerHTML = 'breathe in'
    }
});

// 2 - HOLD
tl.to("svg", {
    duration: holdTime,
    onStart: () => {
        console.log('2 - HOLD started')
        holdItDiv.innerHTML = 'hold it'
        squirc3path.classList.add("flash")
    },
    onComplete: () => {
        squirc3path.classList.remove("flash")
    }
});

// 3 - BREATH OUT
tl.to("svg", {
    width: "20%", 
    opacity: .3, 
    duration: holdTime, 
    ease: "power1.out",
    onStart: () => {
        console.log('3 - BREATH OUT started')
        holdItDiv.innerHTML = 'breathe out'
    }
});

// 4 - HOLD
tl.to("svg", {
    duration: holdTime,
    onStart: () => {
        console.log('4 - HOLD started')
        holdItDiv.innerHTML = 'hold it'
        squirc3path.classList.add("flash")
    },
    onComplete: () => {
        squirc3path.classList.remove("flash")
    }
});
