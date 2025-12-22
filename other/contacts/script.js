document.getElementById("tgForm").addEventListener("submit", function(e) {
            e.preventDefault();
            var msg = document.querySelector(".input-field").value;
            
            // Показываем индикатор загрузки
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span> Отправка...</span>';
            submitBtn.disabled = true;
        });
        
        // Добавляем анимации для элементов при загрузке страницы
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-fade-in');
            elements.forEach(el => {
                el.style.opacity = '0';
            });
            
            setTimeout(() => {
                elements.forEach(el => {
                    el.style.animationPlayState = 'running';
                    el.style.opacity = '1';
                });
            }, 100);
        });