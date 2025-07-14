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


/* js 하나씩 html 스크립트태그 안으로옮겨서 테스트 하기 */
// 로딩 시도 동일하게 적용
window.addEventListener("load", () => {
  updateCenterSlide(swiper);
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo('.left_wrap', 
    {
      opacity: 0,
      y: 60
    }, 
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.left_wrap',
        start: 'top 60%',
        end: 'bottom 50%',
        toggleActions: 'play pause resume reset',
        /* markers: true, */
      }
    }
  )
})

/* 관심 상품 하트 */
const wishlistBtns = document.querySelectorAll('.wishlist_btn');

wishlistBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});