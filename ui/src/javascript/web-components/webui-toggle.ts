export default class WebUIToggle extends HTMLElement {
    private switch: HTMLButtonElement | null;

    constructor() {
        super();
        this.switch = this.querySelector('[role="switch"]');

        if (!this.switch) return;

        this.switch.addEventListener('click', this);
    }

    // Handle constructor() event listeners.
    public handleEvent(): void {
        const isChecked = this.switch?.getAttribute('aria-checked') === 'true';

        this.switch?.setAttribute(
            'aria-checked',
            Boolean(!isChecked).toString(),
        );
    }
}
