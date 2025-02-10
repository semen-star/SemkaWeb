document.addEventListener('DOMContentLoaded', function() {
    // Добавление обработчиков для кнопок
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем название продукта из заголовка кнопки
            const productTitle = this.closest('.product').querySelector('h3').textContent;
            
            // Показать всплывающее сообщение
            alert(`Вы переходите к товару: ${productTitle}`);
        });
    });
});


