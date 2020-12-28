var slideRightButton = document.querySelector(".btn-right")
var slideLeftButton = document.querySelector(".btn-left")

var allSlides = document.querySelectorAll(".slideshow-image")

var tl = gsap.timeline()

var firstSlideIndex = 0

var maxShownSlides = 6


/*
var shownSlides = allSlides.length

if (shownSlides > maxShownSlides) {
    shownSlides = maxShownSlides
} else if (shownSlides % 2 !== 0) {
    shownSlides --
}
*/

function turnSlideRight () {
        zeroToOne(allSlides[firstSlideIndex % allSlides.length])
        oneToTwo(allSlides[(firstSlideIndex+3) % allSlides.length])
        twoToThree(allSlides[(firstSlideIndex+2) % allSlides.length])
        threeToZero(allSlides[(firstSlideIndex+1) % allSlides.length])
        firstSlideIndex++
}

function turnSlideLeft () {
    twoToOne(allSlides[(firstSlideIndex+2) % allSlides.length]) // 1
    oneToTwo(allSlides[(firstSlideIndex+1) % allSlides.length]) // 0
    zeroToThree(allSlides[(firstSlideIndex) % allSlides.length]) // 3
    threeToZero(allSlides[(firstSlideIndex+3) % allSlides.length]) // 2
    firstSlideIndex--
    if (firstSlideIndex === 0) {
        firstSlideIndex = allSlides.length * 10
    }
}





function startSlideShow () {
    zeroToOne(allSlides[0])
    oneToTwo(allSlides[0], 1)
    twoToThreeStart(allSlides[0], 2)

    zeroToOne(allSlides[1], 1)
    oneToTwo(allSlides[1], 2)

    zeroToOne(allSlides[2], 2)

    firstSlideIndex = 3
}


function percentWidthToPixel(_elem, _perc){
    return (_elem.offsetWidth/100)* parseFloat(_perc)
}

function percentHeightToPixel(_elem, _perc){
    return (_elem.offsetHeight/100)* parseFloat(_perc)
}


function slideTo(slide, positionX, positionY, width, duration, ease, delay = 0) {
    gsap.to(slide, {
        x: positionX,
        y: positionY,
        width: width,
        duration: duration,
        delay: delay,
        ease: ease
    })
}

var shownSlides = 18


//moveSlideTo(allSlides[0], 11)



function moooooveslioiiideee(slide, index, delay) {
    
}







function moveSlideTo (slide, index, delay = 0) {
    console.log(shownSlides, index);
    console.log((percentWidthToPixel(slide.parentNode, 5) * (shownSlides)) - (percentWidthToPixel(slide.parentNode, 5) * index))
    
    /*
    slideTo(
        slide,
        0,
        percentWidthToPixel(slide.parentNode, 20) / shownSlides * (index % (shownSlides / 2)) - (percentWidthToPixel(slide.parentNode, 20) / shownSlides * (index % (shownSlides / 2))) * 1.5,
        percentWidthToPixel(slide.parentNode, 15),
        1,
        "power1",
        0
    )
    */


    if (index > shownSlides * 0.75) {
        slideTo(
            slide,
            percentWidthToPixel(slide.parentNode, 100) / shownSlides / 2 * index,
            percentWidthToPixel(slide.parentNode, 5) * (shownSlides) - percentWidthToPixel(slide.parentNode, 5) * index,
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            0
        )
        console.log("top right");
    } else if (index > shownSlides * 0.5) {
        slideTo(
            slide, 
            percentWidthToPixel(slide.parentNode, 50) + percentWidthToPixel(slide.parentNode, 50) / ((shownSlides - 2) / 2) * (index % (shownSlides / 2)),
            percentWidthToPixel(slide.parentNode, 5) * (shownSlides) - percentWidthToPixel(slide.parentNode, 5) * index,
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            0
        )
        console.log("bottom right");
    }
    if (index === Math.floor(shownSlides / 2)) {
        slideTo(
            slide, 
            0, // ercentWidthToPixel(slide.parentNode, 50) * (index % (shownSlides / 2)),
            percentWidthToPixel(slide.parentNode, 5) * index,
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            0
        )
        console.log("middle");
    }
    if (index < shownSlides / 2 && index > 0) {
        slideTo(
            slide, 
            0, // percentWidthToPixel(slide.parentNode, 50) * (index % (shownSlides - 2 / 4)), // 4
            percentWidthToPixel(slide.parentNode, 5) * index,
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            0
        )
        console.log("left");
    }
    if (index === 0) {
        slideTo(
            slide, 
            0, //percentWidthToPixel(slide.parentNode, 50),
            percentWidthToPixel(slide.parentNode, 2),
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            0
        )
        console.log("middle behind");
    }
} 



/*
tl.to(allSlides[0], {
    x: -percentWidthToPixel(allSlides[0].parentNode, 10),
    y: -percentWidthToPixel(allSlides[0].parentNode, 10),
    duration: 1
})
tl.to(allSlides[0], {
    x: percentWidthToPixel(allSlides[0].parentNode, 10),
    y: percentWidthToPixel(allSlides[0].parentNode, 10),
    duration: 1
})
*/


function zeroToOne (slide, delay = 0) {
    gsap.to(slide, {
        x:-percentWidthToPixel(slide.parentNode, 50) + percentWidthToPixel(slide, 50),
        y:percentHeightToPixel(slide.parentNode, 3),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function oneToTwo (slide, delay = 0) {
    gsap.set(slide, {
        zIndex:1,
        delay: delay
    })
    gsap.to(slide, {
        x:0,
        y:percentHeightToPixel(slide.parentNode, 6),
        width:percentWidthToPixel(slide.parentNode, 50),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function twoToThree (slide, delay = 0) {
    gsap.to(slide, {
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50) / 2.5,
        y:percentHeightToPixel(slide.parentNode, 3),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function twoToThreeStart (slide, delay = 0) {
    gsap.to(slide, {
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50),
        y:percentHeightToPixel(slide.parentNode, 3),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function threeToZero (slide, delay = 0) {
    gsap.set(slide, {
        zIndex:0,
        delay: delay
    })
    gsap.to(slide, {
        x:0,
        y:0,
        width:percentWidthToPixel(slide.parentNode, 15),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}


function twoToOne(slide, delay = 0) {
    gsap.to(slide, {
        x:-percentWidthToPixel(slide.parentNode, 50) + percentWidthToPixel(slide, 50) / 2.5,
        y:percentHeightToPixel(slide.parentNode, 3),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function zeroToThree(slide, delay = 0) {
    gsap.to(slide, {
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50),
        y:percentHeightToPixel(slide.parentNode, 3),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}





slideRightButton.addEventListener('click', turnSlideRight)
slideLeftButton.addEventListener('click', turnSlideLeft)

startSlideShow()