export const WebUIRangeInputHtml = () => /*html*/ `
<webui-range-input>
    <div class="form__field flex">
        <label for="range-input" class="label">
            Range slider
            <span class="label__hint">Min 0, max 100</span>
        </label>
        <input
            class="input"
            type="range"
            id="range-input"
            value="0"
            min="0"
            max="100"
            step="10"
        />
        <output for="range-input"></output>
    </div>
</webui-range-input>
`;
