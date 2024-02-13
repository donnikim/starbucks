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

//현재 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();