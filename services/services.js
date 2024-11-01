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

// Добавляем обработчик события для кликов по документу
document.addEventListener('click', (event) => {
    // Проверяем, был ли клик вне бургер-меню и самого меню
    if (!burgerIcon.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('active'); // Закрываем меню
    }
});