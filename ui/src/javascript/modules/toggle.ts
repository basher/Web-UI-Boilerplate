export default class Toggle {
    private toggle: Element;

    constructor(toggle: Element) {
        this.toggle = toggle;

        this.init();
    }

    public static start(): void {
        const toggles = document.querySelectorAll('[role="switch"]');

        toggles.forEach((toggle) => {
            const instance = new Toggle(toggle);
            return instance;
        });
    }

    private init(): void {
        this.toggle.addEventListener('click', () => this.handleClick());
    }

    private handleClick(): void {
        const isChecked = this.toggle.getAttribute('aria-checked') === 'true';

        this.toggle.setAttribute(
            'aria-checked',
            Boolean(!isChecked).toString(),
        );
    }
}
