//basic implementation

// gsap.from('.b2 h3', {
//     duration: 5,
//     autoAlpha: 0,
//     y: 100,
//     scale: 0.5,
//     scrollTrigger: {
//         "trigger": ".b2 h3",
//         markers: true
//     }
// })

// gsap.from('.b2 h3', {
//     duration: 5,
//     autoAlpha: 0,
//     y: 100,
//     scale: 0.5,
//     scrollTrigger: {
//         "trigger": ".b2 h3",
//         markers: true,
//         start: "top center",
//         end: "bottom top"
//     }
// })


gsap.from('.b2 h3', {
    duration: 5,
    autoAlpha: 0,
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        "trigger": ".b2 h3",
        markers: true,
        start: "top 80%",
        end: "bottom 10%",
        // onEnter onLeave onEnterBack onLeaveBack
        toggleAction: "play pause reverse reset",
        // play resume reset restart complete reverse none
        onEnter: () => console.log("ENTER"),
        onLeave: () => console.log("LEAVE"),
        scrub: true //duration of the tween that is used to animate to whatever value the animation to it's current values
    }
})

ScrollTrigger.create({
    trigger: ".b2",
    pin: true,
    markers: true,
})