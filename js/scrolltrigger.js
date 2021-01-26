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

/*
// fly in 1
gsap.from(".fly-in-1", {
    duration:1, y:"200px", opacity:1, ease:"bounce.in",
        scrollTrigger: {
            trigger:"#footer-scrolltrigger"
        }
})
gsap.from(".fly-in-1", {
    duration:1, x:"200px", opacity:0, ease:"bounce.out",
        scrollTrigger: {
            trigger:"#footer-scrolltrigger"
        }
})

// fly-in-2
gsap.from(".fly-in-2", {
    duration:1, y:"-300px", opacity:1, ease:"bounce.out",
        scrollTrigger: {
            trigger:"#footer-scrolltrigger"
        }
})
gsap.from(".fly-in-2", {
    duration:1, x:"-100px", opacity:0, ease:"power2",
        scrollTrigger: {
            trigger:"#footer-scrolltrigger"
        }
})
*/




var allFadeInSideElements = gsap.utils.toArray('footer p');


for (i = 0; i < allFadeInSideElements.length; i++) {
    console.log(i % 2);
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

/*
allFadeInLeft.forEach((element) => {
    gsap.from(element, {
        duration:2,
        x:"-300px",
        opacity:0,
        scrollTrigger: {
            trigger: link
        }
    })
})
*/