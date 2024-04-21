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
            value="10"
            min="10"
            max="100"
            step="10"
            aria-valuenow="10"
            aria-valuemin="10"
            aria-valuemax="100"
        />
        <output></output>
    </div>
</webui-range-input>
`;
