class SocialButtons extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .buttons-container {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .social-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .social-btn:hover {
                    transform: translateY(-2px);
                }
                .social-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                }
                .vk {
                    background-color: #4a76a8;
                    color: white;
                }
                .telegram {
                    background-color: #0088cc;
                    color: white;
                }
            </style>
            <div class="buttons-container">
                <a href="https://vk.com/id573348096" class="social-btn vk animate-on-load">
                    <i data-feather="message-square" class="social-icon"></i>
                    ВКонтакте
                </a>
                <a href="https://t.me/Senya131313" class="social-btn telegram animate-on-load">
                    <i data-feather="send" class="social-icon"></i>
                    Telegram
                </a>
            </div>
        `;
    }
}

customElements.define('social-buttons', SocialButtons);