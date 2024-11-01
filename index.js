document.getElementById('learn-more').addEventListener('click', function() {
    const userConfirmed = confirm('Привет, помогу настроить онлайн-школу на Геткурс (GetCourse). Хотите перейти на страницу "Портфолио"?');
    
    if (userConfirmed) {
        // Переход на страницу "Портфолио"
        window.location.href = 'portfolio/potrfolio.html';
    } else {
        // Пользователь отказался от перехода
        alert('Вы остались на этой странице.');
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

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
