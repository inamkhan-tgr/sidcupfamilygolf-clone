gsap.registerPlugin(ScrollTrigger);
let cursor = document.querySelector("#cursor");
let link = document.querySelectorAll("#nav a");
let blur_cursor = document.querySelector("#cursor-2");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 1 + "px";
    cursor.style.top = dets.y - 1 + "px";
    blur_cursor.style.left = dets.x + "px";
    blur_cursor.style.top = dets.y + "px";
})
gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.4,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "rgba(0, 0, 0,)",

    scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "top -60",
        end: "top -100%",
        scrub: 2,

    }
})
link.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px none #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})
gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: card,
            // markers: true,
            start: "top 70%",
            end: "top 55%",
            scrub: 2
        }
    });
});
gsap.from("#colon1",{
    x: -70,
    y: -70,
    scrollTrigger:{
        trigger: "#colon1",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2
    }
});
gsap.from("#colon2",{
    x: 70,
    y: 70,
    scrollTrigger:{
        trigger: "#colon1",
        start: "bottom 70%",
        end: "bottom 40%",
        scrub: 1
    }
});
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
    trigger: "#page-4 h1",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
    // duration: 0,
    // markers: true
    }
})