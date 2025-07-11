const removeBtn =document.querySelector('.remove_btn');
const topBanner =document.querySelector('.top_banner');
const header = document.querySelector('header');


let bannerHeight = topBanner.offsetHeight;
header.style.top ='${bannerHeight}px';
window.addEventListener("scroll", ()=>{
    if (window.scrollY > bannerHeight){
        header.style.top="0";
    } else{
        header.style.top = `${bannerHeight}px`;
    }
})
removeBtn.addEventListener('click',()=>{
    //탑배너 숨기기
    topBanner.style.display = 'none';
    //헤더 위치 조정하기
    header.style.top='0';
    bannerHeight=0;
});

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
  slidePerGroup:1,
  spaceBetween:25,
  loop:true,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination:{
    el:'swiper-scrollbar',
    draggable:true,
  }
})
const productSwiper = new Swiper('#product_slide',{
  slidesPerView:5,
  slidePerGroup:1,
  spaceBetween:25,
  loop:true,
  autoplay:{
    delay:2000,
    disableOnInteraction:false,
  },
  pagination:{
    el:'swiper-scrollbar',
    draggable:true,
  }
})


 /*  const swiper = new Swiper("#collection_swiper", {
    slidesPerView: 1.5, // 한 번에 보이는 슬라이드 개수
    centeredSlides: true, // 가운데 정렬
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".collection-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    autoplay:{
      delay:2000,
      disableOnInteraction:false,
    },
    on: {
      slideChangeTransitionEnd: function () {
        // 모든 슬라이드에서 center-slide 클래스 제거
        document
          .querySelectorAll("#collection_swiper .swiper-slide")
          .forEach((slide) => slide.classList.remove("center-slide"));

        // 현재 가운데 슬라이드에 클래스 추가
        const centerSlide = document.querySelector(
          "#collection_swiper .swiper-slide.swiper-slide-active"
        );
        if (centerSlide) {
          centerSlide.classList.add("center-slide");
        }
      },
    },
  });
// 최초 로딩 시에도 center-slide 붙이기
window.addEventListener("load", function () {
  const centerSlide = document.querySelector(
    "#collection_swiper .swiper-slide.swiper-slide-active"
  );
  if (centerSlide) {
    centerSlide.classList.add("center-slide");
  }
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(slide => {
  if (slide.classList.contains('center-slide')) {
    slide.style.opacity = '1';
    slide.style.transform = 'scale(1)';
    slide.style.filter = 'brightness(1)';
  }
}); */
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
    el: ".swiper-scrollbar",
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

// 로딩 시도 동일하게 적용
window.addEventListener("load", () => {
  updateCenterSlide(swiper);
});