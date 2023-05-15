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
    argTypes: {
        makeFieldsRequired: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export const Form = (args) => `
<form class="form" action="#">
    <div class="form__field">
        <label for="input-text" class="label">
            Text input label ${
                args.makeFieldsRequired === true
                    ? '<span aria-hidden="true">(required)</span>'
                    : ''
            }
        </label>
        <input
            type="text"
            id="input-text"
            class="input"
            placeholder="placeholder"
            ${args.makeFieldsRequired === true ? 'required' : ''}
            ${args.disabled === true ? 'disabled' : ''}
        />
    </div>
    <div class="form__field">
        <label for="select" class="label">
            Select label ${
                args.makeFieldsRequired === true
                    ? '<span aria-hidden="true">(required)</span>'
                    : ''
            }
        </label>
        <select
            class="select"
            id="select"
            ${args.makeFieldsRequired === true ? 'required' : ''}
            ${args.disabled === true ? 'disabled' : ''}
        >
            <option value="">choose...</option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
        </select>
    </div>
    <div class="form__field">
        <label for="textarea" class="label">
            Textarea label ${
                args.makeFieldsRequired === true
                    ? '<span aria-hidden="true">(required)</span>'
                    : ''
            }
        </label>
        <textarea
            id="textarea"
            class="textarea"
            ${args.makeFieldsRequired === true ? 'required' : ''}
            ${args.disabled === true ? 'disabled' : ''}
        ></textarea>
    </div>
    <div class="form__field">
        <div class="checkbox">
            <input
                type="checkbox"
                id="checkbox-1"
                class="checkbox__input"
                ${args.makeFieldsRequired === true ? 'required' : ''}
                ${args.disabled === true ? 'disabled' : ''}
            />
            <label for="checkbox-1" class="checkbox__label">
                Checkbox label ${
                    args.makeFieldsRequired === true
                        ? '<span aria-hidden="true">(required)</span>'
                        : ''
                }
            </label>
        </div>
    </div>
    <div class="form__field">
        <fieldset class="fieldset">
            <legend class="legend">
                Radio legend ${
                    args.makeFieldsRequired === true
                        ? '<span aria-hidden="true">(required)</span>'
                        : ''
                }
            </legend>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-1"
                    class="radio__input"
                    name="radio_group"
                    ${args.makeFieldsRequired === true ? 'required' : ''}
                    ${args.disabled === true ? 'disabled' : ''}
                />
                <label for="radio-1" class="radio__label">Radio 1 label</label>
            </div>
            <div class="radio">
                <input
                    type="radio"
                    id="radio-2"
                    class="radio__input"
                    name="radio_group"
                    ${args.makeFieldsRequired === true ? 'required' : ''}
                    ${args.disabled === true ? 'disabled' : ''}
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
Form.storyName = 'Form (with native HTML5 validation)';

export const FormJSValidation = () => `
<div class="message message--error" role="alert">
    <div class="stack">
        <h2>Form errors</h2>
        <ul>
            <li>
                <a href="#input-text2">Error 2...</a>
            </li>
            <li>
                <a href="#input-text3">Error 3...</a>
            </li>
        </ul>
    </div>
</div>

<form class="form" action="#" data-module="form-validate">
    <div class="form__field">
        <label for="input-text1" class="label">
            Text input 1 label
            <span aria-hidden="true">(required)</span>
        </label>
        <input
            type="text"
            id="input-text1"
            class="input"
            placeholder="placeholder"
            value="example of valid field"
            required
        />
    </div>
    <div class="form__field form__field--has-error">
        <label for="input-text2" class="label">
            Text input 2 label
            <span aria-hidden="true">(required)</span>
        </label>
        <input
            type="text"
            id="input-text2"
            class="input"
            placeholder="placeholder"
            required
            aria-invalid="true"
            aria-describedby="input-text2-error"
        />
        <span class="form__error" id="input-text2-error">
            Error 2 text
        </span>
    </div>
    <div class="form__field form__field--has-error">
        <label for="input-text3" class="label">
            Text input 3 label
            <span aria-hidden="true">(required)</span>
        </label>
        <input
            type="text"
            id="input-text3"
            class="input"
            placeholder="placeholder"
            required
            aria-invalid="true"
            aria-describedby="input-text3-error"
        />
        <span class="form__error" id="input-text3-error">
            Error 3 text
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
FormJSValidation.storyName = 'Form (with JS validation)';
