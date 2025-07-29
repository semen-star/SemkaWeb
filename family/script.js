// Анимация появления по очереди
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });
});

// Кнопка "Да"
const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", () => {
  alert("Ура! 📸 Ты теперь мой бессрочный фотограф!");
});

// Кнопка "Нет" — прыгает
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const randomOffset = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translateY(${randomOffset}px)`;
  noBtn.style.transition = "transform 0.3s ease";
});

noBtn.addEventListener("mouseleave", () => {
  noBtn.style.transform = "translateY(0)";
});
