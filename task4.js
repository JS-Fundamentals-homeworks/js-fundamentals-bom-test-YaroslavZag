// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('widthValue').innerText = `${width}`;
    document.getElementById('heightValue').innerText = `${height}`;
}

window.addEventListener('resize', updateDimensions);

// Ініціалізація при завантаженні сторінки
updateDimensions();