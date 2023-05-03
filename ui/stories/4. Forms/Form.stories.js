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
        <label for="input-text" class="label">Text input label</label>
        <input type="text" id="input-text" class="input" placeholder="placeholder" ${
            args.makeFieldsRequired === true ? 'required' : ''
        } ${args.disabled === true ? 'disabled' : ''} />
    </div>
    <div class="form__field">
        <label for="select" class="label">Select label</label>
        <select class="select" id="select" ${
            args.makeFieldsRequired === true ? 'required' : ''
        } ${args.disabled === true ? 'disabled' : ''}>
            <option value="">choose</option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
        </select>
    </div>
    <div class="form__field">
        <label for="textarea" class="label">Textarea label</label>
        <textarea id="textarea" class="textarea" ${
            args.makeFieldsRequired === true ? 'required' : ''
        } ${args.disabled === true ? 'disabled' : ''}></textarea>
    </div>
    <div class="form__field">
        <div class="checkbox">
            <input type="checkbox" id="checkbox-1" class="checkbox__input" ${
                args.makeFieldsRequired === true ? 'required' : ''
            } ${args.disabled === true ? 'disabled' : ''} />
            <label for="checkbox-1" class="checkbox__label">Checkbox label</label>
        </div>
    </div>
    <div class="form__field">
        <fieldset class="fieldset">
            <legend class="legend">Radio legend</legend>
            <div class="radio">
                <input type="radio" id="radio-1" class="radio__input" name="radio_group" ${
                    args.makeFieldsRequired === true ? 'required' : ''
                } ${args.disabled === true ? 'disabled' : ''} />
                <label for="radio-1" class="radio__label">Radio 1 label</label>
            </div>
            <div class="radio">
                <input type="radio" id="radio-2" class="radio__input" name="radio_group" ${
                    args.makeFieldsRequired === true ? 'required' : ''
                } ${args.disabled === true ? 'disabled' : ''} />
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
