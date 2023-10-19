/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Form.mdx';

export default {
    title: 'Forms/Form',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const FormServerValidation = () => `
<div class="message message--error" role="alert">
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
</div>

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
            value="example of valid field - e.g. on form postback"
            required
        />
    </div>
    <div class="form__field form__field--has-error">
        <label for="input-tel" class="label">
            Telephone input label
            <span class="label__subtext">Can include +-() and spaces</span>
        </label>
        <input
            type="tel"
            id="input-tel"
            class="input"
            pattern="^((?![a-zA-Z])[\\d\\-\\+\\s\\(\\)])+$"
            placeholder="can include +-() and spaces"
            autocomplete="tel"
            required
            aria-invalid="true"
            aria-describedby="input-tel-error"
        />
        <span class="form__error" id="input-tel-error">
            Error text...
        </span>
    </div>
    <div class="form__field form__field--has-error">
        <label for="select" class="label">
            Select label
        </label>
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
        <span class="form__error" id="select-error">
            Error text...
        </span>
    </div>
    <div class="form__field form__field--has-error">
        <div class="checkbox">
            <input
                type="checkbox"
                id="checkbox-1"
                class="checkbox__input"
                required
                aria-invalid="true"
                aria-describedby="checkbox-1-error"
            />
            <label for="checkbox-1" class="checkbox__label">
                Checkbox label
            </label>
        </div>
        <span class="form__error" id="checkbox-1-error">
            Error text...
        </span>
    </div>
    <div class="form__field form__field--has-error">
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
                    aria-invalid="true"
                    aria-describedby="radio_group-error"
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
                    aria-invalid="true"
                    aria-describedby="radio_group-error"
                />
                <label for="radio-2" class="radio__label">Radio 2 label</label>
            </div>
        </fieldset>
        <span class="form__error" id="radio_group-error">
            Error text...
        </span>
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
`;
FormServerValidation.storyName = 'Form (with server-side validation)';

export const FormJSValidation = () => `
<form class="form" action="#" data-module="form-validate">
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
            <span class="label__subtext">Can include +-() and spaces</span>
        </label>
        <input
            type="tel"
            id="input-tel"
            class="input"
            pattern="^((?![a-zA-Z])[\\d\\-\\+\\s\\(\\)])+$"
            placeholder="can include +-() and spaces"
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
`;
FormJSValidation.storyName = 'Form (with JS validation)';
