
const photos = document.querySelectorAll('.photo-gallery img');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = fullscreen?.querySelector('img');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        alert('Функция открытия фото отключена.');
    });
});
