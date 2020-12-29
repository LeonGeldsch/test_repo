var slideRightButton = document.querySelector(".btn-right")
var slideLeftButton = document.querySelector(".btn-left")

var allSlides = document.querySelectorAll(".slideshow-image")

var slideContainer = document.querySelector(".slideshow-container")

var body = document.querySelector("body")

var tl = gsap.timeline()

var firstSlideIndex = 0

var maxShownSlides = 6

var shownSlides = allSlides.length

var dragStart = 0

var dragDirection = null

var dragInterval = null

var currentDragX = null

var dragDirectionInterval = null


/*
var shownSlides = allSlides.length

if (shownSlides > maxShownSlides) {
    shownSlides = maxShownSlides
} else if (shownSlides % 2 !== 0) {
    shownSlides --
}
*/

function turnSlideRight () {
    /*
    zeroToOne(allSlides[firstSlideIndex % allSlides.length])
    oneToTwo(allSlides[(firstSlideIndex+3) % allSlides.length])
    twoToThree(allSlides[(firstSlideIndex+2) % allSlides.length])
    threeToZero(allSlides[(firstSlideIndex+1) % allSlides.length])
    firstSlideIndex++
    */
    firstSlideIndex++
    console.log(firstSlideIndex);
    for (let i = 0; i < allSlides.length; i++) {
        moveSlideTo(allSlides[i], (i + firstSlideIndex) % allSlides.length)
    }
}

function turnSlideLeft () {
    /*
    twoToOne(allSlides[(firstSlideIndex+2) % allSlides.length]) // 1
    oneToTwo(allSlides[(firstSlideIndex+1) % allSlides.length]) // 0
    zeroToThree(allSlides[(firstSlideIndex) % allSlides.length]) // 3
    threeToZero(allSlides[(firstSlideIndex+3) % allSlides.length]) // 2
    firstSlideIndex--
    */

   firstSlideIndex--
   if (firstSlideIndex <= -1) {
       firstSlideIndex = allSlides.length - 1
   }
   console.log(firstSlideIndex);
   for (let i = 0; i < allSlides.length; i++) {
       moveSlideTo(allSlides[i], (i + firstSlideIndex) % allSlides.length)
   }
}





