/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Forms/Textarea',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
};

export const Textarea = (args) => `
<label for="textarea" class="label">Textarea label</label>
<textarea
    id="textarea"
    class="textarea"
    ${args.disabled === true ? 'disabled' : ''}
></textarea>
`;
