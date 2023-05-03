/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Forms/Select',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
};

export const Select = (args) => `
<label for="select" class="label">Select label</label>
<select class="select" id="select" ${args.disabled === true ? 'disabled' : ''}>
    <option value="">choose</option>
    <option value="1">option 1</option>
    <option value="2">option 2</option>
    <option value="3">option 3</option>
</select>
`;
