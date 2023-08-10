var tl = gsap.timeline()

tl.from("#nav h1,#nav2 h3,#nav3 h3",{
    y:-80,
    duration:.8,
    stagger:.2,
    delay:.2,
    opacity:0
})
tl.from("#left h1",{
    x:-79,
    opacity:0,
    duration:.8
    

})
tl.from("#right img",{
    y:90,
    opacity:0,
    duration:1,


    
})
tl.from("#left-bottom h4,#left-bottom i",{
    opacity:0,

})

gsap.from("#page2 #box",{
   
    y:1000,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 90%",
        end:"top 80%",
        scrub:4
    },
})
