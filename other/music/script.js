// Глобальные переменные
        let audioContext;
        let analyser;
        let dataArray;
        let isPlaying = {};
        let animationId = {};
        
        // Инициализация аудио контекста
        function initAudioContext(audioElement) {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 32;
                
                const source = audioContext.createMediaElementSource(audioElement);
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                
                dataArray = new Uint8Array(analyser.frequencyBinCount);
            }
        }
        
        // Визуализация аудио
        function visualizeAudio(audioId) {
            const visualizer = document.getElementById(`visualizer${audioId.slice(-1)}`);
            const bars = visualizer.querySelectorAll('.visualizer-bar');
            
            analyser.getByteFrequencyData(dataArray);
            
            bars.forEach((bar, i) => {
                const value = dataArray[i % dataArray.length] / 255;
                const height = value * 100;
                bar.style.height = `${height}px`;
                
                // Изменение цвета фона сайта в зависимости от музыки
                if (i === 0) {
                    const hue = Math.floor(value * 360);
                    document.body.style.backgroundColor = `hsl(${hue}, 70%, 20%)`;
                }
            });
            
            animationId[audioId] = requestAnimationFrame(() => visualizeAudio(audioId));
        }
        
        // Управление воспроизведением
        function togglePlay(audioId) {
            const audio = document.getElementById(audioId);
            const playBtn = document.getElementById(`playBtn${audioId.slice(-1)}`);
            
            if (audio.paused) {
                initAudioContext(audio);
                audio.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying[audioId] = true;
                visualizeAudio(audioId);
                
                // Остановка других аудио
                Object.keys(isPlaying).forEach(id => {
                    if (id !== audioId && isPlaying[id]) {
                        const otherAudio = document.getElementById(id);
                        otherAudio.pause();
                        document.getElementById(`playBtn${id.slice(-1)}`).innerHTML = '<i class="fas fa-play"></i>';
                        isPlaying[id] = false;
                        cancelAnimationFrame(animationId[id]);
                    }
                });
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                isPlaying[audioId] = false;
                cancelAnimationFrame(animationId[audioId]);
            }
        }
        
        // Обновление прогресса воспроизведения
        function updateProgress(audioId) {
            const audio = document.getElementById(audioId);
            const progressBar = document.getElementById(`progressBar${audioId.slice(-1)}`);
            const currentTime = document.getElementById(`currentTime${audioId.slice(-1)}`);
            
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            
            // Форматирование времени
            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60);
            currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        // Установка длительности трека
        function setDuration(audioId) {
            const audio = document.getElementById(audioId);
            const duration = document.getElementById(`duration${audioId.slice(-1)}`);
            
            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60);
            duration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        // Перемотка по клику на прогресс-бар
        document.querySelectorAll('.progress-container').forEach(container => {
            container.addEventListener('click', function(e) {
                const audioId = this.id.replace('progressContainer', 'audio');
                const audio = document.getElementById(audioId);
                const progressBar = document.getElementById(`progressBar${audioId.slice(-1)}`);
                
                const clickPosition = e.offsetX;
                const containerWidth = this.clientWidth;
                const percentage = (clickPosition / containerWidth) * 100;
                const seekTime = (percentage / 100) * audio.duration;
                
                audio.currentTime = seekTime;
                progressBar.style.width = `${percentage}%`;
            });
        });
        
        // Перемотка вперед
        function skipForward(audioId) {
            const audio = document.getElementById(audioId);
            audio.currentTime += 10; // 10 секунд вперед
        }
        
        // Перемотка назад
        function skipBackward(audioId) {
            const audio = document.getElementById(audioId);
            audio.currentTime -= 10; // 10 секунд назад
        }
        
        // Остановка всех аудио при закрытии вкладки
        window.addEventListener('beforeunload', function() {
            Object.keys(isPlaying).forEach(id => {
                if (isPlaying[id]) {
                    const audio = document.getElementById(id);
                    audio.pause();
                    cancelAnimationFrame(animationId[id]);
                }
            });
        });