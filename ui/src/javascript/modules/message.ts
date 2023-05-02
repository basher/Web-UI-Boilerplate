export default class Message {
    private message: Element;
    private btnClose: HTMLButtonElement | null;
    private toggleClassname: string;

    constructor(message: Element) {
        this.message = message;
        this.btnClose = this.message.querySelector(
            '[data-button="message-close"]',
        );
        this.toggleClassname = 'u-hidden';

        this.init();
    }

    public static start(): void {
        const messages = document.querySelectorAll('[data-module="message"]');

        messages &&
            messages.forEach((message) => {
                const instance = new Message(message);
                return instance;
            });
    }

    private init(): void {
        this.btnClose?.addEventListener('click', () => this.closeMessage());
    }

    private closeMessage(): void {
        this.message.classList.add(this.toggleClassname);
    }
}
