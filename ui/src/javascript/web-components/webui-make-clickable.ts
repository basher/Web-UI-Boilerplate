export default class WebUIMakeClickable extends HTMLElement {
    private link: HTMLAnchorElement | null;

    constructor() {
        super();
        this.link = this.querySelector('[data-url]') || this.querySelector('a');
        this.addEventListener('click', this);
    }

    // Handle web component events from constructor().
    handleEvent(e: MouseEvent) {
        if (e.target !== this.link) {
            this.link?.click();
        }
    }
}
