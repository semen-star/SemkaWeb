document.getElementById("tgForm").addEventListener("submit", function(e) {
            e.preventDefault();
            var msg = document.querySelector(".input-field").value;
            
            // Показываем индикатор загрузки
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span> Отправка...</span>';
            submitBtn.disabled = true;
            
            fetch("https://script.google.com/macros/s/AKfycbzCFe9AU6VXx7uUkKh3qGwu9u7JFlZDBY2f9nng-0MgP4uUtPAGfAQRLo-B7Gi9xjmz/exec", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: "text=" + encodeURIComponent(msg)
            }).then(() => {
                // Восстанавливаем кнопку
                submitBtn.innerHTML = '<i class="fas fa-check"></i><span> Отправлено!</span>';
                
                // Показываем уведомление
                const notification = document.createElement('div');
                notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in';
                notification.innerHTML = '<i class="fas fa-check-circle"></i><span>Сообщение успешно отправлено!</span>';
                document.body.appendChild(notification);
                
                // Удаляем уведомление через 3 секунды
                setTimeout(() => {
                    notification.classList.remove('animate-fade-in');
                    notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
                
                // Очищаем поле ввода
                document.querySelector(".input-field").value = '';
                
                // Через 2 секунды возвращаем кнопку в исходное состояние
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-bolt"></i><span> Отправить анонимное сообщение</span>';
                    submitBtn.disabled = false;
                }, 2000);
            }).catch(error => {
                // В случае ошибки
                submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span> Ошибка, попробуйте снова</span>';
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-bolt"></i><span> Отправить анонимное сообщение</span>';
                    submitBtn.disabled = false;
                }, 2000);
                
                console.error('Error:', error);
            });
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