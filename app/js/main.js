const searchBlock = document.querySelector('.search');
const header = document.querySelector('.header');
const searchBlockY = searchBlock.getBoundingClientRect().top + window.pageYOffset - 30;
const headerTitle = document.querySelector('.header__title');

const searchBlockHeight = getComputedStyle(searchBlock).height;

document.addEventListener('scroll', () => {
  if (window.pageYOffset > searchBlockY) {
    headerTitle.style.paddingBottom = searchBlockHeight;
    searchBlock.classList.add('fixed');
  } else {
    headerTitle.style.paddingBottom = 0;
    searchBlock.classList.remove('fixed');
  }
});

document.addEventListener('touchmove', (e) => {
  if (window.pageYOffset > searchBlockY) {
    headerTitle.style.paddingBottom = searchBlockHeight;
    searchBlock.classList.add('fixed');
  } else {
    headerTitle.style.paddingBottom = 0;
    searchBlock.classList.remove('fixed');
  }
});

const burgerBtn = document.querySelector('.sidebar__burger-btn');
const sidebar = document.querySelector('.sidebar');

burgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
