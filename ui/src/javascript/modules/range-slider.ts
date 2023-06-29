export default class RangeSlider {
    private rangeSlider: Element;

    constructor(rangeSlider: Element) {
        this.rangeSlider = rangeSlider;

        this.init();
    }

    public static start(): void {
        const rangeSliders = document.querySelectorAll(
            '[data-module="range-slider"]',
        );

        rangeSliders.forEach((rangeSlider) => {
            const instance = new RangeSlider(rangeSlider);
            return instance;
        });
    }

    private init(): void {
        this.initrangeSlider();
    }

    private initrangeSlider(): void {
        const range = this.rangeSlider.querySelector(
            '[type=range]',
        ) as HTMLInputElement;
        const bubble = this.rangeSlider.querySelector(
            '.range__bubble',
        ) as HTMLOutputElement;

        bubble.innerHTML = range.value;
        range.addEventListener('input', () => {
            this.handleValidRanges(range, bubble);
        });
    }

    private handleValidRanges(
        range: HTMLInputElement,
        bubble: HTMLOutputElement,
    ): void {
        range.setAttribute('value', range.value);
        range.setAttribute('aria-valuenow', range.value);
        bubble.innerHTML = range.value;
    }
}
