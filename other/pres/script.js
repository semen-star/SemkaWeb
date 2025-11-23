// Простой и надежный фильтр по категориям
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            const giftCards = document.querySelectorAll('.gift-card');

            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Убираем активный класс у всех кнопок
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    // Добавляем активный класс текущей кнопке
                    this.classList.add('active');
                    
                    const selectedCategory = this.dataset.category;
                    
                    // Показываем/скрываем подарки в зависимости от категории
                    giftCards.forEach(card => {
                        if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });