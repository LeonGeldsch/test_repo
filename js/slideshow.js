var slideRightButton = document.querySelector(".btn-right");
var slideLeftButton = document.querySelector(".btn-left");

var allSlides = document.querySelectorAll(".slideshow-image")

var tl = gsap.timeline();

/*
gsap.set(".slideshow-image-1", {
    zIndex:99
})
*/




function startSlideShow() {
   let index = 0
    allSlides.forEach(slide => {
        setTimeout(function () {
            zeroToOne(slide)
            oneToTwo(slide, 1)
            twoToThree(slide, 2)
            threeToZero(slide, 3)
            console.log(index);
        }, index*1000)
        index++
    });
}
/* zeroToOne(allSlides[0])
oneToTwo(allSlides[0], 1)
twoToThree(allSlides[0], 2)
threeToZero(allSlides[0], 3)
 */

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
        x:percentWidthToPixel(slide.parentNode, 50) - percentWidthToPixel(slide, 50),
        width:percentWidthToPixel(slide.parentNode, 20),
        duration: 1,
        delay: delay,
        ease: "power1"
    })

}
function threeToZero (slide, delay = 0) {
    gsap.to(slide, {
        x:0,
        duration: 1,
        delay: delay,
        ease: "power1"
    })
}


function percentWidthToPixel(_elem, _perc){
    return (_elem.offsetWidth/100)* parseFloat(_perc);
}

function turnSlideRight () {
    let slideshowImageOne = document.querySelector(".slideshow-image-1");
    let slideshowImageTwo = document.querySelector(".slideshow-image-2");
    let slideshowImageThree = document.querySelector(".slideshow-image-3");


    gsap.to(".slideshow-image-1", {
        duration:4,
        x:percentWidthToPixel(slideshowImageOne.parentNode, 50) - percentWidthToPixel(slideshowImageTwo, 50),
        width:percentWidthToPixel(slideshowImageOne.parentNode, 50),
        ease:"power1"
    })
    
    
    gsap.to(".slideshow-image-2", {
        duration:4,
        x:percentWidthToPixel(slideshowImageOne.parentNode, 50) - percentWidthToPixel(slideshowImageThree, 50),
        width:percentWidthToPixel(slideshowImageOne.parentNode, 10),
        ease:"power1"
    })
    
    
    gsap.to(".slideshow-image-3", {
        duration:4,
        x:-1 * (percentWidthToPixel(slideshowImageOne.parentNode, 100) - percentWidthToPixel(slideshowImageOne, 100)),
        ease:"power1"
    })

    setTimeout(function () {
        slideshowImageOne.classList.remove("slideshow-image-1");
        slideshowImageOne.classList.add("slideshow-image-2");
        slideshowImageOne.style.transform = null;
        slideshowImageOne.style.width = null;
        slideshowImageTwo.classList.remove("slideshow-image-2");
        slideshowImageTwo.classList.add("slideshow-image-3");
        slideshowImageTwo.style.transform = null;
        slideshowImageTwo.style.width = null;
        slideshowImageThree.classList.remove("slideshow-image-3");
        slideshowImageThree.classList.add("slideshow-image-1");
        slideshowImageThree.style.transform = null;
        slideshowImageThree.style.width = null;

    }, 4010);
}

function slideshowRight () {
    let slideshowImageOne = document.querySelector(".slideshow-image-1");
    let slideshowImageTwo = document.querySelector(".slideshow-image-2");
    let slideshowImageThree = document.querySelector(".slideshow-image-3");

    slideshowImageOne.classList.remove("slideshow-image-1");
    slideshowImageOne.classList.add("slideshow-image-2");
    slideshowImageOne.style.transform = null;
    slideshowImageOne.style.width = null;
    slideshowImageTwo.classList.remove("slideshow-image-2");
    slideshowImageTwo.classList.add("slideshow-image-3");
    slideshowImageTwo.style.transform = null;
    slideshowImageTwo.style.width = null;
    slideshowImageThree.classList.remove("slideshow-image-3");
    slideshowImageThree.classList.add("slideshow-image-1");
    slideshowImageThree.style.transform = null;
    slideshowImageThree.style.width = null;

    gsap.from(".slideshow-image-2", {
        duration:4,
        x:-1 * (percentWidthToPixel(slideshowImageOne.parentNode, 100) - percentWidthToPixel(slideshowImageOne, 100)),
        width:percentWidthToPixel(slideshowImageOne.parentNode, 50),
        ease:"power1"
    })
    
}


slideRightButton.addEventListener('click', startSlideShow)
