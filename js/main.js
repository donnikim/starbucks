const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
// 클릭하였을 때 클래스를 생성 시킨다.
// 플레이스 홀더에 통합검색 넣는다
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
//클릭하였을 떄 클래스를 지워줌
//
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY>500){
    //배지 숨기기
    //badgeEl.style.display='none';
    //gsap.to(요소, 지속시간 , 옵션);
    gsap.to(badgeEl, .6,{
      opacity:0,
      display : 'none'
    });
  }else{
    //배지 보이기
    //badgeEl.style.display='block';
    gsap.to(badgeEl, .6,{
      opacity:1,
      display : 'block'
    });
  }
},300) );
//_.throttle(함수, 시간)

//반복적인 작업은 하드코딩이 아닌 로직으로 사용
const fadeEls= document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl ,1 ,{
    delay : (index+1)*.7, //0.7, 1.4, 2.1, 2.7
    opacity:1
  })
});
//new Swiper('선택자','옵션');
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical',
   autoplay: true,
   loop:true
});

new Swiper('.promotion .swiper-container',{ 
  slidesPerView : 3,// 한번에 보여줄 슬라이드 개수
  spaceBetween : 10,//슬라이드 사이 여백
  centeredSlides:true,// 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
  delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable : true // 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }

});
new Swiper('award .swiper-container',{
  autoplay : true,
  loop:true,
  spaceBetween : 30,
  slidesPerView : 5
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion; //토글 클릭 시 버튼 값을 false에서 true로 바꾸기 
  if(isHidePromotion)
  {
    //숨김 처리! 
    promotionEl.classList.add('hide');
  }
  else
  {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});

function random(min,max){
  // toFixed() 를 통해 반환된 문자 데이터를,
  //parsFloat() 를 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject(selector,delay, size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5 ,2.5), {
    y: size,
    repeat:-1,
    yoyo : true,
    ease :Power1.easeInOut,
    delay : random(0,delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감사할 요소를 지정
      triggerHook : .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});