function startSlideShow () {
    /*
    zeroToOne(allSlides[0])
    oneToTwo(allSlides[0], 1)
    twoToThreeStart(allSlides[0], 2)

    zeroToOne(allSlides[1], 1)
    oneToTwo(allSlides[1], 2)

    zeroToOne(allSlides[2], 2)

    firstSlideIndex = 3
    */
    moveSlideTo(allSlides[0], 0)
    moveSlideTo(allSlides[1], 1)
    moveSlideTo(allSlides[2], 2)
    moveSlideTo(allSlides[3], 3)
    moveSlideTo(allSlides[4], 4)
    moveSlideTo(allSlides[5], 5)
    moveSlideTo(allSlides[6], 6)
    moveSlideTo(allSlides[7], 7)
    moveSlideTo(allSlides[8], 8)
    moveSlideTo(allSlides[9], 9)
    moveSlideTo(allSlides[10], 10)
    moveSlideTo(allSlides[11], 11)
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






function setZIndex(slide, zindex, delay = 0) {
    gsap.set(slide, {
        zIndex:zindex,
        delay: delay
    })
}


function moveSlideTo (slide, index, delay = 0) {
    //console.log(shownSlides, index);
    //console.log((percentWidthToPixel(slide.parentNode, 5) * (shownSlides)) - (percentWidthToPixel(slide.parentNode, 5) * index))
    
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
            percentWidthToPixel(slide.parentNode, 38) - (percentWidthToPixel(slide.parentNode, 50) / 4 * (index % 3)),
            percentHeightToPixel(slide.parentNode, 15) - percentHeightToPixel(slide.parentNode, 10) / 4 * (index % 3 + 3),
            percentWidthToPixel(slide.parentNode, 20) - percentWidthToPixel(slide.parentNode, 5) / 4 * (index % 3),
            1,
            "power1",
            delay
        )
        setZIndex(slide, shownSlides - index)
        //console.log("top right")
    } else if (index == shownSlides * 0.75) {
        slideTo(
            slide,
            percentWidthToPixel(slide.parentNode, 40),
            percentHeightToPixel(slide.parentNode, 10),
            percentWidthToPixel(slide.parentNode, 25),
            1,
            "power1",
            delay
        )
        setZIndex(slide, shownSlides - index)
        //console.log("right");
    } else if (index > shownSlides * 0.5) {
        slideTo(
            slide,
            percentWidthToPixel(slide.parentNode, 10) + (percentWidthToPixel(slide.parentNode, 45)  / 4 * (index % 3)),
            percentHeightToPixel(slide.parentNode, 45) - percentHeightToPixel(slide.parentNode, 20) / 4 * (index % 3 + 3),
            percentWidthToPixel(slide.parentNode, 35) - percentWidthToPixel(slide.parentNode, 10) / 4 * (index % 3),
            1,
            "power1",
            delay
        )
        setZIndex(slide, shownSlides - index)
        //console.log("bottom right");
    } else if (index == shownSlides * 0.5) {
        slideTo(
            slide, 
            percentWidthToPixel(slide.parentNode, 0),
            percentHeightToPixel(slide.parentNode, 20),
            percentWidthToPixel(slide.parentNode, 50),
            1,
            "power1",
            delay
        )
        setZIndex(slide, index)
        //console.log("bottom");
    } else if (index == 0) {
        slideTo(
            slide, 
            percentWidthToPixel(slide.parentNode, 0),
            percentHeightToPixel(slide.parentNode, 0),
            percentWidthToPixel(slide.parentNode, 15),
            1,
            "power1",
            delay
        )
        setZIndex(slide, index)
        //console.log("top");
    } else if (index == shownSlides * 0.25) {
        slideTo(
            slide,
            -percentWidthToPixel(slide.parentNode, 40),
            percentHeightToPixel(slide.parentNode, 10),
            percentWidthToPixel(slide.parentNode, 25),
            1,
            "power1",
            delay
        )
        setZIndex(slide, index)
        //console.log("left");
    } else  if (index < shownSlides * 0.25) {
        slideTo(
            slide, 
            (-percentWidthToPixel(slide.parentNode, 50) + percentWidthToPixel(slide.parentNode, 10)) / 3 * index,
            percentHeightToPixel(slide.parentNode, 10) / 4 * (index),
            percentWidthToPixel(slide.parentNode, 15) + percentWidthToPixel(slide.parentNode, 10) / 4 * index,
            1,
            "power1",
            delay
        )
        setZIndex(slide, index)
        //console.log("top left");
    } else if (index < shownSlides * 0.5) {
        slideTo(
            slide, 
            (percentWidthToPixel(slide.parentNode, 50) / 4 * (index % 3)) - percentWidthToPixel(slide.parentNode, 45),
            percentHeightToPixel(slide.parentNode, 20) / 4 * (index % 3 + 3),
            percentWidthToPixel(slide.parentNode, 15) + percentWidthToPixel(slide.parentNode, 10) / 4 * index,
            1,
            "power1",
            delay
        )
        setZIndex(slide, index)
        //console.log("bottom left");
    }
} 

//

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


document.addEventListener('keydown', function(e) {
    if (e.code == "ArrowLeft") {
        turnSlideLeft()
    }
    if (e.code == "ArrowRight") {
        turnSlideRight()
    }
    console.log(e.code);
})


slideContainer.addEventListener('dragstart', function (event) {
    dragStart = event.clientX

    setTimeout(() => {
        if (dragDirection == "left") {
            turnSlideLeft()
        } else {
            turnSlideRight()
        }
    }, 50)

    dragInterval = setInterval(function () {
        if (dragDirection == "left") {
            turnSlideLeft()
        } else {
            turnSlideRight()
        }
    }, 300)
    dragDirectionInterval = setInterval(function () {
        dragStart = currentDragX
    }, 50)

    var dragIcon = document.createElement('img');
    dragIcon.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';    
    dragIcon.width = 100;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);
})

/*
allImages = document.querySelectorAll('img')

allImages.forEach(image => {
    image.addEventListener('dragstart', function (event) {
        event
    })
})
*/


slideContainer.addEventListener('dragover', function (event) {
    if (dragStart - event.clientX > 0) {
        dragDirection = "left"
    } else if (dragStart - event.clientX < 0) {
        dragDirection = "right"
    }
    currentDragX = event.clientX
})

slideContainer.addEventListener('dragend', function (event) {
    clearInterval(dragInterval)
    clearInterval(dragDirectionInterval)
})



slideRightButton.addEventListener('click', turnSlideRight)
slideLeftButton.addEventListener('click', turnSlideLeft)

startSlideShow()