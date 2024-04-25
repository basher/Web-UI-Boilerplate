export const WebUIRangeInputHtml = () => `
<webui-range-input>
    <div class="form__field">
        <label for="range-input" class="label">
            Range slider
        </label>
        <input
            class="input"
            type="range"
            id="range-input"
            value="0"
            min="0"
            max="100"
            step="10"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
        />
        <output></output>
    </div>
</webui-range-input>
`;
