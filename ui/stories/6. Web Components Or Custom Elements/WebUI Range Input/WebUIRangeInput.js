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
            value="1"
            min="1"
            max="10"
            aria-valuenow="1"
            aria-valuemin="1"
            aria-valuemax="10"
        />
        <output></output>
    </div>
</webui-range-input>
`;
