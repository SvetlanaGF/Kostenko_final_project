// Бургер-меню

console.log('Скрипт загружен');

// Находим элементы бургер-меню и меню
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

// Добавляем обработчик события клика на бургер-меню
burgerMenu.addEventListener('click', () => {
 // Переключаем класс active для отображения/скрытия меню
    menu.classList.toggle('active');
});