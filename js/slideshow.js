var slideRightButton = document.querySelector(".btn-right");
var slideLeftButton = document.querySelector(".btn-left");





/*
gsap.set(".slideshow-image-1", {
    zIndex:99
})
*/


function percentWidthToPixel(_elem, _perc){
    return (_elem.offsetWidth/100)* parseFloat(_perc);
}

slideRightButton.addEventListener('click', turnSlideRight)

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

