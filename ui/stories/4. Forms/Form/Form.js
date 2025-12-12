export const FormHtml = (args) => /*html*/ `
<form class="form" action="#">
    <div class="form__field">
        <label for="input-text" class="label">
            Text input label ${
                args.makeFieldsRequired === true ? '' : '(optional)'
            }
        </label>
        <input
            type="text"
            id="input-text"
            class="input"
            placeholder="placeholder"
            ${args.makeFieldsRequired === true ? 'required' : ''}
        />
    </div>
    <div class="form__field">
        <label for="input-tel" class="label">
            Telephone input label ${
                args.makeFieldsRequired === true ? '' : '(optional)'
            }
            <span class="label__hint">UK number, usually 11 digits, can also include spaces</span>
        </label>
        <input
            type="tel"
            id="input-tel"
            class="input"
            pattern="^\\d{3,5}\\s?\\d{3,4}\\s?\\d{3,4}$"
            autocomplete="tel"
            ${args.makeFieldsRequired === true ? 'required' : ''}
        />
    </div>
    <div class="form__field">
        <label for="select" class="label">
            Select label ${args.makeFieldsRequired === true ? '' : '(optional)'}
        </label>
        <select
            class="select"
            id="select"
            ${args.makeFieldsRequired === true ? 'required' : ''}
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
                ${args.makeFieldsRequired === true ? 'required' : ''}
            />
            <label for="checkbox-1">
                Checkbox label ${
                    args.makeFieldsRequired === true ? '' : '(optional)'
                }
            </label>
        </div>
    </div>
    <div class="form__field">
        <fieldset class="fieldset">
            <legend class="legend">
                Radio legend ${
                    args.makeFieldsRequired === true ? '' : '(optional)'
                }
            </legend>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-1"
                    name="radio_group"
                    ${args.makeFieldsRequired === true ? 'required' : ''}
                />
                <label for="radio-1">Radio 1 label</label>
            </div>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-2"
                    name="radio_group"
                    ${args.makeFieldsRequired === true ? 'required' : ''}
                />
                <label for="radio-2">Radio 2 label</label>
            </div>
        </fieldset>
    </div>

    <div class="button-group">
        <button
            type="submit"
            class="button"
            data-variant="text"
            data-style="positive"
        >
            Submit
        </button>
        <button
            type="reset"
            class="button"
            data-variant="text"
        >
            Reset
        </button>
    </div>
</form>
`;

export const FormServerValidationHtml = () => /*html*/ `
<form class="form" action="#">
    <webui-notify data-error role="alert">
        <div class="stack">
            <h2>Form errors</h2>
            <p>
                Optional error summary.<br/>
                For example, rendered in the HTML on server postback.
            </p>
            <ul>
                <li>
                    <a href="#input-tel">Error text... tel</a>
                </li>
                <li>
                    <a href="#select">Error text... select</a>
                </li>
                <li>
                    <a href="#checkbox-1">Error text... checkbox</a>
                </li>
                <li>
                    <a href="#radio-1">Error text... radio</a>
                </li>
            </ul>
        </div>
    </webui-notify>

    <div class="form__field">
        <label for="input-text1" class="label">
            Text input 1 label
        </label>
        <input
            type="text"
            id="input-text1"
            class="input"
            placeholder="placeholder"
            value="example of valid field - e.g. on form postback"
            required
        />
    </div>
    <div class="form__field" data-field-has-error>
        <label for="input-tel" class="label">
            Telephone input label
            <span class="label__hint">UK number, usually 11 digits, can also include spaces</span>
        </label>
        <span class="form__error" id="input-tel-error">
            Error text...
        </span>
        <input
            type="tel"
            id="input-tel"
            class="input"
            pattern="^\\d{3,5}\\s?\\d{3,4}\\s?\\d{3,4}$"
            autocomplete="tel"
            required
            aria-invalid="true"
            aria-describedby="input-tel-error"
        />
    </div>
    <div class="form__field" data-field-has-error>
        <label for="select" class="label">
            Select label
        </label>
        <span class="form__error" id="select-error">
            Error text...
        </span>
        <select
            class="select"
            id="select"
            required
            aria-invalid="true"
            aria-describedby="input-tel-error"
        >
            <option value="">choose...</option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
        </select>
    </div>
    <div class="form__field" data-field-has-error>
        <span class="form__error" id="checkbox-1-error">
            Error text...
        </span>
        <div class="checkbox">
            <input
                type="checkbox"
                id="checkbox-1"
                required
                aria-invalid="true"
                aria-describedby="checkbox-1-error"
            />
            <label for="checkbox-1">
                Checkbox label
            </label>
        </div>
    </div>
    <div class="form__field" data-field-has-error>
        <fieldset class="fieldset">
            <legend class="legend">
                Radio legend
            </legend>
            <span class="form__error" id="radio_group-error">
                Error text...
            </span>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-1"
                    name="radio_group"
                    required
                    aria-invalid="true"
                    aria-describedby="radio_group-error"
                />
                <label for="radio-1">Radio 1 label</label>
            </div>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-2"
                    name="radio_group"
                    required
                    aria-invalid="true"
                    aria-describedby="radio_group-error"
                />
                <label for="radio-2">Radio 2 label</label>
            </div>
        </fieldset>
    </div>

    <div class="button-group">
        <button
            type="submit"
            class="button"
            data-variant="text"
            data-style="positive"
        >
            Submit
        </button>
        <button
            type="reset"
            class="button"
            data-variant="text"
        >
            Reset
        </button>
    </div>
</form>
`;
