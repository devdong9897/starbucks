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

// 배지 자바스크립트 코드
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window : 화면자체
//_.throttle : 일정시간에 한번씩만 실행되도록 제한을 걸수있음 (lodash 라이브러리)
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //  애니메이션 라이브러리 사용하기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 요소가 화면에 시각적으로만 사라지는데 이걸 완전히 없애야 클릭이 안된다.
        display: 'none',
      });
      // 버튼 보이기
      gsap.to('#to-top', 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      // 버튼 숨기기
      gsap.to('#to-top', 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 순차적 애니메이션 코드
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// // swiper 코드
// // new : 생성자(클래스)
// // new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  // 방향 : 수직
  direction: 'vertical',
  // 자동 재생 여부
  autoplay: true,
  // 반복 재생 여부
  loop: true,
});
new Swiper('.promotion .swiper-container', {
  // 방향 : 수평 ( direction: (기본값)"horizontal") 기본값이므로 생략
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autolay를 통해서 0.5초에 한번씩 이미지가 자동으로 슬라이드가 된다.
  // autoplay: {
  //   delay: 5000  // 5초
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// 스타벅스 프로모션 클릭스 열고 닫기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  // ! : 반대가 되게 만들어 준다.
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// floationg 애니메이션 코드

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floationgObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      // 옵션
      y: size,
      repeat: -1,
      // 한번 재생된 애니메이션을 다시 뒤로 재생
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floationgObject('.floating1', 1, 15);
floationgObject('.floating2', 0.5, 15);
floationgObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 날짜 계산 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023
