const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menuModal = document.querySelector('.menu-modal');


menuOpenBtn.addEventListener('click', () => {
  menuModal.classList.add('is-open');
});


menuCloseBtn.addEventListener('click', () => {
  menuModal.classList.remove('is-open');
});


menuModal.addEventListener('click', (event) => {
  if (event.target === menuModal) {
    menuModal.classList.remove('is-open');
  }
});

