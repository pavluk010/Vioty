const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menuModal = document.querySelector('.menu-modal');

console.log(menuOpenBtn);
console.log(menuCloseBtn);
console.log(menuModal);

menuOpenBtn.addEventListener('click', () => {
  menuModal.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  menuModal.classList.remove('is-open');
});

menuModal.addEventListener('click', event => {
  if (event.target === menuModal) {
    menuModal.classList.remove('is-open');
  }
});