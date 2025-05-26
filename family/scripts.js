// ========== MATRIX ANIMATION ==========
const canvas = document.getElementById('matrix-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const phrase = "YOU ARE MY CRUSH ";
const words = phrase.split(" ");
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const word = words[Math.floor(Math.random() * words.length)];
    ctx.fillText(word, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ========== FLOATING TEXT ==========
document.addEventListener('click', (e) => {
  const text = document.createElement('div');
  text.className = 'floating-text';
  text.innerText = 'You are my crush';
  text.style.left = `${e.clientX}px`;
  text.style.top = `${e.clientY}px`;
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 2000);
});

// ========== TELEGRAM REDIRECT ==========
function redirectToTelegram() {
  window.open("https://t.me/SemyonkaStarikov", "_blank"); // Заменить на свой username
}

// ========== TELEGRAM BOT MESSAGE ==========
async function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  const status = document.getElementById('status');

  if (!message) return;

  const botToken = '7643859652:AAEf3OpinCN3dfxisEXXymDg_sJaG2Oq8ME';     // <-- Вставь сюда токен бота
  const chatId = '1066340802';         // <-- И сюда свой chat_id
  const text = `Она сказала: ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      })
    });

    if (response.ok) {
      status.textContent = 'Сообщение успешно отправлено!';
      input.value = '';
    } else {
      status.textContent = 'Ошибка отправки. Попробуй позже.';
    }
  } catch (error) {
    status.textContent = 'Ошибка соединения с сервером.';
  }

  setTimeout(() => status.textContent = '', 4000);
}
