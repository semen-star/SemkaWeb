class ContactCard extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'user';
        const title = this.getAttribute('title') || 'Contact';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: white;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .icon-container {
                    background: #e0e7ff;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }
                .icon {
                    color: #4f46e5;
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .title {
                    font-weight: 600;
                    color: #4b5563;
                    margin-bottom: 0.5rem;
                    text-align: center;
                }
                .content {
                    color: #6b7280;
                    text-align: center;
                }
                a {
                    transition: color 0.2s ease;
                }
            </style>
            <div class="card animate-on-load">
                <div class="icon-container">
                    <i data-feather="${icon}" class="icon"></i>
                </div>
                <h3 class="title">${title}</h3>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-card', ContactCard);