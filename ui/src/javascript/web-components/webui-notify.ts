export default class WebUINotify extends HTMLElement {
    private btnClose: HTMLButtonElement | null;

    constructor() {
        super();
        this.btnClose = this.querySelector('[data-close]');
        this.btnClose?.addEventListener('click', this);
    }

    // Handle constructor() event listeners.
    handleEvent() {
        this.setAttribute('hidden', '');
    }
}
