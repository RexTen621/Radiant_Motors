export const sliderSettings={
    slidesPerView:1,
    spaceBetween:60,
    breakpoints:{
        480:{
            slidesPerView:1
        },
        600:{
            slidesPerView:1
        },
        750:{
            slidesPerView:2
        },
        1100:{
            slidesPerView:3
        },
    }
}
gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
      trigger:".colon1",
      scroller:"body",
    
      start:"top 50%",
      end:"top 47%",
      scrub:3
  
  
    }
  })
  

  gsap.from(".colon2",{
    y:70,
    x:80,
    scrollTrigger:{
      trigger:".colon2",
      scroller:"body",
    
      start:"top 100%",
      end:"top 99%",
      scrub:3
  
  
    }
  })