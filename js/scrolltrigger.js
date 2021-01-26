gsap.registerPlugin(ScrollTrigger);


gsap.from("#section1 img", {
    duration:1, x:"-200px", opacity:0, ease:"power1",
        scrollTrigger: {
            trigger:"#section1 .text-wrapper"
        }
})
gsap.from("#section1 .text-wrapper", {
    duration:1, x:"200px", opacity:0, ease:"power1",
        scrollTrigger: {
            trigger:"#section1 .text-wrapper"
        }
})


gsap.from("#section2 img", {
    duration:1, y:"100px", opacity:0, ease:"power1",
        scrollTrigger: {
            trigger:"#section2 .text-wrapper"
        }
})
gsap.from("#section2 .text-wrapper", {
    duration:1, y:"100px", opacity:0, ease:"power1",
        scrollTrigger: {
            trigger:"#section2 .text-wrapper"
        }
})


gsap.from("#section3 img", {
    duration:1, x:"-200px", opacity:0, ease:"bounce",
        scrollTrigger: {
            trigger:"#section3 .text-wrapper"
        }
})
gsap.from("#section3 .text-wrapper", {
    duration:1, x:"200px", opacity:0, ease:"bounce",
        scrollTrigger: {
            trigger:"#section3 .text-wrapper"
        }
})



var allFadeInSideElements = gsap.utils.toArray('footer p');


for (i = 0; i < allFadeInSideElements.length; i++) {
    if (i % 2 == 0) {
        gsap.from(allFadeInSideElements[i], {
            duration:1.5,
            x:"-100px",
            opacity:0,
            ease:"power1",
            scrollTrigger: {
                trigger: allFadeInSideElements[i]
            }
        })
    } else {
        gsap.from(allFadeInSideElements[i], {
            duration:1.5,
            x:"100px",
            opacity:0,
            ease:"power1",
            scrollTrigger: {
                trigger: allFadeInSideElements[i]
            }
        })
    }
}
