// Бургер-меню

console.log('Скрипт загружен');

// Получаем все ссылки в бургер-меню
const links = document.querySelectorAll('.burger__link');

// Добавляем обработчик события на каждую ссылку
links.forEach(link => {
    link.addEventListener('click', function() {
        // Удаляем класс активного состояния у всех ссылок
        links.forEach(l => l.classList.remove('header__link__active'));
        
        // Добавляем класс активного состояния к текущей ссылке
        this.classList.add('header__link__active');
        
        // Закрытие меню (если нужно)
        const menu = document.querySelector('.menu');
        menu.classList.remove('active'); // Убедитесь, что у вас есть класс active для управления видимостью меню
    });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    alert('Заявка отправлена!');
    this.submit();
});
