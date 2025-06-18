const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

function toggleMenu() {
  const isActive = burger.classList.toggle('active');  // анимация иконки
  navbar.classList.toggle('active', isActive);         // показать/скрыть меню
}

burger.addEventListener('click', toggleMenu);

// Для доступности — открытие меню по клавише Enter или пробел
burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// При изменении размера окна — если ширина больше 768px, сбрасываем меню в закрытое состояние
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    burger.classList.remove('active');
    navbar.classList.remove('active');
  }
});
