// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const magicBall = document.getElementById('magicBall');
    const answerText = document.getElementById('answerText');
    const askButton = document.getElementById('askButton');
    
    // Текст ответа (как в задании)
    const answer = "Расстанься со славой";
    
    // Флаг, отслеживающий анимацию
    let isAnimating = false;
    
    // Функция для получения ответа
    function getAnswer() {
        // Если анимация уже идет, выходим из функции
        if (isAnimating) return;
        
        // Устанавливаем флаг анимации
        isAnimating = true;
        
        // Добавляем классы анимации
        magicBall.classList.add('rotating');
        askButton.classList.add('animating');
        
        // Очищаем предыдущий ответ
        answerText.textContent = "";
        answerText.classList.remove('show');
        
        // Через 1.5 секунды (после завершения вращения) показываем ответ
        setTimeout(() => {
            // Удаляем класс анимации вращения
            magicBall.classList.remove('rotating');
            askButton.classList.remove('animating');
            
            // Устанавливаем текст ответа
            answerText.textContent = answer;
            
            // Показываем ответ с анимацией
            setTimeout(() => {
                answerText.classList.add('show');
            }, 100);
            
            // Сбрасываем флаг анимации
            setTimeout(() => {
                isAnimating = false;
            }, 500);
            
        }, 1500);
    }
    
    // Обработчик клика по кнопке
    askButton.addEventListener('click', getAnswer);
    
    // Обработчик клика по шару (дополнительный способ)
    magicBall.addEventListener('click', getAnswer);
    
    // Добавляем поддержку нажатия клавиши пробел для удобства
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space' && !isAnimating) {
            event.preventDefault();
            getAnswer();
        }
    });
    
    // Инициализация - ничего не показываем при загрузке
    answerText.textContent = "";
});