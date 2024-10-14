"use strict"


//* HEADER */
const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
const bodyLock = document.body;

iconMenu.addEventListener('click', function (e) {
  toggleMenu(); //Добавить классы
  e.preventDefault();
});

function toggleMenu() {
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  bodyLock.classList.toggle('lock');
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuBody.classList.contains('_active')) {
      toggleMenu(); //Убрать классы
    }
  });
})

//* HEADER */



//*header hidden - header visibility
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Прокрутка вниз - скрываем шапку
    document.querySelector(".header").classList.add("fixed");
  } else {
    // Прокрутка вверх или стоим на месте - показываем шапку
    document.querySelector(".header").classList.remove("fixed");
  }

  prevScrollPos = currentScrollPos;
});


//*Плавная прокрутка сайта
const anchors = document.querySelectorAll('.menu__link');
anchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    const anchorId = anchor.dataset.goto;
    const anchorBlock = document.getElementById(`${anchorId}`);


    if (anchorId && anchorBlock) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const gotoBlockScroll = anchorBlock.getBoundingClientRect().top + window.scrollY;

      if (menuBody.classList.contains('_active')) {
        toggleMenu();
      }

      window.scrollTo({ behavior: "smooth", top: gotoBlockScroll, });

      e.preventDefault();
    }
  });
});


//* Удалить классы при нажатие на ссылку.
menuBody.querySelectorAll('.menu__link').forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    // toggleMenu();
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    bodyLock.classList.remove('lock');
  });
});







//* ------------------------------------------------------ANIMATION ( START )

const animItems = document.querySelectorAll('.animation-items');

function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    const animItemPoint = window.innerHeight - (Math.min(animItemHeight, window.innerHeight) / animStart);
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('animation');
    } else {

      if (!animItem.classList.contains('stop-animation-repeat')) {
        animItem.classList.remove('animation');
      }

    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

if (animItems.length > 0) {

  // Дебаунс функция
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const later = () => {
        timeout = null;
        func();
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Слушаем событие скролла с помощью дебаунс функции
  const debouncedAnimOnScroll = debounce(animOnScroll, 100);
  window.addEventListener('scroll', debouncedAnimOnScroll);

  setTimeout(() => {
    animOnScroll();
  }, 100);
}

//* --------------------------------------------------------ANIMATION ( END )


















