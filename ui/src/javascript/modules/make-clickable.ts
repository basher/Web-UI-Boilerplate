export default class MakeClickable {
    private clickable: Element;
    private link: HTMLAnchorElement | null;

    constructor(clickable: Element) {
        this.clickable = clickable;
        this.link = this.clickable.querySelector('a');

        this.init();
    }

    public static start(): void {
        const clickables = document.querySelectorAll(
            '[data-module="make-clickable"]',
        );

        clickables.forEach((clickable) => {
            const instance = new MakeClickable(clickable);
            return instance;
        });
    }

    private init(): void {
        this.clickable.addEventListener('click', (e) => {
            if (this.link !== e.target) {
                this.link?.click();
            }
        });
    }
}
