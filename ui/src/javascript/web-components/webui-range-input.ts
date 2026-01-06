class WebUIRangeInput extends HTMLElement {
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

    /**
     * @description Handle web component event listeners.
     */
    public handleEvent(): void {
        this.rangeInput &&
            this.rangeOutput &&
            this.handleValidRanges(this.rangeInput, this.rangeOutput);
    }

    /**
     * @description Update range <input> and <output> values.
     */
    private handleValidRanges(
        range: HTMLInputElement,
        bubble: HTMLOutputElement,
    ): void {
        range.setAttribute('value', range.value);
        bubble.innerHTML = range.value;
    }
}

customElements.define('webui-range-input', WebUIRangeInput);
export default WebUIRangeInput;
