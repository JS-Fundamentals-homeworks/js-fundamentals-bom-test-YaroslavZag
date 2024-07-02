// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

document.getElementById('deleteButton').addEventListener('click', function() {
    const select = document.getElementById('dropdown');
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        selectedOption.remove();
    }
});
