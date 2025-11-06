export default class WebUIMakeClickable extends HTMLElement {
    private link: HTMLAnchorElement | null;

    constructor() {
        super();
        this.link = this.querySelector('[data-url]') || this.querySelector('a');
        this.addEventListener('click', this);
    }

    // Handle constructor() event listeners.
    public handleEvent(e: MouseEvent): void {
        // Enable text to be selectable.
        if (document.getSelection()?.type === 'Range') {
            return;
        }

        // Allow nested buttons to do their thing.
        const target = e.target as HTMLElement;
        if (target?.nodeName === 'BUTTON') {
            return;
        }

        // Click anywhere else in the component to follow the primary link. Note that any other links will just work normally.
        if (e.target !== this.link) {
            this.link?.click();
        }
    }
}
