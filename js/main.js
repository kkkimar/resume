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
scrollReveal.reveal(
  '.home__data, .about__img, .skills__text,.contact__container',
);
scrollReveal.reveal(
  '.home__img,.about__data, .skills__img, .work_details_container',
  { delay: 400 },
);
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
        '순서 있는 목록과 없는 목록 태그를 사용한 목록 작성할 수 있습니다.',
        'table 태그 작성과 구성요소를 활용할 수 있습니다.',
        '시맨틱 태그를 사용할 수 있습니다.',
      ],
    },
    css3: {
      title: 'CSS3',
      description: [
        '기본 선택자와 속성 선택자,결합 선택자, 가상요소를 활용한 스타일 지정을 할 수 있습니다.',
        'flex를 활용하여 다양한 레이아웃 패턴 구현을 할 수 있습니다.',
        'Position을 사용한 요소 위치 지정과 z-index를 사용하여 요서의 쌓이는 순서를 조정할 수 있습니다.',
      ],
    },
    javascript: {
      title: 'JavaScript',
      description: [
        'ES6 문법을 사용하여 화살표 함수와 템필릿 리터럴과 같은 문법을 사용해 코드를 간결하고 가독성 있게 작성할 수 있습니다.',
        '비동기 프로그래밍에서 콜백,프로미스 같은 기법을 사용할 수 있습니다.',
        'DOM 조작 및 이벤트처리로 동적으로 웹 페이지를 구현할 수 있습니다.',
      ],
    },
    Java: {
      title: 'Java',
      description: [
        '배열을 사용하여 데이터의 순차적 접근 및 조작과 문자열의 길이를 활용한 배열을 동적으로 처리할 수 있습니다.',
        '반복문(for, while, 향상된 for문)을 사용해 배열에 순처 접근하여 조건문(if, else, break, switch)을 활용해 유효성 검사를 수행할 수 있습니다.',
        '상속을 통한 코드 재사용과 확장, 컬렉션 프레임워크(List, Map, Set)을 사용해 추가, 수정, 검색 기능 구현 및 제네릭을 사용해 타입을 제한할 수 있습니다.',
      ],
    },
    Ajax: {
      title: 'Ajax',
      description: [
        '비동기 요청을 통해 데이터베이스 생성, 읽기, 수정, 삭제 기능을 구현할 수 있습니다.',
        '비동기 방식으로 서버와 데이터를 주고 받아 페이지 새로고침 없이 동적인 콘텐츠를 구현할 수 있습니다.',
      ],
    },
    Oracle: {
      title: 'Oracle ',
      description: [
        '복잡한 데이터 조회를 위해 JOIN, USING, WHERE, AVG 등 SQL함수 사용과 서브쿼리 및 WITH절을 통한 복잡한 데이터 조회, 날짜 및 시간 처리를 위한 TO_CHAR, T0_DATE 함수를 활용할 수 있습니다.',
      ],
    },
    MyBatis: {
      title: 'MyBatis ',
      description: [
        'choose, when, otherwise 등을 활용해 동적 SQL 쿼리 작성이 가능하며, foreach 태그를 사용하여 여러 데이터를 한 번에 삭제하거나 삽입할 수 있습니다.',
        'Spring의 @Mapper 애노테이션을 사용하여 MyBatis 매퍼 인터페이스를 등록하고, resultType 속성을 활용해 쿼리 결과를 특정 DTO로 매핑할 수 있습니다.',
      ],
    },
    Spring: {
      title: 'Spring ',
      description: [
        'Spring MVC(컨트롤러, 서비스, 매퍼 레이어 구성 및 Thymeleaf 템플릿 엔진을 사용한 뷰 레이어 구현).',
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
