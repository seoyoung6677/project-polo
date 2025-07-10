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
    delay: 3000,
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
    delay:2500,
    disableOnInteraction:false,
  },
  pagination:{
    el:'swiper-scrollbar',
    draggable:true,
  }
})