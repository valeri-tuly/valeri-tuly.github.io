const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  // анимация иконки
  navbar.classList.toggle('active');  // показать/скрыть меню
});

// Для доступности — открытие меню по клавише Enter или пробел
burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    burger.click();
  }
});
