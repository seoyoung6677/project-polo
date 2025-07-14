const productSwiper = new Swiper('#product_slide',{
    slidesPerView:5,
    slidesPerGroup:1,
    spaceBetween:25,
    loop:true,
    autoplay:{
        delay:2000,
        /* disableOnInteraction:false, */
        draggable:true,
    },
    scrollbar:{
        el:'#product_slide .swiper-scrollbar',
        draggable:true,
        type:'bullets'
    },
    on:{
        init:function (){
            this.update();
        },
    },
    on: {
        slideChangeTransitionStart: () => {
        // progress bar 리셋
        },
        slideChangeTransitionEnd: () => {
        // progress bar 다시 100% 진행
        },
    }
    
})