export default class WebUIRangeInput extends HTMLElement {
    private rangeInput: HTMLInputElement | null;
    private rangeOutput: HTMLOutputElement | null;

    constructor() {
        super();

        this.rangeInput = this.querySelector('[type="range"]');
        this.rangeOutput = this.querySelector('output');

        if (!this.rangeInput || !this.rangeOutput) return;

        this.rangeOutput.innerHTML = this.rangeInput.value;
        this.rangeInput.addEventListener('input', this);
    }

    private handleValidRanges(
        range: HTMLInputElement,
        bubble: HTMLOutputElement,
    ): void {
        range.setAttribute('value', range.value);
        range.setAttribute('aria-valuenow', range.value);
        bubble.innerHTML = range.value;
    }

    // Handle constructor() event listeners.
    public handleEvent() {
        this.rangeInput &&
            this.rangeOutput &&
            this.handleValidRanges(this.rangeInput, this.rangeOutput);
    }
}
