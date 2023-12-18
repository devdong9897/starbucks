// 공통 사용 코드

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기 아이콘을 클릭해도 input이 포커스 될 수 있게...
searchEl.addEventListener('click', function () {
  // input요소에 포커스를 주겠다...
  searchInputEl.focus();
});

// 포커스 되었을 때
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스 해제되었을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 날짜 계산 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023