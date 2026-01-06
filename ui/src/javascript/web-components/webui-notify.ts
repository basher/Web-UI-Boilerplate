class WebUINotify extends HTMLElement {
    private btnClose: HTMLButtonElement | null;

    constructor() {
        super();
        this.btnClose = this.querySelector('[data-close]');

        if (!this.btnClose) return;

        this.btnClose.addEventListener('click', this);
    }

    /**
     * @description Handle web component event listeners.
     */
    public handleEvent(): void {
        this.setAttribute('hidden', '');
    }
}

customElements.define('webui-notify', WebUINotify);
export default WebUINotify;
