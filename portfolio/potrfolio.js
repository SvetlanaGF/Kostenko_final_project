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

// Валидация формы перед отправкой
document.getElementById("contactForm").addEventListener("submit", function (event) {
    let formIsValid = true;

    // Очистка ошибок
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Валидация имени
    const name = document.getElementById("name").value;
    if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Имя должно содержать только буквы.";
        formIsValid = false;
    }

    // Валидация email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Введите корректный email.";
        formIsValid = false;
    }

    // Валидация сообщения
    const message = document.getElementById("message").value;
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Сообщение должно содержать минимум 10 символов.";
        formIsValid = false;
    }

    // Если форма не прошла валидацию, отменить отправку
    if (!formIsValid) {
        event.preventDefault();
    }
});

