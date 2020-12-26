var slideRightButton = document.querySelector(".btn-right");
var slideLeftButton = document.querySelector(".btn-left");

var allSlides = document.querySelectorAll(".slideshow-image")

var tl = gsap.timeline();

var firstSlideIndex = 0;


function turnSlideRight () {
    console.log(firstSlideIndex);
        zeroToOne(allSlides[firstSlideIndex % allSlides.length])
        oneToTwo(allSlides[(firstSlideIndex+3) % allSlides.length])
        twoToThree(allSlides[(firstSlideIndex+2) % allSlides.length])
        threeToZero(allSlides[(firstSlideIndex+1) % allSlides.length])
        firstSlideIndex++
}

function turnSlideLeft () {
    console.log(firstSlideIndex);
        zeroToOne(allSlides[firstSlideIndex % allSlides.length])
        oneToTwo(allSlides[(firstSlideIndex+3) % allSlides.length])
        twoToThree(allSlides[(firstSlideIndex+2) % allSlides.length])
        threeToZero(allSlides[(firstSlideIndex+1) % allSlides.length])
        firstSlideIndex--
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
    return (_elem.offsetWidth/100)* parseFloat(_perc);
}

function zeroToOne (slide, delay = 0) {
    gsap.to(slide, {
        x:-percentWidthToPixel(slide.parentNode, 50) + percentWidthToPixel(slide, 50),
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
        width:percentWidthToPixel(slide.parentNode, 50),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function twoToThree (slide, delay = 0) {
    gsap.to(slide, {
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50) / 2.5,
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}
function twoToThreeStart (slide, delay = 0) {
    gsap.to(slide, {
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50),
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
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}




slideRightButton.addEventListener('click', turnSlideRight)
slideLeftButton.addEventListener('click', turnSlideLeft)

startSlideShow()