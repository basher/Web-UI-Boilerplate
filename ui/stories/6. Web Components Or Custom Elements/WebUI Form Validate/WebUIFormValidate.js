export const WebUIFormValidateHtml = () => `
<webui-form-validate>
    <form class="form" action="#">
        <div class="form__field">
            <label for="input-text1" class="label">
                Text input 1 label
            </label>
            <input
                type="text"
                id="input-text1"
                class="input"
                placeholder="placeholder"
                required
            />
        </div>
        <div class="form__field">
            <label for="input-tel" class="label">
                Telephone input label
                <span class="label__hint">UK number, between 9 and 13 digits, can include spaces</span>
            </label>
            <input
                type="tel"
                id="input-tel"
                class="input"
                pattern="^\\d{3,5}\\s?\\d{3,4}\\s?\\d{3,4}$"
                autocomplete="tel"
                required
            />
        </div>
        <div class="form__field">
            <label for="select" class="label">
                Select label
            </label>
            <select
                class="select"
                id="select"
                required
            >
                <option value="">choose...</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
            </select>
        </div>
        <div class="form__field">
            <div class="checkbox">
                <input
                    type="checkbox"
                    id="checkbox-1"
                    class="checkbox__input"
                    required
                />
                <label for="checkbox-1" class="checkbox__label">
                    Checkbox label
                </label>
            </div>
        </div>
        <div class="form__field">
            <fieldset class="fieldset">
                <legend class="legend">
                    Radio legend
                </legend>
                <div class="radio">
                    <input
                        type="radio"
                        id="radio-1"
                        class="radio__input"
                        name="radio_group"
                        required
                    />
                    <label for="radio-1" class="radio__label">Radio 1 label</label>
                </div>
                <div class="radio">
                    <input
                        type="radio"
                        id="radio-2"
                        class="radio__input"
                        name="radio_group"
                        required
                    />
                    <label for="radio-2" class="radio__label">Radio 2 label</label>
                </div>
            </fieldset>
        </div>

        <div class="button-group">
            <button
                type="submit"
                class="button button--text button--positive"
            >
                Submit
            </button>
            <button
                type="reset"
                class="button button--text"
            >
                Reset
            </button>
        </div>
    </form>
<webui-form-validate>
`;
