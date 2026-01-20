class FamilyLinks extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .family-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                }
                .family-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    border-radius: 1rem;
                    background-color: #f8fafc;
                    transition: all 0.2s ease;
                    text-decoration: none;
                    color: #334155;
                    text-align: center;
                }
                .family-btn:hover {
                    background-color: #e0e7ff;
                    transform: translateY(-2px);
                }
                .family-icon {
                    width: 2rem;
                    height: 2rem;
                    margin-bottom: 0.5rem;
                    color: #4f46e5;
                }
            </style>
            <div class="family-grid">
                <a href="mom.html" class="family-btn animate-on-load">
                    <i data-feather="user" class="family-icon"></i>
                    Мама
                </a>
                <a href="dad.html" class="family-btn animate-on-load">
                    <i data-feather="user" class="family-icon"></i>
                    Папа
                </a>
                <a href="sister.html" class="family-btn animate-on-load">
                    <i data-feather="user" class="family-icon"></i>
                    Сестра
                </a>
                <a href="https://semen-star.github.io/SemkaWeb/other/contacts/contacts.html" class="family-btn animate-on-load">
                    <i data-feather="user" class="family-icon"></i>
                    Старший брат
                </a>
            </div>
        `;
    }
}

customElements.define('family-links', FamilyLinks);