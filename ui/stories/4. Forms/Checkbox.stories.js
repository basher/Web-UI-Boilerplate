/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Forms/Checkbox',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
};

export const Checkbox = (args) => `
<div class="checkbox">
    <input
        type="checkbox"
        id="checkbox"
        class="checkbox__input"
        ${args.disabled === true ? 'disabled' : ''}
    />
    <label for="checkbox" class="checkbox__label">Checkbox label</label>
</div>
`;
