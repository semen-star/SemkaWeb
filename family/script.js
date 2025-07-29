// Плавное появление
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});

// Функция вывода ответа
function showMessage(button, message) {
  let response = document.createElement("div");
  response.textContent = message;
  response.style.marginTop = "10px";
  response.style.color = "#444";
  response.style.fontSize = "1rem";

  // Проверка: если уже есть сообщение — не дублируем
  if (!button.nextElementSibling || button.nextElementSibling.tagName !== "DIV") {
    button.parentElement.appendChild(response);
  }
}
// Кнопка "Нет" — убегает
const runawayBtn = document.getElementById("runawayBtn");
if (runawayBtn) {
  runawayBtn.addEventListener("mouseover", () => {
    const offsetX = Math.floor(Math.random() * 200) - 100;
    const offsetY = Math.floor(Math.random() * 100) - 50;
    runawayBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    runawayBtn.style.transition = "transform 0.3s ease";
  });

  runawayBtn.addEventListener("mouseleave", () => {
    runawayBtn.style.transform = "translate(0, 0)";
  });
}

function showMessage(_, message) {
  alert(message);
}
