export const WebUIFormValidateHtml = () => /*html*/ `
<webui-form-validate>
    <form class="form flex" action="#">
        <div class="form__field flex">
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
        <div class="form__field flex">
            <label for="input-tel" class="label">
                Telephone input label
                <span class="label__hint">UK number, usually 11 digits, can also include spaces</span>
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
        <div class="form__field flex">
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
        <div class="form__field flex">
            <div class="checkbox flex">
                <input
                    type="checkbox"
                    id="checkbox-1"
                    required
                />
                <label for="checkbox-1">
                    Checkbox label
                </label>
            </div>
        </div>
        <div class="form__field flex">
            <fieldset class="fieldset flex">
                <legend class="legend">
                    Radio legend
                </legend>
                <div class="radio flex">
                    <input
                        type="radio"
                        id="radio-1"
                        name="radio_group"
                        required
                    />
                    <label for="radio-1">Radio 1 label</label>
                </div>
                <div class="radio flex">
                    <input
                        type="radio"
                        id="radio-2"
                        name="radio_group"
                        required
                    />
                    <label for="radio-2">Radio 2 label</label>
                </div>
            </fieldset>
        </div>

        <div class="button-group flex">
            <button
                type="submit"
                class="button"
                data-button="text"
                data-button-style="positive"
            >
                Submit
            </button>
            <button
                type="reset"
                class="button"
                data-button="text"
            >
                Reset
            </button>
        </div>
    </form>
<webui-form-validate>
`;
