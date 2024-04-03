export default class WebUIMakeNotification extends HTMLElement {
    private btnClose: HTMLButtonElement | null;

    constructor() {
        super();
        this.btnClose = this.querySelector('[data-close]');
        this.btnClose?.addEventListener('click', this);
    }

    // Handle web component events from constructor().
    handleEvent() {
        this.setAttribute('hidden', '');
    }
}
