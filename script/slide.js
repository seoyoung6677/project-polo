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

const giftSwiper = new Swiper('#gift_swiper', {
    direction: 'vertical',
    loop: true,
    centeredSlides: true, // 가운데 정렬
    slidesPerView: 3,     // 위, 아래 슬라이드 살짝 보이게
    slidesPerView:'auto',
    spaceBetween:30,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },

    pagination: {
    el: '.swiper-pagination',
    /* clickable: true, */
    type:'progressbar',
    horizontalClass: '.swiper-pagination-progressbar',
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    on: {
    slideChange: function () {
        document.querySelector('.slide-number .current').textContent = this.realIndex + 1;
    },
    },
    
});

const kidsSwiper = new Swiper('#kids_product_slide',{
    slidesPerView:5,
    slidesPerGroup:1,
    spaceBetween:25,
    loop:true,
    autoplay:{
    delay:2500,
    disableOnInteraction:false,
    },
    scrollbar:{
    el:'.swiper-scrollbar',
    draggable:true,
    }
})
productSwiper.update();
const swiper = new Swiper("#collection_swiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 60,
    pagination: {
    el: ".collection-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    scrollbar: {
    el: "#collection_swiper .swiper-scrollbar",
    draggable: true,
    },
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },
    on: {
    init: function () {
        updateCenterSlide(this);
    },
    slideChangeTransitionEnd: function () {
        updateCenterSlide(this);
    },
    },
});
// 공통 함수로 중앙 슬라이드만 강조
function updateCenterSlide(swiperInstance) {
    const slides = document.querySelectorAll("#collection_swiper .swiper-slide");

    slides.forEach((slide) => {
    slide.classList.remove("center-slide");
    slide.style.opacity = "0.4";
    slide.style.transform = "scale(0.9)";
    slide.style.filter = "brightness(0.8)";
    });

    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    if (activeSlide) {
    activeSlide.classList.add("center-slide");
    activeSlide.style.opacity = "1";
    activeSlide.style.transform = "scale(1.2)";
    activeSlide.style.filter = "brightness(1)";
    activeSlide.style.zIndex = "10";
    }
}