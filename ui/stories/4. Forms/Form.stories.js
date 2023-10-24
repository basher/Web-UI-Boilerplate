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
                args.makeFieldsRequired === true ? '' : '(optional)'
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
        <label for="input-tel" class="label">
            Telephone input label ${
                args.makeFieldsRequired === true ? '' : '(optional)'
            }
            <span class="label__subtext">e.g. 07700 111111, 020 1111 1111, with or without spaces</span>
        </label>
        <input
            type="tel"
            id="input-tel"
            class="input"
            pattern="^\\d{3,5}\\s?\\d{3,4}\\s?\\d{3,4}$"
            autocomplete="tel"
            ${args.makeFieldsRequired === true ? 'required' : ''}
            ${args.disabled === true ? 'disabled' : ''}
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
            ${args.disabled === true ? 'disabled' : ''}
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
                ${args.makeFieldsRequired === true ? 'required' : ''}
                ${args.disabled === true ? 'disabled' : ''}
            />
            <label for="checkbox-1" class="checkbox__label">
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
