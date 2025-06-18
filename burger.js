const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  // анимация иконки
  navbar.classList.toggle('active');  // показать/скрыть меню
});
