document.getElementById('learn-more').addEventListener('click', function() {
    const userConfirmed = confirm('Привет, помогу настроить онлайн-школу на Геткурс (GetCourse). Хотите перейти на страницу "Портфолио"?');
    
    if (userConfirmed) {
        // Переход на страницу "Портфолио"
        window.location.href = 'portfolio/potrfolio.html';
    }
});


// Плавная анимация кнопки при загрузке страницы
window.onload = function() {
    const button = document.getElementById('learn-more');
    button.style.opacity = '0';
    setTimeout(function() {
        button.style.transition = 'opacity 1.5s';
        button.style.opacity = '1';
    }, 500);
};

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
