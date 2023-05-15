/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Forms/Input',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
};

export const InputText = (args) => `
<label for="input-text" class="label">Text input label</label>
<input
    type="text"
    id="input-text"
    class="input"
    placeholder="placeholder"
    ${args.disabled === true ? 'disabled' : ''}
/>
`;
InputText.storyName = 'Text input';

export const InputEmail = (args) => `
<label for="input-email" class="label">Email input label</label>
<input
    type="email"
    id="input-email"
    class="input"
    placeholder="email@domain.com"
    autocomplete="email"
    ${args.disabled === true ? 'disabled' : ''}
/>
`;
InputEmail.storyName = 'Email input';

export const InputTel = (args) => `
<label for="input-tel" class="label">Email input label</label>
<input
    type="tel"
    id="input-tel"
    class="input"
    pattern="^[0-9-+\s()]*$"
    placeholder="tel number, including +-() and spaces"
    autocomplete="tel"
    ${args.disabled === true ? 'disabled' : ''}
/>
`;
InputTel.storyName = 'Telephone input';
