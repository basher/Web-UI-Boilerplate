export default class WebUIMakeClickable extends HTMLElement {
    private link: HTMLAnchorElement | null;

    constructor() {
        super();
        this.link = this.querySelector('[data-url]') || this.querySelector('a');
        this.addEventListener('click', this);
    }

    // Handle constructor() event listeners.
    public handleEvent(e: MouseEvent) {
        // Enable text to be selectable.
        if (document.getSelection()?.type === 'Range') {
            return;
        }

        // Allow nested buttons to do their thing.
        const target = e.target as HTMLElement;
        if (target?.nodeName === 'BUTTON') {
            return;
        }

        if (e.target !== this.link) {
            this.link?.click();
        }
    }
}
