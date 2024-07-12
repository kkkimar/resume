function toggleMenu() {
  const $navMenu = document.getElementById('nav__menue');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      //behavior: 'smooth'
    });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));
// observer.observe($workSection);
// observer.observe($workSection);
// observer.observe($workSection);

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skills__text,.contact__container');
scrollReveal.reveal('.home__img,.about__data, .skills__img, .work_details_container', { delay: 400 });
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});

const typeit = new TypeIt('#type-it', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요!<br/>')
  .type('<strong class="home__title-color">백엔드 개발자</strong><br/>')
  .type('<strong class="home__title-color">김아름</strong>입니다!')
  .go();

document.addEventListener('DOMContentLoaded', function () {
  const skillDetails = {
    html5: {
      title: 'HTML5',
      description: [
        'HTML5는 최신 웹 표준 마크업 언어로, 웹 콘텐츠의 구조와 의미를 정의합니다.',
        '웹 페이지의 구조를 구성하는 데 사용됩니다.',
        '다양한 멀티미디어 요소를 포함할 수 있습니다.',
      ],
    },
    css3: {
      title: 'CSS3',
      description: [
        'CSS3는 스타일링 언어로, 웹 페이지의 레이아웃과 디자인을 정의합니다.',
        '다양한 애니메이션과 트랜지션을 적용할 수 있습니다.',
        '미디어 쿼리를 통해 반응형 디자인을 구현할 수 있습니다.',
      ],
    },
    javascript: {
      title: 'JavaScript',
      description: [
        'JavaScript는 웹 페이지에 동적인 기능을 추가하는 스크립트 언어입니다.',
        '클라이언트 측 스크립팅 언어로 사용됩니다.',
        '다양한 프레임워크와 라이브러리를 지원합니다.',
      ],
    },
    backend: {
      title: 'Back-end',
      description: [
        'Back-end 개발은 서버, 데이터베이스 및 애플리케이션 로직을 포함합니다.',
        '서버 사이드 로직을 구현합니다.',
        '데이터베이스 관리 및 API 개발을 포함합니다.',
      ],
    },
  };

  const skillElements = document.querySelectorAll('.skills__data');
  const skillTitleElement = document.querySelector('.skills__subtitle');
  const skillDescriptionElement = document.querySelector('.skills__text');

  skillElements.forEach((skill) => {
    skill.addEventListener('mouseover', () => {
      const skillType = skill.getAttribute('data-skill');
      const skillDetail = skillDetails[skillType];

      skillTitleElement.textContent = skillDetail.title;
      skillDescriptionElement.innerHTML = '';

      const ul = document.createElement('ul');
      skillDetail.description.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });

      skillDescriptionElement.appendChild(ul);
    });
  });
});
