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


















