export default class Message {
    private message: Element;
    private btnClose: HTMLButtonElement | null;

    constructor(message: Element) {
        this.message = message;
        this.btnClose = this.message.querySelector(
            '[data-button="message-close"]',
        );

        this.init();
    }

    public static start(): void {
        const messages = document.querySelectorAll('[data-module="message"]');

        messages.forEach((message) => {
            const instance = new Message(message);
            return instance;
        });
    }

    private init(): void {
        this.btnClose?.addEventListener('click', () => this.closeMessage());
    }

    private closeMessage(): void {
        this.message.setAttribute('hidden', '');
    }
}
